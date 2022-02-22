import React from 'react';
import Slot from "../../images/slot.png";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function Succes(props) {
    const { width, height } = useWindowSize()
    return (
        <div className="succes-sign-up" >
            <Confetti
                width={width}
                height={height}
            />
            <h1>Velkommen!</h1>
            <p id="firstBox">
                Du er nu oprettet som bruger hos drømmehavet, og kan lytte til
                ubegrænset drømmehavets eventyr.
            </p>
            <p id="secondBox">Klik på knappen for at komme til appen!</p>
            <div id="knap">
            <a href="https://app.droemmehavet.dk/" target="_blank" rel="noreferrer">
                <p>
                    Gå til <b>drømmehavet</b>
                </p>
            </a>
            </div>
            <img src={Slot} className="bgImages" id="slot"/>
        </div>
    );
}

export default Succes;