import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import illustration from '../assets/illustration.png';
import "../styles/style.css";
import { CSSProperties } from 'react';

// ... existing code ...

// ... existing code ...
// ... existing code ...

const TradeLive = () => {
    const containerStyle = {
        padding: '5% 0',
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // Check on mount
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const imageStyle = {
        padding: isMobile ? '0 10%' : '0 20%',
        width: '100%',
        height: 'auto',
    };

    const textStyle: CSSProperties = {
        fontFamily: 'SK-Modernist-Bold',
        fontSize: isMobile ? '40px' : '100px',
        textAlign: 'center',
    };

    const subTextStyle: CSSProperties = {
        fontSize: isMobile ? '14px' : '24px',
        textAlign: 'center',
        color: '#A8A8A8',
        fontFamily: 'SK-Modernist-Regular',
    };

    return (
        <div style={containerStyle}>
            <Image src={illustration} alt="Illustration" style={imageStyle} />
            <div style={textStyle}>
                Xade Pro is Live
            </div>
            <div style={subTextStyle}>
                Trade perps via an orderbook fitted with omnichain liquidity <br />directly from Xade&apos;s super app
            </div>
            <a href="https://trade.xade.finance" style={{ display: 'block', width: 'fit-content', margin: isMobile ? '5% auto' : '2% auto', padding: '10px 30px', borderRadius: 30, background: 'white', color: 'black', fontFamily: 'SK-Modernist-Regular', textDecoration: 'none', fontSize: isMobile ? 12 : 18 }}>
                Start trading
            </a>
        </div>
    );
};

export default TradeLive