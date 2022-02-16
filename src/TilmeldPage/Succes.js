import React from 'react';

function Succes(props) {
    return (
        <div className="succes-sign-up">
            <h1>Tillykke!</h1>
            <p id="firstBox">
                Du er nu oprettet som bruger hos drømmehavet, og kan lytte til
                ubegrænset drømmehavets eventyr.
            </p>
            <p id="secondBox">Skynd dig ud og oplev drømmehavets fortællinger!</p>
            <a href="https://app.droemmehavet.dk/">
                <p>
                    Gå til <b>drømmehavet</b>
                </p>
            </a>
        </div>
    );
}

export default Succes;