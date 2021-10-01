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

    document.addEventListener('scroll', e=>{
        if(window.scrollY > 100 && matchExact('/', loc.pathname)){
          setTheme(true)
        }
        if(window.scrollY < 100 && matchExact('/', loc.pathname)){

          setTheme(false)
        }
      
     
    })
   
  }, [loc])

  const matchExact = (r, str) => {
    var match = str.match(r);
    return match && str === match[0];
 }
  return (
    <>
      <div className={theme ? "header blue" : "header"}>
        
        <div className="headerButtonsContainer">
        <Link to="/" exact onClick={() => setTheme(false)} >
          <h1 id="logo">Drømmehavet</h1>
        </Link>
          <div className="headerButtonsContainer-inner">
              {/* <button className="headerButton">webshop</button> */}
              <Link to="/omos" className="headerButton">Om os</Link>
              {/* <button className="headerButton">kontakt</button> */}
              <Link to="/tilmeld" className="headerButton" onClick={() => setTheme(true)}>Tilmeld dig</Link>
            
              <a href='https://app.droemmehavet.dk/' className="headerButton" id="goToApp">Gå til drømmehavet</a>
              {/* // <Link to="/log" className="headerButton" id="logInButton" onClick={() => setTheme(true)}>Log ind</Link> */}
          </div>
        </div>
      </div>

    </>
  );
}
