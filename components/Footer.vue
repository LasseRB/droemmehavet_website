<script setup lang="ts">

import AppStoreButton from "~/components/forside/AppStoreButton.vue";
import DroemmehavetLogo from "~/components/forside/DroemmehavetLogo.vue";
</script>

<template>
  <footer class="">


    <div class="icons">
      <SignUp class="sign-up"/>
      <div class="appstore-icon">
<!--        <AppStoreButton/>-->
      </div>
      <div class="droemmehavetlogo-icon">
        <DroemmehavetLogo/>
      </div>
    </div>
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
  </footer>
</template>

<style scoped>
  footer {
    padding-top: 50px;
    position: relative;
    height: 550px;
    background-color: var(--main-bg-blaa);

    .icons {
      .appstore-icon {
        position: relative;
        margin: 0 auto;
        width: 50px;
      }

      .sign-up {
        position: relative;
        max-width: 500px;
      }
      .droemmehavetlogo-icon {
        position: relative;
        margin: 0 auto;
        width: 50px;
        .droemmehavetLogo {
          transform: translateX(-50%);
          position: relative;
          width: 100px;
          padding: 10px;
          img {
            width: 150px;
            height: auto;
          }
        }

      }
    }
    .detalje-container {
      position: relative;
      margin: 0 auto;
      padding: 50px 0;
      color: white;
      width: 200px;
      text-align: center;
      transform: translateX(-20px);

      a {
        text-decoration: underline;
      }
    }
  }
</style>