<template>
  <header
    :class="darkMood ? 'dark header-main' : 'header-main'"
    data-app="true"
  >
    <nav class="d-flex justify-space-between align-center">
      <div>
        <router-link :to="{ name: 'home' }" class="logo"
          ><span>BPMN</span></router-link
        >
        <div class="nav-toggle"></div>
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
        <v-menu offset-y v-if="isLogged && isLargSize" nudge-top="-10">
          <template v-slot:activator="{ attrs, on }">
            <v-avatar
              v-if="!userData.profileImg"
              color="indigo"
              class="black--text mx-5 inline right"
              v-bind="attrs"
              v-on="on"
              :style="`border-radius: 50%;${
                darkMood ? 'border:1px solid white' : 'border:1px solid black'
              }`"
            >
              <v-icon dark v-if="darkMood" size="40">
                mdi-account-circle
              </v-icon>
              <v-icon v-else size="40"> mdi-account-circle </v-icon>
            </v-avatar>
            <div
              class="img"
              v-bind="attrs"
              v-on="on"
              v-else
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
            <v-list-item link>
              <v-list-item-icon style="margin-right: 10px">
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title @click="logout">Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
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
  },
};
</script>
