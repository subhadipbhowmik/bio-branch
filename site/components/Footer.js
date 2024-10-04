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