<template>
  <Navbar />
  <router-view />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #fafafa;
  color: #111;
}
</style>
