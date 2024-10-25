import "../styles/globals.css";
import "../styles/Preloader.css";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import NProgress from 'nprogress';
import '../public/nprogress.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';
import UserContext from "@/context/userContext";
import Preloader from "../components/Preloader"; // Import the Preloader component

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true); // State for preloader visibility
  const router = useRouter();

  // create a blank state object
  const [userData, setUserData] = useState({
    name: '',
    role: '',
    avatar: '',
    handle: '',
    bio: '',
  });

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      NProgress.start();
      setIsPreloaderVisible(true); // Show preloader on route change
    };

    const handleComplete = () => {
      setIsLoading(false);
      NProgress.done();
      setIsPreloaderVisible(false); // Hide preloader when loading is complete
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  useEffect(() => {
    // Set a timeout to hide the preloader after 5 seconds
    const timer = setTimeout(() => {
      setIsPreloaderVisible(false); // Hide preloader after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <>
      {isPreloaderVisible ? ( // Render preloader if visible
        <Preloader />
      ) : (
        <>
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
            <Component {...pageProps} />
          </UserContext.Provider>
          <ToastContainer />
          <Footer />
        </>
      )}
    </>
  );
}
