import "./App.css";
import GameCardsArea from "./components/GameCardsArea";
import NavBar from "./components/Navbar";
import TopGames from "./components/TopGames";

function App() {
  return (
    <>
      <NavBar />
      <TopGames />
      <h2>Nos jeux</h2>
      <GameCardsArea />
    </>
  );
}

export default App;
