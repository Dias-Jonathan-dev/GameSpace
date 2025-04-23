import { useNavigate } from "react-router";
import favicon from "../assets/images/favicon.svg";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <button type="button" className="fav_nav" onClick={() => navigate("/")}>
        <img src={favicon} alt="nav-favicon" />
      </button>
    </div>
  );
}

export default NavBar;
