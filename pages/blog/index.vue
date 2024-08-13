<script setup lang="ts">
 import {fetchAllBlogindlaeg} from "~/services/wordpress.service";
 import {useWordpress} from "~/composables/useWordpress";

 const {posts, error} = await useWordpress()
</script>

<template>
  <div class="blog mockup">
    <h1>Drømmehavet blog</h1>
    <ul>
      <li v-for="post in posts">

        <a :href="`${post.link}`"><BlogPreview :blogindlaeg="post"/></a></li>
    </ul>
  </div>
</template>

<style scoped>

</style>