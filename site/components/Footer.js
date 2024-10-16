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
            Biotree
          </Link>
          <p className="text-sm text-gray-400 mt-2">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
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
