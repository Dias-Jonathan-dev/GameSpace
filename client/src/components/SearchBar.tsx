import type React from "react";
import { useState } from "react";
import loupe_search from "../assets/images/loupe_search.svg";

type Game = {
  id: number;
  title: string;
};

const gameData: Game[] = [
  { id: 1, title: "FIFA 25" },
  { id: 2, title: "Call of Duty" },
  { id: 3, title: "Zelda" },
];
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 1) {
      setSearchTerm(value);
    } else {
      setSearchTerm("");
    }
  };

  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Recherchez un jeu"
          name="SearchBar"
          id="SearchBar"
          onChange={handleSearchTerm}
        />
        <img className="loupe" src={loupe_search} alt="loupe" />
      </div>
      <div className="search_result">
        {gameData
          .filter((val) =>
            val.title.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .map((val) => (
            <div className="search_result_item" key={val.id}>
              {val.title}
            </div>
          ))}
      </div>
    </>
  );
}

export default SearchBar;
