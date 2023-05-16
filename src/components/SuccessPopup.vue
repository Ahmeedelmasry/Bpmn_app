<template>
  <div class="success">
    <v-dialog
      transition="dialog-top-transition"
      max-width="550"
      v-model="toggle"
      persistent
    >
      <v-card class="pa-0">
        <v-toolbar
          color="#4caf50"
          class="text-h5"
          style="
            justify-content: center !important;
            text-align: center !important;
          "
          dark
          >Your Diagram Is Valid</v-toolbar
        >
        <v-card-text class="pb-0">
          <div class="text-h5 pa-6 text-center">
            You can upload it to your profile or just download it
          </div>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            text
            color="white"
            style="background: #4caf50"
            @click="$emit('doDownload')"
          >
            <v-icon>mdi-download</v-icon>
            Download
          </v-btn>
          <v-btn
            text
            style="background: #1e7fcd"
            @click="
              popupType == 'upload' ? $emit('doUpload') : $emit('doUpdate')
            "
            color="white"
          >
            <v-icon>{{
              popupType == "upload" ? "mdi-upload" : "mdi-update"
            }}</v-icon>
            {{ popupType == "upload" ? "Upload" : "Update" }}
          </v-btn>
          <v-btn
            text
            @click="$emit('closePopupEmit')"
            color="white"
            style="background: indianred"
          >
            <v-icon>mdi-close</v-icon>
            Cancel
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
  props: ["showSuccessPopup", "popupType"],
  watch: {
    showSuccessPopup(newVal) {
      this.toggle = newVal;
    },
  },
};
</script>

<style>
.v-toolbar__content {
  justify-content: center !important;
}
</style>
