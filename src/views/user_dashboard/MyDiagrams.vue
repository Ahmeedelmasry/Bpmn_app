<template>
  <div
    class="my_diagrams"
    :style="`padding-top: 20px; height: ${
      windowHeight ? windowHeight + 'px' : '100vh'
    }`"
  >
    <h3 style="text-align: center">My Diagrams</h3>
    <!-- Loading -->
    <v-container
      class="lower_container"
      v-if="loading"
      style="padding: 10px 50px !important"
    >
      <v-row style="margin: 0">
        <v-col
          style="margin: 0"
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
          v-for="num in 4"
          :key="num"
        >
          <v-skeleton-loader
            v-if="loading"
            v-bind="attrs"
            type="card, card"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
    <!-- Loading -->
    <v-container class="lower_container" v-if="!diagrams.length && !loading">
      <div class="no-diagrams">
        <div style="text-align: center">
          <p style="line-height: 2">You haven't saved any diagrams yet!</p>
          <v-btn
            style="background-color: rgb(0, 157, 255); color: white"
            :to="{ name: 'create_bpmn' }"
            >Create Diagram</v-btn
          >
        </div>
      </div>
    </v-container>
    <div class="diagrams-parent" v-else>
      <v-container
        class="lower_container"
        :style="`${
          !loading ? 'min-height: 420px' : 'min-height:0'
        }; padding: 10px 50px`"
      >
        <v-row style="margin: 0">
          <v-col
            xs="12"
            sm="6"
            md="4"
            lg="3"
            xl="3"
            v-for="diagram in diagrams"
            :key="diagram._id"
            style="height: 200px; margin: 0"
          >
            <v-card style="height: 100%; overflow: hidden">
              <div style="height: 60%; position: relative">
                <img
                  :src="diagram.svg"
                  alt="Diagram Image"
                  style="width: 100%; height: 100%; object-fit: contain"
                />
                <div class="overlay"></div>
              </div>

              <v-card-title class="card_tit">{{
                diagram.title.length < 25
                  ? diagram.title
                  : diagram.title.substring(0, 25) + " ..."
              }}</v-card-title>

              <v-card-actions style="padding-top: 3px !important">
                <v-spacer></v-spacer>

                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                      @click="showDeleteAlert(diagram)"
                    >
                      <v-icon size="18" style="color: indianred"
                        >mdi-delete</v-icon
                      >
                    </v-btn>
                  </template>
                  <span>Delete Diagram</span>
                </v-tooltip>

                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                      @click="
                        $router.push({
                          name: 'editDiagram',
                          params: { diagramId: diagram._id },
                        })
                      "
                    >
                      <v-icon size="18" style="color: #1f76e2"
                        >mdi-widgets</v-icon
                      >
                    </v-btn>
                  </template>
                  <span>Edit Diagram</span>
                </v-tooltip>

                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                      @click="selectDiagram(diagram)"
                    >
                      <v-icon size="18" style="color: rgb(30 185 108)"
                        >mdi-eye</v-icon
                      >
                    </v-btn>
                  </template>
                  <span>View Diagram</span>
                </v-tooltip>

                <v-tooltip bottom color="primary">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      v-bind="attrs"
                      v-on="on"
                      @click="getReports(diagram)"
                    >
                      <v-icon size="18" style="color: rgb(71, 166, 249)"
                        >mdi-information</v-icon
                      >
                    </v-btn>
                  </template>
                  <span>Diagram Shapes</span>
                </v-tooltip>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-pagination
        v-if="diagrams.length"
        v-model="page"
        class="my-4"
        :length="maxNum ? Math.ceil(maxNum / 8) : 1"
        :total-visible="8"
        style="margin-top: 20px"
        @input="getMyDiagrams"
      ></v-pagination>
    </div>
    <!-- Show Diagram -->
    <ShowDiagram
      :selectedDiagram="selectedDiagram"
      :showDiagram="showDiagram"
      @closePopup="closePopup"
    />
    <!-- Show Diagram -->

    <!-- Delete Diagram -->
    <DeleteAlert
      :deleteAlert="deleteAlert"
      @confirmDelete="deleteDiagram(diagramToDelete._id)"
      @cancel="cancelDelete"
    />
    <!-- Delete Diagram -->

    <!-- Report Popup -->
    <ReportPopup
      v-if="showReport"
      @close_popup="showReport = false"
      :nodes="reportNodes"
    />
    <!-- Report Popup -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ShowDiagram from "@/components/ShowDiagram.vue";
import DeleteAlert from "@/components/DeleteDiagramAlert.vue";
import ReportPopup from "@/components/ReportPopup.vue";
export default {
  components: { ShowDiagram, DeleteAlert, ReportPopup },
  data() {
    return {
      page: 1,
      loading: false,
      attrs: {
        class: "mb-6",
        boilerplate: false,
        elevation: 2,
        height: 424,
      },
      selectedDiagram: "",
      showDiagram: false,
      deleteAlert: false,
      diagramToDelete: "",
      windowHeight: "",
      reportNodes: [],
      showReport: false,
    };
  },
  methods: {
    ...mapActions(["doGetDiagrams", "doDeleteDiagram"]),
    async getMyDiagrams() {
      this.loading = true;
      const payload = {
        page: this.page,
        uId: localStorage.getItem("uid"),
      };
      await this.doGetDiagrams(payload);
      this.loading = false;
    },
    selectDiagram(selectedDiagram) {
      this.selectedDiagram = selectedDiagram;
      this.showDiagram = true;
    },
    closePopup() {
      this.showDiagram = false;
      this.selectedDiagram = "";
    },
    showDeleteAlert(diagram) {
      this.diagramToDelete = diagram;
      this.deleteAlert = true;
    },
    cancelDelete() {
      this.deleteAlert = false;
      this.diagramToDelete = "";
    },
    async deleteDiagram(diagramId) {
      await this.doDeleteDiagram(diagramId);
      this.page = 1;
      const payload = {
        page: this.page,
        uId: localStorage.getItem("uid"),
      };
      this.deleteAlert = false;
      this.loading = true;
      await this.doGetDiagrams(payload);
      this.loading = false;
    },
    getReports(diagram) {
      let pool = diagram.diagram.nodes[0];
      let nodes = [];
      if (pool.shape.type == "SwimLane") {
        pool.shape.lanes.forEach((lane) => {
          lane.children.forEach((child) => {
            nodes.push(child);
          });
        });
      } else {
        nodes = diagram.diagram.nodes;
      }
      nodes.forEach((node) => {
        let inners = node.inEdges;
        let outters = node.outEdges;
        let pre = [];
        let after = [];

        // Get Predecessors
        if (inners.length) {
          inners.forEach((inner) => {
            for (let i = 0; i < nodes.length; i++) {
              if (nodes[i].id != node.id && nodes[i].outEdges.length) {
                let outEdgs = nodes[i].outEdges;
                for (let j = 0; j < outEdgs.length; j++) {
                  if (outEdgs[j] == inner) {
                    this.setNodeProps(nodes[i]);
                    pre.push(nodes[i]);
                    break;
                  }
                }
              }
            }
          });
        }

        // Get Successors
        if (outters.length) {
          outters.forEach((outter) => {
            for (let i = 0; i < nodes.length; i++) {
              if (nodes[i].id != node.id && nodes[i].inEdges.length) {
                let inEdgs = nodes[i].inEdges;
                for (let j = 0; j < inEdgs.length; j++) {
                  if (inEdgs[j] == outter) {
                    this.setNodeProps(nodes[i]);
                    after.push(nodes[i]);
                    break;
                  }
                }
              }
            }
          });
        }
        node.inners = pre;
        node.outters = after;
        this.setNodeProps(node);
      });
      this.reportNodes = nodes;
      this.showReport = true;
    },
    setNodeProps(node) {
      // Set Prperties
      // Events
      if (node.shape.shape == "Event") {
        node.itemName =
          node.shape.event.trigger != "None"
            ? node.shape.event.trigger +
              " " +
              node.shape.event.event +
              " " +
              node.shape.shape
            : node.shape.event.event + " " + node.shape.shape;
        node.itemType = "Event";
      }
      // Gateway
      if (node.shape.shape == "Gateway") {
        node.itemName = node.shape.gateway.type + " " + node.shape.shape;
        node.itemType = "Gateway";
      }
      // Tasks
      if (node.shape.shape == "Activity") {
        node.itemName =
          node.shape.activity.task.type !== "None"
            ? node.shape.activity.task.type + " " + "Task"
            : "Task";
        node.itemType = "Task";
      }
      // Tasks
      if (
        node.shape.shape == "DataObject" ||
        node.shape.shape == "DataSource"
      ) {
        node.itemName = node.shape.shape;
        node.itemType = "Data";
      }
    },
  },
  computed: {
    ...mapState({
      diagrams: (state) =>
        state.profileModule.diagrams
          ? state.profileModule.diagrams.diagrams
          : "",
      maxNum: (state) =>
        state.profileModule.diagrams
          ? state.profileModule.diagrams.diagramsNum
          : "",
    }),
  },
  async mounted() {
    await this.getMyDiagrams();
    this.windowHeight = window.innerHeight;
  },
};
</script>

<style lang="scss">
.my_diagrams {
  background-image: url(../../assets/photo_6016823636792556918_y.jpg);
  background-size: cover;
  background-position: left top;
  h3 {
    color: rgba(255, 255, 255, 0.726);
  }
  .diagrams-parent {
    .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.24);
      box-shadow: rgba(50, 50, 93, 0.329) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.261) 0px 18px 36px -18px inset;
      z-index: 1;
    }
  }
}
.v-card {
  box-shadow: 0px 0px 17px -4px black !important;
  border-radius: 10px !important;
}
.card_tit {
  bottom: 0;
  color: rgb(100, 100, 100);
  font-weight: bold;
  width: 100%;
  word-break: break-all;
  z-index: 2;
  font-size: 15px;
  padding-top: 0;
  padding-bottom: 0;
}
.v-pagination__item--active {
  background: #2780b4 !important;
}
.no-diagrams {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 400px;
  p {
    font-size: 25px;
    color: #858585;
    margin-bottom: 32px;
  }
}
.v-sheet.v-card {
  padding: 0 !important;
}

// Media
@media (max-width: 980px) {
  .lower_container {
    padding-left: 50px !important;
    padding-right: 50px !important;
  }
}
</style>
