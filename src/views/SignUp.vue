<template>
  <main>
    <a href="index.html" class="button button-close" role="button"></a>

    <section class="row no-gutter reverse-order">
      <div class="col-one-half middle padding">
        <div class="max-width-s">
          <h5>Welcome!</h5>
          <p class="paragraph">Enter your details to create an account.</p>
          <form>
            <div class="form-group">
              <label for="name">Name:</label>
              <input id="name" type="text" name="name" />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input id="email" type="email" name="email" />
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input id="password" type="password" name="signup-password" />
            </div>
            <a
              href="#"
              class="button button-primary full-width space-top"
              role="button"
              >Create Account</a
            >
          </form>
        </div>
        <div class="center max-width-s" style="margin-top: 10px">
          <span class="muted">Already have an account? </span
          ><a href="">Log In</a>
        </div>
      </div>
      <div class="col-one-half bg-image-05 featured-image"></div>
    </section>
  </main>
</template>
