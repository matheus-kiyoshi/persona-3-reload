<template>
  <Loading v-if="!home" />
  <Home v-if="home" />
</template>

<script lang="ts" setup>
  import Loading from '@/components/Loading.vue'
  import { ref } from 'vue';

  const home = ref(false);

  setTimeout(() => {
    home.value = true
  }, 5000);
</script>
