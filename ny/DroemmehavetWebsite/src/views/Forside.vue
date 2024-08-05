<template>
  <div class="forside_indeling">
    <img alt="Illustration af appen på smartphone" id="iphoneView" src="../assets/IphoneBillede.png" />
    <div class="forside_indhold">
      <forside-header />
      <app-features />
      <video-explainer />
      <kick-starter />
      <team />
      <blog />
    </div>
  </div>
</template>
<script setup lang="ts">
import ForsideHeader from '@/components/forside/ForsideHeader.vue'
import KickStarter from '@/components/forside/KickStarter.vue'
import AppFeatures from '@/components/forside/AppFeatures.vue'
import VideoExplainer from '@/components/forside/VideoExplainer.vue'
import Team from '@/components/forside/Team.vue'
import Blog from '@/components/forside/Blog.vue'

</script>
<style>
.forside_indeling {
  display: flex;
  flex-direction: row;
}

.forside_indhold {
  z-index: 1;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;

}

#iphoneView {
  z-index: 2;
  margin-top: 18vh;
  margin-left: 10px;
  height: 800px;
}
</style>