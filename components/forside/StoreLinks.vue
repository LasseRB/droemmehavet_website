<script setup lang="ts">
import AppStoreButton from "~/components/forside/AppStoreButton.vue";
</script>

<template>
  <div class="storelinks">
    <h1>Nu tilgængelig på iPhones og iPads</h1>
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
  align-items: center;

  a:hover {
    border: none;
  }

  .appstorebtn {
    width: 500px;
    margin: 0 auto;
    padding-top: 10px;
  }
  p {
    top: 5%;
    transform: translate(-50%, -50%);
  }
}
</style>
