import React from "react";
import "../index.css";
import styled from "styled-components";

const Overlay = styled.div`
  background: rgba(256, 256, 256, 0.7);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 5rem;
  letter-spacing: -7px;
  filter: drop-shadow(5px 5px 5px gray);
`

export default function WelcomePage() {
  return (
      <div className="welcome-page">
        <Overlay>
        <Title>Welcome to the ultimate fan site!</Title>
        </Overlay>
      </div>
  );
}
