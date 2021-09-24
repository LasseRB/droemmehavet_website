import React, {useContext, useEffect} from 'react'

import { FirebaseContext } from '../../Shared/Firebase'
import { BrowserRouter as Router, Switch, Link, Route, useHistory } from "react-router-dom";

export default function BrugerLoadingScreen(props) {
    const firebase = useContext(FirebaseContext);
    let history = useHistory();

    const opretBrugerIFirebase= () => {
         // create user in auth
         firebase.doCreateUserWithEmailAndPassword(props.formContent.email, props.formContent.password)
         .then(res => console.log('bruger oprettet!'))
         .catch(error => {
             props.handleFejlBesked(error.code)
             console.error(error)
             return
         })
         // give auth user a name
         firebase.doUpdateAuthUser({'displayName':props.formContent.fornavn + " " + props.formContent.efternavn})
         .catch(error => {
             props.handleFejlBesked(error.code)
             console.error(error)
             return
         })
        //  console.log(props.currentUser)
         const user = firebase.getCurrentUser()
         console.log(user)
         //create user in Firestore DB - needs the right auth rules
         firebase.doCreateFirestoreUser(
             user.uid, {
                'fornavn': props.formContent.fornavn, 
                'efternavn': props.formContent.efternavn, 
                'email': props.formContent.email, 
                'reepay-customer-handle':props.formContent.customer_handle || 'n/a' ,
                'reepay-subscription-handle': props.formContent.subscription_handle || "n/a"})
         .catch(error => {
             props.handleFejlBesked(error.code)
             console.error(error.code)
             console.error(error)
             return
         })
         history.push('/tilmeld/3')
    }

    useEffect(() => {
       opretBrugerIFirebase()
    }, [])
    return (
        <div>
            Opretter {props.formContent.fornavn} som bruger ...
        </div>
    )
}
