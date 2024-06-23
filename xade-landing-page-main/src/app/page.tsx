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
      {/* <TopSection /> */}
      <TradeSection />
      {/* <div
        className="header3"
        id="apph3"
        style={{ marginTop: "5%", fontFamily: "Benzin-Medium", color: "#ddd", textAlign: "center" }}
      >
        <span>RESHAPING FINANCE </span>
      </div>
      <div
        className="header"
        id="apph"
        style={{ fontFamily: "Benzin-Bold", color: "#fff" }}
      >
        <h2 style={{ fontSize: "2.5rem", textAlign: "center" }}>
          The Decentralised Bank
        </h2>
      </div>

      <div
        className="topText"
        id="apptt"
        style={{ fontFamily: "Regular", color: "#B3C5BB" }}
      >
        <span>
          Xade is the only DeFi powered alternative to banks which provides all
          banking services on chain with the user experience indistinguishable
          from a digital bank powered by our own in-house DeFi Protocols.
        </span>
      </div> */}
      <CredSection />
      {/* <CardSection></CardSection> */}
<TradeLive/>
      {/* <NFT /> */}
      {/* <BetterSection /> */}
      <Stats />
      {/* <ChooseXade/> */}
      {/* <FAQ /> */}
      {/* <Security /> */}
      {/* <FAQ /> */}

      {/* <BottomSection /> */}

      <Footer />
    </div>
  );
}

export default App;

