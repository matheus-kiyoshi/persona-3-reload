<!-- WaterWaves.vue -->
<template>
  <div ref='hide' class="hide"></div>
  <div class="water-container" ref="waterContainer">
    <div class="wave" :class="{ 'wave-down': !isWaveAnimation, 'wave-animation': isWaveAnimation }" id="w1" :style="{ '--animation-duration': animationDuration}">
    </div>
    <div class="wave" :class="{ 'wave-down': !isWaveAnimation, 'wave-animation': isWaveAnimation }" id="w2" :style="{ '--animation-duration': animationDuration}">
    </div>
    <div class="wave" :class="{ 'wave-down': !isWaveAnimation, 'wave-animation': isWaveAnimation }" id="w3" :style="{ '--animation-duration': animationDuration}">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const animationDuration = ref('4s');
const waterContainer = ref<HTMLElement>();
const isWaveAnimation = ref(true);
const hide = ref<HTMLElement>();

onMounted(() => {
  setTimeout(() => {
    hide.value!.style.opacity = '0';
    isWaveAnimation.value = false
    setTimeout(() => {
      isWaveAnimation.value = !isWaveAnimation.value;
    }, 2000);
  }, 1000);
});
</script>

<style scoped>
.hide {
  background: linear-gradient(90deg, rgb(8, 198, 223), rgb(0, 183, 255));
  z-index: 100;
  position: fixed;
  opacity: 100;
  width: 100%;
  height: 100vh; 
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.water-container {
  position: fixed;
  width: 100%;
  height: 100vh; 
  overflow: hidden;
}

.wave {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#w1 {
  transform: translateY(100%);
  background: linear-gradient(90deg, rgb(8, 198, 223), rgb(0, 183, 255));
  --mask:
    radial-gradient(131.93px at 50% 177.00px,#000 99%,#0000 101%) calc(50% - 118px) 0/236px 100%,
    radial-gradient(131.93px at 50% -118px,#0000 99%,#000 101%) 50% 59px/236px 100% repeat-x;
  -webkit-mask: var(--mask);
          mask: var(--mask);
}

#w2 {
  background: linear-gradient(90deg, rgba(0, 255, 200, 0.644), rgba(0, 102, 255, 0.74));
  --mask:
    radial-gradient(324.23px at 50% 435.00px,#000 99%,#0000 101%) calc(50% - 290px) 0/580px 100%,
    radial-gradient(324.23px at 50% -290px,#0000 99%,#000 101%) 50% 145px/580px 100% repeat-x;
  -webkit-mask: var(--mask);
          mask: var(--mask);
}

#w3 {
  background: linear-gradient(180deg, rgba(0, 238, 255, 0.7), rgba(0, 119, 255, 0.801));
  --mask:
    radial-gradient(447.21px at 50% 600.00px,#000 99%,#0000 101%) calc(50% - 400px) 0/800px 100%,
    radial-gradient(447.21px at 50% -400px,#0000 99%,#000 101%) 50% 200px/800px 100% repeat-x;
  -webkit-mask: var(--mask);
          mask: var(--mask);
}

.wave-animation {
  animation: waveAnimation var(--animation-duration) infinite linear;
}

.wave-down {
  animation: waveDown 2s ease-in;
}

@keyframes waveAnimation {
  0% {
    transform: translateY(70%);
  }
  50% {
    transform: translateY(65%); 
  }
  100% {
    transform: translateY(70%);
  }
}

@keyframes waveDown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(70%); 
  }
}
</style>
