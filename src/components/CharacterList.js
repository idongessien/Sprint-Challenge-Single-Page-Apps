import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";

export default function CharacterList() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/?page=1")
    .then(response => setChar(response.data.results))
    .catch(error => {
      console.log("The data was not returned", error);
});
  }, []);

  return (
    <section className="character-list">
        <div>
          { char.map((chars, index) => (
            <CharacterCard
              name = { chars.name }
              status = { chars.status }
              gender = { chars.gender }
              image = { chars.image }
              key = { index }
              />
          ))}
        </div>
    </section>
  );
}