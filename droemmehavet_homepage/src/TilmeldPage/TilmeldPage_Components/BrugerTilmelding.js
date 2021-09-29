import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useHistory,
} from "react-router-dom";

export default function BrugerTilmelding(props) {
  let history = useHistory();

  const handleUserCreateSubmit = (event) => {
    event.preventDefault();

    history.push("/tilmeld/2");
  };
  const valider = () => {
    if (props.formContent.fornavn == "") {
      props.handleFejlBesked("tilmelding/navn-mangler");
      return;
    }

    if (props.formContent.email != props.formContent.email2) {
      props.handleFejlBesked("tilmelding/email-mismatch");
      return;
    }

    if (props.formContent.password != props.formContent.password2) {
      props.handleFejlBesked("tilmelding/kode-mismatch");
      return;
    }
  };

  const enableSubmit =
    props.formContent.password !== props.formContent.password2 ||
    props.formContent.password === "" ||
    props.formContent.email !== props.formContent.email2 ||
    props.formContent.email === "" ||
    props.formContent.fornavn === "" || 
    props.formContent.acceptAfVilkaar == false;

  const handleChange = (event) => {
    event.preventDefault();
    props.setFormContent({
      ...props.formContent,
      [event.target.name]: event.target.value,
    });
    valider();
    console.log(props.formContent)
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
        <label className="required">Jeg accepterer Drømmehavets <a href="http://droemmehavet.dk/handelsbetingelser" target="_blank">  handelsbetingelser</a> og <a href="http://droemmehavet.dk/privatlivspolitik" target="_blank"> privatlivspolitik</a></label>
        <input name = "abonnementvilkaar" type="checkbox" required onChange={handleChange}/>
        </span>

        <input type="submit" value="Næste skridt 👉" disabled={enableSubmit} />
      </form>
    </div>
  );
}
