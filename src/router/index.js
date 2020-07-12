import Vue from "vue";
import VueRouter from "vue-router";

const Landing = () =>
  import(/* webpackChunkName: "about" */ "../views/Landing.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
