import Vue from "vue";
import VueRouter from "vue-router";
import Store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      title: "Home Page",
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
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutPage.vue"),
    meta: {
      title: "About Us",
    },
  },
  {
    path: "/user",
    name: "user_dashboard",
    component: () => import("../views/user_dashboard/UserDashboard.vue"),
    meta: {
      title: "User",
    },
    children: [
      {
        path: "profile",
        name: "profile",
        component: () => import("../views/user_dashboard/EditProfile"),
        meta: {
          title: "User | Profile",
        },
      },
      {
        path: "my-diagrams",
        name: "myDiagrams",
        component: () => import("../views/user_dashboard/MyDiagrams"),
        meta: {
          title: "User | Saved Diagrams",
        },
      },
    ],
  },
  {
    path: "/create-diagram",
    name: "create_bpmn",
    component: () => import("../views/CreateBpmn.vue"),
    meta: {
      title: "Create New Diagram",
    },
  },
  {
    path: "/documentation",
    name: "docs",
    component: () => import("../views/TheDocs.vue"),
    meta: {
      title: "Create New Diagram",
    },
  },
  {
    path: "/edit-diagram/:diagramId",
    name: "editDiagram",
    component: () => import("../views/EditDiagram.vue"),
    meta: {
      title: "Edit Diagram",
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title;

  // Check If User Is Logged And No UserData
  if (localStorage.getItem("uid") && !Store.state.authModule.userData) {
    if (!Store.state.authModule.userData) {
      await Store.dispatch("dogetUserById");
    }
  }
  if (to.name == "login" || to.name == "signup" || to.name == "forgetPass") {
    if (localStorage.getItem("uid")) {
      return next({ name: "home" });
    }
  }

  //Check if user is not logged in
  if (
    to.name == "create_bpmn" ||
    to.name == "user" ||
    to.name == "profile" ||
    to.name == "EditProfile" ||
    to.name == "myDiagrams" ||
    to.name == "editDiagram"
  ) {
    if (!localStorage.getItem("uid")) {
      return next({ name: "login" });
    }
  }
  next();
});

export default router;
