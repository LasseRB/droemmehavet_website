<template>
  <div class="forside-container">
    <img id="forside_header_baggrund" src="../../assets/HeaderSection_havet.png">
    <div class="forside-logo">
      <img src="../../assets/ForsideLogo_havet.png">
      <p
    </div>
  </div>

</template>
<script setup lang="ts">
/*
* Komponent til udstilling af de feature vi har i appen.
* */
</script>
<style>
.forside-container {
  width: 100vw;
  height: fit-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
#forside_header_baggrund {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

.forside-logo {
  width: 100vw;
  margin: 80px 50%;
  transform: translateX(-50%);
  img {
    width: 30vw;
    height: auto;
  }
}

</style>