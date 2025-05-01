import { useEffect, useState } from "react";
import UseFetchGames from "../services/UseFetchGames";
import type { Game } from "../services/UseFetchGames";

function NewSection() {
  const [mainImage, setMainImage] = useState<Game | null>(null);
  const games = UseFetchGames();
  const sortedGames = games
    .sort(
      (a, b) => new Date(b.released).getTime() - new Date(a.released).getTime(),
    )
    .slice(0, 9);

  useEffect(() => {
    if (sortedGames.length > 0) {
      setMainImage(sortedGames[0]);
    }
  }, [games]);

  return (
    <>
      <section className="news-section">
        <h2>Les nouveautés</h2>
        <h3>{mainImage?.name}</h3>
        <div className="news-galery">
          <div className="main-image-news-galery">
            <img src={mainImage?.background_image} alt={mainImage?.name} />
          </div>
          <div className="thumbnails-news-galery">
            {sortedGames.map((game) => (
              <img
                onKeyUp={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setMainImage(game);
                  }
                }}
                key={game.id}
                src={game.background_image}
                alt={game.name}
                onClick={() => setMainImage(game)}
                className={
                  mainImage?.id === game.id ? "news-active-thumbnail" : ""
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewSection;
