import React from "react";
import TeamMember from "./TeamMember";

export default function AboutPage() {
  return (
    <div id="aboutPage">
      <div id="container1">
        <h1>
          Drømmehavet Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc quis odio ac arcu varius blandit eu et erat.
        </h1>
        <p id="p1">
          Latristique, fermentum dolor vitae, fringilla lacus. Nulla nec mollis
          mauris. Nam sit amet rhoncus libero. Nunc sit amet dolor ex. Phasellus
          posuere fringilla fringilla. Praesent nec risus sed eros imperdiet
          luctus. Pellentesque sit amet libero vel mi mollis volutpat. Aliquam
          maximus nulla a tristique mollis. Maecenas a justo ornare massa
          posuere
        </p>
        <p id="p2">
          ceposuere fringilla fringilla. Praesent nec risus sed eros imperdiet
          luctus. Pellentesque sit amet libero vel mi mollis volutpat. Aliquam
          maximus nulla a tristique mollis. Maecenas a jus vel mi mollis
          volutpat. Aliquam maximus nulla a tristique mollis.
        </p>
      </div>
      <div id="container2">
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </div>

      <div id="container3"></div>
    </div>
  );
}
