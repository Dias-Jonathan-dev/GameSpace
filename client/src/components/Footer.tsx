import logoNoir from "../assets/images/LOGO-BLANC.svg";

function Footer() {
  return (
    <footer>
      <img src={logoNoir} alt="Gamespace Logo" className="logo" />
      <p>Copyright 2025</p>
      <a href="/mentions-legales">Mentions légales</a>
    </footer>
  );
}

export default Footer;
