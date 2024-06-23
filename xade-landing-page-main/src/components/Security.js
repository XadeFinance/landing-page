import React from "react";
import degens from '../assets/degens.png';
import group4 from '../assets/Group4.png';

const Security = () => {
  const isMobile = window.innerWidth <= 768; // Define isMobile based on window width

  const headerTextStyle = {
    fontFamily: "Sk-Modernist-Bold",
    color: "white",
    fontSize: "64px",
    textAlign: "left",
  };

  const mobileHeaderTextStyle = {
    ...headerTextStyle,
    fontSize: "32px", // Adjust this value as needed for mobile
  };

  const mainTextStyle = {
    fontSize: "1.2rem",
    fontFamily: "NeueMontreal-Medium",
    textAlign: "left",
    color: "#949494",
  };

  return (
    <>
      <div className="lol" style={{ backgroundImage: `url(${degens})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

      <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={group4} alt="Group 4" style={{ width: "50%", height: "auto" }} />
        </div>
        <br />
        <div
          className="topText"
          style={{ fontSize: "1.3rem", marginBottom: "2rem", padding: "0% 25%", fontFamily: "NeueMontreal-Medium", textAlign: "center", color: "#949494" }}
        >
         Exclusive regional communities for traders to share exclusive alpha
   
        </div>
        <a href="https://tally.so/r/nPAqe5" style={{ display: 'block', width: 'fit-content', margin: isMobile ? '5% auto' : '2% auto', padding: '10px 30px', borderRadius: 30, background: 'white', color: 'black', fontFamily: 'SK-Modernist-Bold', textDecoration: 'none', fontSize: isMobile ? 12 : 18 }}>
               Apply Now
            </a>
        <br></br>
        <div className="boxfather" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <div className="betterbox betterbox5" style={{ textAlign: "left", opacity: "0.8" }}>
            <div className="headerText" style={headerTextStyle}>
              Learn. 
            </div>
        
            <div className="mainText" style={mainTextStyle}>
            Get exclusive alpha and work with industry leaders and traders
            
            </div>
          </div>

          <div className="betterbox betterbox5" style={{ textAlign: "left", opacity: "0.8" }}>
            <div className="headerText" style={headerTextStyle}>
              Earn. 
            </div>
            <div className="mainText" style={mainTextStyle}>
            Get exclusive and amazing rewards and bounties for free just by being a Degen
            </div>
          </div>

          <div className="betterbox betterbox5" style={{ textAlign: "left", opacity: "0.8" }}>
            <div className="headerText" style={headerTextStyle}>
              Lead. 
            </div>
            
            <div className="mainText" style={mainTextStyle}>
            Lead Degens in your own city and manage meet ups and your own community
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Security;
