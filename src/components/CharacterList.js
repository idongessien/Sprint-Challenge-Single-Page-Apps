import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => setChar(response.data.results))
    .catch(error => {
      console.log("The data was not returned", error);
}, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
})}
