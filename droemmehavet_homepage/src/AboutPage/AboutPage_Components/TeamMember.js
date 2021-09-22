import React from "react";
import teamMemberPhoto from "../../Team_Member_Photo_placeholder.jpg";

export default function TeamMember() {
  return (
    <div className="TeamMember">
      <div id="imageHolder">
        <img src={teamMemberPhoto} />
        <p>
          Fringilla lacus. Nulla nec mollis mauris. Nam sit amet rhoncus libero.
          Nunc sit amet dolor ex. Latristique, fermentum dolor vitae, Curabitur
          justo eros.
        </p>
      </div>
    </div>
  );
}
