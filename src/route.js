import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import List from "./components/List.vue";
import Subscription from "./components/Subscription.vue";

Vue.use(VueRouter);

export default new VueRouter({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: App,
      redirect: "/home",
      meta: {},
      children: []
    },
    {
      path: "/home",
      name: "list",
      component: List,
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
