<script setup lang="ts">

import AppStoreButton from "~/components/forside/AppStoreButton.vue";
</script>

<template>
<div class="storelinks">
  <p>Snart tilgængelig på iOS</p>
  <div class="appstorebtn">
    <AppStoreButton />
  </div>
</div>
</template>

<style scoped>
.storelinks {
  position: relative;
  height: 150px;
  width: 300px;
  margin: 0 auto;
  padding: 0;
  color: black;


  p, .appstorebtn {
    position: absolute;
    left: 50%;
  }
  p {
    top: 5%;
    transform: translate(-50%, -50%);
  }
  .appstorebtn {
    top: 50%;
  }
}
</style>