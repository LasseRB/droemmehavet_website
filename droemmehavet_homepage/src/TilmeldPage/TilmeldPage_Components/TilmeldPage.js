import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import BrugerTilmelding from './BrugerTilmelding'
import BetalingsTilmelding from './BetalingsTilmelding'
import { FEJLBESKED } from './tilmeldingsfejlbeskeder'

export default function TilmeldPage(props) {
    const [fejlbesked, setFejlbesked] = useState('')
    const [formContent, setFormContent] = useState({
        'fornavn': '', 
        'efternavn':'',
        'email': '',
        'email2': '',
        'password': '',
        'password2': ''
        })

    // renderer fejlbeskeder på siden, på dansk
    const handleFejlBesked = (fejlKode) => {
        switch(fejlKode){
            case "auth/weak-password":  
                setFejlbesked(FEJLBESKED.WEAK_PASSWORD)
                break;
            case "auth/argument-error":
                setFejlbesked(FEJLBESKED.INVALID_EMAIL)
                break;
            case "auth/email-already-in-use":
                setFejlbesked(FEJLBESKED.EMAIL_ALREADY_EXIST)
                break;
            case "tilmelding/kode-mismatch":
                setFejlbesked(FEJLBESKED.PASSWORDS_NOT_IDENTICAL)
                break;
            case "tilmelding/email-mismatch":
                setFejlbesked(FEJLBESKED.EMAILS_NOT_IDENTICAL)
                break;
            case "tilmelding/navn-mangler":
                setFejlbesked(FEJLBESKED.MISSING_NAME)
                break;
            default:
                setFejlbesked("Der skete en fejl, prøv igen!")

        }
    }
    return (
        <div className="tilmeldContainer">
            <div className="fejlbesked">{fejlbesked}</div>
            <Switch>
            <Route path="/tilmeld/1">
                <BrugerTilmelding handleFejlBesked = { handleFejlBesked } setFormContent= { setFormContent } formContent= { formContent }/>
            </Route>
            <Route path="/tilmeld/2">
                <BetalingsTilmelding handleFejlBesked = { handleFejlBesked } currentUser = {props.currentUser} setFormContent= { setFormContent } formContent= { formContent }/>
            </Route>
            <Route path="/tilmeld/3">
                {fejlbesked.length == 0 &&
                <div className='succes-sign-up'>
                    <h1>Tillykke! du er nu medlem</h1>
                    <a href="app.droemmehavet.dk">Gå til drømmehavet</a>
                </div>                    
                    }
            </Route>
            </Switch>
        </div>
    )
}
