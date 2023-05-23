<template>
  <header
    :class="darkMood ? 'dark header-main' : 'header-main'"
    data-app="true"
    :style="`background: ${headerColor};`"
  >
    <!-- Drawer -->
    <v-card style="padding: 0">
      <v-navigation-drawer
        :style="` top: 0px !important;
          height: ${drawerHeight}px !important;
          width: 50% !important;
          max-width: 50% !important;
          max-height: ${drawerHeight}px !important;
          background: ${drawerColor};
          border-bottom: 1px solid rgba(255, 255, 255, 0.348);
          box-shadow: unset
          `"
        v-model="drawer"
        absolute
      >
        <v-list nav dense>
          <v-list-item
            :style="`color: ${drawerColor ? 'white' : ''};margin-top: 20px`"
            link
            @click="$router.push({ name: 'home' })"
          >
            <v-list-item-icon>
              <v-icon
                :style="`color: ${
                  drawerColor ? 'white' : ''
                };margin-right: 20px`"
                >mdi-home</v-icon
              >
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item
            :style="`color: ${drawerColor ? 'white' : ''};margin-top: 20px`"
            link
            @click="$router.push({ name: 'pricing' })"
          >
            <v-list-item-icon>
              <v-icon
                :style="`color: ${
                  drawerColor ? 'white' : ''
                };margin-right: 20px`"
                >mdi-cart</v-icon
              >
            </v-list-item-icon>
            <v-list-item-title>Pricing</v-list-item-title>
          </v-list-item>

          <v-list-item
            :style="`color: ${drawerColor ? 'white' : ''};margin-top: 20px`"
            link
            @click="$router.push({ name: 'about' })"
          >
            <v-list-item-icon>
              <v-icon
                :style="`color: ${
                  drawerColor ? 'white' : ''
                };margin-right: 20px`"
                >mdi-information</v-icon
              >
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item
            :style="`color: ${drawerColor ? 'white' : ''};margin-top: 20px`"
            link
            @click="$router.push({ name: 'docs' })"
          >
            <v-list-item-icon>
              <v-icon
                :style="`color: ${
                  drawerColor ? 'white' : ''
                };margin-right: 20px`"
                >mdi-file</v-icon
              >
            </v-list-item-icon>
            <v-list-item-title>Documentation</v-list-item-title>
          </v-list-item>

          <v-list-item
            :style="`color: ${drawerColor ? 'white' : ''};margin-top: 20px`"
            link
            @click="$router.push({ name: 'profile' })"
            v-if="isLogged"
          >
            <v-list-item-icon>
              <v-icon
                :style="`color: ${
                  drawerColor ? 'white' : ''
                };margin-right: 20px`"
                >mdi-account</v-icon
              >
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

          <v-list-item
            :style="`color: ${drawerColor ? 'white' : ''};margin-top: 20px`"
            link
            @click="$router.push({ name: 'create_bpmn' })"
            v-if="isLogged"
          >
            <v-list-item-icon>
              <v-icon
                :style="`color: ${
                  drawerColor ? 'white' : ''
                };margin-right: 20px`"
                >mdi-shape</v-icon
              >
            </v-list-item-icon>
            <v-list-item-title>Create New Bpmn</v-list-item-title>
          </v-list-item>

          <v-list-item
            :style="`color: ${drawerColor ? 'white' : ''};margin-top: 20px`"
            link
            @click="logout"
            v-if="isLogged"
          >
            <v-list-item-icon>
              <v-icon
                :style="`color: ${
                  drawerColor ? 'white' : ''
                };margin-right: 20px`"
                >mdi-logout</v-icon
              >
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
          <v-list-item
            :style="`color: ${drawerColor ? 'white' : ''};margin-top: 20px`"
            link
            :to="{ name: 'login' }"
            v-if="!isLogged"
          >
            <v-list-item-icon>
              <v-icon
                :style="`color: ${
                  drawerColor ? 'white' : ''
                };margin-right: 20px`"
                >mdi-login</v-icon
              >
            </v-list-item-icon>
            <v-list-item-title>Log In</v-list-item-title>
          </v-list-item>
          <v-list-item
            :style="`color: ${drawerColor ? 'white' : ''};margin-top: 20px`"
            link
            :to="{ name: 'signup' }"
            v-if="!isLogged"
          >
            <v-list-item-icon>
              <v-icon
                :style="`color: ${
                  drawerColor ? 'white' : ''
                };margin-right: 20px`"
                >mdi-login</v-icon
              >
            </v-list-item-icon>
            <v-list-item-title>Sign Up</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
    <!-- Drawer -->
    <nav class="d-flex justify-space-between align-center">
      <div class="logo_parent">
        <router-link :to="{ name: 'home' }" class="logo"
          ><img
            style="width: 114px; height: fit-content"
            v-if="darkMood"
            src="@/assets/logos/logo3.png"
            class="logo_img"
            alt="" />
          <img
            style="width: 114px; height: fit-content"
            v-else
            src="@/assets/logos/design.png"
            alt=""
        /></router-link>
        <div class="nav-toggle" @click="drawer = true"></div>
        <ul class="inline">
          <li>
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'pricing' }">Pricing</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'about' }">About</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'docs' }">Documentation</router-link>
          </li>
        </ul>
      </div>
      <div>
        <ul class="inline right" v-if="!isLogged">
          <li>
            <router-link :to="{ name: 'login' }">Log In</router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'signup' }"
              class="button button-secondary button-m full-width-tablet"
              role="button"
              >Sign Up</router-link
            >
          </li>
        </ul>
        <div class="avatar_menu">
          <v-menu offset-y v-if="isLogged && isLargSize" nudge-top="-10">
            <template v-slot:activator="{ attrs, on }">
              <div
                class="parent"
                style="
                  display: flex;
                  flex-direction: row-reverse;
                  align-items: center;
                  gap: 10px;
                "
              >
                <v-avatar
                  v-if="!userData.profileImg"
                  color="indigo"
                  class="black--text mx-5 inline right"
                  v-bind="attrs"
                  v-on="on"
                  :style="`border-radius: 50%;${
                    darkMood
                      ? 'border:1px solid white'
                      : 'border:1px solid black'
                  }`"
                >
                  <v-icon dark v-if="darkMood" size="40">
                    mdi-account-circle
                  </v-icon>
                  <v-icon v-else size="40"> mdi-account-circle </v-icon>
                </v-avatar>
                <div
                  class="user-img-name"
                  v-else
                  style="
                    display: flex;
                    flex-direction: row-reverse;
                    align-items: center;
                    gap: 10px;
                  "
                >
                  <div
                    class="img"
                    v-bind="attrs"
                    v-on="on"
                    style="
                      width: 50px;
                      height: 50px;
                      border-radius: 50%;
                      overflow: hidden;
                      cursor: pointer;
                    "
                  >
                    <img
                      :src="userData.profileImg"
                      alt=""
                      style="width: 100%; height: 100%; object-fit: cover"
                    />
                  </div>
                </div>

                <div
                  class="userN"
                  :style="`${
                    darkMood ? 'color: white' : 'color: black'
                  };font-weight: 600; font-size: 15px`"
                >
                  {{ userData.userName }}
                </div>
              </div>
            </template>

            <v-list>
              <v-list-item link @click="$router.push({ name: 'home' })">
                <v-list-item-icon style="margin-right: 10px">
                  <v-icon>mdi-home-city</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
              <v-list-item link @click="$router.push({ name: 'profile' })">
                <v-list-item-icon style="margin-right: 10px">
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Account</v-list-item-title>
              </v-list-item>
              <v-list-item link @click="$router.push({ name: 'create_bpmn' })">
                <v-list-item-icon style="margin-right: 10px">
                  <v-icon>mdi-shape</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Create Bpmn</v-list-item-title>
              </v-list-item>
              <v-list-item link @click="logout">
                <v-list-item-icon style="margin-right: 10px">
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      drawer: false,
      drawerHeight: "",
      drawerColor: "",
      headerColor: "",
    };
  },
  props: {
    darkMood: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapState({
      userData: (state) => state.authModule.userData,
    }),
    isLogged() {
      if (localStorage.getItem("uid")) {
        return true;
      }
      return false;
    },
    isLargSize() {
      if (window.innerWidth > 767) {
        return true;
      }
      return false;
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("uid");
      if (this.$route.name == "home") {
        location.reload();
      } else {
        this.$router.push({ name: "home" });
      }
    },
    resizeMethod() {
      let windowHeight = window.innerHeight;
      this.drawerHeight = windowHeight;
      if (this.$route.name == "home") {
        this.drawerColor = "rgb(16 14 35)";
        this.headerColor = "rgb(16 14 35)";
      } else {
        this.headerColor = "white";
      }
    },
  },
  watch: {
    drawer(newVal) {
      if (newVal) {
        setTimeout(() => {
          document.querySelector(".v-overlay").style.height =
            this.drawerHeight + "px";
        }, 100);
      }
    },
  },
  mounted() {
    this.resizeMethod();
    window.onresize = this.resizeMethod();
  },
};
</script>

<style lang="scss">
@media (max-width: 767px) {
  .logo_img {
    width: 80px !important;
  }
  .avatar_menu {
    display: none;
  }
  .logo_parent {
    width: 100%;
  }
}
</style>
