<template>
  <div class="docs">
    <TheNav :darkMood="false" />
    <section
      class="full-screen middle padding padding-top-tablet"
      style="margin: 0 !important"
    >
      <v-container fluid>
        <v-row style="margin: 0">
          <v-col cols="12">
            <video style="width: 100%" height="" loop autoplay muted>
              <source
                src="@/assets/images/media/content/image/bpmn1.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML video.
            </video>
          </v-col>
          <v-col cols="12" style="margin-top: 70px" class="img-col">
            <v-row style="margin: 0">
              <v-col cols="12" md="6" style="margin: 0">
                <h4>How to draw a valid Bpmn Diagram?</h4>
                <p class="paragraph" style="word-break: break-all">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  corporis sed dignissimos odit. Possimus, ipsam reprehenderit
                  deleniti laborum explicabo, perspiciatis pariatur animi iste
                  illum, consectetur alias in temporibus a sint. Possimus, ipsam
                  reprehenderit deleniti laborum explicabo, perspiciatis
                  pariatur animi iste illum, consectetur alias in temporibus a
                  sint.
                </p>
              </v-col>
              <v-col cols="12" md="6" style="margin: 0">
                <img
                  class="full-width rounded"
                  src="@/assets/analysis-model-flow-chart-icon.jpg"
                  alt="About"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" style="margin-top: 70px" class="img-col middle">
            <v-row style="margin: 0">
              <v-col cols="12" md="6" style="margin: 0">
                <h4>How to draw a valid Bpmn Diagram?</h4>
                <p class="paragraph" style="word-break: break-all">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  corporis sed dignissimos odit. Possimus, ipsam reprehenderit
                  deleniti laborum explicabo, perspiciatis pariatur animi iste
                  illum, consectetur alias in temporibus a sint. Possimus, ipsam
                  reprehenderit deleniti laborum explicabo, perspiciatis
                  pariatur animi iste illum, consectetur alias in temporibus a
                  sint.
                </p>
              </v-col>
              <v-col cols="12" md="6" style="margin: 0">
                <img
                  class="full-width rounded"
                  src="@/assets/action-process-directions-performance-verification-icon.jpg"
                  alt="About"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" style="margin-top: 70px" class="img-col">
            <v-row style="margin: 0">
              <v-col cols="12" lg="6" style="margin: 0">
                <h4>How to draw a valid Bpmn Diagram?</h4>
                <p class="paragraph" style="word-break: break-all">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  corporis sed dignissimos odit. Possimus, ipsam reprehenderit
                  deleniti laborum explicabo, perspiciatis pariatur animi iste
                  illum, consectetur alias in temporibus a sint. Possimus, ipsam
                  reprehenderit deleniti laborum explicabo, perspiciatis
                  pariatur animi iste illum, consectetur alias in temporibus a
                  sint.
                </p>
              </v-col>
              <v-col cols="12" lg="6" style="margin: 0">
                <img
                  class="full-width rounded"
                  src="@/assets/writing-work-process.jpg"
                  alt="About"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="bg-light padding ready-section">
      <div class="center max-width-m">
        <h2>Ready to draw a new Bpmn?</h2>
        <router-link
          :to="{ name: 'create_bpmn' }"
          class="button button-primary space-top"
          role="button"
          >Create New Bpmn
        </router-link>
      </div>
    </section>
    <TheFooter :darkMood="false" />
  </div>
</template>

<script>
import TheNav from "@/components/TheNav.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: { TheNav, TheFooter },
};
</script>

<style lang="scss">
@media (min-width: 991px) {
  .img-col {
    .col-12:first-child {
      padding-right: 40px;
    }
    &.middle {
      .col-12:first-child {
        order: 1;
        padding-left: 40px;
        padding-right: 0px;
      }
    }
  }
}
@media (max-width: 700px) {
  .ready-section {
    h2 {
      font-size: 30px;
    }
    a {
      font-size: 14px;
    }
  }
}
</style>
