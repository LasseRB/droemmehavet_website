import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import {useState, useEffect, useContext } from 'react'
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
  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])
  return (
    <div className="App">
      <Router>
      <Header currentUser = { currentUser }/>
        <Switch>
          <Route path="/" exact>
            <FrontPage />
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
