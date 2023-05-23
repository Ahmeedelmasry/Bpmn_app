<template>
  <div class="parent">
    <TheNav :darkMood="false" />
    <main>
      <section class="bg-gradient-light padding padding-top">
        <div class="center max-width-l">
          <h1 class="hero">Find the perfect plan for your business.</h1>
        </div>
        <div class="row margin-top max-width-l">
          <div
            class="col-one-third card card-content"
            style="
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            "
          >
            <div>
              <p class="muted">Free Forever</p>
              <h2>
                <span class="pricing-price">Free</span>
              </h2>
              <p class="paragraph">Free includes:</p>
              <ul class="space-bottom">
                <li>3 editable BPMN documents</li>
                <li>60 shapes per BPMN document</li>
                <li>100 templates</li>
              </ul>
            </div>
            <router-link
              v-if="!isLogged"
              :to="{ name: 'signup' }"
              class="button button-secondary full-width space-top"
              role="button"
              >Sign Up For Free</router-link
            >
          </div>
          <div
            class="col-one-third card card-content"
            style="
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            "
          >
            <div>
              <p class="muted">For Team</p>
              <h2>
                <span class="pricing-price">$20</span>
                <span class="pricing-duration muted sans">/MO</span>
              </h2>
              <p class="paragraph">Everything on Free, plus</p>
              <ul class="space-bottom">
                <li>Unlimited editable documents</li>
                <li>Unlimited objects per document</li>
                <li>1 GB of storage</li>
                <li>Visio import and export</li>
                <li>Presentation mode</li>
                <li>Premium shape libraries</li>
                <li>Premium templates</li>
              </ul>
            </div>
            <button class="button button-secondary full-width space-top">
              Start 14-Day Trial
            </button>
          </div>
          <div
            class="col-one-third card card-content dark"
            style="
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            "
          >
            <div>
              <p class="muted">For Enterprises</p>
              <h2>
                <span class="pricing-price">$140</span>
                <span class="pricing-duration muted sans">/MO</span>
              </h2>
              <p class="paragraph">Everything on Team, plus:</p>
              <ul class="space-bottom">
                <li>Commenting</li>
                <li>Revision history with versioning</li>
                <li>Call others to me</li>
                <li>Password protected publishing</li>
                <li>
                  Microsoft 365, GitHub, Confluence, Jira, and LeanIX
                  integrations
                </li>
                <li>IP address whitelisting</li>
                <li>Enforceable sharing restrictions</li>
                <li>Enforceable domain control</li>
                <li>Advanced data and automation</li>
                <li>Salesforce integration</li>
              </ul>
            </div>
            <button class="button button-primary full-width space-top">
              Start 14-Day Trial
            </button>
          </div>
        </div>
      </section>

      <section class="bg-light padding" v-if="!isLogged">
        <div class="center max-width-m">
          <h2>Grow your startup the right way.</h2>
          <p class="paragraph">Don't waste another minute.</p>
          <router-link
            :to="{ name: 'signup' }"
            class="button button-primary space-top"
            role="button"
            >Sign Up For Free</router-link
          >
        </div>
      </section>
    </main>

    <TheFooter :darkMood="false" />
  </div>
</template>

<script>
import TheNav from "@/components/TheNav";
import TheFooter from "@/components/TheFooter";
export default {
  components: { TheNav, TheFooter },
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
