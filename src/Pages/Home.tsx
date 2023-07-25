import React from "react";
import LocateUs from "../Components/Homepage/LocateUs";
import MainMenu from "../Components/Homepage/MainMenu";
import Services from "../Components/Homepage/Services";
import Offers from "../Components/Homepage/Offers";

const Home = () => {
  return (
    <div className="p-2 sm:p-0">
      <LocateUs />
      <MainMenu />
      {/* <Testimonial /> */}
      <Offers />
      <Services />
    </div>
  );
};

export default Home;
