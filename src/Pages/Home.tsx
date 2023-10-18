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
    <div className="">
      <HeroSection />
      <div className="sm:p-0 p-2">
        <LocateUs />
        <MainMenu />
        <Testimonial />
        <Offers />
        <Services />
        <Blog />
      </div>
    </div>
  );
};

export default Home;
