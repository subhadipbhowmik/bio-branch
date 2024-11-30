import React from 'react'
import Link from 'next/link'
import { Apple, Play } from 'lucide-react'

const Footer = () => { 
  return (
    <footer aria-label="Site Footer" className="relative bg-gray-900 text-white py-10 px-6">

      {/* Wave Effect (You can add SVG wave here for a design touch) */}
      <svg className="absolute top-0 left-0 right-0 -mt-1 h-8" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path fill="#1a202c" fillOpacity="1" 
        // Insert necessary path of SVG wave
        d="">
        </path>
      </svg>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 space-y-8 md:space-y-0">

        {/* Left Section: Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-2xl font-bold">
            BioTree 
          </Link>
          <p className="text-sm text-gray-400 mt-2">&copy; {new Date().getFullYear()} BioTree. All rights reserved.</p>
        </div>

         {/* Center Section: App Store Links (Optional) */}
         <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 space-x-0 md:space-x-4 md:order-3 p-4 bg-black-800 rounded-lg">
     <div className="flex space-x-4">
    <Link href="https://play.google.com/store" target="_blank">
    <button type="button" class="flex items-center justify-center w-48 text-white  border-black bg-gray rounded-lg h-14">
    <div class="mr-3">
        <svg viewBox="30 336.7 120.9 129.2" width="30">
            <path fill="#FFD400"
                d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z">
            </path>
            <path fill="#FF3333"
                d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z">
            </path>
            <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z">
            </path>
            <path fill="#3BCCFF"
                d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z">
            </path>
        </svg>
    </div>
    <div>
        <div class="text-xs">
            GET IT ON
        </div>
        <div class="-mt-1 font-sans text-xl font-semibold">
            Google Play
        </div>
    </div>
</button>

    </Link>
    <Link href="https://www.apple.com/app-store/" target="_blank">
    <button href="#" class="flex  w-48 h-14 bg-transparent  border border-black rounded-xl items-center justify-center">
    <div class="mr-3">
        <svg viewBox="0 0 384 512" width="30" >
            <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
        </svg>
    </div>
    <div>
        <div class="text-xs">Download on the</div>
        <div class="text-2xl font-semibold font-sans -mt-1">App Store</div>
    </div>
</button>
    </Link>
  </div>
</div>
        {/* Feature: Contact Us */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <div className="flex flex-col space-y-2">
            {/* Email Contact */}
            <a href="mailto:contact@yourdomain.com" className="text-sm font-semibold hover:underline">
              contact@yourdomain.com
            </a>
            {/* Phone Contact */}
            <a href="tel:+123456789" className="text-sm font-semibold hover:underline">
              +1 234 567 89
            </a>
            {/* Or a Contact Form Link */}
            <Link href="/contact" className="text-sm font-semibold hover:underline">
              Contact Form
            </Link>
          </div>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex space-x-6 md:order-2">
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
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10">
        <p className="text-sm">&copy; {new Date().getFullYear()} Shubhadip Bhowmik. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
