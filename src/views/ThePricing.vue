<template>
  <div class="parent">
    <TheNav :darkMood="false" />
    <main>
      <section class="bg-gradient-light padding padding-top">
        <div class="center max-width-l">
          <h1 class="hero">Find the perfect plan for your business.</h1>
        </div>
        <div class="row margin-top max-width-l">
          <div class="col-one-third card card-content">
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
            <router-link
              :to="{ name: 'signup' }"
              class="button button-secondary full-width space-top"
              role="button"
              >Sign Up For Free</router-link
            >
          </div>
          <div class="col-one-third card card-content">
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
            <router-link
              :to="{ name: 'signup' }"
              class="button button-secondary full-width space-top"
              role="button"
              >Start 14-Day Trial</router-link
            >
          </div>
          <div class="col-one-third card card-content dark">
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
                Microsoft 365, GitHub, Confluence, Jira, and LeanIX integrations
              </li>
              <li>IP address whitelisting</li>
              <li>Enforceable sharing restrictions</li>
              <li>Enforceable domain control</li>
              <li>Advanced data and automation</li>
              <li>Salesforce integration</li>
            </ul>
            <router-link
              :to="{ name: 'signup' }"
              class="button button-primary full-width space-top"
              role="button"
              >Start 14-Day Trial</router-link
            >
          </div>
        </div>
      </section>

      <section class="bg-light padding">
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

    <footer class="footer-main">
      <div class="padding">
        <div class="row center-desktop max-width-l">
          <div class="col-two-fifths">
            <h5>BPMN ®</h5>
            <h6>This site is developed by:</h6>
            <ul class="blank">
              <li><p>Ziad Mahmoud Elshabrawy</p></li>
              <li><P>Abdullah Mostafa kamel</P></li>
              <li><P>Hossam Adel Ahmed</P></li>
              <li><P>Ibrahim Mohamed Fathy</P></li>
              <li><P>Ziad Mahmoud hamed</P></li>
              <li><P>Ali Hosni Ali</P></li>
            </ul>
          </div>
          <div class="col-one-fifth">
            <h6>Info</h6>
            <ul class="blank">
              <li><a href="#">Getting Started</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
          <div class="col-one-fifth">
            <h6>Support</h6>
            <ul class="blank">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Requirements</a></li>
              <li><a href="#">License</a></li>
              <li><a href="#">Updates</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="col-one-fifth">
            <h6>Connect</h6>
            <ul class="blank">
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Medium</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p class="copyright">
        <span>BPMN software </span><span> - © 2023, all rights reserved.</span>
      </p>
    </footer>
  </div>
</template>

<script>
import TheNav from "@/components/TheNav";
export default {
  components: { TheNav },
};
</script>
