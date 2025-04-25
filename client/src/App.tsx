import "./App.css";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import NavBar from "./components/Navbar";
import Page404 from "./components/Page404";

function App() {
  return (
    <>
      <NavBar />
      <GameCard />
      <Footer />
      <Page404 />
    </>
  );
}

export default App;
