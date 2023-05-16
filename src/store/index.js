import Vue from "vue";
import Vuex from "vuex";
import authModule from "@/store/auth";
import profileModule from "@/store/profile";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiLink: "http://localhost:3000",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: { authModule, profileModule },
});
