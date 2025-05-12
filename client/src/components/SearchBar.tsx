import type React from "react";
import { useEffect, useState } from "react";
import loupe_search from "../assets/images/loupe_search.svg";
import type { Game } from "../services/UseFetchGames";

function SearchBar() {
  const [games, setGames] = useState<Game[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    async function fetchGames() {
      try {
        const res = await fetch(
          "https://api.rawg.io/api/games?key=c2c6c63b04bb4cd499f80941c741a62e",
        );
        const data = await res.json();
        setGames(data.results);
      } catch (error) {
        console.error("failed to fetch games");
      }
    }
    fetchGames();
  }, []);
  const filteredGames = games.filter((game) =>
    searchTerm
      ? game.name.toLowerCase().includes(searchTerm.toLowerCase())
      : false,
  );
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
      <div className="games-cards">
        {filteredGames.map((game) => (
          <div key={game.id} />
        ))}
      </div>
    </>
  );
}

export default SearchBar;
