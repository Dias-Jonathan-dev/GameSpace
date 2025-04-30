import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Category() {
  const { platformId } = useParams();

  const [_, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games?key=4bc0720168eb4f3a87dbdfbb61bc3461&parent_platforms=${platformId}`,
        );
        const data = await response.json();
        setGames(data.results);
        console.log(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [platformId]);

  return (
    <div>
      <h1>Category</h1>

      <p>Platform ID: {platformId}</p>
    </div>
  );
}

export default Category;
