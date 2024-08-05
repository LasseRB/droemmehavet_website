<template>
  <div v-if="navn != ''">
    <h3>{{ props.navn }}</h3>
    <h4>{{ props.titel }}</h4>
    <p>{{ props.beskrivelse }}</p>
  </div>
</template>
<script setup lang="ts">
/*
* Komponent til at fremvise det enkelte teammedlem.
* */

const props = defineProps({
  navn: { type: String, default: '' },
  titel: { type: String, default: '' },
  beskrivelse: { type: String, default: '' },
  personBilledeRef: { type: String, default: '' }
})
</script>
<style scoped>
</style>
