import "./App.css";
import { Route, NavLink, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Places from "./components/Places";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Route path="/map">
          <Map />
        </Route>
        <Route path="/places">
          <Places />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </header>
      <main className="main">Main</main>
      <footer className="footer">
        <nav className="nav">
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/places">Places</NavLink>
          <NavLink to="/map">Map</NavLink>
        </nav>
      </footer>
    </div>
  );
}

export default App;
