import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateProfile from "./pages/CreateProfile";
import Profile from "./pages/Profile";
import Add from "./pages/Add";
import Map from "./pages/Map";
import { Switch, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Main">
        <Switch>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/create">
            <CreateProfile />
          </Route>
          <Route path="/">
            <CreateProfile />
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
