import "./App.css";
import { NavLink } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Main"></main>
      <footer className="Footer">
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
      </footer>
    </div>
  );
}

export default App;
