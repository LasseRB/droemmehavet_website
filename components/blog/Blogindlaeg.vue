<script setup lang="ts">
import {type BlogPost} from "~/model/model";

defineProps<{
  blogindlaeg: BlogPost
}>()

</script>

<template>
  <div>
    <div class="hero">
      <div class="text-container">
        <h1>{{ blogindlaeg?.overskrift }}</h1>
        <h2>af {{ blogindlaeg?.forfatter }}</h2>
        <h3>{{ blogindlaeg?.dato }}</h3>
      </div>
      <div class="hero_image" :class="{ broken: !blogindlaeg?.featuredMedia }">
        <img v-show="blogindlaeg?.featuredMedia" :src="blogindlaeg?.featuredMedia">
      </div>
      </div>
    <div class="broedtekst">
      <div v-html="blogindlaeg?.indhold"/>
    </div>
  </div>
</template>


<style>
.hero {
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  align-items: center;
  .text-container {
    h1 {
      font-family: "Playfair Display", serif;
      font-optical-sizing: auto;
    }

    h2 {
      font-weight: lighter;
    }

    h3 {
      color: rgba(0,0,0,.5);
    }

    width: 100%;
    height: 550px;
    padding: 50px;
    box-sizing: border-box;
  }
  .hero_image {
    &.broken {
      min-width: 30%;
    }
    img {
      width: auto;
      max-height: 450px;
    }
  }


  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 80%;
    height: 500px;
    background-color: #ffe3d6;
    z-index: -1;
  }
}
.broedtekst {
  max-width: 500px;
  margin: 0 auto;

  h1, h2 {
    font-family: "Playfair Display", serif;
  }
  img {
    max-width: 350px;
    height: auto;
  }
}

@media only screen and (max-width: 600px) {
  .hero {
    flex-direction: column-reverse;
    .text-container {
      height: 300px;
    }
    img {
      width: 100%;
      height: auto;
    }
    &:after {
      content: none;
    }
  }
}
</style>