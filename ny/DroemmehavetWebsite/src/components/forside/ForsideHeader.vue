<template>
<!--  <div class="forside_baggrund">-->
  <img alt="Bagrundsbillede af eventyr øen, med illustration af en borg og riddere" id="forside_header_baggrund" src="../../assets/HeaderSection.png">
    <div class="forside_header_indhold">
      <div class="foside_overskrift">
        <img alt="Drømmehavet logo" id="forsideLogo" src="../../assets/ForsideLogo.png">
        <div class="forside_text">
          <h1>Drømmehavet</h1>
          <h3>Nulla arcu tortor viverra facilisis.</h3>
        </div>
      </div>
      <div>
        <p>
          Morbi vehicula velit non viverra facilisis. Nulla facilisi.  Morbi vehicula velit non viverra facilisis. Nulla facilisi.
          Morbi placerat enim ac velit bibendum fringilla. Nulla arcu tortor, tempus accumsan euismod vitae, aliquet sed mauris. Morbi vehicula velit non viverra facilisis. Nulla facilisi.
        </p>
      </div>
      <img id="appleStoreLink" alt="Apple store billede og link" src="../../assets/AppleStore.png">
    </div>
<!--  </div>-->
</template>
<script setup lang="ts">
/*
* Komponent til udstilling af de feature vi har i appen.
* */
</script>
<style>
#forside_header_baggrund {
  width: 100vw;
  position: absolute;
  left: 0;
}

.forside_header_indhold {
  z-index: 1;
  display: flex;
  margin-left: 8vw;
  flex-direction: column;
  margin-top: 10vh;
  width: 60vh;
  max-width: 1000px;
  color: white;
}

.foside_overskrift {
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-content: center;
  width: auto;
  height: 257px;
}

#forsideLogo {
  position: relative;
}

#appleStoreLink {
  position: relative;
  width: 50%;
}

</style>