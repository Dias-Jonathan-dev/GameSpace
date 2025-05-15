import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Game } from "../services/UseFetchGames";
import ButtonsPlatform from "./ButtonsPlatform";
import Footer from "./Footer";
import GameCard from "./GameCard";
import NavBar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

function CategoryButtons() {
  const { platformId } = useParams<string>();
  const [games, setGames] = useState<Game[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=95d7295d2a97423891de9826bea252cd&parent_platforms=${platformId}`,
        );
        const data = await response.json();

        const filteredResults = data.results.filter((game: Game) => {
          return (
            game.esrb_rating !== undefined &&
            game.esrb_rating !== null &&
            game.esrb_rating.id !== 5 &&
            Array.isArray(game.genres) &&
            game.genres.length > 0
          );
        });

        setGames(filteredResults);
        console.log("Jeux filtrés :", filteredResults);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [platformId]);

  const filteredGames = games.filter((game) => {
    const platforms =
      game.parent_platforms?.map((pf) => Number(pf.platform.id)) || [];
    return platforms.map((id) => platformId?.includes(id.toString()));
  });
  console.log(filteredGames);

  return (
    <nav>
      <NavBar />
      <ButtonsPlatform />
      <h2 className="titre-platform">voir les jeux</h2>
      <div className="card-container">
        {filteredGames.length > 0 ? (
          games.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <p>Aucun jeu trouvé pour cette recherche</p>
        )}
      </div>
      <ScrollToTop />
      <Footer />
    </nav>
  );
}

export default CategoryButtons;
