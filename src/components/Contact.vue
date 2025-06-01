<template>
  <div class="contact-page">
    <!-- Image de couverture -->
    <div class="hero">
      <img :src="heroImage" alt="Contact visuel" class="hero-image" />
    </div>

    <!-- Formulaire en scroll -->
    <section
      class="contact-section"
      v-intersect="(visible) => (formVisible = visible)"
    >
      <form
        v-if="formVisible"
        class="contact-form"
        @submit.prevent="handleSubmit"
      >
        <h2>Contact</h2>
        <textarea
          v-model="message"
          placeholder="Votre message..."
          rows="6"
        ></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const heroImage = new URL(
  "../assets/tableaux/photo_2025-06-01_19-13-12.jpg",
  import.meta.url
).href;

const message = ref("");
const formVisible = ref(false);

const handleSubmit = () => {
  alert("Message envoyé !");
  message.value = "";
};
</script>

<style scoped>
.contact-page {
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

.contact-section {
  padding: 4rem 2rem;
  background-color: white;
  display: flex;
  justify-content: center;
}

.contact-form {
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: white;
  padding: 2rem;
  color: black;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  opacity: 1; /* temporairement pour forcer l'affichage */
  transform: translateY(0);
}

.contact-form textarea,
.contact-form button {
  font-size: 1rem;
  padding: 1rem;
  border-radius: 4px;
}

.contact-form button {
  background-color: black;
  color: black;
  border: none;
  cursor: pointer;
}

.contact-form button:hover {
  background-color: #333;
}

[v-cloak] .contact-form {
  display: none;
}

.contact-form:enter-active,
.contact-form:leave-active {
  transition: all 0.6s ease;
}

.contact-form.enter-from {
  opacity: 0;
  transform: translateY(40px);
}

.contact-form.enter-to {
  opacity: 1;
  transform: translateY(0);
}

.contact-form[style*="display: none"] {
  display: none !important;
}
</style>
