<script setup lang="ts">
import DroemmehavetLogo from "~/components/forside/DroemmehavetLogo.vue";

</script>

<template>
  <header class="">
    <NuxtLink to="/">
      <div class="header-logo-container">
          <DroemmehavetLogo class="header-logo" :silhouette="true"/>
          <img class="droemmehavet-tekst" src="../assets/droemmehavet-type.png" alt="Drømmehavet" />
      </div>
    </NuxtLink>
    <div class="header-links">
      <NuxtLink to="/blog">Blog</NuxtLink>
    </div>
  </header>
</template>

<style>
header {
  position: fixed;
  top: 0;
  height: 80px;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--main-bg-hvid);
  z-index: 100;

  .header-logo-container {
    position: absolute;
    left: 0;
    padding: 0 0 0 50px;
    margin: 0;
    display: flex;
    width: 200px;
    height: 50px;
    .header-logo {
      position: relative;
      width: auto;
      height: 50px;
      padding-top: 70px;
    }

    .droemmehavet-tekst {
      position: relative;
      padding-top: 10px;
      height: 50px;
      width: auto;
    }

  }
  .header-links {
    position: absolute;
    top: 50%;
    right: 50px;
    transform: translate(-50%, -50%);
    font-size: larger;
  }
}

@media only screen and (max-width: 600px) {
  header {
    height: 120px;

    .header-logo-container {
      position: relative;
      margin: 0 auto;
      padding: 0;
    }
    .header-links {
      left: 50%;
      bottom: 10px;

      top: unset;
      right: unset;
    }
  }
}
</style>