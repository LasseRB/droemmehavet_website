<script setup lang="ts">

import AppStoreButton from "~/components/forside/AppStoreButton.vue";
import DroemmehavetLogo from "~/components/forside/DroemmehavetLogo.vue";
</script>

<template>
  <footer class="">
    <div class="detalje-container">
       <div class="detalje">
        <ul>
          <li>Drømmehavet ApS</li>
          <li>Jordløsevej 3a</li>
          <li>5600 Faaborg</li>
          <li>Danmark</li>
          <li>Cvr: 42068012</li>
        </ul>
      </div>
      <div class="detalje">
        <a href="mailto:hejsa@droemmehavet.dk">Kontakt os</a>
    </div>
    </div>

    <div class="icons">
      <div class="appstore-icon">
        <AppStoreButton/>
      </div>
      <div class="droemmehavetlogo-icon">
        <DroemmehavetLogo/>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    position: relative;
    height: 550px;
    background-color: var(--main-bg-blaa);

    .icons {
      .appstore-icon {
        position: absolute;
        left: 50%;
        top: 10%;
      }
      .droemmehavetlogo-icon {
        position: absolute;
        left: 50%;
        top: 40%;
        img {
          width: 150px;
          height: auto;
        }
      }
    }
    .detalje-container {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translate(-50%);
      color: white;
      .detalje {
        width: 150px;
      }
    }
  }
</style>