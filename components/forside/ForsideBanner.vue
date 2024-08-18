<template>
  <div class="forside-container parallax">
    <img id="forside_header_gradient" src="../../assets/HeaderSection_gradient.png">
    <img class="havetbg parallax" id="forside_header_baggrund" src="../../assets/HeaderSection_havet.png">
    <div class="forside-logo parallax">
      <DroemmehavetLogo :silhouette="false"/>
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
  z-index: 2;
  img{
        max-width: inherit;
        max-height: inherit;
        height: inherit;
        width: inherit;
        object-fit: cover;
    }
}

#forside_header_gradient {
  position: absolute;
  bottom: 0;
  height: 50%;
  z-index: 3;
}

.forside-logo {
  position: absolute;
  left: 50%;
  top: 50%;
  --animation-speed: -2;
  img {
    width: 200px;
    height: auto;

  }
;
}

</style>