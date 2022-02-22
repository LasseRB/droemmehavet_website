export const FORM = {
    STATE: "state",
    VAERDI: "vaerdi",
    ERRORMSG: "errormsg",
    DANGER: "danger",
    SUCCES: "succes",
    LOADING: "loading"
}

export const FEJLBESKED = {
    NO_ERROR: null,
    WEAK_PASSWORD: "Din kode skal være mindst 6 karakterer lang.",
    PASSWORDS_NOT_IDENTICAL: "De to kodeord matcher ikke.",
    INVALID_EMAIL:
        "Din email er ikke valid. Er du sikker på, du tastede den rigtigt?.",
    EMAIL_ALREADY_EXIST:
        "Den email findes allerede i vores system. Har du allerede en bruger? ",
    EMAILS_NOT_IDENTICAL: "De to emails matcher ikke.",
    MISSING_NAME: "Navn mangler",
    MISSING_COUPON: "Kuponkoden kunne ikke findes."
};

export const REGEX = {
   email: new RegExp( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
   password: new RegExp( /(?=.*[0-9a-zA-Z]).{6,}/)

}