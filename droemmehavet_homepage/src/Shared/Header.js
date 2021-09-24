import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link, Route, } from "react-router-dom";

export default function Header(props) {
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    if(window.location.pathname == '/'){
      setTheme(false)
    } else{
      setTheme(true)
    }
  }, [])

  return (
    <>
      <div className={theme ? "header blue" : "header"}>
        <Link to="/" exact onClick={() => setTheme(false)} >
          <h1>Drømmehavet</h1>
        </Link>
        <div className="headerButtonsContainer">
          <button className="headerButton">webshop</button>
          <button className="headerButton">om os</button>
          <button className="headerButton">kontakt</button>
          <Link to="/tilmeld/1" className="headerButton" onClick={() => setTheme(true)}>Tilmeld dig!</Link>
          <button id="logInButton">log ind</button>
        </div>
      </div>

    </>
  );
}
