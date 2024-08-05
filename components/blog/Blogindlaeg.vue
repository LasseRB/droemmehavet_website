<template>
  <div v-if="linkId != ''">
    <h3>{{ props.overskrift }}</h3>
    <p>{{ props.indholdsTekst }}</p>
    <p>{{ props.dato }}</p>
  </div>
</template>

<script setup lang="ts">
/*
* Komponent til udstilling en enkelt feature.
* */

const props = defineProps({
  overskrift: { type: String, default: '' },
  indholdsTekst: { type: String, default: '' },
  blogVideoRef: { type: String, default: '' },
  blogBilledeRef: { type: String, default: '' },
  linkId: { type: String, default: '' },
  dato: { type: String, default: '' }
})

</script>