import Nav from "./sections/Nav";
import Banner from "./sections/Banner";
import Stats from "./sections/Stats";
import DigitalTools from "./sections/DigitalTools";
import { useState } from "react";
import StepsSection from "./sections/StepsSection";
import Pricing from "./sections/Pricing";
import Footer from "./sections/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="w-full h-screen relative px-5">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
      <Nav  cartCount={cartCount} /></div>
      <div className="pt-16 md:pt-20">
      <Banner />
      <Stats />
      <DigitalTools cartCount={cartCount} setCartCount={setCartCount} />
      <StepsSection />
      <Pricing />
      <Footer /></div>
      <ToastContainer />
    </div>
  );
}

export default App;
