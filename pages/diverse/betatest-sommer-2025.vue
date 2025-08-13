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
        <p>Først og fremmest: TUSIND TAK for at ville hjælpe os med Drømmethavets app. På denne side vil vi fortælle lidt om hvordan testfasen kommer til at fungere.</p>
        <p>Når man tester en app til Apples App Store, gør man brug af deres app <a href="https://developer.apple.com/testflight/">Testflight</a>.</p>
        <p>Du modtager snart en seperat email fra Apple, som gør opmærksom på at der er en app, du kan teste, og linker til TestFlight-appen. Her kan du vælge at downloade TestFlight, eller - hvis du allerede har gjort det - installere Drømmehavet inde fra TestFlight.</p>
        <figure class="blog-image">
          <img src="~/assets/testflight-screenshot.jpeg" class="shadow"/>
          <figcaption>Screenshot fra TestFlight appen.</figcaption>
        </figure>
        <p>Nu begynder det sjove! Nu kan du og/eller dit barn åbne Drømmehavet og udforske vores lydunivers!</p>
        <h2>Sådan sendes feedback</h2>
        <p>Vi håber selvfølgelig at jeres oplevelse med appen bliver nem, sjov og fejlfri. Men vi er også klar over at appen har sine mangler.</p>
        <p>Skulle I finde noget, I gerne vil dele med os, kan feedback sendes ind via TestFLight. Tryk på <i>Send Feedback</i> knappen, som vil guide jer gennem en lille formular. Hvis I vil sende billeder med, kan der tages <a href="https://support.apple.com/guide/iphone/take-a-screenshot-iphc872c0115/ios">screenshots</a> som gemmes i telefonens kamerarulle, og som kan uploades vha. <i>Send Feedback</i>-formularen.</p>
        <p>I er også velkomne til at give feedback via email. Skriv til <a href="mailto:hejsa@droemmehavet.dk">hejsa@droemmehavet.dk</a>, så skal vi nok få feedbacken med.</p>
      </section>

      <section class="broedtekst">
        <br />
        <hr />
        <h2>Tusind tak for hjælpen!</h2>
        <p>Vi glæder os så meget til at se høre hvad I synes om appen.</p>
        <p>God testfornøjelse!</p>
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