import React from "react";
import { BrowserRouter as Router, Switch, Link, Route, useHistory } from "react-router-dom";
import AbonnementsPage from '../../AbonnementsPage/AbonnementsPage_Components/AbonnementsPage'
import Pil from "../Frontpage_StyleComponents/Pil.png";
import AudioPlayer from "./AudioPlayer";

export default function Frontpage(props) {
  return (
    <div className="frontpage">
      <div id="contentContainer">
        <div id="textContainer">
          <h1>Velkommen til et univers af lydfortællinger for børn</h1>
          <h2>
            <span className="tilbud">49kr. </span>
            om måneden. Tilmeld inden den
            <span className="tilbud"> 1. november</span> og få resten af året
            gratis!
          </h2>
          <Link to='https://app.droemmehavet.dk/' className="FreeTrailButton">Tilmeld nu!</Link>
        </div>
      </div>
      <div id="secondContentContainer">
        <div id="tutorielText">
          <h1>Lyt til historier!</h1>
          <h2>
            På ´Eventyrøen´ har Troldmanden fået en ny lærling, Karla. <br />{" "}
            Han har også et tæppe, der kan flyve...
          </h2>
          <h3>Hør en bid af historien her!</h3>
        </div>
        <img id="pil" scr={Pil} />
        <AudioPlayer />
        <figure id="imgContainer">
          <img
            id="exampleImg"
            src="https://firebasestorage.googleapis.com/v0/b/droemmehavet-1aa53.appspot.com/o/islands%2Feventyr%C3%B8en%2FBG-lowres.jpg?alt=media&"
          />
        </figure>
      </div>
      <div id="thirdContentContainer">
        <AbonnementsPage />
      </div>
    </div>
  );
}
/* <img
        src={backgroundImg}
        alt="background image"
        className="frontpageTopImg"
      ></img> */
