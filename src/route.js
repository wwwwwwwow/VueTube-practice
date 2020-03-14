import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Subscription from "./components/Subscription.vue";

Vue.use(VueRouter);

export default new VueRouter({
  // mode: "history",
  routes: [
    {
      path: "/home",
      name: "home",
      component: App,
      meta: {},
      children: []
    },
    {
      path: "/subscriptions",
      name: "subscription",
      component: Subscription,
      meta: {},
      children: []
    }
  ]
});
