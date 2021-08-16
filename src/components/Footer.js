import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaRegPlusSquare, FaRegImages, FaMapMarkedAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <nav className="Nav">
      <NavLink
        className="Navlink"
        to="/profile"
        activeClassName="Navlink--active"
      >
        <FaRegPlusSquare />
      </NavLink>
      <NavLink
        className="Navlink"
        to="/places"
        activeClassName="Navlink--active"
      >
        <FaRegImages />
      </NavLink>
      <NavLink className="Navlink" to="/map" activeClassName="Navlink--active">
        <FaMapMarkedAlt />
      </NavLink>
    </nav>
  );
}
