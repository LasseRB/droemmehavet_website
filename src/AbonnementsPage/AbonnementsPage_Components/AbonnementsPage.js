import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route, useHistory } from "react-router-dom";
import superhelteBG from '../../superhelteBG.png'
export default function AbonnementsPage() {
    return (
 
    // <img id="superhelteBG" src={superhelteBG}></img>    
    <div className="abonnement-container" >
            <h1>Vores abonnement</h1>
            <h2>Et hav af gode lyttehistorier venter dig</h2>
            <div className="abonnement-container-inner">
                <span id="line"></span>
                <h1>Beta-program</h1>
                {/*<h2>Gratis</h2>*/}
                <h2>Gratis medlemsskab indtil vi lancerer på app store</h2>

                {/*<ul>*/}
                {/*    <li>Gratis medlemsskab indtil vi lancere på app store</li>*/}
                {/*    <li>Opsig til hver en tid</li>*/}

                {/*</ul>*/}

                {/*<Link to='/tilmeld' className="FreeTrialButton">Tilmeld nu!</Link>*/}
            </div>
           
        </div>
    )
}
