import React, { useContext, useEffect } from "react";

import { FirebaseContext } from "../../Shared/Firebase";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useHistory,
} from "react-router-dom";

export default function BrugerLoadingScreen(props) {
  const firebase = useContext(FirebaseContext);
  let userID = "";
  
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const opretBrugerIFirebase = async () => {
    // create user in auth
    await firebase
      .doCreateUserWithEmailAndPassword(
        props.formContent.email,
        props.formContent.password
      )
      .then((res) => (userID = res.user.uid))
      .catch((error) => {
        props.handleFejlBesked(error.code);
        console.error(error);
        return;
      });
    //  try {
    //     firebase.doSignInWithEmailAndPassword(props.formContent.email, props.formContent.password)

    //  } catch (error) {
    //     console.error('signin-error:', error)
    //  }

    // give auth user a name
    await firebase
      .doUpdateAuthUser({
        displayName:
          props.formContent.fornavn + " " + props.formContent.efternavn,
      })
      .catch((error) => {
        props.handleFejlBesked(error.code);
        console.error(error);
        return;
      });

    //create user in Firestore DB - needs the right auth rules
    firebase
      .doCreateFirestoreUser(userID, {
        fornavn: props.formContent.fornavn,
        efternavn: props.formContent.efternavn,
        email: props.formContent.email,
        "reepay-customer-handle": props.formContent.customer_handle || "n/a",
        "reepay-subscription-handle":
          props.formContent.subscription_handle || "n/a",
        photoID: randomIntFromInterval(0,3)
      })
      .catch((error) => {
        props.handleFejlBesked(error.code);
        console.error(error.code);
        console.error(error);
        return;
      });
    props.setTilmeldStadie(3);
  };

  useEffect(() => {
    opretBrugerIFirebase();
  }, []);
  return <div>Opretter {props.formContent.fornavn} som bruger ...</div>;
}
