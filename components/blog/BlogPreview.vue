<script setup lang="ts">
import type {BlogPost} from "~/model/model";

const props = defineProps<{
  blogindlaeg: BlogPost,
  teaser: boolean
}>()
</script>

<template>

    <NuxtLink :to="blogindlaeg.link" class="blogPreview" :class="{teaser}">
      <div class="text-container" v-if="teaser" v-html="blogindlaeg.uddrag"></div>
      <div class="hero_image" v-if="blogindlaeg.featuredMedia != null">
          <img :src="blogindlaeg.featuredMedia" alt=""/>

      </div>
      <div class="text-container">
        <span class="dato">{{ blogindlaeg.dato }}</span>
        <h2>{{ blogindlaeg.overskrift }}</h2>
        <div v-if="!teaser" v-html="blogindlaeg.uddrag"></div>

      </div>


    </NuxtLink>

</template>

<style scoped>
  .blogPreview {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 300px;
    overflow: hidden;
    background-color: var(--main-bg-hvid);
    flex-grow: 1;
    flex-direction: row;
    padding: 50px 0 50px 0;
    border-bottom: 1px solid rgba(0,0,0,.3);
    transition: background-color .1s;

    &:hover {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transform: scale(1.01);
      transition: box-shadow, transform .1s;
      border:none;
    }

    .hero_image, .text-container {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      border-radius: 30px;

      img {
        width: 100%;
      }
      h2 {
        font-size: 20pt;
        margin: 5px;
      }
      .dato {
        margin: 5px;
        align-self: flex-start;
      }
    }

    .hero_image {
      width: 30%;
      border: 1px solid rgba(0,0,0,.3);
      border-radius: 5px;
      overflow: hidden;

      img {
        width: 100%;
        margin: auto;
      }
    }
    .text-container {
      padding: 20px;
    }
  }

  .teaser {
    display: flex;
    height: 100%;
    flex-direction: column-reverse;
    box-sizing: content-box;
    padding: 5px 0 50px 0;

    .hero_image, .text-container {
      display: flex;
      padding: 25px;
      box-sizing: border-box;
      img {
        width: 100%;
      }
      h2 {
        font-size: 40pt;
      }
    }
    .hero_image {
      width: 100%;
      padding: 0;
      margin: 0px;
    }
  }

  @media only screen and (max-width: 600px) {
    .blogPreview:not(.teaser) {
      flex-direction: column;
      height: 100%;
      .hero_image {
        width: 100%;
        margin: 0;
        border-radius: 0;

      }
    }
  }
</style>