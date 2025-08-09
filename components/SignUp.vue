<script setup>
import { ref } from 'vue'
const email = ref('')
const name = ref('')
const googleURL = 'https://script.google.com/macros/s/AKfycbyg_27lTfzhOBCo_I9vcWWC1XYmhHKoD6mk-o4sfMK6u8EfVCVIt4hu6CFVxEhvkYgeDg/exec'
const emailValidation = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'

const steps = ref('email-step')
const neasteSkridt = () =>  email.value.match(emailValidation) !== null ? steps.value = 'navn-step' : null
const forrigeSkridt = () => steps.value = 'email-step'

const submitEmail = async () => {
  const data = new FormData()
  data.append('email', email.value)
  data.append('navn', name.value)
  steps.value = 'success-step'
  // snyder, og  fortælle brugeren at vi er færdige.
  await $fetch(googleURL, {
    method: 'POST',
    body: data
  })

}
</script>

<template>
  <form @submit.prevent="submitEmail" class="shadow">
      <div class="left">
        <Transition mode="out-in" name="slide-fade">
          <div :key="steps">
            <div class="email-vindue" v-show="steps == 'email-step'">
              <h1>Vi søger beta-testere</h1>
              <h3>Vil du være med?</h3>
             <p> <a href="http://droemmehavet.dk/blog/38/kunsten-at-betateste-i-kor/">Læs mere her</a>,  <label for="email">eller giv os email, så kontakter vi dig med flere detaljer.</label></p>

              <div class="input-field">
                <input
                    id="email"
                    v-model="email"
                    type="email"
                    required
                    class="shadow"
                />
                <button class="btn step1" @click="neasteSkridt">Næste</button>
              </div>
            </div>
            <div class="navn-vindue" v-show="steps == 'navn-step'">
              <h1>Fantastisk!</h1>
              <label for="name">Hvad må vi kalde dig?</label>
              <div class="input-field">
                <input
                    id="name"
                    v-model="name"
                    type="text"
                    required
                />
                <button type="submit" class="step2 btn">Send</button>
              </div>
            <button type="button" @click="forrigeSkridt" v-if="steps === 'navn-step'"><div class="tilbageBtn"></div></button>
            </div>
            <div v-if="steps === 'success-step'">
              <h1>Juhuu! Tusind tak. 🎉</h1>
              <p>Du modtager en email snarest med mere information.</p>
            </div>
          </div>
        </Transition>
        </div>
      <div class="right" :class="steps">
        <img src="~/assets/signup-dino.png" />
      </div>

  </form>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

form {
  position: relative;
  display: flex;
  min-width: 800px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin: 0px auto 80px auto;
  min-height: 300px;
  a {
    text-decoration-line: underline;
    color: #2c3e50;
    &:hover {
      color: black;
    }
  }
  .left {
    display: flex;

    flex-direction: column;
    justify-content: center;
    background-color: #fdf8ec;
    padding: 20px;
    transition: width .5s ease;
    flex: 1.1;

    .email-vindue {
      h1 {
        line-height: .2;
      }

    }
  }
  .right {
    display: flex;
    position: relative;
    background-color: #33d0e8;
    background-size: cover;
    width:100%;
    overflow: hidden;
    flex: 1;
    transition: flex 0.2s ease-in-out;
    img {
      position: absolute;
      left: -50%;
      max-width: unset;
    }
    &.navn-step {
      flex: 1.2;
    }
    &.succes-step {
      flex: .5;
    }

  }

  .input-field {
    display: flex;
    font-size: larger;
    padding-top: 15px;
  }
  input, textarea {
    width: 70%;
    margin-bottom: 10px;
    padding: 14px;
    box-sizing: border-box;
    border-radius: 10px 0px 0px 10px;
    border: none;
    height: 50px;
    font-size: 15pt;
  }
  button, .btn {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  .btn {
    width: 30%;
    padding: 10px;
    background-color: #2daeea;
    color: white;
    border-radius: 0px 30px 30px 0px;
    height: 50px;
    &:hover {
      background-color: #000000;
      color: white;
    }
  }

  .tilbageBtn {
    position: absolute;
    margin-left: 3px;
    color: #2c3e50;
    width: 16px;
    height: 1px;
    background-color: currentColor;
    border: none;
    outline: none;
    &:hover {
      transform: scale(1.1);
    }

    &:before {
      content: '';
      position: absolute;
      left: 1px;
      top: -5px;
      width: 10px;
      height: 10px;
      border-top: solid 1px currentColor;
      border-right: solid 1px currentColor;
      -webkit-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }

    &:after {
      content: 'tilbage';
      position: absolute;
      top: -8px;
      left: 25px;
    }
  }
}

@media only screen and (max-width: 600px) {

  form {
    min-width: 100%;
    margin: 10px;
    .right {
      display: none;
    }
  }
}
</style>