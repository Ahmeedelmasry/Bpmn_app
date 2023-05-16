<template>
  <div class="my_diagrams" style="padding-top: 20px">
    <h3 style="text-align: center">My Diagrams</h3>
    <!-- Loading -->
    <v-container>
      <v-row>
        <v-col cols="3" v-for="num in 4" :key="num">
          <v-skeleton-loader
            v-if="loading"
            v-bind="attrs"
            type="card, card"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
    <!-- Loading -->
    <div class="no-diagrams" v-if="!diagrams.length && !loading">
      <div style="text-align: center">
        <p>You haven't saved any diagrams yet!</p>
        <v-btn :to="{ name: 'create_bpmn' }">Create Diagram</v-btn>
      </div>
    </div>
    <div class="diagrams-parent" v-else>
      <v-container
        :style="`${!loading ? 'min-height: 420px' : 'min-height:0'}`"
      >
        <v-row>
          <v-col
            cols="3"
            v-for="diagram in diagrams"
            :key="diagram._id"
            style="height: 250px"
          >
            <v-card style="height: 100%; overflow: hidden">
              <div style="height: 65%; position: relative">
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
                      <v-icon size="18" style="color: #1f76e2">mdi-note</v-icon>
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
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ShowDiagram from "@/components/ShowDiagram.vue";
import DeleteAlert from "@/components/DeleteDiagramAlert.vue";
export default {
  components: { ShowDiagram, DeleteAlert },
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
  },
};
</script>

<style lang="scss">
.my_diagrams {
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
</style>
