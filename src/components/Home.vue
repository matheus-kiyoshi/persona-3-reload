<template>
  <section class="h-screen">
    <h1 class="title-logo">
      <img 
        src="@/assets/p3rlogo.svg"
        alt="Persona 3 Reload Logo"
        class="d-md-none"
      >
      <img
        src="@/assets/p3rlogopc.svg"
        alt="Persona 3 Reload Logo"
        class="d-none d-md-block"
      >
    </h1>
    <div class="movieWrapper">
      <video class="movie" :id="showFirstVideo ? '' : 'hidden'" autoplay preload="auto" muted playsinline="true" @ended="playSecondVideo">
        <source src="@/assets/p3movie1.mp4" type="video/mp4">
      </video>
      <video class="movie" :id="showFirstVideo ? 'hidden' : ''" :autoplay="!showFirstVideo" preload="auto" loop muted playsinline="true">
        <source src="@/assets/p3movie2.mp4" type="video/mp4">
      </video>
    </div>
    <div class="h-100 w-100 overlay">
      <img class="particle" src="https://p3re.jp/en/resources/img/top/fv_hologram_f34d79db45b1c4bcaa7f24e939325de1.png" alt="Particles">
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const showFirstVideo = ref(true);

const playSecondVideo = () => {
  showFirstVideo.value = false;
};
</script>

<style scoped>
  @media (min-width: 1040px) {
    .title-logo {
      position: absolute;
      width: calc(303px * 1600 / 1920);
      height: 100vh;
      left: 60vw;
      top: 40%;
      margin: 0;
    }
  }
  
  .title-logo {
    z-index: 5;
    width: 137px;
    height: 96px;
    margin-top: 20px;
    margin-left: 20px;
  }

  #hidden {
    display: none;
  }

  .movieWrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: end;
  }

  .movie {
    width: 1645px; 
    height: 925px; 
    left: -420.5px; 
    top: 0px; 
  }

  .overlay {
    position: absolute;
    top: 0;
    left: -8%;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .overlay {
      left: 0;
    }
  }

  .particle {
    position: absolute;
    z-index: 3;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: screen;
  }
</style>