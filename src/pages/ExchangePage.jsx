import React from "react";
import Hero from "../components/exchangePage/Hero";
import Buttons from "../components/exchangePage/Buttons";
import SliderComponent from "../components/exchangePage/SliderComponent";
function ExchangePage() {
  return (
    <div className="bg-custom-blue min-h-screen">
      <Hero />
      <Buttons/>
      <SliderComponent/>
    </div>
  );
}

export default ExchangePage;



