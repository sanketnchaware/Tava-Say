import Header from "../Components/Header/Header";
import HeroSection from "../Components/Homepage/HeroSection";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";

const Layout = () => {
  const [isSidebarOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-y-hidden  ">
      <aside
        className={`backdrop-blur-3xl sm:hidden fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64  
       max-h-screen overflow-hidden transition-all transform gradiant-aside border-r-darkGray
       shadow-lg lg:z-auto lg:static lg:shadow-none ${
         !isSidebarOpen ? "-translate-x-full lg:translate-x-0 lg:w-20" : ""
       }`}
      >
        <div
          className={`flex items-center justify-end flex-shrink-0 p-2 ${
            !isSidebarOpen ? "lg:justify-center" : ""
          }`}
        >
          <button
            type="button"
            className=" p-2 rounded-md lg:hidden"
            onClick={() => setMenuOpen(!isSidebarOpen)}
          >
            <svg
              className="w-6 h-6 text-SpaceCadet"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </aside>

      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <header className="sm:hidden bg-Gunmetal flex-shrink-0">
          <div className="flex items-center justify-between p-3  border-b border-Fawn">
            <div className="flex justify-between">
              <div className=" cursor-pointer ml-3 ">
                <img
                  className="w-5"
                  onClick={() => setMenuOpen(!isSidebarOpen)}
                  src="https://icones.pro/wp-content/uploads/2021/06/icone-fleche-droite-jaune.png"
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
            <Header component={<HeroSection />} />
            <div className="block sm:hidden ">
              <HeroSection />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />{" "}
            </Routes>
            <Footer />{" "}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
