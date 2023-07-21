import logo from "./logo.svg";
import "./App.css";
import Header from "../src/components/home/Header";
import Banner from "../src/components/banner/Banner";
import Category from "../src/components/home/categoryProduct/Category";
import Products from "./components/home/product/Products";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section className="app-banner">
        <Banner />
      </section>
      <Category />
      <Products />
    </div>
  );
}

export default App;
