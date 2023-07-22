import Header from "../Components/Header/Header";
import HeroSection from "../Components/Homepage/HeroSection";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Footer from "../Components/Footer/Footer";
import MobileMenu from "../Components/MobileMenu";
import { useState } from "react";
const Layout = () => {
  const [ismenuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen(!ismenuOpen);
  };
  return (
    <div className="relative">
      <Header component={<HeroSection />} />
      <MobileMenu
        ismenuOpen={ismenuOpen}
        setMenuOpen={setMenuOpen}
        toggleMenu={toggleMenu}
      />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Layout;
