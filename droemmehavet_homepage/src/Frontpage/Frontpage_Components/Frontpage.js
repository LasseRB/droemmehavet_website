import React from "react";
import Pil from "../Frontpage_StyleComponents/Pil.png";
import AudioPlayer from "./AudioPlayer";

export default function Frontpage() {
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
          <button className="FreeTrailButton">Tilmeld nu!</button>
        </div>
      </div>
      <div id="secondContentContainer">
        <div id="tutorielText">
          <h1>Lyt til historier!</h1>
          <h2>
            På ´Eventyrøen´ har Troldmanden fået en ny lærling, Karla. <br />{" "}
            Han har også et tæppe, der kan flyve...
          </h2>
          <h3>Hør historien her!</h3>
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
    </div>
  );
}
/* <img
        src={backgroundImg}
        alt="background image"
        className="frontpageTopImg"
      ></img> */
