import "../src/services/Reset.css";
import "./App.css";
import Footer from "./components/Footer";
import GameCardsArea from "./components/GameCardsArea";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import NewSection from "./components/NewSection";
import TopGames from "./components/TopGames";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <NewSection />
      <TopGames />
      <GameCardsArea />
      <Footer />
    </>
  );
}

export default App;
