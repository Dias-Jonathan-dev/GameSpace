import { useEffect, useState } from "react";
import { useParams } from "react-router";
import UseFetchGames from "../services/UseFetchGames";
import ButtonsPlatform from "./ButtonsPlatform";
import Footer from "./Footer";
import GameCard from "./GameCard";
import NavBar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

const platformNames: Record<string, string> = {
  "1": "PC",
  "2": "PlayStation",
  "3": "Xbox",
  "7": "Nintendo",
};

function CategoryButtons() {
  const { platformId } = useParams<{ platformId: string }>();
  const [platformName, setPlatformName] = useState<string>("");

  const games = UseFetchGames();

  useEffect(() => {
    if (!platformId) {
      setPlatformName("");
      return;
    }

    const firstId = platformId.split(",")[0];
    setPlatformName(platformNames[firstId] || "Plateforme inconnue");
  }, [platformId]);

  if (!games.length) return <p>Chargement des jeux...</p>;

  // tableau des ids plateformes depuis l'url
  const platformIds = platformId ? platformId.split(",") : [];

  const filteredGames = games.filter((game) =>
    game.parent_platforms?.some((pf) =>
      platformIds.includes(pf.platform.id.toString()),
    ),
  );

  return (
    <>
      <NavBar />
      <ButtonsPlatform />
      <div className="category-buttons">
        <h2>{platformName}</h2>
        <div className="games-container">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => <GameCard key={game.id} game={game} />)
          ) : (
            <p>Aucun jeu trouvé pour cette plateforme.</p>
          )}
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default CategoryButtons;
