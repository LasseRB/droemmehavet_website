<script setup lang="ts">
/*
* Komponent til at udstilling af beskrivelse af teamet.
* */

import PersonInfo from '@/components/forside/PersonInfo.vue'


import { computed } from 'vue'
import type { personInfo } from '@/Model/model'

const team = computed(() => {
  let personer = Array<personInfo>()
  // teamDb.forEach((f: any) => {
  //     const person = {
  //       navn: f.data().navn,
  //       titel: f.data().titel,
  //       beskrivelse: f.data().beskrivelse,
  //       personBilledeRef: f.data().billedeRef
  //     } as personInfo
  //     personer.push(person)
  //   }

  return personer
})
</script>

<template>
  <h3>Teamet</h3>
  <div v-for="person in team">
    <PersonInfo
        :navn="person.navn"
        :titel="person.titel"
        :beskrivelse="person.beskrivelse"
        :personBilledeRef="person.personBilledeRef"
    />
  </div>
</template>
<style scoped>
</style>
