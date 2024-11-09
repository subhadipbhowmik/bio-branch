import { useState, useEffect } from 'react';
import "../styles/globals.css";
import "../styles/scrollToTopButton.css";
import { useRouter } from 'next/router';
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import ScrollToTopButton from "../components/ScrollToTopButton";
import NProgress from 'nprogress';
import '../public/nprogress.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';
import UserContext from "@/context/userContext";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Dark mode state
  const [userData, setUserData] = useState({
    name: '',
    role: '',
    avatar: '',
    handle: '',
    bio: '',
  });

  const [showButton, setShowButton] = useState(false);
  const router = useRouter();

  // Load the dark mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode); // Apply the saved mode
  }, []);

  // Toggle the dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode); // Save preference to localStorage
  };

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      NProgress.start();
    };
    const handleComplete = () => {
      setIsLoading(false);
      NProgress.done();
    };

    // Show or hide the button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
      window.removeEventListener('scroll', handleScroll); // Clean up the scroll event listener
    };
  }, [router.events]);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={darkMode ? 'dark' : ''}> {/* Apply dark mode class conditionally */}
      <NavBar />
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-WYTYXQXVK6`} />
      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WYTYXQXVK6', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <UserContext.Provider value={{ userData, setUserData }}>
        <div className="min-h-screen bg-white dark:bg-gray-900"> {/* Background color changes based on dark mode */}
          <header className="flex justify-between items-center p-4">
            {/* Dark mode toggle button */}
            <button
              onClick={toggleDarkMode}
              className="bg-gray-800 text-white p-2 rounded-full"
              style={{
                position: 'absolute',
                top: '10px', // Adjust the position as needed
                right: '10px',
                zIndex: 1000, // Ensure it appears above other content
              }}
            >
              {darkMode ? '🌙' : '🌞'}
            </button>
          </header>
          <Component {...pageProps} />
        </div>
      </UserContext.Provider>
      <ToastContainer />
      {isLoading && <div className="nprogress-custom-parent"><div className="nprogress-custom-bar" /></div>}
      <Footer />

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            zIndex: 1000,
          }}
          title="Go to top"
        >
          &#8593; {/* Up Arrow */}
        </button>
      )}
    </div>
  );
}
