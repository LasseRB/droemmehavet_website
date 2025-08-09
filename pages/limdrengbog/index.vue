<script setup lang="ts">
useHead({
  title: 'Dengang jeg opdagede drømmehavet'
})
</script>

<template>
  <div class="limdrengbog">
    <div class="inner-box">
    <h1>Dengang jeg opdagede drømmehavet</h1>
      <p>Lyt til historien her!</p>
      <audio class="audio-player shadow" controls src="https://firebasestorage.googleapis.com/v0/b/droemmehavet-1aa53.appspot.com/o/droemmehavet_webpage%2Faudiofiles%2FDengang%20jeg%20opdagede%20Dr%C3%B8mmehavet.mp3?alt=media"></audio>
    </div>
  </div>
</template>

<style scoped>
.limdrengbog {
  background-image: url("~/assets/limdrengbog_forside.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 80vh;
  padding-top: 100px;
  .inner-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    align-self: center;
    height: max-content;
    border-radius: 20px;
    padding: 20px;
    background-color: var(--main-bg-hvid_transparent  );
    text-align: center;
    backdrop-filter: blur(14px) saturate(200%);
    -webkit-backdrop-filter: blur(14px) saturate(200%);
    transform: translate(-50%, -50%);

    h1 {
      margin: 10px auto;
      font-family: "Belleza", sans-serif;
      font-optical-sizing: auto;
      font-size: 2rem;
      text-align: center;
      font-weight: bolder;
    }

    /* Audio Player Container */
    .audio-player {
      margin: 0 auto;
      width: 300px;
      background-color: #f4f4f4;
      border-radius: 10px;
      padding: 15px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    /* Audio Controls */
    .audio-player audio::-webkit-media-controls-panel {
      background-color: transparent;
    }

    .audio-player audio::-webkit-media-controls-current-time-display,
    .audio-player audio::-webkit-media-controls-time-remaining-display {
      color: #333;
    }

    /* Custom Play/Pause Button */
    .audio-player audio::-webkit-media-controls-play-button {
      background-color: #4CAF50;
      border-radius: 50%;
      width: 40px;
      height: 40px;
    }

    /* Volume Control */
    .audio-player audio::-webkit-media-controls-mute-button {
      color: #666;
    }

    /* Progress Bar */
    .audio-player audio::-webkit-media-controls-current-time-display {
      color: #4CAF50;
      font-weight: bold;
    }

  }
}

</style>