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
                src="@/assets/images/media/content/image/bpmn3.png"
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
                src="@/assets/images/media/content/image/bpmn4.png"
                alt="Editor"
              />
            </div>
          </div>
          <div class="row max-width-l reverse-order">
            <div class="col-one-half">
              <img
                class="rounded shadow-l"
                src="@/assets/images/media/content/image/bpmn2.png"
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
          <video width="1190" height="" autoplay muted>
            <source
              src="@/assets/images/media/content/image/bpmn1.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>
          <!-- <img class="rounded shadow-l" src="@/assets/images/media/content/bpmn11.png"  alt="Bpmn Dashboard"> -->
        </div>
      </section>

      <section class="bg-gradient-dark center dark padding">
        <div class="margin-top max-width-l">
          <div class="margin-bottom max-width-m">
            <h3>99% of Fortune 500 choose Bpmn</h3>
            <p class="opacity-m paragraph">
              Thousands of the most successful companies rely on our service.
            </p>
          </div>
          <div class="row min-two-columns">
            <div class="col-one-fourth">
              <img
                src="@/assets/images/media/content/trusted-company-dark.png"
                srcset="
                  @/assets/images/media/content/trusted-company-dark.png    1x,
                  @/assets/images/media/content/trusted-company-dark@2x.png 2x
                "
                alt="Trusted Company"
              />
            </div>
            <div class="col-one-fourth">
              <img
                src="@/assets/images/media/content/trusted-company-dark.png"
                srcset="
                  @/assets/images/media/content/trusted-company-dark.png    1x,
                  @/assets/images/media/content/trusted-company-dark@2x.png 2x
                "
                alt="Trusted Company"
              />
            </div>
            <div class="col-one-fourth">
              <img
                src="@/assets/images/media/content/trusted-company-dark.png"
                srcset="
                  @/assets/images/media/content/trusted-company-dark.png    1x,
                  @/assets/images/media/content/trusted-company-dark@2x.png 2x
                "
                alt="Trusted Company"
              />
            </div>
            <div class="col-one-fourth">
              <img
                src="@/assets/images/media/content/trusted-company-dark.png"
                srcset="
                  @/assets/images/media/content/trusted-company-dark.png    1x,
                  @/assets/images/media/content/trusted-company-dark@2x.png 2x
                "
                alt="Trusted Company"
              />
            </div>
          </div>
          <img
            class="margin-top rounded shadow-l"
            src="@/assets/images/media/content/customers.jpg"
            alt="Customers"
          />
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

      <section class="bg-light center">
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
        <div class="center margin-top max-width-l">
          <span class="muted">If you need any help, make sure to </span>
          <router-link :to="{ name: 'signup' }">book a demo</router-link>
          <span class="muted">.</span>
        </div>
      </section>
    </main>

    <footer class="footer-main bg-gradient-primary dark overlay-shape-06">
      <div class="padding">
        <div class="center margin-bottom max-width-m">
          <h3>Even the best ideas need help to become real.</h3>
          <p class="paragraph">
            Our tools are packed with epic features. So you can focus on your
            most important work.
          </p>
        </div>
        <div class="center margin-bottom max-width-l">
          <div class="row margin-bottom min-two-columns">
            <div class="col-one-fourth">
              <i class="feature-icons material-icons bg-gradient-pink"
                >format_shapes</i
              >
              <h6>Diagram Design</h6>
            </div>
            <div class="col-one-fourth">
              <i class="feature-icons material-icons bg-gradient-cyan"
                >network_check</i
              >
              <h6>Rocket Fast</h6>
            </div>
            <div class="col-one-fourth">
              <i class="feature-icons material-icons bg-gradient-green"
                >line_style</i
              >
              <h6>Framework</h6>
            </div>
            <div class="col-one-fourth">
              <i class="feature-icons material-icons bg-gradient-indigo"
                >check</i
              >
              <h6>Build Future</h6>
            </div>
          </div>
        </div>
        <div class="card card-content dark margin-bottom max-width-l">
          <form class="row reduce-spacing">
            <div class="col-two-thirds center-tablet middle">
              <h3 class="space-none">Ready to get started?</h3>
              <p class="paragraph">Start your free 15-day trial today.</p>
            </div>
            <div class="col-one-third middle">
              <router-link
                :to="{ name: 'signup' }"
                class="button button-primary"
                role="button"
                >Create An Account</router-link
              >
            </div>
          </form>
        </div>
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
