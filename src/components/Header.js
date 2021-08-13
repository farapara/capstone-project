import "./Header.css";
import { Switch, Route } from "react-router";

export default function Header() {
  return (
    <section className="Header">
      <Switch>
        <Route path="/map">
          <h2>map</h2>
        </Route>
        <Route path="/places">
          <h2>places</h2>
        </Route>
        <Route path="/profile">
          <h2>profile</h2>
        </Route>
      </Switch>
    </section>
  );
}
