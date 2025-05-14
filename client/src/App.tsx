import "../src/services/Reset.css";
import "./App.css";
import ButtonsPlaform from "./components/ButtonsPlatform";
import Categories from "./components/Category";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import NewSection from "./components/NewSection";
import Pub from "./components/Pub";
import TopGames from "./components/TopGames";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <ButtonsPlaform />
      <NewSection />
      <Categories />
      <TopGames />
      <Pub />
      <Footer />
    </>
  );
}

export default App;
