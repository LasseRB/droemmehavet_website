import React, {useContext, useState} from "react";
import {Redirect} from "react-router-dom";

import BrugerTilmelding from "./BrugerTilmelding";
import BetalingsTilmelding from "./BetalingsTilmelding";
import {FEJLBESKED} from "./tilmeldingsfejlbeskeder";
import Fiskestime from '../../images/stime.png'
import {reepay} from "../../Shared/Reepay/reepay";
import BrugerLoadingScreen from "./BrugerLoadingScreen";
import { FirebaseContext } from "../../Shared/Firebase";
export default function TilmeldPage(props) {
    const [fejlbesked, setFejlbesked] = useState("");
    const [tilmeldStadie, setTilmeldStadie] = useState({current: 1});
    const [formContent, setFormContent] = useState({
        fornavn: "",
        efternavn: "",
        email: "",
        email2: "",
        password: "",
        password2: "",
        acceptAfVilkaar: true,
        kuponkode: ""
    });
    const firebase = useContext(FirebaseContext);

    // renderer fejlbeskeder på siden, på dansk
    const handleFejlBesked = (fejlKode) => {
        switch (fejlKode) {
            case "fixet error":
                setFejlbesked(" ");
                break;
            case "auth/weak-password":
                setFejlbesked(FEJLBESKED.WEAK_PASSWORD);
                break;
            case "auth/argument-error":
                setFejlbesked(FEJLBESKED.INVALID_EMAIL);
                break;
            case "auth/email-already-in-use":
                setFejlbesked(FEJLBESKED.EMAIL_ALREADY_EXIST);
                break;
            case "tilmelding/kode-mismatch":
                setFejlbesked(FEJLBESKED.PASSWORDS_NOT_IDENTICAL);
                break;
            case "tilmelding/email-mismatch":
                setFejlbesked(FEJLBESKED.EMAILS_NOT_IDENTICAL);
                break;
            case "tilmelding/navn-mangler":
                setFejlbesked(FEJLBESKED.MISSING_NAME);
                break;
            default:
                setFejlbesked("Der skete en fejl, prøv igen!");
        }
    };

    return (
        <>
            <div className="tilmeldContainer">
                <div className={fejlbesked.length > 0 ? "error" : "error hidden"}>{fejlbesked}</div>
                <div className="infobox">
                    <h1>Early bird abonnement</h1>
                    Du er ved at skrive dig op til vores månedlige abonnement!
                    <ul>
                        <li>trin
                        </li>
                        <li>trin
                        </li>
                    </ul>

                    <div id="divider"></div>

                    <p>Næste betaling</p>

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

                    {tilmeldStadie.current == 1 && (
                        <BrugerTilmelding
                            handleFejlBesked={handleFejlBesked}
                            setFormContent={setFormContent}
                            formContent={formContent}
                            setTilmeldStadie={setTilmeldStadie}
                        />
                    )}

                    {tilmeldStadie.current == 2 &&
                    <BrugerLoadingScreen handleFejlBesked={handleFejlBesked} formContent={formContent}
                                         setTilmeldStadie={setTilmeldStadie}/>
                    }

                    {/*// <div onClick={() => window.history.back()}> <div id="tilbageTekst">Gå tilbage</div> <div id="tilbagePil"></div></div>}*/}
                    {/*// (*/}
                    {/*//     <BetalingsTilmelding*/}
                    {/*//         handleFejlBesked={handleFejlBesked}*/}
                    {/*//         currentUser={props.currentUser}*/}
                    {/*//         setFormContent={setFormContent}*/}
                    {/*//         formContent={formContent}*/}
                    {/*//         setTilmeldStadie={setTilmeldStadie}*/}
                    {/*//     />*/}
                    {/*// )}*/}
                </div>
                eller <input type="button" value="log ind"/>
                {tilmeldStadie.current == 3 && (
                    <Redirect to="/velkommen"/>
                )}
                <img src={Fiskestime} className="bgImages" id="fiskestime"/>
            </div>
        </>

    );
}
