import React from 'react'
import Link from 'next/link'
import { Apple, Play } from 'lucide-react'

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="relative bg-gray-900 text-white py-10 px-6">

      {/* Wave Effect (You can add SVG wave here for a design touch) */}
      <svg className="absolute top-0 left-0 right-0 -mt-1 h-8 " viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
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
          <h3 className="mb-2 text-lg font-semibold">Contact Us</h3>
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
          <path d="M21.72,0H2.28A2.28,2.28,0,0,0,0,2.28V21.72A2.28,2.28,0,0,0,2.28,24H21.72A2.28,2.28,0,0,0,24,21.72V2.28A2.28,2.28,0,0,0,21.72,0Zm-4.73,17.09h-1.87l-2.89-4.46-2.91,4.46H7.46L11,12,7.69,6.91h1.88l2.6,4.14L14.79,6.91h1.89L13.5,12Z" />
         </svg>


          </Link>
          <Link href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-600 transition">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.5 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75c.966 0 1.75.783 1.75 1.75s-.784 1.75-1.75 1.75zm13.268 12.268h-3v-5.604c0-1.337-.026-3.065-1.866-3.065-1.868 0-2.154 1.462-2.154 2.971v5.698h-3v-11h2.882v1.501h.041c.401-.757 1.379-1.554 2.84-1.554 3.039 0 3.6 2 3.6 4.599v6.454z"/>
          </svg>

          </Link>
          <Link href="https://github.com/yourprofile" target="_blank" aria-label="GitHub" className="text-gray-400 hover:text-blue-600 transition">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.803 8.207 11.385.6.111.793-.261.793-.577 0-.287-.011-1.046-.016-2.057-3.338.727-4.04-1.611-4.04-1.611-.546-1.387-1.333-1.757-1.333-1.757-1.088-.743.083-.728.083-.728 1.204.085 1.838 1.238 1.838 1.238 1.07 1.826 2.805 1.299 3.49.996.108-.776.419-1.299.763-1.599-2.666-.301-5.467-1.333-5.467-5.93 0-1.311.467-2.381 1.236-3.219-.124-.303-.536-1.522.117-3.166 0 0 1.007-.322 3.301 1.239 1.023-.284 2.115-.426 3.198-.429 1.082.003 2.173.145 3.196.429 2.295-1.561 3.302-1.239 3.302-1.239.655 1.644.242 2.863.118 3.166.77.838 1.236 1.908 1.236 3.219 0 4.608-2.805 5.626-5.471 5.926.433.372.823 1.104.823 2.226 0 1.609-.012 2.895-.012 3.279 0 .317.189.692.798.574 4.765-1.582 8.207-6.082 8.207-11.385 0-6.627-5.373-12-12-12z"/>
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
