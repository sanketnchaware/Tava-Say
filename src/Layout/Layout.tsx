import Header from "../Components/Header/Header";
import HeroSection from "../Components/Homepage/HeroSection";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";
import hamburger from "../assets/icons/homepage/hamburger.svg";
import About from "../Pages/About";
import Menu from "../Pages/Menu";
import Gallery from "../Pages/Gallery";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import Reservation from "../Pages/Reservation";

const Layout = () => {
  const [isSidebarOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-y-hidden  ">
      <aside
        className={`backdrop-blur-3xl sm:hidden fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64  
       max-h-screen overflow-hidden transition-all transform  border-r-darkGray
       shadow-lg lg:z-auto lg:static lg:shadow-none ${
         !isSidebarOpen ? "-translate-x-full lg:translate-x-0 lg:w-20" : ""
       }`}
      >
        <div
          className={`flex items-center justify-between flex-shrink-0 p-2 ${
            !isSidebarOpen ? "lg:justify-center" : ""
          }`}
        >
          <div></div>
          <p className="text-3xl  text-Gainsboro"> Menu</p>
          <button
            type="button"
            className=" p-2 rounded-md lg:hidden"
            onClick={() => setMenuOpen(!isSidebarOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#E1B168"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#E1B168"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="gap-y-8 h-full text-center justify-center items-center   flex flex-col">
          {[
            { page: "Home", link: "/" },
            { page: "About", link: "/about" },
            { page: "Menu", link: "/menu" },
            { page: "Reservation", link: "/reservation" },
            { page: "Gallery", link: "/gallery" },
            { page: "Blog", link: "/blog" },
            { page: "Contact", link: "/contact" },
          ].map((item) => {
            return (
              <Link
                to={item.link}
                className=" text-3xl hover:text-Gainsboro  transition-all ease-linear duration-25 text-Fawn"
              >
                {item.page}
              </Link>
            );
          })}
        </div>
      </aside>

      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <header className="sm:hidden bg-Gunmetal flex-shrink-0">
          <div className="flex items-center justify-between p-3  border-b border-Fawn">
            <div className="flex justify-between">
              <div className=" cursor-pointer ml-3 ">
                <img
                  className="w-8"
                  onClick={() => setMenuOpen(!isSidebarOpen)}
                  src={hamburger}
                  alt="isSidebaricon"
                />
              </div>
            </div>
            <p className="text-Fawn text-2xl ">TavaSay</p>
          </div>
        </header>
        <main className="flex-1 max-h-full  overflow-hidden overflow-y-scroll text-SpaceCadet  bg-CalmWaters">
          {" "}
          <div className="relative">
            <Header />
            <div className="block sm:hidden ">
              <HeroSection />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />{" "}
              <Route path="/about" element={<About />} />{" "}
              <Route path="/menu" element={<Menu />} />{" "}
              <Route path="/gallery" element={<Gallery />} />{" "}
              <Route path="/contact" element={<Contact />} />{" "}
              <Route path="/blog" element={<Blog />} />{" "}
              <Route path="/reservation" element={<Reservation />} />{" "}
            </Routes>
            <Footer />{" "}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
