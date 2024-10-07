import React from 'react';
import Link from 'next/link';
import { Apple, Play } from 'lucide-react';

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="relative bg-gray-900 text-white py-10 px-6">
 
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0">

        {/* Left Section: Recent Articles, Contact Us, and Stay Updated */}
        <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-10">
          {/* Recent Articles */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-lg font-semibold">Recent Articles</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/blog/post-1" className="text-sm text-gray-400 hover:underline transition">How to Get Started with Our App</Link>
              <Link href="/blog/post-2" className="text-sm text-gray-400 hover:underline transition">10 Tips for Using Our Service Effectively</Link>
              <Link href="/blog/post-3" className="text-sm text-gray-400 hover:underline transition">Understanding Our Features</Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <div className="flex flex-col space-y-2">
              <a href="mailto:contact@yourdomain.com" className="text-sm font-semibold hover:underline transition">
                contact@yourdomain.com
              </a>
              <a href="tel:+123456789" className="text-sm font-semibold hover:underline transition">
                +1 234 567 89
              </a>
              <Link href="/contact" className="text-sm font-semibold hover:underline transition">
                Contact Form
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="mt-4 flex space-x-4">
              <Link href="https://twitter.com/yourprofile" target="_blank" aria-label="Twitter" className="hover:text-blue-400 transition">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.494 0-.175 0-.349-.012-.522A8.18 8.18 0 0 0 22 5.92a8.306 8.306 0 0 1-2.357.636A4.1 4.1 0 0 0 21.448 4.3a8.194 8.194 0 0 1-2.605.988 4.1 4.1 0 0 0-7.086 3.743A11.64 11.64 0 0 1 3.184 4.864a4.079 4.079 0 0 0 1.27 5.473 4.092 4.092 0 0 1-1.852-.506v.051a4.104 4.104 0 0 0 3.291 4.016 4.099 4.099 0 0 1-1.848.07 4.107 4.107 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.406 11.616 11.616 0 0 0 8.29 20.251" />
                </svg>
              </Link>
              <Link href="https://linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn" className="hover:text-blue-600 transition">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM7.125 19.5H3.937V8.75h3.188v10.75zM5.531 7.312c-1.025 0-1.875-.85-1.875-1.875 0-1.025.85-1.875 1.875-1.875 1.025 0 1.875.85 1.875 1.875 0 1.025-.85 1.875-1.875 1.875zm14.344 12.188H16.69V13.5c0-1.428-.031-3.266-1.984-3.266-1.984 0-2.287 1.55-2.287 3.157v6.109H9.937V8.75h3.063v1.469h.043c.426-.81 1.46-1.654 3.007-1.654 3.213 0 3.807 2.113 3.807 4.862v6.073z" />
                </svg>
              </Link>
              <Link href="https://github.com/yourprofile" target="_blank" aria-label="GitHub" className="hover:text-gray-400 transition">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.372 0 0 5.372 0 12c0 5.304 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577 0-.285-.011-1.045-.016-2.052-3.338.726-4.042-1.601-4.042-1.601-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.204.084 1.836 1.235 1.836 1.235 1.07 1.832 2.807 1.303 3.49.997.107-.776.418-1.303.762-1.603-2.665-.303-5.466-1.332-5.466-5.926 0-1.31.469-2.383 1.235-3.225-.124-.303-.535-1.521.118-3.168 0 0 1.007-.324 3.3 1.23.957-.266 1.983-.398 3.004-.403 1.02.005 2.048.137 3.004.403 2.293-1.554 3.3-1.23 3.3-1.23.653 1.647.242 2.865.118 3.168.767.842 1.235 1.916 1.235 3.225 0 4.606-2.805 5.617-5.478 5.914.43.372.814 1.104.814 2.227 0 1.607-.014 2.904-.014 3.299 0 .32.214.694.825.577C20.565 21.796 24 17.303 24 12c0-6.628-5.372-12-12-12z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Stay Updated Section */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-lg font-semibold">Stay Updated</h3>
            <form className="flex space-x-2">
              <input type="email" placeholder="Your Email" className="p-2 rounded-lg border border-gray-700 bg-gray-800 text-white" required />
              <button type="submit" className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Right Section: App Store Links */}
        <div className="flex flex-col">
          <h3 className="mb-4 text-lg font-semibold">Download the App</h3>
          <div className="flex space-x-4">
            {/* Google Play Store */}
            <Link href="https://play.google.com/store" target="_blank">
              <div className="flex items-center px-4 py-2 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-xl transition">
                <Play className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold">Google Play</span>
              </div>
            </Link>
            {/* Apple Store */}
            <Link href="https://www.apple.com/app-store/" target="_blank">
              <div className="flex items-center px-4 py-2 bg-white text-gray-800 rounded-lg shadow-md hover:shadow-xl transition">
                <Apple className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold">App Store</span>
              </div>
            </Link>
          </div>
        </div>
 
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center">
        <p className="text-sm">&copy; 2024 Shubhadip Bhowmik. All rights reserved.</p>
      </div>
 

      {/* Quick Links Section */}
      <div className="mt-6 text-center">
        <h4 className="text-md font-semibold mb-2">Quick Links</h4>
        <div className="flex justify-center space-x-4">
          <Link href="/privacy-policy" className="text-sm text-gray-400 hover:underline transition">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-sm text-gray-400 hover:underline transition">Terms of Service</Link>
          <Link href="/faq" className="text-sm text-gray-400 hover:underline transition">FAQ</Link>
        </div>
      </div>
 
    </footer>
  );
};

export default Footer;
