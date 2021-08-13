import "./Header.css";
import { Switch, Route } from "react-router";

export default function Header() {
  return (
    <section className="Header">
      <Switch>
        <Route path="/map">
          <h2>here's where you can see them on the map</h2>
        </Route>
        <Route path="/places">
          <h2>here's where you can add you pictures</h2>
        </Route>
        <Route path="/profile">
          <h2>here's where you can create a profile</h2>
        </Route>
        <Route exact path="/"></Route>
      </Switch>
    </section>
  );
}
