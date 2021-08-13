import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header class="header">Awesome Header</header>
      <main>Awesome Content</main>
      <Switch>
        <Route path="/places"></Route>
      </Switch>
      <Switch>
        <Route path="/profile"></Route>
      </Switch>

      <Switch>
        <Route exact path="/"></Route>
      </Switch>
      <footer>Awesome Footer</footer>
    </div>
  );
}

export default App;
