<template>
  <div class="showcase-container">
    <div class="showcase">
      <div class="iphone-container parallax">
        <img class="iphone" src="../../assets/iPhone%20_15_pro.png"/>
      </div>
      <div class="appstore-container parallax">
        <store-links />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import StoreLinks from "~/components/forside/StoreLinks.vue";


</script>
<style>
.showcase-container {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: var(--main-bg-hvid);
  z-index: 30;
  .showcase {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 500px;
    margin: 0 auto;
    justify-content: space-between;

    .iphone-container {
      display: flex;
      z-index: 2;
      width: 40%;
      --animation-speed: -1;
      z-index: 2;

      img {
        position: absolute;
        width: 200px;
        top: -100%;
      }
    }

    .appstore-container {
      position: relative;
      width: 50%;
      --animation-speed: .3;
    }
  }
}

@media only screen and (max-width: 500px) {
  .showcase-container
  {
    .showcase {
      width: 100%;
      .iphone-container {
        display: none;
      }
      .appstore-container {
        width: 100%;
        .storelinks {
          padding-top: 10px;
          width: 200px;
        }
      }

    }
  }
}
</style>