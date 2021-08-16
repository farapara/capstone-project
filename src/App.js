import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from ".//pages/Profile";
import Places from ".//pages/Places";
import Map from ".//pages/Map";
import { Switch, Route, Redirect } from "react-router";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Main">
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/places">
            <Places />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/">
            <Redirect to="/profile" />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
