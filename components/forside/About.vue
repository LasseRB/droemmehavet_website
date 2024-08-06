<template>
  <div class="about mockup">
    <div class="beskrivelse mockup">
      <h2>
        Drømmehavet
      </h2>
      <p>er en platform med lytte-historier til børn fra 4 – 8 år.
        En slags podcast for børn - bare lidt sjovere, fordi det hele foregår i det samme univers.</p>
    </div>

<!--    <feature overskrift="x-timers lydfortællinger"/>-->
  </div>
</template>
<script setup lang="ts">
/*
* Komponent til explainer om hvad produktet er.
* */
import AppFeatures from "~/components/forside/AppFeatures.vue";
import Feature from "~/components/forside/Feature.vue";
</script>
<style scoped>
.about {
  position: relative;
  height: 500px;

  .beskrivelse {
    position: absolute;
    box-sizing: border-box;
    padding: 30px;
    width: 40%;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
  }
}
</style>
