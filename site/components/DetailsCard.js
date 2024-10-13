import React from 'react';
import { Camera, Heart, Home, User, Link, Edit } from 'lucide-react';

const DetailsCard = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Features Heading */}
        <h2 className="text-5xl font-bold text-center mb-8 animate-gradient-text">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative card bg-blue-500 text-white rounded-lg p-6 transition-all cursor-pointer">
            <div className="text-4xl mb-4">
              <Camera />
            </div>
            <h3 className="text-xl font-semibold mb-2">Capture Moments</h3>
            <p>Seamlessly integrate your favorite photo-sharing platforms.</p>
          </div>

          {/* Card 2 */}
          <div className="relative card bg-pink-500 text-white rounded-lg p-6 transition-all cursor-pointer">
            <div className="text-4xl mb-4">
              <Heart />
            </div>
            <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
            <p>Add and organize your social media links to stay connected.</p>
          </div>

          {/* Card 3 */}
          <div className="relative card bg-green-500 text-white rounded-lg p-6 transition-all cursor-pointer">
            <div className="text-4xl mb-4">
              <Home />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personal Dashboard</h3>
            <p>Manage all your online links in one centralized place.</p>
          </div>

          {/* Card 4 */}
          <div className="relative card bg-yellow-500 text-white rounded-lg p-6 transition-all cursor-pointer">
            <div className="text-4xl mb-4">
              <User />
            </div>
            <h3 className="text-xl font-semibold mb-2">Profile Management</h3>
            <p>Easily manage and update your profiles on multiple platforms.</p>
          </div>

          {/* Card 5 */}
          <div className="relative card bg-purple-500 text-white rounded-lg p-6 transition-all cursor-pointer">
            <div className="text-4xl mb-4">
              <Link />
            </div>
            <h3 className="text-xl font-semibold mb-2">All Links in One Place</h3>
            <p>Organize all your important links in one accessible location.</p>
          </div>

          {/* Card 6 */}
          <div className="relative card bg-pink-600 text-white rounded-lg p-6 transition-all cursor-pointer">
            <div className="text-4xl mb-4">
              <Edit />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Customization</h3>
            <p>Quickly customize your profile with intuitive tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsCard;
