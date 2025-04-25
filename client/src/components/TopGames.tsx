import UseFetchGames from "../services/UseFetchGames";
import GameCard from "./GameCard";

function TopGames() {
  const games = UseFetchGames();

  const topRatedGames = [...games]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div>
      <h1 className="h1">Les mieux notés</h1>
      <ul className="topgames">
        {topRatedGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </ul>
    </div>
  );
}

export default TopGames;
