import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { FirebaseContext } from "./Firebase";

export default function Header(props) {
  const [theme, setTheme] = useState(false);
  const firebase = useContext(FirebaseContext);
  const loc = useLocation();

  const changeHeaderFunktion = () =>{
    props.setheaderTheme(!props.headerTheme)
    console.log(props.headerTheme);
  }

  const changeHeaderBackgound = () => {
    if (props.headerTheme) {
      if (window.scrollY >= 70) {
        setTheme(true);
      } else {
        setTheme(false);
      }
    }
  };

  window.addEventListener("scroll", changeHeaderBackgound);
  return (
    <>
      <div className={theme ? "header blue" : "header"}>
        <div className="headerButtonsContainer">
          <Link to="/" exact onClick={() => changeHeaderFunktion()}>
            <h1 className="logo">Drømmehavet</h1>
          </Link>
          <div className="headerButtonsContainer-inner">
            {/* <button className="headerButton">webshop</button> */}
            <Link
              to="/omos"
              className="headerButton"
              onClick={() => changeHeaderFunktion()}
            >
              Om os
            </Link>
            {/* <button className="headerButton">kontakt</button> */}
            <Link
              to="/tilmeld"
              className="headerButton"
              onClick={() => changeHeaderFunktion()}
            >
              Tilmeld dig
            </Link>

            <a
              href="https://app.droemmehavet.dk/"
              className="headerButton"
              id="goToApp"
            >
              Log in
            </a>
            {/* // <Link to="/log" className="headerButton" id="logInButton" onClick={() => setTheme(true)}>Log ind</Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
