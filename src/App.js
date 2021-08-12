import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Switch>
        <Route path="/places">places</Route>
      </Switch>
      <Switch>
        <Route path="/profile">profile</Route>
      </Switch>

      <Switch>
        <Route exact path="/">
          HOME
        </Route>
      </Switch>
    </div>
  );
}

export default App;
