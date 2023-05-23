<template>
  <footer
    :class="
      (darkMood && 'footer-main bg-gradient-primary dark overlay-shape-06') ||
      'footer-main'
    "
  >
    <div class="padding">
      <div class="row center-desktop max-width-l">
        <div class="col-two-fifths">
          <router-link :to="{ name: 'home' }">
            <img
              v-if="darkMood"
              src="@/assets/logos/logo3.png"
              width="150"
              alt="" />
            <img v-else src="@/assets/logos/design.png" width="150" alt=""
          /></router-link>
        </div>
        <div class="col-one-fifth">
          <h6>Info</h6>
          <ul class="blank">
            <li>
              <router-link :to="{ name: 'home' }">Homepage</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'about' }">About</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'pricing' }">Pricing</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'docs' }">Documentation</router-link>
            </li>
          </ul>
        </div>
        <div class="col-one-fifth">
          <h6>Account</h6>
          <ul class="blank">
            <li>
              <router-link v-if="!isLogged" :to="{ name: 'login' }"
                >Login</router-link
              >
            </li>
            <li>
              <router-link v-if="!isLogged" :to="{ name: 'signup' }"
                >Sign Up</router-link
              >
            </li>
            <li>
              <router-link v-if="isLogged" :to="{ name: 'profile' }"
                >Profile</router-link
              >
            </li>
            <li>
              <router-link v-if="isLogged" :to="{ name: 'myDiagrams' }"
                >Saved Diagrams</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-one-fifth">
          <h6>Contact Us</h6>
          <ul class="blank">
            <li><a href="mailto:workdatabase6@gmail.com">Email</a></li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=+201018035360"
                >Send Message</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p class="copyright" style="padding-bottom: 20px !important">
      <span>BPMN software </span><span> - © 2023, all rights reserved.</span>
    </p>
  </footer>
</template>

<script>
export default {
  props: {
    darkMood: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    isLogged() {
      if (localStorage.getItem("uid")) {
        return true;
      }
      return false;
    },
  },
};
</script>
