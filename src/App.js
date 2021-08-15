import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Main">
        <Profile />
      </main>
      <Footer />
    </div>
  );
}

export default App;
