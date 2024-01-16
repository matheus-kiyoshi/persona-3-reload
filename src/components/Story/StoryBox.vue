<template>
  <div ref="box" :class="`d-flex flex-column storybox ${props.reversed ? 'flex-md-row-reverse' : 'flex-md-row'}`" style="gap: 36px;">
    <div class="storybox">
      <v-container style="display: flex; flex-direction: column; gap: 16px;">
        <h2 :class="`storytitle ${boxIsVisible ? 'animate__animated animate__fadeInUp animate__delay' : ''}`">
          <slot name="image"></slot>
        </h2>
        <div ref="img" :class="`storyimg d-md-none ${boxIsVisible ? 'animate__animated animate__fadeInUp animate__delay' : ''}`"></div>
        <div :class="`storyline ${boxIsVisible ? 'animate__animated animate__fadeInUp animate__delay' : ''}`">
          <slot name="text"></slot>
        </div>
      </v-container>
    </div>
    <div ref="img2" :class="`storyimg d-none d-md-block ${boxIsVisible ? 'animate__animated animate__fadeInUp animate__delay' : ''}`"></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['reversed', 'url'])
import { ref } from 'vue';
import { useElementVisibility } from '@vueuse/core';
import { onMounted } from 'vue';

const box = ref(null)
const boxIsVisible = useElementVisibility(box)
const img = ref<HTMLElement>()
const img2 = ref<HTMLElement>()

onMounted(() => {
  if (props.url) {
    if (img.value) {
      img.value.style.backgroundImage = `url(${props.url})`
    }
    if (img2.value) {
      img2.value.style.backgroundImage = `url(${props.url})`
    }
  }
})

</script>

<style scoped>
.animate__delay {
    animation-delay: .5s;
  }

  .storybox {
    width: 100vw;
    margin-left: auto;
    gap: 8px;
    min-height: 400px;
  }

  .storyimg {
    width: 100%;
    min-height: 200px;
    background-size: auto 100%;
    opacity: 1;
    -webkit-transition: opacity 0.5s ease-in-out;
    transition: opacity 0.5s ease-in-out; 
  }

  .storyline {
    margin-top: 16px;
    font-size: .9rem;
    font-weight: 300;
    line-height: 1.5;
    color: #1d384a;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
</style>