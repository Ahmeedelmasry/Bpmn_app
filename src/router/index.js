import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/create-bpmn",
    name: "create_bpmn",
    component: () => import("../views/CreateBpmn.vue"),
    meta: {
      title: "Create Bpmn",
    },
  },
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      title: "Home Page",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutPage.vue"),
    meta: {
      title: "About Us",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginPage.vue"),
    meta: {
      title: "Login",
    },
  },
  {
    path: "/sign-up",
    name: "signup",
    component: () => import("../views/SignUp.vue"),
    meta: {
      title: "Sign Up",
    },
  },
  {
    path: "/forget-password",
    name: "forgetPass",
    component: () => import("../views/ForgetPass.vue"),
    meta: {
      title: "Forget Password",
    },
  },
  {
    path: "/pricing",
    name: "pricing",
    component: () => import("../views/ThePricing.vue"),
    meta: {
      title: "Pricing",
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
