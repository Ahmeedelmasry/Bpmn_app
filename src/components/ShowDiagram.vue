<template>
  <div class="show_diagram" data-app="true">
    <v-dialog
      width="100%"
      v-model="toggle"
      style="max-width: 100%"
      persistent
    >
      <v-card class="pa-0">
        <v-toolbar
          color="#4caf50"
          style="
            justify-content: center !important;
            text-align: center !important;
            display: flex;
            font-size: 30px;
          "
          dark
          >{{ selectedDiagram.title }}</v-toolbar
        >
        <div class="diagram_img" style="width: 100%; height: 429px">
          <img
            :src="selectedDiagram.svg"
            alt=""
            style="height: 100%; width: 100%; object-fit: contain"
          />
        </div>
        <v-card-actions style="display: flex; justify-content: center">
          <v-btn
            @click="$emit('closePopup')"
            text
            color="white"
            style="background: indianred; color: white"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
    };
  },
  props: ["selectedDiagram", "showDiagram"],
  watch: {
    showDiagram(newVal) {
      this.toggle = newVal;
    },
  },
};
</script>
