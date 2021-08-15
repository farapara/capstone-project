import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
//import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Main"></main>
      <footer className="Footer">
        <Navigation />
      </footer>
    </div>
  );
}

export default App;
