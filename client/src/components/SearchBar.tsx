/*import React, { useEffect, useState } from 'react';*/
import loupe_search from "../assets/images/loupe_search.svg";

function SearchBar() {
  /*const [data, setDatas] = useState([]);
    console.log(setDatas, data)*/
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Recherchez un jeux"
        name="SearchBar"
        id="SearchBar"
      />
      <img src={loupe_search} alt="loupe" />
    </div>
  );
}

export default SearchBar;
