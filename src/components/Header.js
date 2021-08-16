import "./Header.css";
import { Switch, Route } from "react-router";

export default function Header() {
  return (
    <section className="Header">
      <Switch>
        <Route path="/profile">
          <h1>profile</h1>
        </Route>
        <Route path="/places">
          <h1>places</h1>
        </Route>
        <Route path="/map">
          <h1>map</h1>
        </Route>
      </Switch>
    </section>
  );
}
