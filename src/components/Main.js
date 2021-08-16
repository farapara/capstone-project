import "./Main.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Profile from "../pages/Profile";
import Places from "../pages/Places";
import Map from "../pages/Map";

export default function Main() {
  return (
    <main className="Main">
      <Switch>
        <Route path="profile">
          <Profile />
        </Route>
        <Route path="places">
          <Places />
        </Route>
        <Route path="map">
          <Map />
        </Route>
        <Route path="/">
          <Redirect to="/profile" />
        </Route>
      </Switch>
    </main>
  );
}
