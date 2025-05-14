import type React from "react";
import type { Dispatch, SetStateAction } from "react";
import loupe_search from "../assets/images/loupe_search.svg";

interface SearchBarProps {
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

function SearchBar({ setSearchTerm }: SearchBarProps) {
  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 1) {
      setSearchTerm(value);
    } else {
      setSearchTerm("");
    }
  };

  return (
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
  );
}

export default SearchBar;
