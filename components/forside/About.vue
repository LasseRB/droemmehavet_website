<template>
  <div class="about">
    <div class="beskrivelse">
      <h2>
        Drømmehavet
      </h2>
      <p>er en app med lytte-historier til børn fra 4 – 8 år.
        En slags podcast for børn - bare lidt sjovere, fordi det hele foregår i det samme univers.</p>
    </div>

  <img class="fødselsdag" src="../../assets/KrabbeOgFødselsdagsbarn.png">
  <img class="vandmand" src="../../assets/Vandmand_2.png">
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
    box-sizing: border-box;
    padding: 0px;
    width: 40%;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
    border-radius: 10px;
    z-index: 1;
  }
  .fødselsdag {
    position: absolute;
    left: 150px;
    width: 350px;
  }
  .vandmand {
    position: absolute;
    right: 400px;
    top: 300px;
    width: 150px;
  }
}

@media only screen and (max-width: 1500px) {
  .about {
    height: 350px;
    .fødselsdag {
      display: none;
    }
  }

}

@media only screen and (max-width: 500px) {
  .fødselsdag, .vandmand {
    display: none;
  }
}
</style>
