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
      <div id="secondContentContainer">
        <div id="tutorielText"> 
        <h1>At vero </h1>
        <h2>eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</h2>
        </div>
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
