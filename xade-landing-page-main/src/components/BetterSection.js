import React, { useState, useEffect } from 'react';
import "../styles/style.css";
import aiVideo from './ai.mp4'; // Update this path to where your video is located
import { FaArrowRight } from 'react-icons/fa'; // Add this import

const BetterSection = () => {
    const containerStyle = {
        padding: '5% 0',
        backgroundColor: '#000',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
    };

    const videoStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        minWidth: '100%',
        minHeight: '100%',
        width: 'auto',
        height: 'auto',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
        opacity: 0.3,
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 1,
    };

    const [isMobile, setIsMobile] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showInput, setShowInput] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('http://localhost:3000/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            alert('Thank you for joining the waitlist!');
            setShowPopup(false);
            setEmail('');
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setShowPopup(false);
        }
    };

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

    const textStyle = {
        fontFamily: 'SK-Modernist-Bold',
        fontSize: isMobile ? '40px' : '100px',
        textAlign: 'center',
        color: '#fff',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    };

    const subTextStyle = {
        fontSize: isMobile ? '14px' : '24px',
        textAlign: 'center',
        color: '#ccc',
        fontFamily: 'SK-Modernist-Regular',
    };

    const buttonStyle = {
        display: 'block',
        width: 'fit-content',
        margin: isMobile ? '5% auto' : '2% auto',
        padding: '12px 36px',
        borderRadius: 30,
        background: '#fff',
        color: '#000',
        boxShadow: '0 0 10px rgba(255,255,255,0.5)',
        fontFamily: 'SK-Modernist-Bold',
        textDecoration: 'none',
        fontSize: isMobile ? 14 : 18,
        border: 'none',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
    };

    const popupStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        overflow: 'auto'
    };

    const popupContentStyle = {
        backgroundColor: '#111',
        padding: isMobile ? '20px' : '30px',
        borderRadius: '15px',
        maxWidth: isMobile ? '90%' : '400px',
        width: '90%',
        color: 'white',
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
        margin: isMobile ? '20px auto' : 'auto'
    };

    const popupInputStyle = {
        width: '100%',
        padding: isMobile ? '10px' : '12px',
        marginBottom: '15px',
        borderRadius: '8px',
        border: '1px solid #333',
        backgroundColor: '#222',
        color: 'white',
        fontSize: isMobile ? '14px' : '16px'
    };

    const popupButtonStyle = {
        ...buttonStyle,
        width: '100%',
        margin: '0',
        padding: isMobile ? '10px' : '12px 36px',
        fontSize: isMobile ? '14px' : '18px'
    };

    const inputContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: isMobile ? '5% auto' : '2% auto',
        maxWidth: '400px',
        transition: 'all 0.3s ease',
    };

    const inputStyle = {
        flex: 1,
        padding: '12px 20px',
        borderRadius: '30px',
        border: 'none',
        fontSize: isMobile ? '14px' : '16px',
        outline: 'none',
        marginRight: '10px', // Add space between input and button
    };

    const submitButtonStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: '#fff',
        color: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        flexShrink: 0, // Prevent button from shrinking
        zIndex: 1, // Ensure the button is above the input
    };

    const handleJoinWaitlist = () => {
        window.open('https://t.me/xadeofficial', '_blank');
    };

    return (
        <div style={containerStyle}>
            <video autoPlay loop muted playsInline style={videoStyle}>
                <source src={aiVideo} type="video/mp4" />
            </video>
            <div style={contentStyle}>
                <div style={textStyle}>
                    Degen AI
                </div>
                <div style={subTextStyle}>
                    Your personal AI powered quant trader
                </div>
                <button 
                    onClick={handleJoinWaitlist} 
                    style={buttonStyle}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
                    Join waitlist
                </button>
            </div>
        </div>
    );
};

export default BetterSection;
