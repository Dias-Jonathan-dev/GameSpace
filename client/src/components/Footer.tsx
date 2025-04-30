import { Link } from "react-router";
import logoNoir from "../assets/images/LOGO-BLANC.svg";

function Footer() {
  return (
    <footer>
      <Link to="/">
        <img src={logoNoir} alt="Gamespace Logo" className="logo" />
      </Link>
      <p>Copyright 2025</p>
      <Link to="/mentions-legales">Mentions légales</Link>
    </footer>
  );
}

export default Footer;
