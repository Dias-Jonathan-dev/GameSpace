import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import NintendoIcon from "../assets/images/platforms/NintendoIcon.svg";
import PcIcon from "../assets/images/platforms/PcIcon.svg";
import PsIcon from "../assets/images/platforms/PsIcon.svg";
import XboxIcon from "../assets/images/platforms/XboxIcon.svg";
import type { Game } from "../services/UseFetchGames";

function Pub() {
  const [game, setGame] = useState<Game | null>(null);
  const gameId = 58175;

  const platformIcons: PlatformIconsType = {
    PC: PcIcon,
    Xbox: XboxIcon,
    PlayStation: PsIcon,
    Nintendo: NintendoIcon,
  };

  function isPlatformKey(key: string): key is keyof PlatformIconsType {
    return key in platformIcons;
  }

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${gameId}?key=95d7295d2a97423891de9826bea252cd`,
        );
        const data = await response.json();
        console.log("Données jeu reçues:", data); // Debug
        setGame(data);
      } catch (error) {
        console.error("Erreur lors du chargement du jeu", error);
      }
    };

    fetchGame();
  }, []);

  if (!game) {
    return <p>Chargement du jeu...</p>;
  }

  return (
    <section
      className="pub"
      style={{
        backgroundImage: `url(${game.background_image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="pub-text">
        <h2>{game.name ?? "Nom indisponible"}</h2>
        <h3>{game.genres?.[0]?.name ?? "Genre indisponible"}</h3>
        <div className="platforms">
          {game.parent_platforms
            ?.filter((elem) => isPlatformKey(elem.platform.name))
            .map((elem) => (
              <img
                key={elem.platform.id}
                src={
                  platformIcons[elem.platform.name as keyof PlatformIconsType]
                }
                alt={elem.platform.name}
              />
            ))}
        </div>
        <p>{game.rating ? `${game.rating}/5` : "Note indisponible"}</p>
        {game.id ? (
          <Link to={`/jeu/${game.id}`} className="pub-button">
            Découvrir
          </Link>
        ) : (
          <p>Chargement du lien...</p>
        )}

      </div>
    </section>
  );
}

export default Pub;
