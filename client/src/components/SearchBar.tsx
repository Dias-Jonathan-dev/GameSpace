/*import { useEffect, useState } from 'react';*/
import loupe_search from "../assets/images/loupe_search.svg";

function SearchBar() {
  /*const [data, setDatas] = useState([]);
    console.log(setDatas, data)*/
  return (
    <div className="Search">
      <input type="text" name="SearchBar" id="SearchBar" />
      <img src={loupe_search} alt="loupe" />
    </div>
  );
}

export default SearchBar;
