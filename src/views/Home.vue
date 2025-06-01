<template>
  <div class="home">
    <div :style="backgroundStyle" class="background-image"></div>
    <div class="content">
      <h1>Bienvenue</h1>
    </div>
  </div>
</template>

<script setup>
import bgImage from "../assets/poisson.jpg";

const backgroundStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
</script>

<style scoped>
.home {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  text-shadow: 0 1px 4px black;
}
</style>
