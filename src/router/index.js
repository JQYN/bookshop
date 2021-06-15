import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Market from "../views/Market.vue";

const routes = [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/add-book",
    name: "addBook",
    component: () => import("../views/AddBook.vue"),
  },
  {
    path: "/market",
    name: "market",
    component: Market,
  },
  {
    path: "/user/:id",
    name: "user",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
