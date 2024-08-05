<template>
  <div>
    <img src={{billede}} alt="`Feature billede til: {{overskrift}}">
    <h3 v-if="overskrift === ''">Indsæt feature overskrift</h3>
    <h3 v-else>{{ overskrift }}</h3>
    <input
      v-model="overskrift"
      placeholder="Skriv overskrift "
    />
    <p v-if="beskrivelse === ''">Indsæt feature beskrivelse</p>
    <p v-else>{{ beskrivelse }}</p>
    <input
      v-model="beskrivelse"
      placeholder="Skriv beskrivelse"
    />
    <button
      @click="lavEllerUpdateFeature()"
    >Save</button>
  </div>
</template>
<script setup>
/*
* Komponent til at uploade og redigere vores apps features.
* */

import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  feature: { type: Object, default: null }
})

const overskrift = ref('')
const beskrivelse = ref('')
const billedeRef = ref('')

onMounted(() => {
  if (props.feature != null) {
    overskrift.value = props.feature.overskrift
    overskrift.value = props.feature.beskrivelse
    overskrift.value = props.feature.billedeRef
  }
})
function lavEllerUpdateFeature() {

}

</script>
<style scoped>
</style>
