<template>
  <div class="home">
    <TheNav :darkMood="true" />
    <main>
      <section class="bg-image-hero center-tablet dark overlay-hero">
        <div
          class="full-screen -margin-bottom middle padding padding-top-tablet"
        >
          <div class="row max-width-l">
            <div class="col-one-half middle">
              <div>
                <h1 class="hero">Online BPMN software</h1>
                <p class="lead">
                  Map out your business process quickly using BPMN tool. In a
                  few clicks, access all the shapes you need to create a
                  polished and professional BPMN diagram.
                </p>
                <router-link
                  class="button button-primary space-top"
                  :to="{ name: 'create_bpmn' }"
                  >Get Started</router-link
                >
              </div>
            </div>
            <div class="col-one-half middle">
              <img
                src="@/assets/Businessman Drawing A Bpmn Diagram.jpg"
                alt="Hero Illustration"
              />
            </div>
          </div>
        </div>
        <div class="padding">
          <div class="row margin-bottom max-width-l">
            <div class="col-one-half middle">
              <h3>Where seeing becomes doing.</h3>
              <p class="paragraph">
                BPMN is the intelligent diagramming application that brings
                teams together to make better decisions and build the future.
              </p>
            </div>
            <div class="col-one-half">
              <img
                class="rounded shadow-l"
                src="@/assets/BPMN - Business Process Model And Notation _ QUALITY_DE.png"
                alt="Editor"
              />
            </div>
          </div>
          <div class="row max-width-l reverse-order">
            <div class="col-one-half">
              <img
                class="rounded shadow-l"
                src="@/assets/writing-work-process.jpg"
                alt="Sketch"
              />
            </div>
            <div class="col-one-half middle">
              <h3>Business Process Modeling Notation</h3>
              <p class="paragraph">
                (BPMN) is a graphical notation that describes the logic of steps
                in a business process. This notation has been especially
                designed to coordinate the sequence of processes and messages
                that flow between participants in different activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gradient-light -margin-bottom-2 overlay padding">
        <div class="center max-width-m">
          <h2>Why Is It Important To Model With BPMN?</h2>
          <p class="paragraph">
            BPMN is an internationally accepted process modeling standard, is
            independent of any process modeling methodology, creates a
            standardized bridge which reduces the gap between business processes
            and their implementation.
          </p>
        </div>
        <div class="margin-top max-width-l">
          <video style="width: 100%" height="" loop autoplay muted>
            <source
              src="@/assets/images/media/content/image/bpmn1.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>
        </div>
      </section>

      <section class="padding">
        <div class="max-width-l">
          <div class="center">
            <h2>BPMN ELEMENTS</h2>
            <p class="paragraph">
              Bring to life the plans that will propel your business.
            </p>
          </div>
          <div class="row margin-top timeline">
            <div class="col-one-fourth">
              <h5>Sequence flow</h5>
              <p>Controlling the flow of execution</p>
            </div>
            <div class="col-one-fourth">
              <h5>Tasks</h5>
              <p>The basic elements of BPMN processes are tasks</p>
            </div>
            <div class="col-one-fourth">
              <h5>Gateways</h5>
              <p>
                are elements that route tokens in more complex patterns than
                plain sequence flow
              </p>
            </div>
            <div class="col-one-fourth">
              <h5>Events</h5>
              <p>Waiting for something to happen</p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light center" style="padding-top: 100px">
        <div class="row no-gutter">
          <div class="col-one-half middle padding padding-bottom padding-top">
            <div class="max-width-m">
              <p class="paragraph">Popular Bpmn use cases:</p>
              <h3>
                "No matter your objective, Bpmn equips you to visualize complex
                ideas faster, clearer and more collaboratively."
              </h3>
            </div>
          </div>
          <div
            class="col-one-half bg-image-03 padding-bottom padding-top"
          ></div>
        </div>
      </section>

      <section class="bg-gradient-light padding">
        <div class="center max-width-l">
          <h2>5-Minute Setup</h2>
          <p class="paragraph">
            BPMN helps users sketch and share professional flowchart diagrams,
            providing designs for anything from brainstorming to project
            management. I don’t think enough people know how helpful this
            technology can be, but I do—I drew some of the original architecture
            and product sketches for Okta using Bpmn.
          </p>
        </div>
        <div class="row margin-top max-width-l">
          <div class="col-one-fourth card card-content">
            <p class="muted">Step 1</p>
            <h4>Easily update</h4>
            <p class="paragraph">
              your diagrams as your processes change. Use intuitive
              drag-and-drop features to quickly map out your business processes
              to identify inefficiencies so you can start driving needed
              improvement.
            </p>
          </div>
          <div class="col-one-fourth card card-content">
            <p class="muted">Step 2</p>
            <h4>Understand</h4>
            <p class="paragraph">
              how your plans impact your existing infrastructure. Link shapes
              with data and apply conditional formatting rules to see
              disruptions or get insights in real time.
            </p>
          </div>
          <div class="col-one-fourth card card-content">
            <p class="muted">Step 3</p>
            <h4>Align scrum teams</h4>
            <p class="paragraph">
              with your business strategy. Organize teams by skill sets,
              location, and key competencies to assign people where they will
              make the biggest impact.
            </p>
          </div>
          <div class="col-one-fourth card card-content dark">
            <p class="muted">Step 4</p>
            <h4>Gather multiple</h4>
            <p class="paragraph">
              perspectives on your flow so you can make the best decisions for
              your users. Visualize your current and future state so your team
              can quickly align on the best path to move forward.
            </p>
          </div>
        </div>
      </section>
    </main>

    <TheFooter :darkMood="true" />
  </div>
</template>

<script>
import TheNav from "@/components/TheNav";
import TheFooter from "@/components/TheFooter";
export default {
  components: { TheNav, TheFooter },
};
</script>
