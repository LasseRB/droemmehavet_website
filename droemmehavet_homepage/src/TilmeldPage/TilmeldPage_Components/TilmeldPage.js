import React, { useState } from "react";

import BrugerTilmelding from "./BrugerTilmelding";
import BetalingsTilmelding from "./BetalingsTilmelding";
import { FEJLBESKED } from "./tilmeldingsfejlbeskeder";

export default function TilmeldPage(props) {
  const [fejlbesked, setFejlbesked] = useState("");
  const [tilmeldStadie, setTilmeldStadie] = useState(3);
  const [formContent, setFormContent] = useState({
    fornavn: "",
    efternavn: "",
    email: "",
    email2: "",
    password: "",
    password2: "",
    acceptAfVilkaar: true,
  });

  const setTilmed = () => {
    console.log(tilmeldStadie);
  };

  // renderer fejlbeskeder på siden, på dansk
  const handleFejlBesked = (fejlKode) => {
    switch (fejlKode) {
      case "fixet error":
        setFejlbesked(" ");
        break;
      case "auth/weak-password":
        setFejlbesked(FEJLBESKED.WEAK_PASSWORD);
        break;
      case "auth/argument-error":
        setFejlbesked(FEJLBESKED.INVALID_EMAIL);
        break;
      case "auth/email-already-in-use":
        setFejlbesked(FEJLBESKED.EMAIL_ALREADY_EXIST);
        break;
      case "tilmelding/kode-mismatch":
        setFejlbesked(FEJLBESKED.PASSWORDS_NOT_IDENTICAL);
        break;
      case "tilmelding/email-mismatch":
        setFejlbesked(FEJLBESKED.EMAILS_NOT_IDENTICAL);
        break;
      case "tilmelding/navn-mangler":
        setFejlbesked(FEJLBESKED.MISSING_NAME);
        break;
      default:
        setFejlbesked("Der skete en fejl, prøv igen!");
    }
  };
  return (
    <div className="tilmeldContainer">
      <div className="fejlbesked">{fejlbesked}</div>

      {tilmeldStadie == 1 && (
        <BrugerTilmelding
          handleFejlBesked={handleFejlBesked}
          setFormContent={setFormContent}
          formContent={formContent}
          setTilmeldStadie={setTilmeldStadie}
        />
      )}

      {tilmeldStadie == 2 && (
        <BetalingsTilmelding
          handleFejlBesked={handleFejlBesked}
          currentUser={props.currentUser}
          setFormContent={setFormContent}
          formContent={formContent}
          setTilmeldStadie={setTilmeldStadie}
        />
      )}

      {tilmeldStadie == 3 && (
        <div className="succes-sign-up">
          <h1>Tillykke!</h1>
          <p id="firstBox">
            Du er nu oprettet som bruger hos drømmehavet, og kan lytte til
            ubegrænset drømmehavet eventyr.
          </p>
          <p id="secondBox">Skynd dig ud og oplev drømmehavets fortællinger!</p>
          <a href="https://app.droemmehavet.dk/">
            <p>
              Gå til <b>drømmehavet</b>
            </p>
          </a>
        </div>
      )}
    </div>
  );
}
