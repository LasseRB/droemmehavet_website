<script setup lang="ts">
import AppStoreButton from "~/components/forside/AppStoreButton.vue";
import DroemmehavetLogo from "~/components/forside/DroemmehavetLogo.vue";
</script>

<template>
  <footer class="">
    <div class="icons">
      <div class="droemmehavetlogo-icon">
        <DroemmehavetLogo />
        <AppStoreButton :should-glow="true"/>
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
      <div class="detalje-container">
        <div class="detalje">
          <NuxtLink to="/sider/privatlivspolitik">Privatlivspolitik</NuxtLink> /
          <NuxtLink to="/sider/privacy-policy">Privacy Policy</NuxtLink>
        </div>
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
    
    .sign-up {
      position: relative;
      max-width: 500px;
    }
    .droemmehavetlogo-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      padding: 16px 24px;
      width: fit-content;
      border-radius: 20px;

      .droemmehavetLogo {
        position: relative;
        max-width: 100px;
        transform: unset;
        padding-bottom: 25px;
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

    a {
      text-decoration: underline;
    }
  }
}

</style>
