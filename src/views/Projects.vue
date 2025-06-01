<template>
  <div class="projects-page">
    <div class="hero">
      <img :src="heroImage" alt="Œuvre principale" class="hero-image" />
    </div>
    <section class="gallery">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="gallery-item"
        v-intersect="onIntersect(index)"
        :class="{ visible: visible[index] }"
      >
        <img :src="image.src" :alt="image.alt" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const heroImage = new URL(
  "../assets/tableaux/photo_2025-06-01_19-36-41.jpg",
  import.meta.url
).href;

const images = [
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-13-12.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-13-12.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-36-33.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-36-33.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-34-08.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-34-08.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-36-39.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-36-39.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-34-11.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-34-11.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-36-41.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-36-41.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-34-15.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-34-15.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-36-45.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-36-45.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-34-18.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-34-18.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-36-48.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-36-48.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-34-21.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-34-21.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-36-51.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-36-51.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-34-24.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-34-24.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-36-55.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-36-55.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-34-27.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-34-27.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-36-58.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-36-58.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-34-31.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-34-31.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-37-01.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-37-01.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-34-37.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-34-37.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-37-04.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-37-04.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-34-41.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-34-41.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-37-07.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-37-07.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-34-46.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-34-46.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-37-09.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-37-09.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-34-50.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-34-50.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-37-13.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-37-13.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-34-55.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-34-55.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-37-16.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-37-16.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-34-58.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-34-58.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-37-29.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-37-29.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-35-02.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-35-02.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-37-32.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-37-32.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-35-06.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-35-06.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-37-34.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-37-34.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-35-09.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-35-09.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-37-38.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-37-38.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-35-15.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-35-15.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-37-41.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-37-41.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-35-18.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-35-18.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-37-44.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-37-44.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-35-23.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-35-23.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-37-47.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-37-47.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-35-27.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-35-27.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-37-50.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-37-50.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-35-32.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-35-32.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-37-53.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-37-53.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-35-37.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-35-37.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-37-56.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-37-56.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-35-40.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-35-40.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-38-00.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-38-00.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-35-44.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-35-44.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-38-04.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-38-04.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-35-48.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-35-48.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-38-07.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-38-07.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-35-52.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-35-52.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-38-10.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-38-10.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-35-55.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-35-55.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-38-13.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-38-13.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-35-59.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-35-59.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-38-15.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-38-15.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-36-02.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-36-02.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-38-18.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-38-18.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-36-05.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-36-05.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-38-21.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-38-21.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-36-07.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-36-07.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-38-24.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-38-24.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-36-09.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-36-09.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-38-32.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-38-32.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-36-12.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-36-12.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-38-39.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-38-39.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-36-15.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-36-15.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-38-44.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-38-44.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-36-18.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-36-18.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-38-46.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-38-46.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-36-21.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-36-21.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-39-03.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-39-03.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-36-26.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-36-26.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-39-07.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-39-07.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-36-30.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-36-30.jpg",
  },
  {
    src: new URL(
      "../assets/tableaux/photo_2025-06-01_19-39-12.jpg",
      import.meta.url
    ).href,
    alt: "photo_2025-06-01_19-39-12.jpg",
  },
];

const visible = ref(images.map(() => false));

function onIntersect(index) {
  return (isVisible) => {
    if (isVisible) visible.value[index] = true;
  };
}
</script>

<style scoped>
.projects-page {
  position: relative;
  overflow-x: hidden;
}

.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.gallery {
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  background-color: white;
}

.gallery-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.gallery-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.gallery-item img {
  width: 100%;
  display: block;
  border-radius: 4px;
  object-fit: cover;
}
</style>
