import "../src/services/Reset.css";
import "./App.css";
import Categories from "./components/Category";
import Footer from "./components/Footer";
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
      <Categories />
      <TopGames />
      <Footer />
    </>
  );
}

export default App;
