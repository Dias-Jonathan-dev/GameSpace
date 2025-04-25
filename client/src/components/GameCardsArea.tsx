import UseFetchGames from "../services/UseFetchGames";
import GameCard from "./GameCard";

function GameCardsArea() {
  const games = UseFetchGames();

  return (
    <div className="games-cards">
      {games.map((game) => (
        <div key={game.id}>
          <GameCard game={game} />
        </div>
      ))}
    </div>
  );
}

export default GameCardsArea;
