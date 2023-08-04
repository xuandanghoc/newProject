import "./App.css";
import Header from "../src/components/home/Header";
import Home from "../src/components/home/Home";
import Shop from "../src/components/shopPage/Shop";
import Footer from "./components/home/footer/Footer";
import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { TitleProvider } from "./context/UseContext";
import { useContext, useState, useEffect } from "react";

function App() {
  const [TitleBanner, setTitleBanner] = useState("");

  useEffect(() => {
    const saveTitle = localStorage.setItem("title", TitleBanner);
    }, []);

  return (
    <TitleProvider>
      <div className="App">
        <header className="App-header">
          <Header
            handleTitleBannerClick={(e) => {
              setTitleBanner(e.target.textContent);
            }}
          />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop title={TitleBanner} />} />
        </Routes>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </TitleProvider>
  );
}

export default App;
