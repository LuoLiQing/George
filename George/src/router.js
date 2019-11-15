import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
// import Home3 from "./components/shopping/home.vue";
// import mine from "./components/shopping/mine.vue";
import address from "./components/shopping/address.vue";
import setaddress from "./components/shopping/setaddress.vue";
import tabbar from "./components/shopping/tabbar.vue";
// import groupBuy from "./components/shopping/groupBuy.vue";
// import classification from "./components/shopping/classification.vue";
import product from "./components/shopping/product.vue";
import cs from "./components/shopping/cs.vue";
const login = () => import("./components/shopping/login.vue");
const Home3 = () => import("./components/shopping/home.vue");
const mine = () => import("./components/shopping/mine.vue");
const groupBuy = () => import("./components/shopping/groupBuy.vue");
const classification = () => import("./components/shopping/classification.vue");
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: login },
    // { path: "/home", component: Home3 },
    // { path: "/mine", component: mine },
    { path: "/address", component: address },
    { path: "/setaddress/:id", component: setaddress, props: true },
    // { path: "/groupBuy", component: groupBuy },
    // { path: "/classification", component: classification },
    { path: "/product/:pid", component: product, props: true },
    {
      path: "/tabbar",
      component: tabbar,
      children: [
        { path: "/home", component: Home3 },
        { path: "/mine", component: mine },
        { path: "/groupBuy", component: groupBuy },
        { path: "/classification", component: classification }
      ]
    },
    { path: "/cs", component: cs }
  ],
  mode: "history"
});
