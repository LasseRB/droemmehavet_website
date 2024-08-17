<script setup lang="ts">
import ForsideHeader from '~/components/forside/ForsideBanner.vue'
import About from "~/components/forside/About.vue";
import BilledeBanner from "~/components/forside/BilledeBanner.vue";
import AppShowcase from "~/components/forside/AppShowcase.vue";
</script>

<template>
  <div class="forside_indeling">
      <forside-header />
     <div class="forside-body">
       <AppShowcase/>
       <about/>
       <billede-banner />
     </div>
<!--      <app-features />-->
<!--      <team />-->

  </div>
</template>

<style>
.forside-body {
  background-color: var(--main-bg-hvid);

}
</style>