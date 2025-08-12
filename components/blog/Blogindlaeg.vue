<script setup lang="ts">
import {type BlogPost} from "~/model/model";
import Content from "~/components/blog/Content.vue" 
defineProps<{
  blogindlaeg: BlogPost
}>()

</script>

<template>
  <article>
    <div class="hero">
      <div class="text-container">
        <h1>{{ blogindlaeg?.overskrift }}</h1>
        <h2>af {{ blogindlaeg?.forfatter }}</h2>
        <h3>{{ blogindlaeg?.dato }}</h3>
      </div>
      <div class="hero-image" :class="{ broken: !blogindlaeg?.featuredMedia }">
        <img v-show="blogindlaeg?.featuredMedia" :src="blogindlaeg?.featuredMedia">
        <figcaption v-html="blogindlaeg.mediaCaption"></figcaption>
      </div>
      </div>
    <div class="broedtekst">
      <Content :text="blogindlaeg?.indhold" />

    </div>
  </article>
</template>
