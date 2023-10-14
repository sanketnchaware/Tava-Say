import { useEffect } from "react";
import Layout from "./Layout/Layout";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    try {
      console.log("Smooth scroll to top");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Smooth scroll error:", error);
    }
  }, [pathname]);
  return <Layout />;
}

export default App;
