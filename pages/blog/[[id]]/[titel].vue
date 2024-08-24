<script setup lang="ts">
import { useWordpress } from "~/composables/useWordpress";
import {type BlogPost} from "~/model/model";
import BlogIndlaeg from "~/components/blog/Blogindlaeg.vue";

const { id } = useRoute().params
const { posts } = await useWordpress()

const data: BlogPost = posts.value.find((indlaeg: BlogPost) => indlaeg.id == id)

useHead({
  title: `Drømmehavets: ${data.overskrift}`
})

</script>

<template>
  <div class="blog">
    <BlogIndlaeg :blogindlaeg="data" />
  </div>
</template>

<style>
.blog {
  margin-bottom: 30px;
}
</style>