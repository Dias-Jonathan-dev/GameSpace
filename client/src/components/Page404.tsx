import { Link } from "react-router";
import assasin from "../assets/images/erreur.png";
import Footer from "./Footer";
import NavBar from "./Navbar";

function Page404() {
  return (
    <div className="Page404">
      <NavBar />
      <img src={assasin} alt="Page404" className="img-assasin" />
      <Link to="/" className="back-home-link">
        Home
      </Link>
      <Footer />
    </div>
  );
}

export default Page404;
