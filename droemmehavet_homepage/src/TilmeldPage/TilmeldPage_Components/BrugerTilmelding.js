import React, { useState } from "react";

export default function BrugerTilmelding(props) {
  const [enableSubmit, setEnableSubmit] = useState(false);
  const handleUserCreateSubmit = (event) => {
    event.preventDefault();

    props.setTilmeldStadie(2);
  };
  const valider = (e) => {
    setEnableSubmit(
      props.formContent.password !== props.formContent.password2 ||
        (props.formContent.password === "" &&
          props.formContent.password === "") ||
        (props.formContent.email === "" && props.formContent.email2 === "") ||
        props.formContent.email !== props.formContent.email2 ||
        props.formContent.fornavn === ""
    );

    console.log(e.target.id);
    if (e.target.id == "NextStep" && props.formContent.fornavn == "") {
      props.handleFejlBesked("tilmelding/navn-mangler");
    }
    if (
      props.formContent.fornavn != "" &&
      e.target.name == props.formContent.fornavn
    ) {
      props.handleFejlBesked("fixet error");
    }

    if (
      "password" == e.target.name &&
      props.formContent.email != props.formContent.email2 &&
      props.formContent.email2 !== ""
    ) {
      props.handleFejlBesked("tilmelding/email-mismatch");
    }

    if (
      ("password" == e.target.name ||
        "email1" == e.target.name ||
        "email2" == e.target.name) &&
      props.formContent.email == props.formContent.email2 &&
      props.formContent.email2 !== ""
    ) {
      props.handleFejlBesked("fixet error");
    }

    if (
      "abonnementvilkaar" == e.target.name &&
      props.formContent.password != props.formContent.password2
    ) {
      props.handleFejlBesked("tilmelding/kode-mismatch");
    }
    if (
      ("password2" == e.target.name ||
        "password1" == e.target.name ||
        "abonnementvilkaar" == e.target.name) &&
      props.formContent.password == props.formContent.password2 &&
      props.formContent.password2 !== ""
    ) {
      props.handleFejlBesked("fixet error");
    }
  };

  // || props.formContent.acceptAfVilkaar == true;

  const handleChange = (event) => {
    event.preventDefault();
    props.setFormContent({
      ...props.formContent,
      [event.target.name]: event.target.value,
    });
    valider(event);
    console.log(props.formContent);
  };

  return (
    <div className="bruger-input-container">
      <span className="steps-box">
        <div className="steps"> . . . </div>
      </span>
      <form onSubmit={handleUserCreateSubmit}>
        <label className="required">For -og mellemnavn(e)</label>
        <input
          name="fornavn"
          type="text"
          onChange={handleChange}
          required
          autoComplete="on"
        />

        <label>Efternavn(e)</label>
        <input
          name="efternavn"
          type="text"
          onChange={handleChange}
          autoComplete="on"
        />

        <label className="required">Email</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          required
          autoComplete="on"
        />
        <label className="required">Skriv din email igen</label>
        <input
          name="email2"
          type="email"
          onChange={handleChange}
          required
          autoComplete="on"
        />

        <div id="divider"></div>

        <label className="required">Kodeord</label>
        <input
          name="password"
          type="password"
          onChange={handleChange}
          required
        />

        <label className="required">Skriv din kode igen</label>
        <input
          name="password2"
          type="password"
          onChange={handleChange}
          required
        />
        <span className="abonnementvilkaar">
          <label className="required">
            Jeg accepterer Drømmehavets{" "}
            <a href="http://droemmehavet.dk/handelsbetingelser" target="_blank">
              {" "}
              handelsbetingelser
            </a>{" "}
            og{" "}
            <a href="http://droemmehavet.dk/privatlivspolitik" target="_blank">
              {" "}
              privatlivspolitik
            </a>
          </label>
          <input
            name="abonnementvilkaar"
            type="checkbox"
            required
            onChange={handleChange}
          />
        </span>

        <div
          id="NextStep"
          onClick={handleChange}
          name="NaesteSkridt"
          style={
            enableSubmit
              ? { ...this, display: "inline-block" }
              : { ...this, display: "none" }
          }
        ></div>
        <input
          id="submitBtn"
          type="submit"
          value="Næste skridt 👉"
          disabled={enableSubmit}
        />
      </form>
    </div>
  );
}
