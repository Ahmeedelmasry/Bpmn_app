<template>
  <div class="uploadSuccess">
    <v-dialog v-model="showPop" width="700">
      <v-stepper v-model="step" persistent>
        <v-stepper-items>
          <v-stepper-content class="pt-0" step="1">
            <v-card class="mb-5 pt-0" height="130px" style="box-shadow: unset">
              <v-card-title class="justify-center"
                >Enter Your Diagram Title</v-card-title
              >
              <v-text-field
                v-model="diagramTitle"
                label="Title"
                clearable
                :error-messages="titleErr"
              ></v-text-field>
            </v-card>

            <v-card-actions class="justify-center">
              <v-btn color="primary" @click="saveDiagram()" :loading="loading">
                Save
              </v-btn>
              <v-btn text @click="$emit('closeSavedPopup')">Cancel</v-btn>
            </v-card-actions>
          </v-stepper-content>
          <!-- Next Step -->
          <v-stepper-content class="pt-0 px-0" step="2">
            <v-card class="pa-0">
              <v-toolbar
                color="#4caf50"
                class="text-h5"
                style="
                  justify-content: center !important;
                  text-align: center !important;
                "
                dark
                >Diagram Uploaded Successfully!</v-toolbar
              >
              <v-card-text class="pb-0">
                <div class="text-h5 pa-6 text-center">
                  You will find this diagram in your profile saved diagrams
                </div>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn
                  text
                  color="white"
                  style="background: #4caf50"
                  @click="$emit('closeSavedPopup')"
                >
                  Got it
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-dialog>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      step: 1,
      showPop: true,
      diagramTitle: "",
      titleErr: "",
      loading: false,
      title: "",
    };
  },
  props: ["theDiagram"],
  methods: {
    onInput(val) {
      this.steps = parseInt(val);
    },
    async saveDiagram() {
      this.titleErr = "";
      if (!this.diagramTitle) {
        return (this.titleErr = "Please write your diagram title");
      }
      this.loading = true;

      // Get Diagram Photo
      let options = {};
      options.mode = "Data";

      options.margin = {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      };

      options.fileName = "format";
      options.format = "ImageURL";
      let base64data = this.theDiagram.exportDiagram(options);

      //Upload Diagram
      const savedDiagram = JSON.parse(this.theDiagram.saveDiagram());
      const payload = {
        title: this.diagramTitle,
        diagram: savedDiagram,
        userId: localStorage.getItem("uid"),
        svg: base64data,
      };

      await Axios.post(`${this.$store.state.apiLink}/diagrams/create`, payload)
        .then(() => {
          this.step = 2;
        })
        .catch((err) => console.log(err));

      this.loading = false;
    },
  },
};
</script>
