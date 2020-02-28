import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header.js";


const App = () => {
  const [page, setPage] = useState(1);
  const [char, setChar] = useState([]);

  useEffect(() => {
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(response => console.log(response.data.results));
}, [page]);

    return (
        <div>
          <main>
      <Header />
    </main>
            <button>Previous</button>
            <button>Next</button>
        </div>
        );  
}

export default App;