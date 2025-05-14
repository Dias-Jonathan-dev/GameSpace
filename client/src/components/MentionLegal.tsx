import Footer from "./Footer";
import NavBar from "./Navbar";

function Mention() {
  return (
    <div className="mention-legales-page">
      <NavBar />
      <div className="Mention-legales">
        <h1> Mentions Légales</h1>
        <h3>Éditeur du site</h3>
        <p>
          Le présent site est édité par : <br />
          <strong>Nom de l'entreprise / Nom du propriétaire :</strong> Ton Nom
          ou Raison Sociale <br />
          <strong>Adresse :</strong> Ton Adresse Postale <br />
          <strong>Téléphone :</strong> Ton Numéro <br />
          <strong>Email :</strong> Ton Email de Contact <br />
          <strong>SIRET :</strong> Ton numéro SIRET si entreprise <br />
          <strong>Directeur de la publication :</strong> Ton Nom <br />
        </p>
        <h3>Hébergeur</h3>
        <p>
          <strong>Nom de l'hébergeur :</strong> Par ex. OVH, Infomaniak, etc.{" "}
          <br />
          <strong>Adresse :</strong> Adresse complète de l’hébergeur <br />
          <strong>Téléphone :</strong> Téléphone de l’hébergeur <br />
        </p>

        <h3>Propriété intellectuelle</h3>
        <p>
          L'ensemble des contenus (textes, images, graphismes, logos, icônes,
          sons, logiciels, etc.) présents sur ce site est protégé par la
          législation française et internationale relative au droit d’auteur et
          à la propriété intellectuelle. Toute reproduction, représentation,
          modification, publication, adaptation de tout ou partie des éléments
          du site, quel que soit le moyen ou le procédé utilisé, est interdite
          sans l'autorisation préalable écrite de l'éditeur.
        </p>

        <h3>Données personnelles</h3>
        <p>
          Les informations personnelles collectées via les formulaires présents
          sur ce site sont destinées uniquement à GAME SPACE à des fins de
          communication ou de traitement de demandes. Conformément à la loi
          n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et
          aux libertés, ainsi qu'au Règlement Général sur la Protection des
          Données (RGPD), vous disposez d'un droit d'accès, de rectification,
          d’opposition et de suppression des données vous concernant. Pour
          exercer ces droits, vous pouvez nous contacter à l'adresse :{" "}
          <strong>Gaming-wcs@projet.com</strong>.
        </p>

        <h3>Cookies</h3>
        <p>
          Le site peut être amené à implanter des cookies sur votre terminal
          pour améliorer l'expérience utilisateur. Vous pouvez configurer votre
          navigateur pour refuser l’installation des cookies.
        </p>

        <h3>Limitation de responsabilité</h3>
        <p>
          L'éditeur du site ne saurait être tenu responsable des erreurs
          rencontrées sur le site, des problèmes techniques, de l'interprétation
          des informations publiées et des conséquences de leur utilisation.
          L'utilisateur reconnaît utiliser les informations du site sous sa
          responsabilité exclusive.
        </p>
        <p>
          <strong>Dernière mise à jour :</strong> 28/04/2025
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Mention;
