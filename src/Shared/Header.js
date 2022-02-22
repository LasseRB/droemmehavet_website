import React, {useContext, useState, useEffect} from "react";
import {useLocation} from "react-router";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import {FirebaseContext} from "./Firebase";

export default function Header(props) {
    const [theme, setTheme] = useState(false);
    const firebase = useContext(FirebaseContext);
    const loc = useLocation();
    useEffect(() => {
        if (matchExact("/", loc.pathname)) {
            setTheme(false);
        } else {
            setTheme(true);
        }

        document.addEventListener("scroll", (e) => {
            if (window.scrollY > 100 && matchExact("/", loc.pathname)) {
                setTheme(true);
            }
            if (window.scrollY < 100 && matchExact("/", loc.pathname)) {
                setTheme(false);
            }
        });
    }, [loc]);

    const matchExact = (r, str) => {
        var match = str.match(r);
        return match && str === match[0];
    };
    return (
        <>
            <div className="header blue">
                <div className="headerButtonsContainer">
                    {/*<div className="tilbage">*/}
                    {/*    <input type="button" id="tilbageKnap" onInput={() => window.history.back()} value="Gå tilbage"/>*/}
                    {/*    <div id="tilbagePil"></div>*/}
                    {/*</div>*/}
                    <div className="logo">
                        <a href="https://droemmehavet.dk">
                            <h1>Drømmehavet</h1>
                        </a>
                    </div>
                    <div className="logind_header">
                    <div className="logind">
                        <a href="https://app.droemmehavet.dk" target="_blank" rel="noreferrer">
                            Log ind
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}
