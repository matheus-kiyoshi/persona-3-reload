<template>
  <v-app>
    <v-main>
      <IndexPage />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
</script>

<style>
html::-webkit-scrollbar {
  width: 10px;
}

html {
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-gutter: stable;
  scrollbar-color: rgb(9, 111, 194) transparent;
}

html::-webkit-scrollbar-track {
  background: rgb(3, 98, 175);
}

html::-webkit-scrollbar-thumb {
  background: rgb(9, 111, 194);
}

html::-webkit-scrollbar-thumb:hover {
  background: rgb(9, 111, 194);
}
</style>