<template>
  <div class="delete-alert">
    <v-dialog
      transition="dialog-top-transition"
      max-width="550"
      v-model="toggle"
      persistent
    >
      <v-card style="padding: 20px !important">
        <v-card-text class="pb-0">
          <div
            class="alert_icon"
            style="text-align: center; margin-bottom: 20px"
          >
            <v-icon
              style="
                font-size: 53px;
                color: #e89e47;
                padding: 10px;
                border-radius: 50%;
                border: 1px solid #e89e47;
              "
              >mdi-alert</v-icon
            >
          </div>
          <div class="text-h5 pa-6 text-center" style="font-size: 20px">
            Are you sure you want to delete this diagram?
          </div>
        </v-card-text>
        <v-card-actions
          class="justify-center"
          style="justify-content: center; gap: 10px"
        >
          <v-btn
            text
            color="white"
            style="background: #0d53a9; color: white"
            @click="$emit('confirmDelete')"
          >
            Delete
          </v-btn>
          <v-btn
            text
            color="white"
            style="background: indianred; color: white"
            @click="$emit('cancel')"
          >
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
  props: ["deleteAlert"],
  watch: {
    deleteAlert(newVal) {
      this.toggle = newVal;
    },
  },
};
</script>
