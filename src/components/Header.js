import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

export default function Header() {
  return (
    <header>
      <Heading>Rick &amp; Morty Fan Page</Heading>
    </header>
  );
}
