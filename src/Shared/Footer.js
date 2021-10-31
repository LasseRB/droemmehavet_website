import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer(props) {
  return (
    <div className="footerContainer">
      <div className="adresseContainer">
        <h1>Adresse</h1>
        <p>Drømmehavet ApS</p>
        <p>Jordløsevej 3a</p>
        <p>5600 Faaborg</p>
        <p>Danmark</p>
      </div>
      <div className="kontaktContainer">
        <h1>Kontakt</h1>
        <p>
          <a href="mailto:hejsa@droemmehavet.dk">hejsa@droemmehavet.dk</a>
        </p>
        <p>
          <a href="tel:+4530241958">+45 30 24 19 58</a>
        </p>
      </div>
      <div className="politikContainer">
        <h1>Mere info</h1>
        <p>
          <Link to="/omos" onClick={() => props.setheaderTheme(false)}>
            Om os
          </Link>
        </p>
        <p>
          <Link
            to="/Privatlivspolitik"
            onClick={() => props.setheaderTheme(false)}
          >
            Privatlivspolitik
          </Link>
        </p>
        <p>
          <Link
            to="/handelsbetingelser"
            onClick={() => props.setheaderTheme(false)}
          >
            Handelsbetingelser
          </Link>
        </p>
      </div>
      <div className="SOMEContainer">
        <a
          href="https://m.facebook.com/droemmehavet/"
          target="_blank"
          id="facebook_social"
        >
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
        <a
          href="https://www.instagram.com/droemmehavet/"
          target="_blank"
          id="instagram_social"
        >
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
      </div>
    </div>
  );
}
