import React from "react";
import backgroundImg from "../../background.png";

export default function Frontpage() {
  return (
    <div className="frontpage">
      <div id="contentContainer">
        <h1>Velkommen til Drømmehavet</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
        <button className="FreeTrailButton">Prøv 3 måneder!</button>
      </div>
    </div>
  );
}
/* <img
        src={backgroundImg}
        alt="background image"
        className="frontpageTopImg"
      ></img> */
