<template>
  <v-dialog v-model="openKeyboard" width="300px">
    <v-card style="padding: 15px 10px !important">
      <v-container>
        <h5 class="mb-7">Keyboard Shortcuts</h5>
        <v-row>
          <v-col cols="6" style="font-size: 12px" class="py-1"> Undo </v-col>
          <v-col cols="6" style="font-size: 12px" class="py-1">
            Ctrl + Z
          </v-col>
          <!--  -->
          <v-col cols="6" style="font-size: 12px" class="py-1"> Redo </v-col>
          <v-col cols="6" style="font-size: 12px" class="py-1">
            Ctrl + Y
          </v-col>
          <!--  -->
          <v-col cols="6" style="font-size: 12px" class="py-1">
            Select All
          </v-col>
          <v-col cols="6" style="font-size: 12px" class="py-1">
            Ctrl + A
          </v-col>
          <!--  -->
          <v-col cols="6" style="font-size: 12px" class="py-1">
            Move To Top
          </v-col>
          <v-col cols="6" style="font-size: 12px" class="py-1">
            Top Arrow
          </v-col>
          <!--  -->
          <v-col cols="6" style="font-size: 12px" class="py-1">
            Move To Right
          </v-col>
          <v-col cols="6" style="font-size: 12px" class="py-1">
            Right Arrow
          </v-col>
          <!--  -->
          <v-col cols="6" style="font-size: 12px" class="py-1">
            Move To Bottom
          </v-col>
          <v-col cols="6" style="font-size: 12px" class="py-1">
            Bottom Arrow
          </v-col>
          <!--  -->
          <v-col cols="6" style="font-size: 12px" class="py-1">
            Move To Left
          </v-col>
          <v-col cols="6" style="font-size: 12px" class="py-1">
            Left Arrow
          </v-col>
          <!--  -->
          <v-col cols="6" style="font-size: 12px" class="py-1"> Delete </v-col>
          <v-col cols="6" style="font-size: 12px" class="py-1">
            Delete Button</v-col
          >
          <!--  -->
          <v-col cols="6" style="font-size: 12px" class="py-1">
            Zoom (In, Out)
          </v-col>
          <v-col cols="6" style="font-size: 12px" class="py-1">
            Mouse Wheel
          </v-col>
          <!--  -->
          <v-col cols="6" style="font-size: 12px" class="py-1"> Copy </v-col>
          <v-col cols="6" style="font-size: 12px" class="py-1">
            Ctrl + C
          </v-col>
          <!--  -->
          <v-col cols="6" style="font-size: 12px" class="py-1"> Paste </v-col>
          <v-col cols="6" style="font-size: 12px" class="py-1">
            Ctrl + V
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      openKeyboard: true,
    };
  },
  methods: {
    closePopup() {
      this.$emit("close_popup");
    },
  },
  watch: {
    openKeyboard(newVal) {
      if (!newVal) {
        this.closePopup();
      }
    },
  },
};
</script>
