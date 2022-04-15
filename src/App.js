import { useState, useEffect, useContext, useRef } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { FirebaseContext } from "./Shared/Firebase";
import "./App.scss";
import TilmeldPage from "./TilmeldPage/TilmeldPage_Components/TilmeldPage";
import Succes from "./TilmeldPage/TilmeldPage_Components/Succes";
import Limdrengbog from "./LimdrengbogPage/Limdrengbog";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";

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
            <TilmeldPage currentUser={currentUser} />
          </Route>
          <Route path="/velkommen">
           <Succes />
          </Route>
          <Route path="/limdrengenbog">
            <Limdrengbog />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
