import React from "react";

export default function CharacterCard(props) {
  return (
  <div>
    <span>todo: character</span>
    <img src = { props.image } />
    <p>Name: { props.name }</p>
    <p>Status: { props.status }</p>
    <p>Gender: { props.gender }</p>
  </div>
  );
}
