import React from 'react'
import Link from 'next/link'
import { Apple, Play } from 'lucide-react'

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="relative bg-gray-900 text-white py-10 px-6">

      {/* Wave Effect (You can add SVG wave here for a design touch) */}
      <svg className="absolute top-0 left-0 right-0 -mt-1 h-8" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path fill="#1a202c" fillOpacity="1" d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,186.7C672,181,768,139,864,133.3C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 space-y-8 md:space-y-0">

        {/* Left Section: Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-2xl font-bold">
            HireHUB
          </Link>
          <p className="text-sm text-gray-400 mt-2">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
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
          <Link href="https://twitter.com/yourprofile" target="_blank" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* Add Twitter SVG Path */}
            </svg>
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-600 transition">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* Add LinkedIn SVG Path */}
            </svg>
          </Link>
          <Link href="https://github.com/yourprofile" target="_blank" aria-label="GitHub" className="text-gray-400 hover:text-blue-600 transition">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* Add GitHub SVG Path */}
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10">
        <p className="text-sm">&copy; 2024 Shubhadip Bhowmik. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
