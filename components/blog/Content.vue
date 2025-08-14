<script setup lang="ts">
import {ref, markRaw, defineAsyncComponent} from 'vue'

const props = defineProps<{
  text: string
}>()
const html = ref(props.text)
const componentRegex = /<component is="[^"]*"\s*\/>/;
const hasComponentTag = (text:string) => {
     return text.match(componentRegex) ?? null;
}
const findComponentTag = (text:string) => {
  const nameRegex = /is="([^"]*)"/;
  const tags = hasComponentTag(text);
  if (tags && tags[0]) {
      return markRaw(tags[0].match(nameRegex)[1]) ?? null
  }
}
const removeComponentTag = (text:string) => {
  return html.value.replace(componentRegex, '');
}


const ResolveComponent = (name: string) => {
  switch(name) {
    case 'SignUp': return defineAsyncComponent(() => import('~/components/SignUp.vue'))}
}

const DynamicComponent = ResolveComponent(findComponentTag(props.text))
</script>


<template>
   <DynamicComponent />
    <div v-html="removeComponentTag(html)"></div>
</template>