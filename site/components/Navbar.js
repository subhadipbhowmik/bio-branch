import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    // Check if the user is logged in by looking for the token in localStorage
    const token = localStorage.getItem("BioTreeToken");
    setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <img
              src="/images/favicon.ico"
              className="h-8 mr-3"
              alt="Company Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Biotree
            </span>
          </Link>
          <button
            onClick={toggleMobileMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              mobileMenuOpen ? "" : "hidden"
            } w-full md:block md:w-auto focus:outline-none`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className={`w-[70px] justify-center text-center rounded-full hover:text-blue-400 block py-2 pl-3 pr-4 ${
                    currentRoute === "/"
                      ? "text-red-500"
                      : "text-black dark:text-white dark:hover:bg-gray-700 transition-all transform hover:scale-105 duration-300 ease-in-out cursor-default"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className={`block py-2 w-[70px] justify-center text-center rounded-full hover:text-blue-400 pl-3 pr-4 ${
                    currentRoute === "/apply"
                      ? "text-red-500 bg-blue-700 md:bg-transparent dark:text-blue-500"
                      : "text-black transition-all transform hover:scale-105 duration-300 ease-in-out cursor-default dark:text-white"
                  }`}
                >
                  Apply
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className={`block py-2 pl-3 pr-4 w-[70px] justify-center text-center rounded-full hover:text-blue-400 ${
                    currentRoute === "/login"
                      ? "text-red-500 bg-blue-700 md:bg-transparent dark:text-blue-500"
                      : "text-black dark:text-white transition-all transform hover:scale-105  duration-300 ease-in-out cursor-default"
                  }`}
                >
                  Login
                </Link>
              </li>
              {isLoggedIn && (
                <li>
                  <Link
                    href="/dashboard"
                    className={`block py-2 pl-3 pr-4 rounded md:p-0 hover:text-blue-400 ${
                      currentRoute === "/dashboard"
                        ? "text-red-500 bg-blue-700 md:bg-transparent dark:text-blue-500"
                      : "text-black dark:text-white transition-all transform hover:scale-105  duration-300 ease-in-out cursor-default"
                    }`}
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 px-6 bg-slate-900 text-white dark:text-black dark:bg-white ${
                    currentRoute === "/contact"
                      ? "text-red-500 md:bg-transparent dark:text-black-500"
                      : "w-full cursor-default justify-center text-center rounded-full"
                  }`}
                >
                  <h1 className="transition-all transform duration-100 ease-in-out hover:scale-105">Contact Us</h1>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
