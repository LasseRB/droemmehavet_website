<template>
  <h4>blog</h4>
  <div v-for="blogIndlaeg in blogs.values()">
    <blogindlaeg
      :overskrift="blogIndlaeg?.overskrift"
      :indholdsTekst="blogIndlaeg?.indholdsTekst"
      :billedeRef="blogIndlaeg?.blogBilledeRef"
      :blogVideoRef="blogIndlaeg?.blogVideoRef"
      :linkId="blogIndlaeg?.linkId"
      :dato="blogIndlaeg?.dato"
    />
  </div>
</template>
<script setup lang="ts">
/*
* Komponent til udstilling af de blog.
* */

import { onMounted, ref } from 'vue'
import type { blogIndlaeg } from '@/Model/model'
import { blogDb } from '@/components/firebase/FirebaseInit.js'
import Blogindlaeg from '@/components/forside/Blogindlaeg.vue'

const blogs = ref(Array<blogIndlaeg>())
onMounted(() => {
  blogDb.forEach((f: any) => {
      const indlaeg = {
        overskrift: f.data().overskrift,
        indholdsTekst: f.data().indholdsTekst,
        blogBilledeRef: f.data().billedeRef,
        blogVideoRef: f.data().videoRef,
        linkId: f.data().linkId,
        dato: f.data().dato
      }
      blogs.value.push(indlaeg)
    }
  )
})

</script>
<style>
.blogs {
 display: flex;
}
</style>