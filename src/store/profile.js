import axios from "axios";
export default {
  state: {
    updateMsg: "",
    updateErrs: "",
    diagrams: "",
    editDiagram: "",
  },
  mutations: {
    catchUpdateErrs(state, errs) {
      state.updateErrs = errs;
    },
    updateSuccess(state, msg) {
      state.updateMsg = msg;
    },
    getDiagrams(state, diagrams) {
      state.diagrams = diagrams;
    },
    getSingleDiagram(state, payload) {
      state.editDiagram = payload;
    },
  },
  actions: {
    async doUpdateProfile(ctx, payload) {
      ctx.commit("catchUpdateErrs", "");
      ctx.commit("updateSuccess", "");

      await axios
        .post(`${ctx.rootState.apiLink}/auth/profile/update`, payload)
        .then((res) => {
          ctx.commit("updateSuccess", res.data.message);
        })
        .catch((err) => {
          ctx.commit("catchUpdateErrs", err.response.data);
        });
    },
    async doGetDiagrams(ctx, payload) {
      ctx.commit("getDiagrams", "");
      await axios
        .get(
          `${ctx.rootState.apiLink}/diagrams/get-all/${payload.uId}/${payload.page}`
        )
        .then((res) => {
          ctx.commit("getDiagrams", res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
          ctx.commit("getDiagrams", "");
        });
    },
    async doGetSingleDiagram(ctx, diagramId) {
      ctx.commit("getSingleDiagram", "");
      await axios
        .get(`${ctx.rootState.apiLink}/diagrams/get-one/${diagramId}`)
        .then((res) => {
          ctx.commit("getSingleDiagram", res.data);
        })
        .catch((err) => console.log(err.response.data));
    },
    async doUpdateDiagram(ctx, payload) {
      const reqBody = {
        svg: payload.svg,
        diagram: payload.diagram,
      };
      await axios
        .post(
          `${ctx.rootState.apiLink}/diagrams/update-one/${payload.diagramId}`,
          reqBody
        )
        .catch((err) => console.log(err.response.data));
    },
    async doDeleteDiagram(ctx, diagramId) {
      await axios
        .delete(`${ctx.rootState.apiLink}/diagrams/delete-diagram/${diagramId}`)
        .catch((err) => console.log(err.response.data));
    },
  },
};
