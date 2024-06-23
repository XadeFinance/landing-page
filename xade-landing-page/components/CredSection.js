import "./styles.css";
import React from "react";
import Image from 'next/image'; // Import Image component
import "../styles/style.css";

const CredSection = () => {
  return (
    <>
      <section className="container" id="container4">
        <div className="left-half">
          <Image
            className="credimg"
            src="/Media/deposit.png"
            alt="image"
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
          />
        </div>
        <div className="right-half" style={{ display: "flex", alignItems: "center" }}>
          <div className="line2" style={{ textAlign: "left" }}>
            <div
              style={{
                fontFamily: "Benzin-Medium",
                fontSize: "0.6rem",
                letterSpacing: "10px",
                color: "rgb(232, 109, 111)",
              }}
            >
              {/* <span className="gradient1" >SEAMLESS ONBOARDING </span> */}
            </div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 500,
                lineHeight: 1.2,
                fontFamily: "Benzin-Bold",
              }}
            >
              <h3 style={{ fontSize: "32px", lineHeight: "1.2" }}>
                DEPOSIT FUNDS FROM OVER 100+ COUNTRIES SEAMLESSLY
              </h3>
            </div>
            <div style={{ fontSize: "1rem", fontFamily: "Regular" }}>
              <span>
                Get Started seamlessly with just your email address and deposit funds with over 100+ deposit methods from over 90+ counties from centralised exchanges, wallets, bank accounts, card, local payment methods, cross chain deposits and more
              </span>
            </div>
            <br />
          </div>
        </div>
      </section>
      <section className="container">
        <div className="left-half">
          <div className="line2">
            <div
              style={{
                fontFamily: "Benzin-Medium",
                fontSize: "0.6rem",
                letterSpacing: "10px",
                color: "var(--linnn, linear-gradient(113deg, #8C46FF -2.72%, #B080FF 111.29%))",
              }}
            >
              {/* <span className="gradient1">GLOBAL PAYMENTS </span>{" "} */}
            </div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 500,
                lineHeight: 1.2,
                fontFamily: "Benzin-Bold",
              }}
            >
              <h3 style={{ fontSize: "32px", lineHeight: "1.2" }}>
                TRADE CRYPTO, STOCKS, FOREX & COMMODITIES
              </h3>
            </div>
            <div style={{ fontSize: "1rem", fontFamily: "Regular" }}>
              <span>
                Trade 100,000 markets including crypto, stocks, forex, commodities and other global markets in a non custodial manner without any restrictions powered by DeFi
              </span>
            </div>
          </div>
        </div>
        <div className="right-half">
          <Image
            className="credimg"
            src="/Media/markets.png"
            alt="payment image"
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
          />
        </div>
      </section>
      <section className="container" id="container4">
        <div className="left-half">
          <Image
            className="credimg"
            src="/Media/trade.png"
            alt="image"
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
          />
        </div>
        <div className="right-half">
          <div className="line2" style={{ textAlign: "left" }}>
            <div
              style={{
                fontFamily: "Benzin-Medium",
                fontSize: "0.6rem",
                letterSpacing: "10px",
                color: "rgb(232, 109, 111)",
              }}
            >
              {/* <span className="gradient1" >PRO TRADING </span> */}
            </div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 500,
                lineHeight: 1.2,
                fontFamily: "Benzin-Bold",
              }}
            >
              <h3 style={{ fontSize: "32px", lineHeight: "1.2" }}>
                0MNICHAIN LIQUIDITY WITH 0 FEES & LATENCY
              </h3>
            </div>
            <div style={{ fontSize: "1rem", fontFamily: "Regular" }}>
              <span>
                Get the best returns on your trade with liquidity aggregated and compared across 10+ EVM and non-EVM chains with 0 platform fees and lightning fast sub 10s trade execution
              </span>
            </div>
            <br />
          </div>
        </div>
      </section>
      <section className="container">
        <div className="left-half">
          <div className="line2">
            <div
              style={{
                fontFamily: "Benzin-Medium",
                fontSize: "0.6rem",
                letterSpacing: "10px",
                color: "#FFCE40",
              }}
            >
              {/* <span className="gradient1">SPEND SEAMLESSLY </span> */}
            </div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 500,
                lineHeight: 1.2,
                fontFamily: "Benzin-Bold",
              }}
            >
              <h3 style={{ fontSize: "32px", lineHeight: "1.2" }}>
                ADVANCED AI POWERED PORTFOLIO AND MARKET ANALYSIS
              </h3>
            </div>
            <div style={{ fontSize: "1rem", fontFamily: "Regular" }}>
              <span>
                Unleash the pro trader inside with our advanced AI powered portfolio and market analysis tools, advanced charts, real time news, technical analysis and your own personal financial analysis bot: Degen AI
              </span>
            </div>
          </div>
        </div>
        <div className="right-half">
          <Image
            className="credimg"
            src="/Media/portfolio.png"
            alt="image"
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
          />
        </div>
      </section>
    </>
  );
};

export default CredSection;
