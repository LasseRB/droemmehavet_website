<template>
  <div class="showcase">
    <div class="iphone-container parallax">
      <img class="iphone" src="../../assets/iPhone%20_15_pro.png"/>
    </div>
    <div class="appstore-container parallax">
      <store-links />
    </div>
  </div>
</template>
<script setup lang="ts">
import StoreLinks from "~/components/forside/StoreLinks.vue";


</script>
<style>
.showcase {
  position: relative;
  background-color: var(--main-bg-hvid);
  display: flex;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;

  .iphone-container {
    display: flex;
    z-index: 2;
    width: 40%;
    --animation-speed: -1;
    z-index: 2;

    img {
      position: absolute;
      width: 200px;
      left: 15%;
      top: -100%;
    }
  }

  .appstore-container {
   position: relative;
   width: 50%;
    --animation-speed: .3;

  }
}
</style>