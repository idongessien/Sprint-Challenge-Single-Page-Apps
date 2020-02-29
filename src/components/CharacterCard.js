import React from "react";
import styled from "styled-components";

const IndivCards = styled.div`
  background: gray;
  padding: 2%;
  filter: drop-shadow(5px 5px 5px gray);
  border-radius: 10px;
`

export default function CharacterCard(props) {
  return (
  <IndivCards>
    <img src = { props.image } />
    <p>Name: { props.name }</p>
    <p>Status: { props.status }</p>
    <p>Gender: { props.gender }</p>
  </IndivCards>
  );
}
