import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route, useHistory } from "react-router-dom";

export default function AbonnementsPage() {
    return (
        <div className="abonnement-container">
            <h1>Vores abonnement</h1>
            <h2>Et hav af gode lyttehistorier venter dig</h2>
            <div className="abonnement-container-inner">
                <h1>Early-bird</h1>
                <h2> 49 kr.- om måneden</h2>
                <span id="line"></span>
                <ul>
                    <li>Ubegrænset medlemskab</li>
                    <li>3 måneder gratis </li>
                    <li>Opsig til hver en tid</li>

                </ul>

                <Link to='/tilmeld/1' className="FreeTrailButton">Tilmeld nu!</Link>
            </div>    
        </div>
    )
}
