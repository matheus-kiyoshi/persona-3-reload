<template>
  <Loading v-if="!home" />
  <div v-if="home">
    <Home />
    <Trailer />
  </div>
</template>

<script lang="ts" setup>
  import Loading from '@/components/Loading.vue'
  import { ref } from 'vue';

  const home = ref(false);

  setTimeout(() => {
    home.value = true
  }, 5000);
</script>
