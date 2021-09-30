import React from "react";
import cloud_TopLeft from "../About_illustations/top-left.png";
import cloud_TopRight from "../About_illustations/top-right.png";
import cloud_bottomLeft from "../About_illustations/bottom-left.png";
import cloud_bottomRight from "../About_illustations/bottom-right.png";
import stime from "../About_illustations/stime.png";
import TeamMembers from "./TeamMembers";

export default function AboutPage() {
  return (
    <div id="aboutPage" className="ikke-frontpage">
      <img id="topRightCloud" src={cloud_TopRight} />

      <img id="bottonLeftCloud" src={cloud_bottomLeft} />
      <img id="stime" src={stime} />
      <div id="container1">
        <h1>
          Drømmehavet er en platform med lytte-historier til børn fra 4 – 8 år.
          Lyttehistorier! For nogle gange skal øjnene have fri. Nogle gange skal
          hjernen have lov til selv at danne billeder, mens man lytter.
        </h1>
        <p>
          Alle historier foregår i det samme univers – Drømmehavet. Her ligger
          de magiske øer: Superhelteøen, Eventyrøen, Monsterøen. Lige om lidt
          kommer der også en Dinosaurø og en hemmelig adgang til Havfolkets
          Rige. På den måde ved forældrene, hvilken slags historier, børnene kan
          komme til at lytte til.
        </p>
        <p>
          Og børnene kan selv navigere rundt og finde de historier, det gerne
          vil høre. Vælg en ø – og vælg den figur, du vil høre historie om. Og
          så – læn dig tilbage og lyt! Lyt til historierne, mens I tegner. Eller
          bygger med Lego. Eller bare ligger på sofaen og slapper lidt af. Eller
          brug historierne som en ekstra godnat-historie. En stemme, man kan
          lytte til, mens man stille falder i søvn.
        </p>
      </div>
      <div id="container2">
        <h1>Teamet</h1>
        <TeamMembers type={"core"} />
      </div>
      <div id="container3">
        <h1>Illustratorer</h1>
        {<TeamMembers type="member" />}
        <img id="bottonRightCloud" src={cloud_bottomRight} />
      </div>
    </div>
  );
}
