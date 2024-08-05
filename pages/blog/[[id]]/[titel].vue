<script setup lang="ts">
import { computed } from 'vue'
const { id } = useRoute().params
const postdata = await useFetch(`https://blog.droemmehavet.dk/wp-json/wp/v2/posts/${id}?_embed&_fields=author,id,date,title,link,content`)?.data

const userData = await useFetch(`https://blog.droemmehavet.dk/wp-json/wp/v2/users?/${postdata.author}/_embed`)?.data
const postDato = computed( () => {
  const formatter = new Intl.RelativeTimeFormat('da-DK', { style: 'long' });
  const date = new Date(postdata.date).toLocaleDateString();
  // return formatter.format(date, "year")
})
</script>

<template>

<post :title="postdata.title.rendered"
      :htmlContent="postdata.content.rendered"
      :dato="postdata.date"
      :forfatter="userData[0].name"
      />
</template>

<style scoped>

</style>