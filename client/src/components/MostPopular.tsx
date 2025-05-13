import UseFetchGames from "../services/UseFetchGames";
import GameCard from "./GameCard";

function MostPopular() {
  const games = UseFetchGames();

  const topRatedGames = [...games]
    .sort((a, b) => b.suggestions_count - a.suggestions_count)
    .slice(0, 20);

  return (
    <div className="topgames-container">
      <h2>Les plus populaires</h2>
      <ul className="topgames">
        {topRatedGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </ul>
    </div>
  );
}

export default MostPopular;
