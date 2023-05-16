<template>
  <div class="dashboard_main pb-1" :style="`height: ${windowHeight}px`">
    <v-row style="height: 100%; margin: 0 !important">
      <v-col cols="2" style="height: 100%; padding: 0 !important">
        <template>
          <v-card style="height: 100%">
            <v-card-title>askjfe</v-card-title>
            <v-navigation-drawer absolute permanent left>
              <template v-slot:prepend>
                <v-list-item two-line>
                  <v-list-item-avatar style="margin-right: 10px">
                    <img
                      :src="
                        userData.profileImg ? userData.profileImg : defaultImg
                      "
                    />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>{{
                      userData.userName
                    }}</v-list-item-title>
                    <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item to="/">
                  <v-list-item-icon style="margin-right: 10px">
                    <v-icon>mdi-home-city</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Home</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{ name: 'profile' }">
                  <v-list-item-icon style="margin-right: 10px">
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Profile</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{ name: 'EditProfile' }">
                  <v-list-item-icon style="margin-right: 10px">
                    <v-icon>mdi-account-edit</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Edit Profile</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{ name: 'myDiagrams' }">
                  <v-list-item-icon style="margin-right: 10px">
                    <v-icon>mdi-safe</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>My Saved Diagrams</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item :to="{ name: 'create_bpmn' }">
                  <v-list-item-icon style="margin-right: 10px">
                    <v-icon>mdi-shape</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Create New Bpmn</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click="logout">
                  <v-list-item-icon style="margin-right: 10px">
                    <v-icon>mdi-logout</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Logout</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
          </v-card>
        </template>
      </v-col>
      <v-col cols="10" style="padding: 0 !important">
        <router-view></router-view>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
      defaultImg: require("@/assets/user.png"),
      windowHeight: "",
    };
  },
  computed: {
    ...mapState({
      userData: (state) => state.authModule.userData,
    }),
  },
  methods: {
    logout() {
      localStorage.removeItem("uid");
      setTimeout(() => {
        location.reload();
      }, 500);
    },
  },
  mounted() {
    this.windowHeight = window.innerHeight;
  },
};
</script>

<style lang="scss"></style>
