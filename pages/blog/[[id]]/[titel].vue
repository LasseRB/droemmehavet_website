<script setup lang="ts">
import BlogIndlaeg from "~/components/blog/Blogindlaeg.vue";
import { useWordpress } from "~/composables/useWordpress";
import type { BlogPost } from "~/model/model";

const { id } = useRoute().params;
const { posts } = await useWordpress();

const data: BlogPost | undefined = posts?.value?.find(
	(indlaeg: BlogPost) => indlaeg.id === id,
);

if (!data) {
	throw createError({
		statusCode: 404,
		statusMessage: "Blogindlæg ikke fundet",
	});
}

useHead({
	title: `Drømmehavet: ${data.overskrift}`,
});
</script>

<template>
  <div class="blog">
    <BlogIndlaeg v-if="data" :blogindlaeg="data" />
  </div>
</template>

<style>
.blog {
  margin-bottom: 30px;
}
</style>