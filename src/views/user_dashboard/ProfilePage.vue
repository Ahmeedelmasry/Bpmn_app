<template>
  <div class="profile">
    <div class="upper">
      <div class="pic">
        <img
          :src="userData.profileImg ? userData.profileImg : defaultImg"
          alt="profile picture"
        />
      </div>
    </div>
    <div class="lower">
      <div class="username">
        <h3>{{ userData.userName }}</h3>
      </div>
      <div class="email">
        <h3>{{ userData.email }}</h3>
      </div>
    </div>
    <v-btn
      style="
        margin-top: -50px;
        background: #009dff;
        color: white;
        font-weight: 700;
      "
      link
      :to="{ name: 'EditProfile' }"
      >Edit Profile</v-btn
    >
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ProfilePage",
  data() {
    return {
      defaultImg: require("@/assets/user.png"),
    };
  },
  computed: {
    ...mapState({
      userData: (state) => state.authModule.userData,
    }),
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
      img {
        width: 100%;
      }
    }
  }
  .lower {
    width: 100%;
    text-align: center;
  }
}
</style>
