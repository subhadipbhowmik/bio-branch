import React from 'react'
import Link from 'next/link'
import { Apple, Play, Twitter, Linkedin, Github, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="relative bg-gradient-to-r bg-gray-900 text-white py-16 px-6 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
        
        {/* Left Section: Logo and Description */}
        
        <Link href="/" className="flex flex-col items-start">
  <div className="flex items-center mb-4">
    <img src="/images/favicon.ico" className="h-8 mr-3" alt="Company Logo" />
    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
      Biotree
    </span>
  </div>
  <p className="text-gray-300 max-w-md text-center lg:text-left">
    BioTree is a platform where you can manage all your social media links in one place. Download now and join thousands of satisfied users!
  </p>
</Link>

    <footer aria-label="Site Footer" className="relative bg-gray-900 text-white py-10 px-6">


      {/* Wave Effect (You can add SVG wave here for a design touch) */}
      <svg className="absolute top-0 left-0 right-0 -mt-1 h-8" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path fill="#1a202c" fillOpacity="1" d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,186.7C672,181,768,139,864,133.3C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>

        {/* Middle Section: Quick Links */}
        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-purple-300 transition">About Us</Link></li>
            <li><Link href="/features" className="hover:text-purple-300 transition">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-purple-300 transition">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-purple-300 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Right Section: App Store Links */}
        <div className="flex flex-col items-center lg:items-end">
          <h3 className="text-xl font-semibold mb-4">Download the App</h3>
          <div className="flex flex-col space-y-4">
            {/* Google Play Store */}
            <Link href="https://play.google.com/store" target="_blank">
              <div className="flex items-center px-6 py-3 bg-white text-indigo-900 rounded-full hover:bg-purple-100 transition duration-300 shadow-lg">
                <Play className="w-6 h-6 mr-3" />
                <div>
                  <p className="text-xs">GET IT ON</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </div>
            </Link>
            {/* Apple Store */}
            <Link href="https://www.apple.com/app-store/" target="_blank">
              <div className="flex items-center px-6 py-3 bg-white text-indigo-900 rounded-full hover:bg-purple-100 transition duration-300 shadow-lg">
                <Apple className="w-6 h-6 mr-3" />
                <div>
                  <p className="text-xs">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 space-y-8 md:space-y-0">

        {/* Left Section: Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-2xl font-bold">
            HireHUB 
          </Link>
          <p className="text-sm text-gray-400 mt-2">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>

        {/* Center Section: App Store Links (Optional) */}
        <div className="flex space-x-4 md:order-3">
          <Link href="https://play.google.com/store" target="_blank">
            <Play className="w-8 h-8 text-gray-400 hover:text-white transition" />
          </Link>
          <Link href="https://www.apple.com/app-store/" target="_blank">
            <Apple className="w-8 h-8 text-gray-400 hover:text-white transition" />
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

      {/* Bottom Section: Social Media Links and Copyright */}
      <div className="mt-16 border-t border-purple-700 pt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="https://twitter.com/yourprofile" target="_blank" aria-label="Twitter" className="hover:text-purple-300 transition">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn" className="hover:text-purple-300 transition">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="https://github.com/yourprofile" target="_blank" aria-label="GitHub" className="hover:text-purple-300 transition">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="mailto:contact@yourapp.com" aria-label="Email" className="hover:text-purple-300 transition">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
          <p className="text-sm text-gray-300">&copy; 2024 BioTree. All rights reserved.</p>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer