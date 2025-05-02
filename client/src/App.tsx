import "../src/services/Reset.css";
import "./App.css";
import Categories from "./components/Category";
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
      <Categories />
      <TopGames />
      <GameCardsArea />
      <Footer />
    </>
  );
}

export default App;
