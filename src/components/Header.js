import "./Header.css";
import { Switch, Route } from "react-router";

export default function Header() {
  return (
    <section className="Header">
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/homepage">
          <h1>the app</h1>
        </Route>
        <Route path="/map">
          <h1>the map</h1>
        </Route>
        <Route path="/add">
          <h1>the fav</h1>
        </Route>
      </Switch>
    </section>
  );
}
