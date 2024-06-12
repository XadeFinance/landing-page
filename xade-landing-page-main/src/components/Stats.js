import "../styles/better.css";

import React, { useState, useEffect, useRef } from "react";
const App = () => {
  return (
    <div className="lol" style={{ marginTop: "3rem",backgroundColor:"black" }}>
      <div>
        <div className="more-features-center">
          <div className="more-features-top-elements">
            <div className="more-features-element">
              {/* <img
                  src="https://www.xade.finance/Media/uxicon.svg"
                  className="dabbang"
                /> */}
              <div className="betterhead v1">
                <p>12k+</p>
              </div>
              <p style={{ color: "#7b7b7b" }} className="bettercontent">
                Community members
              </p>
            </div>
            <div className="more-features-element">
              {/* <img
                  src="https://www.xade.finance/Media/innovative.svg"
                  className="dabbang"
                /> */}
              <div className="betterhead v2">
                <p>$5mil+</p>
              </div>
              <p className="bettercontent" style={{ color: "#7b7b7b" }}>
                Transaction volume
              </p>
            </div>
            <div className="more-features-element">
              {/* <img
                  src="https://www.xade.finance/Media/world icon.svg"
                  className="dabbang"
                /> */}
              <div className="betterhead v3">
                <p>10k+</p>
              </div>
              <p className="bettercontent" style={{ color: "#7b7b7b" }}>
                Active users
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
