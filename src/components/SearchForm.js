import React/*, { useState, useEffect }*/ from "react";
//import axios from "axios";

export default function SearchForm(props) {

  /* const [searchWord, setSearchWord] = useState("");
  const [searchRes, setSearchRes] = useState([]); */

  /* useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => setSearchRes(response.data.results))
      .catch(error => {
        console.log("The data was not returned", error);
    });
    const results = searchRes.filter(query => { 
      console.log(char);
      return query.name.toLowerCase().includes(searchWord.toLowerCase())
    });
    setSearchRes(results);
  }, [searchWord]);

  const handleChange = e => {
    setSearchWord(e.target.value);
  }; */
 
  return (
    <section className="search-form">
     <div>
       <form>
         <input id="name" type="text" name="textbox" placeholder="Search" onChange={ props.handleChange } />
       </form>
     </div>
    </section>
  );
}
