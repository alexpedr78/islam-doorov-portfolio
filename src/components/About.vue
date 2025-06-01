<template>
  <div class="about-page">
    <!-- Image de couverture -->
    <div class="hero">
      <img :src="heroImage" alt="Portrait ou œuvre" class="hero-image" />
    </div>

    <!-- Section bio -->
    <section
      class="about-section"
      v-intersect="(visible) => (textVisible = visible)"
    >
      <div v-if="textVisible" class="about-text">
        <h2>À propos de l’artiste</h2>
        <p>
          Islam Doorov est un artiste contemporain kirghize dont les œuvres
          explorent les liens entre mémoire, mythe et paysage. Son travail mêle
          motifs ancestraux et langages picturaux modernes dans une recherche
          plastique sensible.
        </p>
        <p>
          Né dans les montagnes d’Asie centrale, son regard artistique porte à
          la fois l’héritage nomade et une réflexion critique sur le monde
          contemporain.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const heroImage = new URL(
  "../assets/tableaux/photo_2025-06-01_19-36-33.jpg",
  import.meta.url
).href;

const textVisible = ref(false);
</script>

<style scoped>
.about-page {
  position: relative;
  overflow-x: hidden;
}

.hero {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
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

.about-section {
  background-color: white;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
}

.about-text {
  max-width: 700px;
  color: black;
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
</style>
