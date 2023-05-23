<template>
  <div class="profile" data-app="true" :style="`min-height: ${windowHeight}px`">
    <div class="upper">
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
    </div>
    <v-container class="lower_container">
      <div class="lower" style="margin-top: 20px">
        <v-form
          style="padding-left: 20px; padding-right: 20px"
          @submit.prevent="submitEdit"
        >
          <v-row style="margin: 0">
            <v-col cols="12" sm="6" style="margin: 0">
              <v-text-field
                label="User Name"
                outlined
                v-model="userData.userName"
                :error-messages="updateErrs.userName"
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
            <v-col cols="12">
              <input type="submit" value="" style="display: none" />
              <v-btn
                type="submit"
                style="
                  background-color: rgb(60 83 168) !important;
                  font-weight: 700;
                  color: white !important;
                  padding: 7px 25px;
                  border-radius: 10px;
                "
                :loading="loading"
                >Submit</v-btn
              >
              <v-btn
                type="button"
                :style="`background-color: ${
                  changePass ? 'indianred' : 'rgb(0, 157, 255) !important'
                };
                  font-weight: 700;
                  color: white !important;
                  padding: 7px 25px;
                  border-radius: 10px;
                  margin-left: 10px;`"
                @click="changePass = !changePass"
                >{{ changePass ? "Cancel" : "Edit Pass" }}</v-btn
              >
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
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  .upper {
    width: 100%;
    background-image: repeating-linear-gradient(45deg, #2782d0, #5bb1fa 100px);
    position: relative;
    height: 200px;
    .pic {
      position: absolute;
      left: 50%;
      bottom: -75px;
      transform: translateX(-50%);
      border-radius: 50%;
      width: 150px;
      height: 150px;
      overflow: hidden;
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
  .lower {
    width: 100%;
    text-align: center;
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
}
</style>
