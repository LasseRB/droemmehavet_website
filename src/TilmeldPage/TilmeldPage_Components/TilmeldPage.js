import React, {useContext, useState} from "react";
import {Redirect} from "react-router-dom";

import BrugerTilmelding from "./BrugerTilmelding";
import AbonnementsPage from "../../AbonnementsPage/AbonnementsPage_Components/AbonnementsPage"
import {FEJLBESKED, FORM} from "../../Shared/Constans";
import Fiskestime from '../../images/stime.png'
import BrugerLoadingScreen from "./BrugerLoadingScreen";
import { FirebaseContext } from "../../Shared/Firebase";


export default function TilmeldPage(props) {
    const [fejlbesked, setFejlbesked] = useState("");
    const [tilmeldStadie, setTilmeldStadie] = useState({current: 3});

    const [formContent, setFormContent] = useState({
        navn: {[FORM.STATE]: "", [FORM.VAERDI]: "", [FORM.ERRORMSG]: ""},
        email: {[FORM.STATE]: "", [FORM.VAERDI]: "", [FORM.ERRORMSG]: ""},
        password: {[FORM.STATE]: "", [FORM.VAERDI]: "", [FORM.ERRORMSG]: ""},
        password2: {[FORM.STATE]: "", [FORM.VAERDI]: "", [FORM.ERRORMSG]: ""},
        kuponkode: {[FORM.STATE]: "", [FORM.VAERDI]: "", [FORM.ERRORMSG]: ""}
    });


    const firebase = useContext(FirebaseContext);

    // renderer fejlbeskeder på siden, på dansk

    return (
        <>
            <div className="tilmeldContainer">
                {tilmeldStadie.current == 3 ?
                    <Redirect to="/velkommen"/>
                    : null}

                <div className={fejlbesked.length > 0 ? "error" : "error hidden"}>{fejlbesked}</div>
                <div className="infobox">
                   <AbonnementsPage />

                </div>
                <div className="bruger-input-container">
                    <div id="steps">
                        <ul>
                            <li><input type="button" onClick={() => setTilmeldStadie({current: 1})}
                                       disabled={tilmeldStadie.current !== 1}
                                       value={"Profil"}/></li>
                            <li><input type="button" onClick={() => setTilmeldStadie({current: 2})}
                                       disabled={tilmeldStadie.current !== 2}
                                       value={"Betalingsoplysninger"}/></li>
                            <li><input type="button" onClick={() => setTilmeldStadie({current: 3})}
                                       disabled={tilmeldStadie.current !== 3}
                                       value={"Succes"}/></li>
                        </ul>
                    </div>
                        <BrugerTilmelding
                            setFormContent={setFormContent}
                            formContent={formContent}
                            setTilmeldStadie={setTilmeldStadie}
                            tilmeldStadie={tilmeldStadie}
                        />
                    <div className="logind_container"> <p> eller </p><div className="logind"><a href="https://app.droemmehavet.dk" target="_blank">Log ind</a></div></div>
                </div>


                <img src={Fiskestime} className="bgImages" id="fiskestime"/>
            </div>
        </>

    );
}

