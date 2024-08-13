<script setup lang="ts">
import DroemmehavetLogo from "~/components/forside/DroemmehavetLogo.vue";

</script>

<template>
  <header class="">
    <NuxtLink to="/">
      <DroemmehavetLogo class="header-logo" />
    </NuxtLink>
    <div class="header-links">
      <NuxtLink to="/blog">Nyheder</NuxtLink>
    </div>
  </header>
</template>

<style scoped>
header {
  position: relative;
  height: 80px;
  box-sizing: border-box;

  .header-logo {
    position: absolute;
    top: 50%;
    width: 50px;
    height: auto;
    left: 50px;
    background-color: #008aaf;
    border-radius: 20px;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }

  .header-links {
    position: absolute;
    top: 50%;
    right: 50px;
    transform: translate(-50%, -50%);
    font-size: larger;
  }
}
</style>