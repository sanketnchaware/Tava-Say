import React from "react";
import LocateUs from "../Components/Homepage/LocateUs";
import MainMenu from "../Components/Homepage/MainMenu";

const Home = () => {
  return (
    <div className="p-4 sm:p-0">
      <LocateUs />
      <MainMenu />
    </div>
  );
};

export default Home;
