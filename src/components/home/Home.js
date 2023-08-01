import React from 'react';
import Banner from "./banner/Banner";
import Category from "./categoryProduct/Category";
import Products from "./product/Products";
import Pattern from "./pattern/Pattern";
import Share from "./shareSetup/Share";
import Footer from "./footer/Footer";

function Home() {
  return (
    <div className="home">
      <section className="app-banner">
        <Banner />
      </section>
      <Category />
      <Products />
      <Pattern />
      <Share />
      <Footer />
    </div>
  );
}

export default Home;
