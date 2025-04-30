import { useEffect, useState } from "react";

export interface Game {
  id: number;
  name: string;
  description: string;
  released: string;
  background_image: string;
  rating: number;
  rating_top: number;
  suggestions_count: number;
  parent_platforms: { platform: { name: string; id: string } }[];
  genres: { name: string; image_background: string }[];
  esrb_rating: { name: string };
  short_screenshots: { image: string }[];
}

function UseFetchGames() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "https://api.rawg.io/api/games?key=4bc0720168eb4f3a87dbdfbb61bc3461",
        );
        const data = await response.json();
        setGames(data.results);
      } catch (error) {
        console.error("Erreur lors du fetch :", error);
      }
    };

    fetchGames();
  }, []);

  return games;
}

export default UseFetchGames;
