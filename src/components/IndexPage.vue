<template>
  <div class="loading" :style="{ opacity: opacityChange ? 0 : 100 }">
    <Loading v-if="!home" />
  </div>
  <div v-if="home" class="wrap">
    <Home />
    <Trailer />
    <Story />
    <div class="">
      <Characters />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Loading from '@/components/Loading.vue'
  import { ref } from 'vue';

  const home = ref(false);
  const opacityChange = ref(false);

  setTimeout(() => {
    opacityChange.value = true
  }, 4500);

  setTimeout(() => {
    home.value = true
  }, 5000);
</script>

<style>
.wrap {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.loading {
  opacity: 100;
  transition: all 0.5s ease-in-out;
}
</style>
