import "../src/services/Reset.css";
import "./App.css";
import ButtonsPlaform from "./components/ButtonsPlatform";
import Footer from "./components/Footer";
import GameCardsArea from "./components/GameCardsArea";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import TopGames from "./components/TopGames";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <ButtonsPlaform />
      <TopGames />
      <h2>Nos jeux</h2>
      <GameCardsArea />
      <Footer />
    </>
  );
}

export default App;
