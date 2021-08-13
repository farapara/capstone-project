import "./Navigation.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <section>
      <nav className="Nav">
        <NavLink className="Navlink" to="/profile">
          profile
        </NavLink>
        <NavLink className="Navlink" to="/places">
          places
        </NavLink>
        <NavLink className="Navlink" to="/map">
          map
        </NavLink>
      </nav>
    </section>
  );
}
