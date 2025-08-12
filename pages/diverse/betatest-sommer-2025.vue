<script setup lang="ts">

</script>

<template>
  <div class="blog">
    <article>
      <div class="hero">
        <div class="text-container">
        <h1>Betatest sommer 2025</h1>
        <h3>11. August</h3>
        </div>
        <div class="hero-image">
          <img src="~/assets/piratskibet_saeler.png">
        </div>
      </div>
      <section class="broedtekst">
        <h1>Kære betatester!</h1>
        <p>Først og fremmest: <b>Tusind tak!</b> for at ville hjælpe os med Drømmethavets app. Jeres interesse i projektet er den bedste energidrik, vi kunne tænke os, til at færdiggøre og udgive vores lydunivers.
          På denne side vil vi fortælle lidt om hvordan det kommer til at fungere.</p>
        <p>Når man tester en app til Apples App Store, gør man brug af deres app Testflight. Du kan læse mere <a href="https://developer.apple.com/testflight/">her</a>.</p>
        <p>Du modtager en seperat email fra apple, som gør opmærksom på at der er en app, du kan teste, og linker til TestFlight-appen. Her kan du vælge at downloade TestFlight, eller - hvis du allerede har gjort det - downloade vores app indefra TestFlight.</p>
        <div class="row">
          <div class="column">
            <img src="~/assets/testflight-screenshot.jpeg" class="shadow" width="80%"/>
            <figcaption>Screenshot fra TestFlight appen.</figcaption>
          </div>
          <div class="column">
            <div class="column-padding">
            <p>Herfra er det bare at teste! Åbn Drømmehavet, og tag screenshots med telefonen, hvis der er noget der ser forkert ud. Du kan give feedback direkte fra appen ved at trykke på <b>Send Feedback</b> -knappen.</p>
            <p>Drømmehavet kan både åbnes fra TestFlight eller direkte fra din hjemmeskærm. Vær opmærksom på at man (officielt) kun kan give feedback via TestFlight.</p>
            <p>Skulle det alligevel volde problemer, eller vil du hellere give feedback på anden vis, så skriv gerne til <a href="mailto:lasse@droemmehavet.dk">lasse@droemmehavet.dk</a>.</p>.
            </div>
          </div>
        </div>
      </section>

      <section class="broedtekst">
        <br />
        <hr />
        <h2>Tusind tak for din/jeres hjælp!</h2>
        <p>Vi glæder os så meget til at se høre hvad I synes om appen, samt se hvad I måske kan finde af sjove fejl.</p>
        <p>God fornøjelse!</p>
        <br />
        <p>Bedste hilsener</p>
        <p>Esther, Nikolaj og Lasse </p>
      </section>
    </article>
  </div>
</template>

<style scoped>
.column {
  float: left;
  width: 50%;

  img {
    border-radius: 5px;
  }

  .column-padding {
    padding-left: 20px;
  }

  figcaption {
    padding: 30px 0 0 30px;
  }

}
.row:after {
  content: "";
  display: table;
  clear: both;
}

@media only screen and (max-width: 600px) {
  .column {
    float: left;
    width: 100%;
    img {
      position: relative;
     left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>