import type { Game } from "../services/UseFetchGames";
import GameCard from "./GameCard";

interface SearchResultsProps {
  searchTerm: string;
  games: Game[];
}

function SearchResults({ searchTerm, games }: SearchResultsProps) {
  const filteredGames = games.filter((game: Game) =>
    searchTerm
      ? game.name.toLowerCase().includes(searchTerm.toLowerCase())
      : false,
  );
  return filteredGames.length ? (
    <div className="games-cards">
      {filteredGames.map((game: Game) => (
        <div key={game.id}>
          <GameCard game={game} />
        </div>
      ))}
    </div>
  ) : null;
}

export default SearchResults;
