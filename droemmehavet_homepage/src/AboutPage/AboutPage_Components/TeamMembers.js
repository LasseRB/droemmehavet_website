import React from "react";
import teamMemberPhoto from "../../Team_Member_Photo_placeholder.jpg";

export default function TeamMembers(props) {
  const teamMemberArray = [
    {
      type: "core",
      img: teamMemberPhoto,
      text: "Fringilla lacus. Nulla nec mollis mauris. Nam sit amet rhoncus libero. Nunc sit amet dolor ex. Latristique, fermentum dolor vitae, Curabitur justo eros.",
    },
    {
      type: "core",
      img: teamMemberPhoto,
      text: "core text",
    },
    {
      type: "core",
      img: teamMemberPhoto,
      text: "core text",
    },
    {
      type: "member",
      img: teamMemberPhoto,
      text: "member text",
    },
    {
      type: "member",
      img: teamMemberPhoto,
      text: "member text",
    },
    {
      type: "member",
      img: teamMemberPhoto,
      text: "member text",
    },
  ];

  const createTeamMember = teamMemberArray.map((member) => {
    console.log(props.type == member.type, props.type, member.type);
    if (props.type == member.type) {
      return (
        <li className="TeamMember">
          <img src={member.img} />
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
