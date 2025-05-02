import { useEffect, useState } from "react";

type Genre = {
  id: number;
  name: string;
  image_background: string;
};

const Categories = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          "https://api.rawg.io/api/genres?key=4bc0720168eb4f3a87dbdfbb61bc3461",
        );
        const data = await response.json();
        console.log(data.results);
        setGenres(data.results); // ajuste selon la réponse réelle
      } catch (err) {
        setError("Erreur lors du chargement ");
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="genres-list">
      {genres?.map((genre) => (
        <div key={genre.id} className="genre-item">
          <img
            src={genre.image_background}
            alt={genre.name}
            className="genre-image"
          />
          <h2 className="genre-name">{genre.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Categories;
