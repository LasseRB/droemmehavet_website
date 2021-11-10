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
            om måneden. 
            <span className="tilbud"> Gratis medlemsskab</span> indtil nytår!
          </h2>
          <a href='https://droemmehavet.dk/tilmeld' className="FreeTrailButton">Tilmeld nu!</a>
        </div>
      </div>
      <div id="secondContentContainer">
      <h2 id="NyeFortaellinger"> Nye fortællinger hver måned!</h2>
        <div id="tutorielText">
          <h1>Lyt til historier!</h1>
          <p>
            På ´Eventyrøen´ har Troldmanden fået en ny lærling, Karla. <br />{" "}
            Han har også et tæppe, der kan flyve...
          </p>
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
