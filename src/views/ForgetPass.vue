<template>
  <main>
    <a href="index.html" class="button button-close" role="button"></a>

    <section class="row no-gutter reverse-order">
      <div class="col-one-half middle padding">
        <div class="max-width-s">
          <h5>Forgot password?</h5>
          <p class="paragraph">
            We'll send you an email with instructions to reset it.
          </p>
          <form>
            <div class="form-group">
              <label for="email">Email:</label>
              <input id="email" type="email" name="email" />
            </div>
            <a
              href="#"
              class="button button-primary full-width space-top"
              role="button"
              >Forgot Password</a
            >
          </form>
        </div>
        <div class="center max-width-s space-top">
          <span class="muted">Already have an account? </span
          ><a href="login.html">Log In</a>
        </div>
      </div>
      <div class="col-one-half bg-image-06 featured-image"></div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.featured-image {
  width: 50%;
  height: 100%;
  position: fixed;
  right: 0;
}
</style>
