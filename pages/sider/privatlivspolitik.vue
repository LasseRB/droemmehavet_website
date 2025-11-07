<script setup lang="ts">
import {fetchAllSider} from "~/services/wordpress.service";

useHead({
  title: `Drømmehavet: Privatlivspolitik`
})
const {data} = await fetchAllSider()

const privatlivspolitik = (data?.value as Array<any>)?.filter((side) => side.slug === 'privatlivspolitik')?.at(0)
const sidstAendretDato = computed(() => privatlivspolitik?.modified_gmt ? new Date(privatlivspolitik.modified).toLocaleDateString("da-DK", {dateStyle: "long"}) : null)
</script>

<template>
  <div class="blog side">
    <article>
      <div class="hero">
        <div class="text-container">
          <h1>{{privatlivspolitik?.title?.rendered}}</h1>
          <h3>Senest opdateret: {{sidstAendretDato}}</h3>
        </div>
        <div class="hero-image">
          <img src="~/assets/Monsterkonkurrencen.png">
        </div>
      </div>
      <div class="broedtekst">
        <div v-if="privatlivspolitik?.content?.rendered" v-html="privatlivspolitik.content.rendered"></div>
        <div v-else>
        404 bro</div>
      </div>
    </article>
  </div>
</template>

<style>
.side {
  margin-bottom: 30px;

  ul li {
    list-style: initial;
  }
}
</style>