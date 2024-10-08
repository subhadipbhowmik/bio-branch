import React from 'react'
import Link from 'next/link'
import { Apple, Play, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react' // Imported from lucide-react

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">

        {/* Logo and App Store Buttons */}
        <div className="space-y-4">
          <Link href="/" className="text-xl font-bold">
            <img src="/images/favicon.ico" alt="SiteLogo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Biotree</span>
          </Link>
          <div className="space-y-2">
            <Link href="#" className="block">
              <img src="/images/store.png" alt="AppGallery" className="h-10" />
            </Link>
            <Link href="#" className="block">
              <img src="/images/store2.png" alt="Windows Store" className="h-10" />
            </Link>
            <Link href="#" className="block">
              <img src="/images/store3.png" alt="Google Play" className="h-10" />
            </Link>
            {/* <Link href="#" className="block">
              <img src="/images/footer_logo_4.png" alt="App Store" className="h-10" />
            </Link> */}
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm hover:underline">Profile</Link></li>
            <li><Link href="#" className="text-sm hover:underline">Your tree</Link></li>
            <li><Link href="#" className="text-sm hover:underline">Manage links</Link></li>
            <li><Link href="#" className="text-sm hover:underline">Content</Link></li>
            <li><Link href="#" className="text-sm hover:underline">Integrations</Link></li>
          </ul>
        </div>

        {/* Use Cases Links */}
        <div>
          <h3 className="font-semibold mb-4">Use Cases</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm hover:underline">Support</Link></li>
            <li><Link href="#" className="text-sm hover:underline">Theme</Link></li>
            <li><Link href="#" className="text-sm hover:underline">Connections</Link></li>
            <li><Link href="#" className="text-sm hover:underline">Customization</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm hover:underline">About Us</Link></li>
            <li><Link href="#" className="text-sm hover:underline">Careers</Link></li>
            <li><Link href="#" className="text-sm hover:underline">FAQs</Link></li>
            <li><Link href="#" className="text-sm hover:underline">Teams</Link></li>
            <li><Link href="#" className="text-sm hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-4">Subscribe to stay tuned for new web design and latest updates. Let’s do it!</p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email Address"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button type="submit" className="w-full bg-purple-500 text-white p-2 rounded-md">
              Subscribe
            </button>
          </form>
          <div className="mt-4 text-sm">
            <p>Wisconsin Ave, Suite 700</p>
            <p>Chevy Chase, Maryland 20815</p>
            <p><a href="mailto:support@figma.com" className="hover:underline">support@biotree.com</a></p>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="container mx-auto flex justify-center mt-10 space-x-4">
        <Link href="#" className="text-gray-400 hover:text-blue-500">
          <Facebook className="h-6 w-6" />
        </Link>
        <Link href="#" className="text-gray-400 hover:text-blue-500">
          <Twitter className="h-6 w-6" />
        </Link>
        <Link href="#" className="text-gray-400 hover:text-pink-500">
          <Instagram className="h-6 w-6" />
        </Link>
        <Link href="#" className="text-gray-400 hover:text-blue-600">
          <Linkedin className="h-6 w-6" />
        </Link>
        <Link href="#" className="text-gray-400 hover:text-red-600">
          <Youtube className="h-6 w-6" />
        </Link>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10">
        <p className="text-sm text-gray-500">&copy;2024 Shubhadip Bhowmik. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
