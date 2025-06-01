import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// 👁️‍🗨️ Directive pour observer l'entrée dans le viewport
app.directive("intersect", {
  mounted(el, binding) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        binding.value(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
  },
});

app.use(router).mount("#app");
