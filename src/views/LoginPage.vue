<template>
  <main>
    <a href="index.html" class="button button-close" role="button"></a>

    <section class="row no-gutter reverse-order">
      <div class="col-one-half middle padding">
        <div class="max-width-s">
          <h5>Welcome back.</h5>
          <p class="paragraph">Enter your details below.</p>
          <form>
            <div class="form-group">
              <label for="email">Email:</label>
              <input id="email" type="email" name="email" />
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input id="password" type="password" name="login-password" />
              <a href="forgot-password.html" class="form-help"
                >Forgot password?</a
              >
            </div>
            <div class="form-group">
              <input id="remember-me" type="checkbox" name="remember-me" />
              <label for="remember-me" class="checkbox">Remember Me</label>
            </div>
            <a href="#" class="button button-primary full-width" role="button"
              >Log In</a
            >
          </form>
        </div>
        <div class="center max-width-s space-top">
          <span class="muted">Don't have an account? </span
          ><a href="signup.html">Sign Up</a>
        </div>
      </div>
      <div class="col-one-half bg-image-04 featured-image"></div>
    </section>
  </main>
</template>
