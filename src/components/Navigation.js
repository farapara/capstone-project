import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { FaRegPlusSquare, FaRegImages, FaMapMarked } from "react-icons/fa";

export default function Navigation() {
  return (
    <section>
      <nav className="Nav">
        <NavLink className="Navlink" to="/profile">
          <FaRegPlusSquare />
        </NavLink>
        <NavLink className="Navlink" to="/places">
          <FaRegImages />
        </NavLink>
        <NavLink className="Navlink" to="/map">
          <FaMapMarked />
        </NavLink>
      </nav>
    </section>
  );
}
