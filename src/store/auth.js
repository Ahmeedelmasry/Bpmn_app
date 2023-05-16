import Axios from "axios";

export default {
  state: {
    userData: "",
    signupErrs: "",
    loginErrs: "",
    forgetPassErr: "",
    forgetPassMsg: "",
  },
  mutations: {
    setUserData(state, data) {
      state.userData = data;
    },
    catchSignupErrs(state, signupErrs) {
      state.signupErrs = signupErrs;
    },
    catchSigninErrs(state, signinErrs) {
      state.loginErrs = signinErrs;
    },
    catchForgetPassErrs(state, err) {
      state.forgetPassErr = err;
    },
  },
  actions: {
    // Signup Action
    async doSignup(ctx, userData) {
      ctx.commit("catchSignupErrs", "");
      await Axios.post(`${ctx.rootState.apiLink}/auth/signup`, userData)
        .then((res) => {
          ctx.commit("setUserData", res.data);
          localStorage.setItem("uid", res.data._id);
        })
        .catch((err) => {
          ctx.commit("catchSignupErrs", err.response.data.errors);
        });
    },
    async doLogin(ctx, loggerData) {
      ctx.commit("catchSigninErrs", "");
      await Axios.post(`${ctx.rootState.apiLink}/auth/login`, loggerData)
        .then((res) => {
          localStorage.setItem("uid", res.data._id);
          ctx.commit("setUserData", res.data);
        })
        .catch((err) => {
          ctx.commit("catchSigninErrs", err.response.data.error);
        });
    },
    async dogetUserById(ctx) {
      const uId = localStorage.getItem("uid");
      await Axios.get(`${ctx.rootState.apiLink}/auth/find/${uId}`)
        .then((res) => {
          ctx.commit("setUserData", res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    async doForgetPassword(ctx, email) {
      ctx.commit("catchForgetPassErrs", "");
      await Axios.get(`${ctx.rootState.apiLink}/auth/forgetPassword/${email}`)
        .catch((err) => {
          ctx.commit("catchForgetPassErrs", err.response.data);
        });
    },
  },
};
