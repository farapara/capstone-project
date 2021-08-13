import "./App.css";
import { Route, NavLink, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Places from "./components/Places";
import Map from "./components/Map";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Switch>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/places">
            <Places />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </header>
      <main className="main"></main>
      <footer className="footer">
        <nav className="nav">
          <NavLink className="navlink" to="/profile">
            profile
          </NavLink>
          <NavLink className="navlink" to="/places">
            places
          </NavLink>
          <NavLink className="navlink" to="/map">
            map
          </NavLink>
        </nav>
      </footer>
    </div>
  );
}

export default App;
