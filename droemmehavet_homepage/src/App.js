import {useState, useEffect, useContext, useRef } from 'react'
import { BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import { FirebaseContext } from './Shared/Firebase'
import "./App.scss";

import AboutPage from "./AboutPage/AboutPage_Components/AboutPage";
import FrontPage from "./Frontpage/Frontpage_Components/Frontpage";
import WebshopPage from "./WebShopPage/WebShopPage_Components/WebShopPage";
import TilmeldPage from "./TilmeldPage/TilmeldPage_Components/TilmeldPage";
import Header from "./Shared/Header";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const firebase = useContext(FirebaseContext);
  const tilmeldKnap = useRef()


  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      user ? setCurrentUser(user) 
      : setCurrentUser(null)

    })

    return unsubscribe
  }, [])
  return (
    <div className="App">
      <Router>
      <Header currentUser = { currentUser } tilmeldKnap= {tilmeldKnap}/>
        <Switch>
          <Route path="/" exact>
            <FrontPage tilmeldKnap= {tilmeldKnap}/>
          </Route>
          <Route path="/tilmeld">
            <TilmeldPage currentUser = { currentUser } />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
