<template>
  <div class="billedebanner parallax">
    <div class="billede-banner">
      <img class="parallax" src="../../assets/monsteroen.png"/>
    </div>
  </div>

</template>
<script setup lang="ts">
/*
* Komponent til udstilling af de feature vi har i appen.
* */
</script>
<style>
.billedebanner {
  position: relative;
  width: 100%;
  height: 300px;
  align-items: center;
  color: blueviolet;
  --animation-speed: 1;
  transform: scale(1.2);
  z-index: 0;
  img {
    position: absolute;
    bottom: -300px;
    min-width: 1500px;
    width: 100%;
  }
}

</style>