import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

const NavBar = () => {
    const router = useRouter();
    const currentRoute = router.pathname;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [darkMode, setDarkMode] = useState(false); // Add state for dark mode

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [router.asPath]);

    useEffect(() => {
        const token = localStorage.getItem('BioTreeToken');
        setIsLoggedIn(!!token);
        const isDarkMode = localStorage.getItem('darkMode') === 'true'; // Check local storage for dark mode preference
        setDarkMode(isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.add('dark'); // Add dark class to root element
        } else {
            document.documentElement.classList.remove('dark'); // Remove dark class from root element
        }
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode); // Save preference in local storage
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <>    
            <nav className={`bg-white border-gray-200 dark:bg-gray-900`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center">
                        <img src="/images/favicon.ico" className="h-8 mr-3" alt="Company Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Biotree</span>
                    </Link>
                    <button onClick={toggleMobileMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <div className={`${mobileMenuOpen ? "" : "hidden"} w-full md:block md:w-auto focus:outline-none`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link href="/" className={`w-[70px] justify-center text-center rounded-full hover:text-pink-400 hover:bg-green-400 block py-2 pl-3 pr-4 ${currentRoute === '/' ? 'text-red-500' : 'text-green-500 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition-all transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out cursor-default'}`}>Home</Link>
                            </li>
                            <li>
                                <Link href="/apply" className={`block py-2 w-[70px] justify-center text-center rounded-full hover:text-pink-400 hover:bg-green-400 pl-3 pr-4 ${currentRoute === '/apply' ? 'text-red-500 bg-blue-700 md:bg-transparent dark:text-blue-500' : 'text-gray-900 transition-all transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out text-green-500 cursor-default dark:text-white'}`}>Apply</Link>
                            </li>
                            <li>
                                <Link href="/login" className={`block py-2 pl-3 pr-4 w-[70px] justify-center text-center rounded-full hover:text-pink-400 hover:bg-green-400 ${currentRoute === '/login' ? 'text-red-500 bg-blue-700 md:bg-transparent dark:text-blue-500' : 'text-gray-900 transition-all transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out cursor-default text-green-500 dark:text-white'}`}>Login</Link>
                            </li>
                            {isLoggedIn && (
                                <li>
                                    <Link href="/dashboard" className={`block py-2 pl-3 pr-4 rounded md:p-0 ${currentRoute === '/dashboard' ? 'text-blue-700 bg-blue-700 md:bg-transparent dark:text-blue-500' : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'}`}>Dashboard</Link>
                                </li>
                            )}
                            <li>
                                <Link href="/contact" className={`block py-2 pl-3 pr-4 ${currentRoute === '/contact' ? 'text-red-500 md:bg-transparent dark:text-blue-500' : 'w-full transition-all transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out cursor-default justify-center text-center rounded-full hover:text-pink-400 hover:bg-green-400 text-green-500 dark:text-white'}`}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <button onClick={toggleDarkMode} className="ml-4 p-2 text-gray-500 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
                        {darkMode ? (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM10 0a10 10 0 11-1.018 19.962A9.974 9.974 0 0010 0z" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0a10 10 0 100 20 10 10 0 000-20zM10 2a8 8 0 110 16A8 8 0 0110 2z" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
