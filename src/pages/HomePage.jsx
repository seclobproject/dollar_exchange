import React from "react";
import Header from "../components/homePage/Header";
import Hero from "../components/homePage/Hero";
import OfferSlider from '../components/homePage/OfferSlider'
import News from "../components/News";
function HomePage() {
  return (
    <div className="bg-custom-blue ">
      <Header />
      <Hero />
      <OfferSlider />
      
      <News />

  
    </div>
  );
}

export default HomePage;
