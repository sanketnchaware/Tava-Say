import React from "react";
import LocateUs from "../Components/Homepage/LocateUs";
import MainMenu from "../Components/Homepage/MainMenu";
import Services from "../Components/Homepage/Services";
import Offers from "../Components/Homepage/Offers";
import Testimonial from "../Components/Homepage/Testimonial";
import Blog from "../Components/Homepage/Blog";
import HeroSection from "../Components/Homepage/HeroSection";

const Home = () => {
  return (
    <div className="p-2 sm:p-0">
      <HeroSection />
      <LocateUs />
      <MainMenu />
      <Testimonial />
      <Offers />
      <Services />
      <Blog />
    </div>
  );
};

export default Home;
