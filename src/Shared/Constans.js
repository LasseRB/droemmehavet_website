export const FORM = {
    STATE: "state",
    VAERDI: "vaerdi",
    DANGER: "danger",
    SUCCES: "succes",
    LOADING: "loading"
}

export const FEJLBESKED = {
    WEAK_PASSWORD: "🔥 Hovsa! 🔥 Din kode skal være mindst 6 karakterer lang.",
    PASSWORDS_NOT_IDENTICAL: "🔥 Hovsa! 🔥 De to kodeord matcher ikke.",
    INVALID_EMAIL:
        "🔥 Hovsa! 🔥 Din email er ikke valid. Er du sikker på, du tastede den rigtigt?.",
    EMAIL_ALREADY_EXIST:
        "🔥 Hovsa! 🔥 Den email findes allerede i vores system. Har du glemt koden? ",
    EMAILS_NOT_IDENTICAL: "🔥 Hovsa! 🔥 De to emails matcher ikke.",
    MISSING_NAME: "🔥 Hovsa! 🔥 For -og mellemnavn(e)mangler ",
};

export const REGEX = {
   email: new RegExp( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
   password: new RegExp( /(?=.*[0-9a-zA-Z]).{6,}/)

}