import React from "react";
import styled from "styled-components";

const IndivCards = styled.div`
  background: gray;
  padding: 2%;
  filter: drop-shadow(5px 5px 5px gray);
  border-radius: 10px;
  width: 20%;
  margin: 2% auto;
`
const Images = styled.img`
  border-radius: 10px;
  width: 100%;
`

export default function CharacterCard(props) {
  return (
  <IndivCards>
    <Images src = { props.image } />
    <p>Name: { props.name }</p>
    <p>Status: { props.status }</p>
    <p>Gender: { props.gender }</p>
  </IndivCards>
  );
}
