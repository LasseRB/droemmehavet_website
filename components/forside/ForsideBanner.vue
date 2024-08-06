<template>
  <div class="forside-container mockup">
    <img id="forside_header_baggrund" src="../../assets/HeaderSection_havet.png">
    <div class="forside-logo">
      <DroemmehavetLogo/>
      <p>Velkommen til et lydunivers for børn!</p>
    </div>
  </div>

</template>
<script setup lang="ts">
/*
* Komponent til udstilling af de feature vi har i appen.
* */
import DroemmehavetLogo from "~/components/forside/DroemmehavetLogo.vue";
</script>
<style>
.forside-container {
  position: relative;
  width: 100%;
  height: 500px;
  align-items: center;
  overflow: hidden;
  img {
    max-width: inherit;
    max-height: inherit;
    height: inherit;
    width: inherit;
    object-fit: cover;

  }
}


.forside-logo {
  position: absolute;
  left: 50%;
  top: 50%;
  img {
    width: 200px;
    height: auto;

  }
}

</style>