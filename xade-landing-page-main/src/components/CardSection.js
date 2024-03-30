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
    <div className="lol" style={{ backgroundColor: "#0F0F10" }}>
      <div className={`image-container1`} ref={imageRef}>
        <img
          className={`imagecard`}
          src={process.env.PUBLIC_URL + "/Media/Group1.svg"}
          alt="Image"
        />
      </div>
      <div
        className="header3"
        style={{
          marginTop: "5%",
          fontFamily: "Benzin-Medium",
          color: "#ddd",
          textAlign: "center",
        }}
      ></div>
      <div
        className="header"
        style={{ fontFamily: "NeueMontreal-Bold", color: "#fff" }}
      >
        <h2 style={{ fontSize: "43.2px" }}>Get yourself the Xade card</h2>
      </div>
      <br />
      <div
        className="topText"
        style={{ fontFamily: "Regular", color: "#B3C5BB" }}
      >
        <span>
          {" "}
          Get your own non-custodial card powered by Visa to spend globally and
          to win exclusive rewards{" "}
        </span>{" "}
      </div>
      <br></br>
      <div className="CardbuttonContainer">
        <button
          onClick={(e) => {
            e.preventDefault();
            window.open("https://tally.so/r/wbjzRE", "_blank");
          }}
        >
          Apply for card
        </button>
      </div>
      <br />
    </div>
  );
};

export default App;
