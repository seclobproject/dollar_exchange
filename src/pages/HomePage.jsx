import React from "react";
import Header from "../components/homePage/Header";
import Hero from "../components/homePage/Hero";
import OfferSlider from '../components/homePage/OfferSlider'
import Details from "../components/homePage/Details";
function HomePage() {
  return (
    <div className="bg-custom-blue ">
      <Header />
      <Hero />
      <OfferSlider />
      
      <Details />

  
    </div>
  );
}

export default HomePage;
