<template>
  <nav class="navbar">
    <h1 class="logo">Islam Doorov</h1>
    <button class="menu-button" @click="menuOpen = true">☰</button>

    <!-- Overlay plein écran -->
    <transition name="overlay">
      <div v-if="menuOpen" class="menu-overlay">
        <button class="close-button" @click="menuOpen = false">✕</button>
        <ul class="menu-links">
          <li>
            <router-link @click="menuOpen = false" to="/">Accueil</router-link>
          </li>
          <li>
            <router-link @click="menuOpen = false" to="/projects"
              >Œuvres</router-link
            >
          </li>
          <li>
            <router-link @click="menuOpen = false" to="/about"
              >À propos</router-link
            >
          </li>
          <li>
            <router-link @click="menuOpen = false" to="/contact"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const menuOpen = ref(false);

import { useRoute } from "vue-router";
const route = useRoute();
const isProjects = route.path === "/projects";
</script>

<style scoped>
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
}

/* Logo */
.logo {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

/* Bouton ☰ */
.menu-button {
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
}

/* Menu Overlay */
/* Overlay plein écran */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Bouton ✕ */
.close-button {
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  font-size: 2.5rem;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
}

/* Menu centré */
.menu-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 2rem;
  padding: 0;
}

.menu-links a {
  font-size: 2rem;
  color: white;
  text-decoration: none;
}

.menu-links a:hover {
  text-decoration: underline;
}

/* Transition douce de montée */
.overlay-enter-active,
.overlay-leave-active {
  transition: all 0.3s ease;
}

.overlay-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.overlay-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.overlay-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.overlay-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
