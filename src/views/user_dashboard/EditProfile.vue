<template>
  <div
    class="edit-profile"
    data-app="true"
    :style="`min-height: ${windowHeight}px`"
  >
    <v-container class="lower_container">
      <div class="lower" style="margin-top: 20px">
        <div class="pic">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <div class="img-div" v-bind="attrs" v-on="on">
                <img
                  :src="
                    imgUrl
                      ? imgUrl
                      : userData.profileImg
                      ? userData.profileImg
                      : defaultImg
                  "
                  alt="profile picture"
                />
                <input
                  type="file"
                  @change="changePic"
                  accept="image/jpg, image/jpeg, image/png"
                />
                <div class="img_overlay"></div>
              </div>
            </template>
            <span>Change Profile Picture</span>
          </v-tooltip>
        </div>
        <v-form style="padding-left: 20px; padding-right: 20px" @submit.prevent>
          <v-row style="margin: 0">
            <v-col cols="12" sm="6" style="margin: 0">
              <v-text-field
                label="User Name"
                outlined
                v-model="userData.userName"
                :error-messages="updateErrs.userName"
                :disabled="!startEdit"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" style="margin: 0">
              <v-text-field
                label="Email"
                type="email"
                v-model="userData.email"
                outlined
                :error-messages="updateErrs.email"
                disabled
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" style="margin: 0" v-if="changePass">
              <v-text-field
                type="password"
                label="Old Password"
                name="oldPass"
                id="oldPass"
                v-model="oldPass"
                outlined
                :error-messages="updateErrs.oldPass"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" style="margin: 0" v-if="changePass">
              <v-text-field
                label="New Password"
                type="password"
                name="newPass"
                id="newPass"
                outlined
                v-model="newPass"
                :error-messages="updateErrs.newPass"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" style="margin: 0" v-if="changePass">
              <v-text-field
                label="Confirm Password"
                type="password"
                outlined
                name="confirmPass"
                id="confirmPass"
                v-model="confirmPass"
                :error-messages="updateErrs.confirmPass"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              style="padding: 0; margin-bottom: 10px"
              v-if="startEdit && changePass"
            >
              <v-icon
                style="
                  color: white;
                  cursor: pointer;
                  border-radius: 50%;
                  border: 1px solid #ffffffba;
                  background-color: rgb(60, 83, 168);
                "
                @click="changePass = false"
                >mdi-chevron-up</v-icon
              >
            </v-col>
            <v-col cols="12">
              <input type="submit" value="" style="display: none" />

              <v-btn
                type="button"
                v-if="!startEdit"
                @click="startEdit = true"
                style="
                  background-color: rgb(0, 157, 255) !important;
                  font-weight: 700;
                  color: white !important;
                  padding: 7px 25px;
                  border-radius: 10px;
                  margin-left: 10px;
                "
                >Edit</v-btn
              >
              <v-btn
                type="button"
                @click="submitEdit"
                style="
                  background-color: rgb(60 83 168) !important;
                  font-weight: 700;
                  color: white !important;
                  padding: 7px 25px;
                  border-radius: 10px;
                "
                :loading="loading"
                v-if="startEdit"
                >Submit</v-btn
              >
              <v-btn
                type="button"
                v-if="startEdit"
                style="
                  background-color: indianred !important;
                  font-weight: 700;
                  color: white !important;
                  padding: 7px 25px;
                  border-radius: 10px;
                  margin-left: 10px;
                "
                class="cancel_btn"
                @click="cancelEdit"
                >Cancel</v-btn
              >
              <p
                v-if="startEdit && !changePass"
                style="
                  color: rgba(255, 255, 255, 0.726);
                  display: block;
                  margin-top: 10px;
                  cursor: pointer;
                "
                @click="changePass = !changePass"
              >
                Change Password?
              </p>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ProfilePage",
  data() {
    return {
      imgFile: "",
      imgUrl: "",
      oldPass: "",
      newPass: "",
      loading: false,
      defaultImg: require("@/assets/user.png"),
      windowHeight: "",
      changePass: false,
      confirmPass: "",
      startEdit: false,
    };
  },
  computed: {
    ...mapState({
      userData: (state) => state.authModule.userData,
      apiLink: (state) => state.apiLink,
      updateErrs: (state) => state.profileModule.updateErrs,
    }),
  },
  methods: {
    ...mapActions(["doUpdateProfile", "dogetUserById"]),
    changePic(e) {
      if (!e.target.files[0]) {
        this.imgUrl = "";
        this.imgFile = "";
        return;
      }
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imgUrl = e.target.result;
        this.imgFile = file;
      };
      reader.readAsDataURL(file);
    },
    async submitEdit() {
      this.loading = true;
      let payload = this.userData;
      payload.imgFile = this.imgFile;
      payload.changePass = this.changePass;
      payload.oldPass = this.oldPass;
      payload.newPass = this.newPass;
      payload.confirmPass = this.confirmPass;
      let formData = new FormData();
      for (let [key, val] of Object.entries(payload)) {
        formData.append(key, val);
      }
      await this.doUpdateProfile(formData);
      this.loading = false;
      if (!this.updateErrs) {
        location.reload();
      }
    },
    cancelEdit() {
      this.changePass = false;
      this.startEdit = false;
    },
  },
  mounted() {
    this.windowHeight = window.innerHeight;
  },
  async beforeRouteLeave(to, from, next) {
    await this.dogetUserById(localStorage.getItem("uid"));
    next();
  },
};
</script>

<style lang="scss">
.edit-profile {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  background-image: url(../../assets/photo_6016823636792556918_y.jpg);
  background-size: cover;
  background-position: center center;
  .lower {
    width: 50%;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    background-color: white;
    padding: 15px 0;
    margin-bottom: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 17px -4px black;
    background-image: url(../../assets/photo_6016823636792556918_y.jpg);
    background-size: cover;
    background-position: left top;
    .pic {
      border-radius: 50%;
      width: 150px;
      height: 150px;
      margin: 0 auto 20px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.693);
      .img-div {
        position: relative;
        img {
          width: 100%;
        }
        input {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 2;
        }
        .img_overlay {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgba(2, 2, 2, 0.538);
          z-index: 1;
          opacity: 0;
          transition: 0.2s all;
        }
        &:hover .img_overlay {
          opacity: 1;
        }
      }
    }
  }
  .v-text-field {
    fieldset {
      border-color: rgba(255, 255, 255, 0.726);
    }
    input {
      color: white;
    }
    label {
      color: rgba(255, 255, 255, 0.726);
    }
  }
  input {
    border: none !important;
    background-color: transparent !important;
  }
  .error--text {
    color: indianred;
  }
}
// Media
@media (max-width: 980px) {
  .lower_container {
    padding-left: 50px;
    padding-right: 50px;
  }
  .edit-profile {
    .lower {
      width: 70%;
    }
  }
}
@media (max-width: 600px) {
  .edit-profile {
    .lower {
      width: 90%;
    }
  }
}
@media (max-width: 460px) {
  .cancel_btn {
    margin-left: 0 !important;
    margin-top: 10px !important;
  }
}
</style>
