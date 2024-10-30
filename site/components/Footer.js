import React from "react";
import Link from "next/link";
import { Apple, Play } from "lucide-react";

const Footer = () => { 
  return (
    <footer
      aria-label="Site Footer"
      className="relative bg-gray-900 text-white py-10 px-6"
    >
      {/* Wave Effect (You can add SVG wave here for a design touch) */}
 main
      <svg
        className="absolute top-0 left-0 right-0 -mt-1 h-8"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#1a202c"
          fillOpacity="1"
          d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,186.7C672,181,768,139,864,133.3C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>

      <svg className="absolute top-0 left-0 right-0 -mt-1 h-8" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path fill="#1a202c" fillOpacity="1" 
        // Insert necessary path of SVG wave
        d="">
        </path>
         main
      </svg>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 space-y-8 md:space-y-0">
        {/* Left Section: Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-2xl font-bold">
            BioTree 
          </Link>
        main
          <p className="text-sm text-gray-400 mt-2">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>

          <p className="text-sm text-gray-400 mt-2">&copy; {new Date().getFullYear()} BioTree. All rights reserved.</p>
         main
        </div>

        {/* Right Section: Download the App */}
        <div className="flex space-x-4 md:order-3">
          <Link href="https://play.google.com/store" target="_blank">
            <div className="flex items-center px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-blue-500 hover:text-white hover:shadow-xl transition-all duration-300 ease-in-out">
              <Play className="w-5 h-5 mr-2 transition-transform duration-300 ease-in-out hover:scale-110" />
              <span className="text-sm font-semibold">Google Play</span>
            </div>
          </Link>

          <Link href="https://www.apple.com/app-store/" target="_blank">
            <div className="flex items-center px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-blue-500 hover:text-white hover:shadow-xl transition-all duration-300 ease-in-out">
              <Apple className="w-5 h-5 mr-2 transition-transform duration-300 ease-in-out hover:scale-110" />
              <span className="text-sm font-semibold">App Store</span>
            </div>
          </Link>
        </div>

        {/* Feature: Contact Us */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <div className="flex flex-col space-y-2">
            {/* Email Contact */}
            <a
              href="mailto:support@bio-branch.com"
              className="text-sm font-semibold hover:underline"
            >
              Email Id:- support@bio-branch.com
            </a>

            <a
              href="https://wa.me/1234567890"
              className="text-sm font-semibold hover:underline"
            >
              For Chat :- Click here
            </a>

            {/* Phone Contact */}
            <a
              href="tel:+123456789"
              className="text-sm font-semibold hover:underline"
            >
              Phone No:- (123) 456-7890
            </a>
            {/* Or a Contact Form Link */}
            <Link
              href="/contact"
              className="text-sm font-semibold hover:underline"
            >
              Contact Form
            </Link>
          </div>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex space-x-6 md:order-2">
       main
          <Link
            href="https://twitter.com/yourprofile"
            target="_blank"
            aria-label="Twitter"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Add Twitter SVG Path */}
            </svg>
          </Link>
          <Link
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-blue-600 transition"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Add LinkedIn SVG Path */}
            </svg>
          </Link>
          <Link
            href="https://github.com/yourprofile"
            target="_blank"
            aria-label="GitHub"
            className="text-gray-400 hover:text-blue-600 transition"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Add GitHub SVG Path */}

          {/* NEW LOGOS with hover animation: Color change + Bouncing effect on Hover */}

          {/* New Twitter Logo */}
          {/* Added: Hover Change -> COLOR + Bouncing Effect on Hover */}
          <Link href="https://twitter.com/yourprofile" target="_blank" aria-label="Twitter" className="relative group text-gray-400 hover:text-[#1DA1F2] transition transform hover:scale-110">
            <span className="absolute inset-0 flex justify-center items-center overflow-visible">
              {/* Adjusted size of the circle here */}
              <span className="rounded-full bg-[#1DA1F2] opacity-0 scale-0 transition-transform duration-300 group-hover:opacity-100 group-hover:scale-125 z-1" style={{ width: '3rem', height: '1.7rem' }}> 
              </span>
            </span>
            {/* On Hover: Icon color changes to white and circle changes to logo color */}
            <svg
              className="h-6 w-7 relative z-2 transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              {/* Added Twitter SVG Path */}
              <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.002.959-3.127 1.184-.897-.959-2.178-1.558-3.594-1.558-2.723 0-4.927 2.204-4.927 4.917 0 .39.045.765.127 1.124-4.093-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.574-.666 2.476 0 1.71.87 3.214 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.6 3.414-1.68 1.319-3.809 2.107-6.102 2.107-.39 0-.779-.023-1.17-.067 2.189 1.396 4.768 2.212 7.557 2.212 9.054 0 14.001-7.497 14.001-13.986 0-.21 0-.423-.015-.635.962-.694 1.8-1.562 2.462-2.548l-.047-.02z" />
            </svg>
          </Link>

          {/* New GitHub Logo */}
          {/* Added: Hover Change -> COLOR + Bouncing Effect on Hover */}
          <Link href="https://github.com/subhadipbhowmik/bio-branch" target="_blank" aria-label="GitHub" className="relative group text-gray-400 transition transform hover:scale-110">
            <span className="absolute inset-0 flex justify-center items-center overflow-visible">
              {/* Adjusted size of the circle here */}
              <span className="rounded-full bg-[#181717] opacity-0 scale-0 transition-opacity transition-transform duration-300 group-hover:opacity-100 group-hover:scale-150 z-0" style={{ width: '3rem', height: '1.7rem' }}>
              </span>
            </span>
            {/* On Hover: Icon color changes to white and circle changes to logo color */}
            <svg
              className="h-6 w-7 relative z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              {/* Added GitHub SVG Path */}
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.254c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.304 3.492.998.108-.776.418-1.305.762-1.604-2.665-.303-5.467-1.334-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.625-5.479 5.921.43.37.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.588 8.202-6.084 8.202-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>

          {/* New LinkedIn Logo */}
          {/* Added: Hover Change -> COLOR + Bouncing Effect on Hover */}
          <Link href="https://www.linkedin.com/in/shubhadip-bhowmik/" target="_blank" aria-label="LinkedIn" className="relative group text-gray-400 transition transform hover:scale-110">
            <span className="absolute inset-0 flex justify-center items-center overflow-visible">
              {/* Adjusted size of the circle here */}
              <span
                className="rounded-full bg-[#0077B5] opacity-0 scale-0 transition-opacity transition-transform duration-300 group-hover:opacity-100 group-hover:scale-125 z-0" style={{ width: '3.2rem', height: '1.8rem' }}>
              </span>
            </span>
            {/* On Hover: Icon color changes to white and circle changes to logo color */}
            <svg
              className="h-6 w-7 relative z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              {/* Added LinkedIn SVG Path */}
              <path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.27h-3v-5.604c0-1.338-.026-3.066-1.867-3.066-1.867 0-2.154 1.459-2.154 2.969v5.701h-3v-11h2.888v1.503h.041c.403-.762 1.389-1.565 2.861-1.565 3.064 0 3.631 2.016 3.631 4.634v6.428z" />
            </svg>
          </Link>

          {/* New Instagram Logo */}
          {/* Added: Hover Change -> COLOR + Bouncing Effect on Hover */}
          <Link href="https://instagram.com/yourprofile" target="_blank" aria-label="Instagram" className="relative group text-gray-400 transition transform hover:scale-110">
            <span className="absolute inset-0 flex justify-center items-center overflow-visible">
              {/* Adjusted size of the circle here */}
              <span className="rounded-full bg-[#E1306C] transition-opacity transition-transform duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-150 z-0" style={{ width: '3rem', height: '1.8rem' }}>
              </span>
            </span>
            {/* On Hover: Icon color changes to white and circle changes to logo color */}
            <svg
              className="h-6 w-7 relative z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              {/* Added Instagram SVG Path */}
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.413a4.92 4.92 0 0 1 1.702 1.01c.5.5.84 1.09 1.01 1.702.173.46.357 1.26.413 2.43.058 1.267.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.413 2.43a4.915 4.915 0 0 1-1.01 1.702 4.92 4.92 0 0 1-1.702 1.01c-.46.173-1.26.357-2.43.413-1.267.058-1.647.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.413a4.92 4.92 0 0 1-1.702-1.01 4.915 4.915 0 0 1-1.01-1.702c-.173-.46-.357-1.26-.413-2.43-.058-1.267-.07-1.647-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.413-2.43a4.92 4.92 0 0 1 1.01-1.702 4.915 4.915 0 0 1 1.702-1.01c.46-.173 1.26-.357 2.43-.413 1.267-.058 1.647-.07 4.85-.07m0-2.163C8.755 0 8.327.013 7.053.072 5.77.13 4.668.313 3.802.61a6.97 6.97 0 0 0-2.507 1.636A6.96 6.96 0 0 0 .61 4.755c-.297.866-.48 1.968-.538 3.251C0 8.327 0 8.755 0 12c0 3.245.013 3.673.072 4.947.058 1.283.241 2.385.538 3.251a6.96 6.96 0 0 0 1.636 2.507 6.97 6.97 0 0 0 2.507 1.636c.866.297 1.968.48 3.251.538 1.273.059 1.701.072 4.947.072s3.673-.013 4.947-.072c1.283-.058 2.385-.241 3.251-.538a6.97 6.97 0 0 0 2.507-1.636 6.96 6.96 0 0 0 1.636-2.507c.297-.866.48-1.968.538-3.251.059-1.273.072-1.701.072-4.947s-.013-3.673-.072-4.947c-.058-1.283-.241-2.385-.538-3.251a6.96 6.96 0 0 0-1.636-2.507A6.97 6.97 0 0 0 20.198.61c-.866-.297-1.968-.48-3.251-.538C15.673.013 15.245 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
      main
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10">
       main
        <p className="text-sm">
          &copy; 2024 Shubhadip Bhowmik. All rights reserved.
        </p>

        <p className="text-sm">&copy; {new Date().getFullYear()} Shubhadip Bhowmik. All rights reserved.</p>
       main
      </div>
    </footer>
  );
};

export default Footer;
