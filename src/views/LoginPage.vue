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
          <h5>Welcome back.</h5>
          <p class="paragraph">Enter your details below.</p>
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="email">Email:</label>
              <input
                id="email"
                type="email"
                name="email"
                v-model="userData.email"
              />
              <span class="err">{{ loginErrs.email }}</span>
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input
                id="password"
                type="password"
                name="login-password"
                v-model="userData.password"
              />
              <p class="err" v-if="loginErrs.password">
                {{ loginErrs.password }}
              </p>
              <router-link :to="{ name: 'forgetPass' }" class="form-help"
                >Forgot password?</router-link
              >
            </div>
            <div class="form-group">
              <input
                id="remember-me"
                type="checkbox"
                v-model="rememberMe"
                name="remember-me"
              />
              <label for="remember-me" class="checkbox">Remember Me</label>
            </div>
            <button
              class="button button-primary full-width"
              :disabled="disabled"
            >
              Log In
            </button>
          </form>
        </div>
        <div class="center max-width-s space-top">
          <span class="muted">Don't have an account? </span>
          <router-link :to="{ name: 'signup' }" class="form-help"
            >Sign Up</router-link
          >
        </div>
      </div>
      <div class="col-one-half bg-image-04 featured-image"></div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
      disabled: false,
      rememberMe: false,
    };
  },
  computed: {
    ...mapState(["authModule"]),
    loginErrs() {
      return this.authModule.loginErrs;
    },
  },
  methods: {
    ...mapActions(["doLogin"]),
    async login() {
      this.disabled = true;
      await this.doLogin(this.userData);
      this.disabled = false;
      if (!this.loginErrs) {
        if (this.rememberMe) {
          localStorage.setItem("remember", this.userData.email);
        } else {
          if (localStorage.getItem("remember")) {
            localStorage.removeItem("remember");
          }
        }
        this.$router.push({ name: "home" });
      }
    },
  },
  mounted() {
    if (localStorage.getItem("remember")) {
      this.rememberMe = true;
      this.userData.email = localStorage.getItem("remember");
    }
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
