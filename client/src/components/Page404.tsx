import { Link } from "react-router";
import assasin from "../assets/images/assasin.png";

function Page404() {
  return (
    <div className="Page404">
      <h2> ERROR </h2>
      <h1> 404 </h1>
      <p>La page que tu recherche n'existe pas</p>
      <Link to="/Page404">Page404</Link>
      <img src={assasin} alt="Page404" className="img-assasin" />
    </div>
  );
}

export default Page404;
