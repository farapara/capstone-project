import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from ".//pages/Homepage";
import Profile from ".//pages/Profile";
import Pins from ".//pages/Pins";
import Map from ".//pages/Map";
import { Switch, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Main">
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/add">
            <Pins />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="*">
            <p>Page Not Found</p>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
