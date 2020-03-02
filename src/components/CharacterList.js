import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

import CharacterCard from "./CharacterCard.js";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [char, setChar] = useState([]);
  const [searchWord, setSearchWord] = useState("")

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => setChar(response.data.results))
      .catch(error => {
        console.log("The data was not returned", error);
      });

      
  }, []);

  const handleChange = e => {
    setSearchWord(e.target.value)
  };

  const narrow = i => i.name.toLowerCase().includes(searchWord.toLowerCase())

  return (
    <div className="char-container">
      <SearchForm handleChange={handleChange} />
        <div className="character-list">
          { char.filter(narrow).map((chars, index) => (
            <CharacterCard
              name = { chars.name }
              status = { chars.status }
              gender = { chars.gender }
              image = { chars.image }
              key = { index }
              />
          ))}
        </div>
    </div>
  );
}