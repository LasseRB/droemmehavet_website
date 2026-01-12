<template>
  <div class="billedebanner parallax">
    <div class="billede-banner">
      <img class="parallax" src="../../assets/monsteroen.png" />
    </div>
  </div>
</template>
<script setup lang="ts">
/*
 * Komponent til udstilling af de feature vi har i appen.
 * */
</script>
<style scoped>
.billedebanner {
  position: relative;
  width: 100vw;
  height: 300px;
  align-items: center;
  color: blueviolet;
  --animation-speed: 1;
  transform: scale(1);

  overflow: hidden;
  margin-left: calc(-50vw + 50%);

  .billede-banner {
    position: relative;
    width: 100%;
    height: 100%;
  }

  img {
    position: absolute;
    bottom: -300px;
    min-width: 100%;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

@media only screen and (max-width: 768px) {
  .billedebanner {
    display: none;
  }
}
</style>
