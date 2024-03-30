import React, { useEffect, useState } from 'react';
import tradeVideo from './background.mp4';
const TradeSection = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getDynamicStyles = () => ({
        container: {
            position: 'relative',
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            padding: windowWidth < 600 ? '5%' : '8%',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        },
        videoBackground: {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: '-1',
        },
        header: {
            fontSize: windowWidth < 600 ? 40 : 80,
            fontFamily: "'Benzin-Bold'",
            textAlign: 'center',
            lineHeight: windowWidth < 600 ? '45px' : '85px',
            marginTop: windowWidth < 600 ? '0' : '5%',
            color: '#FFF', // Ensuring text is visible on video
            zIndex: 1, // Above video
        },
        subheader: {
            marginTop: '5%',
            fontSize: windowWidth < 600 ? 18 : 24,
            fontFamily: "'NeueMontreal-Book', sans-serif",
            color: '#949494',
            textAlign: 'center',
            width: windowWidth < 600 ? '90%' : '70%',
            zIndex: 1, // Above video
            color: '#949494', // Adjusting for legibility over video
        },
        qrBox: {
            position: 'fixed',
            bottom: '50px',
            right: '60px',
            display: windowWidth < 600 ? 'none' : 'flex',
            flexDirection: windowWidth < 600 ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            border: '1px solid #999', // White border
            backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent white background for the glassy effect
            backdropFilter: 'blur(10px)', // Blur effect for the glassy background
            // borderRadius: '10px', // Optional: adds rounded corners for a smoother look
            padding: '15px', // Optional: provides some spacing inside the qrBox
        },
        
        qrImage: {
            marginRight: windowWidth < 600 ? '0' : '20px',
            width:'80px',
            height:'80px'
        },
        downloadText: {
            fontFamily: "'Benzin-Medium'",
            fontSize: windowWidth < 600 ? 20 : 20,
            textAlign: 'center',
            color: '#FFF', // Adjusting for legibility over video
        },
        downloadButton: {
            display: windowWidth < 600 ? 'block' : 'none',
            marginTop: '10%',
            padding: '20px 80px',
            backgroundColor: 'white',
            color: 'black',
            fontFamily: "'NeueMontreal-Medium', sans-serif",
            fontSize: '16px',
            borderRadius: 30,
            border: 'none',
            cursor: 'pointer',
            zIndex: 1, // Above video
        },
    });

    const styles = getDynamicStyles();
    const subheaderText = windowWidth < 600 ?
    "Trade crypto, stocks, forex & more with omnichain liquidity and advanced analytics" :
    "Trade 100k+ markets including crypto, stocks, forex & more with omnichain liquidity and advanced analytics in a seamless way";

    return (
        <div style={styles.container}>
            {/* <video autoPlay muted loop style={styles.videoBackground}>
            <source src={tradeVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
            <div style={styles.header}>
                THE ULTIMATE<br />TRADING<br />EXPERIENCE
            </div>
            <div style={styles.subheader}>
                {subheaderText}
            </div>
            <div style={styles.qrBox}>
                <img src="https://res.cloudinary.com/xade-finance/image/upload/v1711794211/jgrtyx4wisomxtfmnovt.png" alt="QR Code" style={styles.qrImage} />
                <div style={styles.downloadText}>
                    DOWNLOAD<br/>XADE 2.0
                </div>
            </div>
            <button style={styles.downloadButton} onClick={() => window.open('https://bit.ly/xade.finance/', '_blank', 'noopener,noreferrer')}>
    Download Now
</button>

        </div>
    );
};

export default TradeSection;
