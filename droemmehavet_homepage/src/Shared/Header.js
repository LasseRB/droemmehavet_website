import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link, Route, } from "react-router-dom";
import { FirebaseContext } from './Firebase'

export default function Header(props) {
  const [theme, setTheme] = useState(false)
  const firebase = useContext(FirebaseContext);

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
          {!props.currentUser ? 
          <Link to="/logind" className="headerButton" id="logInButton">Log ind</Link>
          // <Link to="/log" className="headerButton" id="logInButton" onClick={() => setTheme(true)}>Log ind</Link>
          :<button className="headerButton" id="logOutButton" onClick={() => firebase.doSignOut()}>log ud</button>
          }
        </div>
      </div>

    </>
  );
}
