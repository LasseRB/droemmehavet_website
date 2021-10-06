import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route, useHistory } from "react-router-dom";
import superhelteBG from '../../superhelteBG.png'
export default function AbonnementsPage() {
    return (
 
    // <img id="superhelteBG" src={superhelteBG}></img>    
    <div className="abonnement-container" style={{backgroundImage: `url(${superhelteBG})`}}>
            <h1>Vores abonnement</h1>
            <h2>Et hav af gode lyttehistorier venter dig</h2>
            <div className="abonnement-container-inner">
                <h1>Early-bird</h1>
                <h2> 49 kr.- om måneden</h2>
                <span id="line"></span>
                <ul>
                    <li>Ubegrænset medlemskab</li>
                    <li>resten af 2021 gratis</li>
                    <li>Opsig til hver en tid</li>

                </ul>

                <Link to='/tilmeld' className="FreeTrialButton">Tilmeld nu!</Link>
            </div>
           
        </div>
    )
}
