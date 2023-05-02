import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

export default new Vuetify({
  iconfont: "mdi",
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        // primary: '#3C5DE7',
        primary: "#3f0e40",
        secondary: "#283D92",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        button: "#40BE72",
        // color1: '#2F4395',
        // color2: '#283D92',
        // iconColor1: '#383c40',
        // svgLogoColor: '#222a5d',
        // drawertextColor: '#000',
        // drawerBKColor: '#fff',
        color1: "#451646",
        color2: "#3f0e40",
        iconColor1: "#ffffff",
        svgLogoColor: "#ffffff",
        drawertextColor: "#fff",
        drawerBKColor: "#3f0e40",
        // dataActionBTN: '#0F5B94',
        dataActionBTN: "#3f0e40",
        // dialogActionBTN: '#283D92',
        dialogActionBTN: "#3f0e40",
        // CalanderColor: '#0f5b94',
        CalanderColor: "#702371",
        // BtnBKColor: '#ffffff',
        BtnBKColor: "#3f0e40",
      },
    },
  },
});

Vue.use(Vuetify);
