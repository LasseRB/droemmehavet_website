import { useState, useEffect, useContext, useRef } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { FirebaseContext } from "./Shared/Firebase";
import "./App.scss";

import AboutPage from "./AboutPage/AboutPage_Components/AboutPage";
import FrontPage from "./Frontpage/Frontpage_Components/Frontpage";
import WebshopPage from "./WebShopPage/WebShopPage_Components/WebShopPage";
import TilmeldPage from "./TilmeldPage/TilmeldPage_Components/TilmeldPage";
import Limdrengbog from "./LimdrengbogPage/Limdrengbog";
import Handelsbetingelser from "./HandelsBetingelserPage/HandelsBetingelser_Components/HandelsBetingelser";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";
import PrivatslivsPolitik from "./PrivatslivsPolitik/PrivatslivsPolitik_Components/PrivatslivsPolitik";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const firebase = useContext(FirebaseContext);
  const tilmeldKnap = useRef();

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : setCurrentUser(null);
    });

    return unsubscribe;
  }, []);
  return (
    <div className="App">
      <Router>
        <Header currentUser={currentUser} tilmeldKnap={tilmeldKnap} />
        <Switch>
          <Route path="/" exact>
            <FrontPage tilmeldKnap={tilmeldKnap} />
          </Route>

          <Route path="/omos">
            <AboutPage />
          </Route>

          <Route path="/tilmeld">
            <TilmeldPage currentUser={currentUser} />
          </Route>
          <Route path="/limdrengenbog">
            <Limdrengbog />
          </Route>

          <Route path="/Privatlivspolitik">
            <PrivatslivsPolitik />
          </Route>
          <Route path="/handelsbetingelser">
            <Handelsbetingelser />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
