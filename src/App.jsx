import { Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
     <Navbar />
      <Outlet />   {/* This loads Home, About, Portfolio, etc. */}
      <Footer />   {/* Footer stays on every page */}
    </>
  );
}

export default App;
