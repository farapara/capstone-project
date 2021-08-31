import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FiMap } from "react-icons/fi";
import { BiLocationPlus, BiHomeAlt } from "react-icons/bi";

export default function Footer() {
  return (
    <nav className="Nav">
      <NavLink
        className="Navlink"
        to="/profile"
        activeClassName="Navlink--active"
      >
        <BiHomeAlt />
      </NavLink>
      <NavLink className="Navlink" to="/map" activeClassName="Navlink--active">
        <FiMap />
      </NavLink>
      <NavLink className="Navlink" to="/add" activeClassName="Navlink--active">
        <BiLocationPlus />
      </NavLink>
    </nav>
  );
}
