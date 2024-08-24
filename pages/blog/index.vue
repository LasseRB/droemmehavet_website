<script setup lang="ts">
 import {useWordpress} from "~/composables/useWordpress";
 const { posts } = await useWordpress()
 useHead({
   title: 'Drømmehavets blog'
 })
</script>

<template>
  <div class="blog">
      <div class="blog-inner-grid">
          <BlogPreview  v-for="(post, index) in posts" :blogindlaeg="post" :teaser="index == 0"/>
      </div>
  </div>
</template>

<style scoped>

.blog-inner-grid {
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
}
</style>