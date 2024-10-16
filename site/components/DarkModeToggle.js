// components/DarkModeToggle.js
import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the saved preference in localStorage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.body.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const newMode = !isDarkMode;
    
    // Save the preference in localStorage
    localStorage.setItem('darkMode', newMode);
    
    // Toggle the class on the body
    if (newMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  return (
    <button onClick={toggleDarkMode} className="toggle-dark-mode">
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
