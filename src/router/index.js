import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import AboutPage from "../views/AboutPage.vue";
import ContactPage from "../views/ContactPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
  { path: "/about", component: AboutPage },
  { path: "/contact", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
