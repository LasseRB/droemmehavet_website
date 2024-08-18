<template>
  <img v-if="silhouette" class="droemmehavetLogo" src="../../assets/header_logo.png">
  <img v-else class="droemmehavetLogo" src="../../assets/ForsideLogo_havet.png">
</template>
<script setup lang="ts">
  defineProps ({
    silhouette: Boolean
  })
</script>

<style>
 .droemmehavetLogo {
   max-width: 300px;
   transform: translate(-50%, -50%);
 }
</style>