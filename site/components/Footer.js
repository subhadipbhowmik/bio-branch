import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-[#faf7f2] text-black py-10 px-8 mt-6">
      {/* First Row: Logo, Social Icons, Sign Up */}
      <div className="flex flex-col md:flex-row items-center justify-between py-4">
        <p className="text-2xl font-bold text-[#2a2a46]">Biotree</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#"><FontAwesomeIcon icon={faTwitter} className="text-[#2a2a46] hover:text-blue-500" /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} className="text-[#2a2a46] hover:text-blue-600" /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} className="text-[#2a2a46] hover:text-pink-600" /></a>
          <a href="#"><FontAwesomeIcon icon={faGithub} className="text-[#2a2a46] hover:text-gray-900" /></a>
        </div>
        <button className="bg-[#2a2a46] hover:bg-[#1d1d33] text-white font-semibold py-2 px-8 rounded-full mt-4 md:mt-0">Sign up</button>
      </div>

      <hr className="border-t border-[#2a2a46] my-6" />

      {/* Second Row: About, Newsletter, Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="text-left">
          <h4 className="text-xl font-semibold text-[#2a2a46]">About Biotree</h4>
          <p className="text-sm text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.**
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="text-center">
          <h4 className="text-xl font-semibold text-[#2a2a46]">Join Our newsletter</h4>
          <p className="text-sm text-gray-600 mt-2">Be the first to know about our latest updates.</p>
          <div className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Enter your mail"
              className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
            <button className="ml-2 bg-[#2a2a46] hover:bg-[#1d1d33] text-white font-semibold px-6 py-2 rounded-full text-sm">
              Subscribe
            </button>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="text-left ">
          <h4 className="text-xl font-semibold text-[#2a2a46]">Useful Links</h4>
          <div className="flex text-sm text-gray-600 items-center justify-between pr-20 mt-5">
            <p><a href="#" className="hover:underline">Home</a></p>
            <p><a href="#" className="hover:underline">Guide</a></p>
            <p><a href="#" className="hover:underline">Features</a></p>
          </div>
          <div className="flex text-sm text-gray-600 items-center justify-between pr-20 mt-5">
            <p><a href="#" className="hover:underline">Terms & Conditions</a></p>
            <p><a href="#" className="hover:underline">Privacy Policy</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
