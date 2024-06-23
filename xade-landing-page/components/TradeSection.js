import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Import Image component
import tradeVideo from './trade.mp4'; // Ensure this path is correct
import bg from './bg.png'; // Ensure this path is correct

const TradeSection = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      setIsClient(true);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, [isClient]);

  const isMobile = windowWidth < 600;

  const getDynamicStyles = () => ({
    container: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: isMobile ? '5%' : '8%',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent',
      zIndex: 1, // Make sure overlay is above the video/image but below the text
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: '0',
    },
    videoBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: '0',
    },
    header: {
      fontSize: isMobile ? 40 : 80,
      fontFamily: "'Benzin-Bold'",
      textAlign: 'center',
      lineHeight: isMobile ? '45px' : '85px',
      marginTop: isMobile ? 0 : '5%',
      color: '#FFF',
      zIndex: 3,
    },
    subheader: {
      marginTop: '5%',
      fontSize: isMobile ? 18 : 24,
      fontFamily: "'NeueMontreal-Book', sans-serif",
      color: '#949494',
      textAlign: 'center',
      width: isMobile ? '90%' : '70%',
      zIndex: 3,
    },
    qrBox: {
      position: 'fixed',
      bottom: '50px',
      right: '60px',
      display: isMobile ? 'none' : 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10,
      border: '1px solid #999',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      backdropFilter: 'blur(10px)',
      padding: '15px',
    },
    qrImage: {
      marginRight: isMobile ? 0 : '20px',
      width: '80px',
      height: '80px',
    },
    downloadText: {
      fontFamily: "'Benzin-Medium'",
      fontSize: 20,
      textAlign: 'center',
      color: '#FFF',
      zIndex: 3,
    },
    downloadButton: {
      display: isMobile ? 'block' : 'none',
      marginTop: '10%',
      padding: '20px 80px',
      backgroundColor: 'white',
      color: 'black',
      fontFamily: "'NeueMontreal-Medium', sans-serif",
      fontSize: '16px',
      borderRadius: 30,
      border: 'none',
      cursor: 'pointer',
      zIndex: 3,
    },
  });

  const styles = getDynamicStyles();
  const subheaderText = isMobile
    ? "Trade crypto, stocks, forex & more with omnichain liquidity and advanced analytics"
    : "Trade 100k+ markets including crypto, stocks, forex & more with omnichain liquidity and advanced analytics in a seamless way";

  const handleVideoError = (e) => {
    console.error("Video failed to load", e);
    setVideoError(true);
  };

  return (
    <div style={styles.container}>
      {isClient && !videoError && !isMobile ? (
        <video
          autoPlay
          muted
          loop
          style={styles.videoBackground}
          onError={handleVideoError}
          onLoadedData={() => console.log("Video loaded successfully")}
        >
          <source src={tradeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={'https://res.cloudinary.com/xade-finance/image/upload/v1712746367/xu5yw8qekgyvoouklqsp.png'}
          style={styles.backgroundImage}
          alt="Background"
        />
      )}
      <div style={styles.overlay}></div>
      <div style={styles.header}>THE ULTIMATE<br />TRADING<br />EXPERIENCE</div>
      <div style={styles.subheader}>{subheaderText}</div>
      <div style={styles.qrBox}>
        <Image src="https://res.cloudinary.com/xade-finance/image/upload/v1712745024/yfe2g76jqeqz1mcohas9.png" alt="QR Code" style={styles.qrImage} />
        <div style={styles.downloadText}>DOWNLOAD<br/>XADE 2.0</div>
      </div>
      <button style={styles.downloadButton} onClick={() => window.open('https://bit.ly/xadefinance', '_blank', 'noopener,noreferrer')}>
        Download Now
      </button>
    </div>
  );
};

export default TradeSection;