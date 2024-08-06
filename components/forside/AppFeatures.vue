<template>
  <div class="app_features mockup">
    <div v-for="feature in appFeatures.values()">
      <feature
        :overskrift="feature?.overskrift"
        :beskrivelse="feature?.beskrivelse"
        :billedeRef="feature?.billedeRef"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
/*
* Komponent til udstilling af de feature vi har i appen.
* */

import Feature from '@/components/forside/Feature.vue'
import { onMounted, ref } from 'vue'
import type { appFeature, blogIndlaeg } from '@/Model/model'

const appFeatures = ref(Array<appFeature>())

onMounted(() => {
  // featureDb.forEach((f: any) => {
  //     const appFeature = {
  //       overskrift: f.data().overskrift,
  //       beskrivelse: f.data().beskrivelse,
  //       billedeRef: f.data().billedeRef
  //     } as appFeature
  //     appFeatures.value.push(appFeature)
  //   }
  // )
})

</script>
<style>
.app_features {
  width: 800px;
  height: 600px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

</style>