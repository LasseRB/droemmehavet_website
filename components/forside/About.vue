<template>
  <div class="about">
    <div class="beskrivelse">
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

</script>
<style scoped>
.about {
  position: relative;
  height: 500px;
  background-color: var(--main-bg-hvid);
  z-index: 1;
  .beskrivelse {
    position: absolute;
    background-color: var(--main-bg-blaa);
    color: white;
    box-sizing: border-box;
    padding: 30px;
    width: 40%;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
    border-radius: 10px;
    box-shadow: var(--hard-box-shadow);
  }
}
</style>
