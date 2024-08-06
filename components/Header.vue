<script setup lang="ts">
import DroemmehavetLogo from "~/components/forside/DroemmehavetLogo.vue";

</script>

<template>
  <header class="mockup">
    <NuxtLink to="/"><DroemmehavetLogo class="header-logo" /></NuxtLink>/
    <NuxtLink to="/blog">Nyheder</NuxtLink>
  </header>
</template>

<style scoped>
header {
  height: 50px;

  .header-logo {
    top: 50%;
    width: 50px;
    padding: 0;
    margin: 0;
  }
}
</style>