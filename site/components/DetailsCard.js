import React from 'react'
import { Camera, Heart, Home, User, Link, Edit } from 'lucide-react'

const DetailsCard = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-left mb-4">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <div className="text-4xl mb-4">
              <Camera />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-left">Capture Moments</h3>
            <p className="text-white text-left">Seamlessly integrate your favorite photo-sharing platforms to easily capture and display your moments. Show your best photos to friends and family in a more structured way.</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <div className="text-4xl mb-4">
              <Heart />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-left">Stay Connected</h3>
            <p className="text-white text-left">Add and organize your social media links to stay connected with the people who matter most. Manage all your connections in one easily accessible place.</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <div className="text-4xl mb-4">
              <Home />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-left">Personal Dashboard</h3>
            <p className="text-white text-left">Your personalized dashboard helps you manage all your online links in a centralized, customizable place. Gain control of how you present yourself online in an efficient way.</p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <div className="text-4xl mb-4">
              <User />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-left">Profile Management</h3>
            <p className="text-white text-left">Easily manage and update your profiles on multiple platforms. Keep your online presence fresh, consistent, and reflective of your evolving brand or personality.</p>
          </div>
          
          {/* Card 5 */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <div className="text-4xl mb-4">
              <Link />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-left">All Links in One Place</h3>
            <p className="text-white text-left">Organize all your important links in one accessible location. Give others quick access to your online profiles, websites, or portfolios, ensuring everything is easy to find.</p>
          </div>
          
          {/* Card 6 */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <div className="text-4xl mb-4">
              <Edit />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-left">Easy Customization</h3>
            <p className="text-white text-left">Personalize your profile quickly with intuitive and user-friendly customization tools. Tailor your page to reflect your unique style and needs with minimal effort.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default DetailsCard
