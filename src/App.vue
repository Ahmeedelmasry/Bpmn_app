<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  min-height: 590px;
}
#app ~ div:not(#measureElement):not(.e-tooltip-wrap) {
  position: absolute !important;
  z-index: -10000 !important;
  opacity: 0;
}
section {
  margin: -15px !important;
}

@media (max-width: 500px) {
  .v-dialog {
    .v-card {
      .text-h5 {
        font-size: 16px !important;
      }
    }
    .v-btn {
      font-size: 10px !important;
      .v-icon {
        font-size: 10px !important;
      }
    }
  }
}
</style>
