"use client";

import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TradeSection from "../../components/TradeSection";
import CredSection from "../../components/CredSection";
import Stats from "../../components/Stats";
import FAQ from "../../components/FAQ";
import TradeLive from "../../components/TradeLive";

function App() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Set the initial width
    setWidth(window.innerWidth);

    // Update the width state whenever the window is resized
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      // Remove the event listener on unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Header />
      <TradeSection />
      <CredSection />
      <TradeLive />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
