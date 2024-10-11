// Components/ScrollToTop.js
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        // Check if the user has scrolled down
        const scrolled = document.documentElement.scrollTop;
        setIsVisible(scrolled > 300); // Show button if scrolled more than 300px
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Adds smooth scrolling effect
        });
    };

    useEffect(() => {
        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        isVisible && ( // Render the button only if isVisible is true
            <button
                className="fixed bottom-32 right-7 z-[1000] bg-white text-blue-700 w-[50px] radius-10 border-2 rounded-xl border-blue-700 p-3 shadow-lg hover:bg-blue-700 hover:text-white transition duration-200 flex items-center justify-center"
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <span className="text-xl">↑</span>
            </button>
        )
    );
};

export default ScrollToTop;
