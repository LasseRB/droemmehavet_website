import React, { useContext, useState, useEffect } from "react";
import {useLocation } from "react-router"
import { BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import { FirebaseContext } from './Firebase'

export default function Header(props) {
  const [theme, setTheme] = useState(false)
  const firebase = useContext(FirebaseContext);
  const loc = useLocation();
  useEffect(() => {
    if(matchExact('/', loc.pathname)){
      setTheme(false)
    }
    else{
      setTheme(true)

    }
  }, [loc])

  const matchExact = (r, str) => {
    var match = str.match(r);
    return match && str === match[0];
 }
  return (
    <>
      <div className={theme ? "header blue" : "header"}>
        <Link to="/" exact onClick={() => setTheme(false)} >
          <h1>Drømmehavet</h1>
        </Link>
        <div className="headerButtonsContainer">
          {/* <button className="headerButton">webshop</button> */}
          <Link to="/omos" className="headerButton">Om Os</Link>
          {/* <button className="headerButton">kontakt</button> */}
          <Link to="/tilmeld/1" className="headerButton" onClick={() => setTheme(true)}>Tilmeld dig!</Link>
         
          <a href='http://localhost:3001/' className="headerButton" id="goToApp">Til drømmehavet</a>
          {/* // <Link to="/log" className="headerButton" id="logInButton" onClick={() => setTheme(true)}>Log ind</Link> */}
          
          
        </div>
      </div>

    </>
  );
}
