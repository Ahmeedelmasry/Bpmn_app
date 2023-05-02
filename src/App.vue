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
</style>
