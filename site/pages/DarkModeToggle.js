import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check localStorage for dark mode preference
    useEffect(() => {
        const darkModePreference = localStorage.getItem('darkMode');
        if (darkModePreference === 'enabled') {
            setIsDarkMode(true);
            document.body.classList.add('dark-mode');
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    };

    return (
        <>
            <style>
                {`
                body {
                    background-color: white;
                    color: black;
                    transition: background-color 0.3s, color 0.3s;
                }

                body.dark-mode {
                    background-color: #121212;
                    color: white;
                }

                .toggle-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end; /* Aligns the items to the right */
                    padding: 10px; /* Adds some padding around the wrapper */
                }

                .toggle {
                    appearance: none;
                    width: 50px;
                    height: 24px;
                    background: #ccc;
                    border-radius: 50px;
                    outline: none;
                    cursor: pointer;
                    position: relative;
                    transition: background 0.3s;
                }

                .toggle:checked {
                    background: #4CAF50; /* Green when checked */
                }

                .toggle:before {
                    content: '';
                    position: absolute;
                    width: 22px;
                    height: 22px;
                    left: 1px;
                    bottom: 1px;
                    background: white;
                    border-radius: 50%;
                    transition: transform 0.3s;
                }

                .toggle:checked:before {
                    transform: translateX(26px); /* Move the slider */
                }
                `}
            </style>
            <div className="toggle-wrapper">
                <label htmlFor="darkModeToggle" style={{ marginRight: '10px' }}>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </label>
                <input
                    id="darkModeToggle"
                    type="checkbox"
                    className="toggle"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                />
            </div>
        </>
    );
};

export default DarkModeToggle;
