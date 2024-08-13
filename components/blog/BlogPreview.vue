<script setup lang="ts">
import {useWordpress} from "~/composables/useWordpress";
import type {BlogPost} from "~/model/model";

const props = defineProps<{
  blogindlaeg: BlogPost
}>()

// const uddrag = props.blogindlaeg?.indhold.substring(0, 50)
</script>

<template>
<div class="blogPreview">
  <div class="hero_image" v-if="blogindlaeg.featuredMedia != null">
    <img :src="blogindlaeg.featuredMedia" alt=""/>
  </div>
  <div class="text-container">
    <p>{{ blogindlaeg.dato }}</p>
    <h4>{{ blogindlaeg.overskrift }}</h4>
<!--    <div v-html="uddrag"></div>-->
  </div>
</div>
</template>

<style scoped>
  .blogPreview {
    width: 350px;
    height: 350px;
    overflow: hidden;
    background-color: white;
    margin: 10px;
    .hero_image img {
      width: 50%;
    }
  }
</style>