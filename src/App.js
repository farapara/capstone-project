import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>Awesome Header</header>
      <main>Awesome Content</main>
      <Switch>
        <Route path="/places"></Route>
      </Switch>
      <Switch>
        <Route path="/profile"></Route>
      </Switch>

      <Switch>
        <Route exact path="/">
          HOME
        </Route>
      </Switch>
      <footer>Awesome Footer</footer>
    </div>
  );
}

export default App;
