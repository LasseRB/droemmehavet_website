<script setup lang="ts">
const {data} = useFetch(`https://blog.droemmehavet.dk/wp-json/wp/v2/posts/?_fields=author,id,title,link`)

</script>

<template>
  <div class="mockup">
    <h1>Drømmehavet blog</h1>
    <ul>
      <li v-for="post in data"> <a :href="`${post.link}`">{{ post.title.rendered }}</a></li>
    </ul>
  </div>
</template>

<style scoped>

</style>