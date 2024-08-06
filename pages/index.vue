<script setup lang="ts">
import ForsideHeader from '~/components/forside/ForsideBanner.vue'
import KickStarter from '~/components/forside/KickStarter.vue'
import AppFeatures from '~/components/forside/AppFeatures.vue'
import VideoExplainer from '~/components/forside/VideoExplainer.vue'
import Team from '~/components/forside/Team.vue'
import StoreLinks from "~/components/forside/StoreLinks.vue";
import About from "~/components/forside/About.vue";
import BilledeBanner from "~/components/forside/BilledeBanner.vue";

</script>

<template>
  <div class="forside_indeling">
      <forside-header />
     <div class="forside-body">
        <store-links />
       <about/>
       <billede-banner />
     </div>
<!--      <app-features />-->
<!--      <team />-->

  </div>
</template>
<style>

</style>