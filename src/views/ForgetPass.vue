<template>
  <main data-app="true">
    <router-link
      :to="{ name: 'home' }"
      class="button button-close"
      role="button"
    ></router-link>

    <!-- Success Popup -->
    <v-dialog v-model="toggle" style="max-width: 70% !important">
      <v-card style="padding-bottom: 10px; padding-top: 10px">
        <div style="text-align: center">
          <v-icon
            style="
              font-size: 68px;
              border-radius: 50%;
              border: 1px solid #24d024;
              padding: 10px;
              color: #24d024;
            "
            >mdi-check</v-icon
          >
        </div>
        <v-card-title
          >A new password was sent to your email successfully!, you can use it
          now to log in</v-card-title
        >
        <v-card-actions style="justify-content: center">
          <v-btn
            style="background: indianred; color: white"
            @click="toggle = !toggle"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Success Popup -->

    <section class="row no-gutter reverse-order">
      <div class="col-one-half middle padding">
        <div class="max-width-s">
          <h5>Forgot password?</h5>
          <p class="paragraph">
            We'll send you an email with a password to use it to login.
          </p>
          <form @submit.prevent="sendPass">
            <div class="form-group">
              <label for="email">Email:</label>
              <input
                id="email"
                type="email"
                required
                name="email"
                v-model="email"
              />
              <span class="err">{{ errs ? errs.error : "" }}</span>
            </div>
            <v-btn
              type="submit"
              class="button button-primary full-width space-top"
              style="
                color: white;
                border-radius: 25px;
                padding: 23px 0;
                font-weight: 500;
              "
              :loading="loading"
              >Submit</v-btn
            >
          </form>
        </div>
        <div class="center max-width-s space-top">
          <span class="muted">Already have an account? </span>
          <router-link :to="{ name: 'login' }" class="form-help"
            >Log In</router-link
          >
        </div>
      </div>
      <div class="col-one-half bg-image-06 featured-image"></div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      email: "",
      toggle: false,
      loading: false,
    };
  },
  computed: {
    ...mapState({
      errs: (state) => state.authModule.forgetPassErr,
    }),
  },
  methods: {
    ...mapActions(["doForgetPassword"]),
    async sendPass() {
      this.loading = true;
      await this.doForgetPassword(this.email);
      this.loading = false;
      if (!this.errs) {
        this.toggle = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.featured-image {
  width: 50%;
  height: 100%;
  position: fixed;
  right: 0;
}
.err {
  color: indianred;
  font-size: 13px;
  font-weight: 700;
}
</style>
