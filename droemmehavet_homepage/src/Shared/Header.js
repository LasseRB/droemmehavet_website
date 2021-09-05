import React from "react";

export default function Header() {
  return (
    <div className="header">
      <h1>Drømmehavet</h1>
      <div className="headerButtonsContainer">
        <button className="headerButton">webshop</button>
        <button className="headerButton">om os</button>
        <button className="headerButton">kontakt</button>
        <button id="logInButton">log in</button>
      </div>
    </div>
  );
}
