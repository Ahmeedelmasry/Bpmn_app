<template>
  <div class="dashboard_main pb-1" style="background: #f7f7f8">
    <nav
      class="navbar d-flex justify-space-between pa-3"
      style="box-shadow: 0px 0px 7px -4px black"
    >
      <div class="left-side d-flex align-center" style="gap: 20px">
        <div class="logo">
          <h3>Dashboard</h3>
        </div>
        <div class="notifs">
          <v-menu transition="scale-transition">
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props">mdi-bell</v-icon>
            </template>

            <v-list>
              <v-list-item>
                <v-list-item-title>Test</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Test</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Test</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div class="search d-flex align-center">
          <v-icon>mdi-magnify</v-icon>
          <span>Search</span>
        </div>
      </div>
      <div class="right-side bg-blue">
        <v-btn @click="adminLogout">Logout</v-btn>
      </div>
    </nav>

    <v-navigation-drawer
      theme="dark"
      permanent
      width="250"
      location="left"
      class="instructor-sidebar"
    >
      <v-list>
        <v-list-item
          title="Ahmed Elmasry"
          class="text-start main_list"
          :prependAvatar="accountAvatar"
        ></v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-chart-pie"
          title="Dashboard"
          value="home"
          class="text-start"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account"
          title="Admin Profile"
          value="myCourses"
          class="text-start"
          router
          :to="{ name: 'admine_profile' }"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-timeline"
          title="Reports"
          value="reports"
          class="text-start"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-finance"
          title="Finance"
          value="create"
          class="text-start"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-group"
          title="All Admins"
          value="users"
          class="text-start"
          router
          :to="{ name: 'admine_users' }"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="display_content mt-2 pa-4">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { store } from "@/store";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const accountAvatar = ref(require("@/assets/account.svg"));

const adminLogout = async () => {
  const waitLogout = await store.dispatch("doLogOut", 2);
  if (waitLogout) {
    store.dispatch("doResetuserData", 2);
    router.push({ name: "admin_login" });
  }
};

onMounted(() => {
  router.replace({ name: "admine_profile" });
});
</script>

<style lang="scss">
.dashboard_main {
  .v-list-item:not(.main_list) {
    margin-top: 20px !important;
    .v-list-item-title {
      font-size: 17px;
    }
  }
}
</style>
