import React from "react";
import teamMemberPhoto from "../../Team_Member_Photo_placeholder.jpg";

export default function TeamMembers(props) {
  const teamMemberArray = [
    {
      type: "Nikolaj Mollerup",
      img: teamMemberPhoto,
      name: "navn",
      text: "Fringilla lacus. Nulla nec mollis mauris. Nam sit amet rhoncus libero. Nunc sit amet dolor ex. Latristique, fermentum dolor vitae, Curabitur justo eros.",
    },
    {
      type: "Esther Rützou",
      img: teamMemberPhoto,
      name: "navn",
      text: "er forfatter og fortæller. Alle historier er opstået i Esthers krøllede hjerne, og det er også Esthers stemme, I hører, når lytter til historierne. Esther tager sig i øvrigt af de forskellige administrative opgaver i Drømmehavet. esther@droemmehavet.dk",
    },
    {
      type: "Lasse Rützou Bruntse",
      img: teamMemberPhoto,
      name: "navn",
      text: "core text",
    },
    {
      type: "member",
      img: teamMemberPhoto,
      name: "navn",
      text: "member text",
    },
    {
      type: "member",
      img: teamMemberPhoto,
      name: "navn",
      text: "member text",
    },
    {
      type: "member",
      img: teamMemberPhoto,
      name: "navn",
      text: "member text",
    },
  ];

  const createTeamMember = teamMemberArray.map((member) => {
    console.log(props.type == member.type, props.type, member.type);
    if (props.type == member.type) {
      return (
        <li className="TeamMember">
          <img src={member.img} />
          <h1>{member.name} </h1>
          <p>{member.text}</p>
        </li>
      );
    }
  });

  return (
    <>
      <ul>{createTeamMember}</ul>
    </>
  );
}
