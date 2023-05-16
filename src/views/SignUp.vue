<template>
  <main>
    <router-link
      :to="{ name: 'home' }"
      class="button button-close"
      role="button"
    ></router-link>
    <section class="row no-gutter reverse-order">
      <div class="col-one-half middle padding">
        <div class="max-width-s">
          <h5>Welcome!</h5>
          <p class="paragraph">Enter your details to create an account.</p>
          <form @submit.prevent="postSignup">
            <div class="form-group">
              <label for="name">Name:</label>
              <input
                id="name"
                type="text"
                name="name"
                v-model="user.userName"
              />
              <span class="err">{{ signupErrors.userName }}</span>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input
                id="email"
                type="email"
                name="email"
                v-model="user.email"
              />
              <span class="err">{{ signupErrors.email }}</span>
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input
                id="password"
                type="password"
                name="signup-password"
                v-model="user.password"
              />
              <span class="err">{{ signupErrors.password }}</span>
            </div>
            <button
              :disabled="disabled"
              class="button button-primary full-width space-top"
            >
              Create Account
            </button>
          </form>
        </div>
        <div class="center max-width-s" style="margin-top: 10px">
          <span class="muted">Already have an account? </span>
          <router-link :to="{ name: 'login' }">Log In</router-link>
        </div>
      </div>
      <div class="col-one-half bg-image-05 featured-image"></div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      user: {
        userName: "",
        email: "",
        password: "",
      },
      disabled: false,
    };
  },
  computed: {
    ...mapState(["authModule"]),
    signupErrors() {
      return this.authModule.signupErrs;
    },
  },
  methods: {
    ...mapActions(["doSignup"]),
    async postSignup() {
      this.disabled = true;
      await this.doSignup(this.user);
      this.disabled = false;
      if (!this.signupErrors) {
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>

<style scoped lang="scss">
main {
  overflow: hidden;
  .err {
    color: indianred;
    font-size: 12px;
    font-weight: 700;
  }
}
</style>
