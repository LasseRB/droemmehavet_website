import React from "react";
import teamMemberPhoto from "../Member_Photos/Team_Member_Photo_placeholder.jpg";
import Esther from "../Member_Photos/Esther.jpg";
import LasseRützouBruntse from "../Member_Photos/Lasse_Rützou_Bruntse.jpg";
import AnneHobergOvergaard from "../Member_Photos/Anne_Hoberg_Overgaard.jpg";
import CorentinMonnier from "../Member_Photos/Corentin_Monnier.jpg";
import LauraHøjbergKunov from "../Member_Photos/Laura_Højberg_Kunov.jpg";

export default function TeamMembers(props) {
  const teamMemberArray = [
    {
      type: "core",
      img: teamMemberPhoto,
      name: "Nikolaj Mollerup",
      title: "Medstifter, Softwareudvikler og Lyddesigner",
      text: " ",
    },
    {
      type: "core",
      img: Esther,
      name: "Esther Rützou",
      title: "Medstifter, Forfatter og Fortæller",
      text: " ",
      // Esther Rützou er forfatter og fortæller. Alle historier er opstået i Esthers krøllede hjerne, og det er også Esthers stemme, I hører, når lytter til historierne. Esther tager sig i øvrigt af de forskellige administrative opgaver i Drømmehavet. esther@droemmehavet.dk",
    },
    {
      type: "core",
      img: LasseRützouBruntse,
      name: "Lasse Rützou Bruntse",
      title: "Medstifter, Softwareudvikler og Animator",
      text: " ",
    },
    {
      type: "member",
      img: AnneHobergOvergaard,
      name: "Anne Hoberg Overgård",
      title: "Illustrator, Underviser, Art mentor og Storyteller ",
      text: " ",
      //"Anne Hoberg er en dansk illustrator, underviser, art mentor og storyteller. Hendes kunst er rodfæstet i stor kærlighed til alt det hyggelige, naturen, personlig udvikling og sjov og fantasi. Hun har en Bachelor of Arts i Character Animation fra Animation Workshop i Danmark, hvor hun blandt andet lærte om historiefortælling, design og udførelse i at lave animationsfilm. Hun har siden arbejdet på mange forskellige projekter, og i dag driver hun sit eget firma Anne Hoberg Illustration, der kombinerer det, hun har lært gennem årene, for at lave kunst, der skaber lykke, skønhed og solskin for alle. Derudover er hun også en erfaren underviser og elsker at være en del af andres læringserfaring og kunstneriske udvikling. Når hun ikke skaber kunst eller underviser, kan du finde hende hjemme i sit hus ved skoven, hvor hun går lange ture, dyrker yoga eller klapper sin kanin.",
    },
    {
      type: "member",
      img: LauraHøjbergKunov,
      name: "Laura Højberg Kunov",
      title: "Illustrator og Animator",
      text: " ",
    },
    {
      type: "member",
      img: CorentinMonnier,
      name: "Corentin Monnier",
      title: "Illustrator og Animator",
      text: " ",
    },
  ];

  const createTeamMember = teamMemberArray.map((member) => {
    // console.log(props.type == member.type, props.type, member.type);
    if (props.type == member.type) {
      return (
        <li className="TeamMember">
          <h2>{member.name} </h2>
          <div className="imgContainer">
            <img src={member.img} />
          </div>
          <h3>{member.title}</h3>
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
