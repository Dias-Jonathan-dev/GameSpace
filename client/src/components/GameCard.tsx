import UseFetchGames from "../services/UseFetchGames";

function GameCard() {
  const games = UseFetchGames();

  return (
    <div className="games-cards">
      {games.map((game) => (
        <div key={game.id} className="card-body">
          <div className="card-img">
            <img src={game.background_image} alt={game.name} />
          </div>
          <div className="card-info">
            <h3>{game.name}</h3>
            <h4>{game.genres[0].name}</h4>
            <div className="platforms">
              {game.parent_platforms.map((elem) => (
                <p key={elem.platform.id}>{elem.platform.name}</p>
              ))}
            </div>
            <p className="rate">
              {game.rating}/{game.rating_top}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GameCard;
