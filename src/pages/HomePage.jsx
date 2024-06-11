import React from "react";
import Header from "../components/homePage/Header";
import Hero from "../components/homePage/Hero";
function HomePage() {
  return (
    <div className="bg-custom-blue">
      <Header />
      <div className="lg:pl-20 md:pl-10 pl-4">
      <Hero />

      </div>
    </div>
  );
}

export default HomePage;
