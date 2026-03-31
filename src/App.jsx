import Nav from "./sections/Nav";
import Banner from "./sections/Banner";
import Stats from "./sections/Stats";
import DigitalTools from "./sections/DigitalTools";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Nav cartCount={cartCount} />
      <Banner />
      <Stats />
      <DigitalTools cartCount={cartCount} setCartCount={setCartCount} />
    </>
  );
}

export default App;
