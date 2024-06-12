import React from "react";
import Header from "../components/homePage/Header";
import Hero from "../components/homePage/Hero";
import OfferSlider from "../components/homePage/OfferSlider";
import Details from "../components/homePage/Details";
import CryptoLiveTable from "../components/homePage/CryptoLiveTable";
import ForexLiveTable from '../components/homePage/ForexLiveTable'
import CurrencyConverter from '../components/homePage/CurrencyConverter'
function HomePage() {
  return (
    <div className="bg-custom-blue ">
      <Header />
      <Hero />
      <OfferSlider />
      <Details />
      <CryptoLiveTable />
      <ForexLiveTable/>
      <CurrencyConverter/>
      

    </div>
  );
}

export default HomePage;
