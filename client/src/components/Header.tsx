import LogoBlanc from "../assets/images/LOGO-BLANC.svg";

function Header() {
  return (
    <header>
      <img src={LogoBlanc} alt="logo-gamespace" className="header-img" />
      <div className="header-text">
        <h1>GAMESPACE</h1>
        <p>
          Bienvenue sur GameSpace, ton nouveau terrain de jeu numérique !
          Découvre les dernières sorties, explore tous les styles de jeux, et
          trouve ta prochaine obsession vidéoludique parmi des centaines de
          titres triés sur le volet !
        </p>
      </div>
    </header>
  );
}

export default Header;
