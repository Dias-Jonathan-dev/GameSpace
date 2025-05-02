import { Link } from "react-router";
import Footer from "./Footer";
import NavBar from "./Navbar";
import assassin from "../assets/images/assassin.png";

function Page404() {
  return (
    <>
      <NavBar />
      <div className="Page404">
        <div className="Error-txt">
          <h1>ERROR 404</h1>
          <p>La page que vous cherchez n'existe pas</p>
        </div>
        <img src={assassin} alt="" />
        <Link to="/" className="back-home-link">
          Home
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default Page404;
