<template>
  <div class="parent">
    <TheNav :darkMood="false" />
    <main>
      <section class="bg-gradient-light center padding padding-top">
        <div class="max-width-m">
          <p class="muted">Who We Are</p>
          <h1 class="hero">
            We’ve built a leading end-to-end Visual Collaboration Suite that
            helps teams see and build the future from idea to reality
          </h1>
        </div>
      </section>

      <section class="bg-gradient-light padding">
        <div class="max-width-l">
          <v-row>
            <v-col cols="6">
              <div>
                <p class="paragraph serif">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur.
                </p>
              </div>
            </v-col>
            <v-col cols="6">
              <img
                class="full-width rounded"
                src="@/assets/images/media/content/about-01.jpg"
                alt="About"
              />
            </v-col>
          </v-row>
          <br />
          <br />
          <br />
          <br />
          <h3>Our core values</h3>
          <p class="paragraph serif">
            At BPMN, we know, live, and love our values — they’re not just
            writings on the wall. Each individual is a critical contributor to
            our culture. Our employees and teams embody our values in their
            day-to-day work and recognize we can only achieve our full potential
            together.
          </p>
          <div class="row margin-top">
            <div class="col-one-half">
              <img
                class="full-width rounded"
                src="@/assets/images/media/content/about-02.jpg"
                srcset="
                  @/assets/images/media/content/about-02.jpg    1x,
                  @/assets/istockphoto-840266964-612x612.jpg 2x
                "
                alt="About"
              />
            </div>
            <div class="col-one-half">
              <img
                class="full-width rounded"
                src="@/assets/images/media/content/about-03.jpg"
                srcset="
                  @/assets/images/media/content/about-03.jpg    1x,
                  @/assets/images/media/content/about-03@2x.jpg 2x
                "
                alt="About"
              />
            </div>
          </div>
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
};
</script>
