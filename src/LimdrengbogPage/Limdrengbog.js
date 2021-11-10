import React from 'react'
import bog from "./bog.jpg"
export default function Limdrengbog() {
    return (
        <div id="limdrengen-content">
   
        <span class="content-inner">
        <h2>Dengang jeg opdagede drømmehavet</h2>
            <div class="lydbog-content">
                <img id="bog" src= {bog} alt="Dengang jeg opdagede drømmehavet" />
               
                </div>
            </span>
            <div class="lyt">
                    <audio class="audio" controls src="https://firebasestorage.googleapis.com/v0/b/droemmehavet-1aa53.appspot.com/o/droemmehavet_webpage%2Faudiofiles%2FDengang%20jeg%20opdagede%20Dr%C3%B8mmehavet.mp3?alt=media"></audio>
            </div>
        </div>
    )
}
