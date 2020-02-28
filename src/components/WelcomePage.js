import React from "react";

export default function WelcomePage() {
  return (
    <section>
      <div className="welcome-page">
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </div>
    </section>
  );
}
