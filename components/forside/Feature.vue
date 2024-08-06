<template>
  <div class="feature mockup" v-if="overskrift != ''">
    <img class="feature_billede" src="../../assets/HeaderSection.png">
    <div class="feature_tekst">
      <h3>{{ props.overskrift }}</h3>
      <p>{{ props.beskrivelse }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
/*
* Komponent til udstilling en enkelt feature.
* */

const props = defineProps({
  overskrift: { type: String, default: '' },
  beskrivelse: { type: String, default: '' },
  billedeRef: { type: String, default: '' }
})

</script>

<style>
.feature {
  margin: 10px;
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: row;
}

.feature_billede {
  margin: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
}

.feature_tekst {
  padding-top: 15px;
  width: auto;
  display: flex;
  flex-direction: column;
}

</style>