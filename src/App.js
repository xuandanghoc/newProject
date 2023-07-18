import logo from "./logo.svg";
import "./App.css";
import Header from "../src/components/home/Header";
import Banner from "../src/components/banner/Banner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section className="app-banner">
        <Banner />
      </section>
    </div>
  );
}

export default App;
