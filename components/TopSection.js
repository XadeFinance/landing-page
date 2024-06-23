import React from "react";
import "../styles/style.css";
import Spline from '@splinetool/react-spline';
// import video from "../assets/Video.mp4";

export default function TopSection() {

  

  return (
    <>
      <div
        className="topContainer"
        style={{
          // marginTop: "7%",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
          zIndex: "1",
        }}
      >
        {/* <div className="firstSectionimg1"></div>
        <div className="firstSectionimg2"></div> */}
        {/* <video autoPlay={true} muted={true} loop={true}> */}
        {/* <source src={video} type="video/mp4" /> */}
        {/* </video> */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
            zIndex: "-1",
            // backgroundColor: "#111111",
            opacity: "0.5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spline id="bg-animation" scene="https://prod.spline.design/BCL9IZtcUD4YJC5n/scene.splinecode" />
        </div>
        <div className="topContainerText">
          <div role="heading" aria-level="1" className="h1Container">
            <h1 className="headingTop">
              Reshaping the future of
              <span
                style={{
                  fontFamily: "PPEditorialNew-Italic",
                  // fontStyle: "italic",
                  fontWeight: "lighter",
                }}
              >
                {" "}
                Finance.
              </span>
            </h1>
          </div>

          <div
            style={{
              color: "#B3C5BB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="subTextH1">
              Meet the world’s first financial app powered by DeFi protocols
              that provides banking services on-chain
            </span>
          </div>
          <br />
        </div>
        <div className="GetStartedDiv">
          <button
            className="GetStartedbtn"
            onClick={(e) => {
              console.log("button click");
              e.preventDefault();
              window.open("https://app.xade.finance/app.html", "_blank");
            }}
          >
            Get Started
          </button>
        </div>
      </div>
      <br />
    </>
  );
}
