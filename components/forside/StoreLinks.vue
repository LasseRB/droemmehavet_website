<script setup lang="ts">

import AppStoreButton from "~/components/forside/AppStoreButton.vue";
</script>

<template>
<div class="storelinks mockup">
  <p>Snart tilgængelig på iOS</p>
  <div class="appstorebtn">
    <AppStoreButton />
  </div>
</div>
</template>

<style scoped>
.storelinks {
  height: 150px;
  margin: 0 auto;
  position: relative;
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