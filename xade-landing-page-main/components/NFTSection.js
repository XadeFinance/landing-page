import "../styles/better.css";

import React, { useState, useEffect, useRef } from "react";
const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const imageRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsExpanded(true);
          observer.unobserve(imageRef.current);
        }
      },
      { threshold: 0.5 } // Trigger the observer when the image is 50% in view
    );
    observer.observe(imageRef.current);
  }, []);
  return (
    <div
      className="lol nftParent"
      style={{
        // backgroundColor: "#0F0F10",
        backgroundColor: "#000000",
        minHeight: "62rem",
      }}
    >
      <div
        className={`image-container1`}
        ref={imageRef}
        style={{ paddingTop: "120px" }}
      >
        <img src="/Media/exploreBGleft.png" className="exploreBg1" />
        {/* <div>
          <img
            className="ellipseExplore nftParent"
            src="/Media/Ellipse.png"
            alt="image"
          />
        </div> */}
        <img src="/Media/exlporeBGright.png" className="exploreBg2" />
        <img
          className={`image ${isExpanded ? "expanded" : ""}`}
          src={process.env.PUBLIC_URL + "/Media/NFT3image.png"}
          draggable="false"
          alt="Image"
        />
      </div>
      <div
        className="header"
        style={{ paddingTop: "77px", paddingBottom: "57px" }}
      >
        <img src="/Media/EXPLORERS.svg" className="explorerstxt" />
      </div>
      <br />
      <div
        className="topText"
        style={{ fontSize: "1.4rem", marginBottom: "2rem" }}
      >
        <span>
          Xade Explorers are a DeFi utility collection which have a max supply
          of 1000 and allows you to unleash the full potential of the future of
          finance.{" "}
        </span>
      </div>
      <br></br>
      <div className="NFTbuttonDiv">
        <button
          className="NFTbutton"
          onClick={(e) => {
            console.log("button click");
            e.preventDefault();
            window.open("https://app.komet.me/nfts/Xade_Explorers/346", "_blank");
          }}
        >
          Buy Now
        </button>
      </div>
      <br />
    </div>
  );
};

export default App;
