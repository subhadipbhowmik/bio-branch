import React from 'react';
import { User, Edit, Share, CheckCircle } from 'lucide-react';

// Keyframes for different icon animations
const keyframes = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes scaleUp {
  from { transform: scale(0.9); }
  to { transform: scale(1); }
}
@keyframes rotateIn {
  from { transform: rotate(-20deg); opacity: 0; }
  to { transform: rotate(0); opacity: 1; }
}
@keyframes bounceIn {
  from { transform: scale(0.5); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
`;

const Process = () => {
  return (
    <div className="bg-gray-100 py-16">
      <style>{keyframes}</style> {/* Add keyframes here */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">How to Join BioTree</h2>
        <div className="relative">
          {/* Connector Lines */}
          <div className="absolute inset-0 flex items-center justify-between">
            <div className="w-1/4 border-t-2 border-gray-300"></div>
            <div className="w-1/4 border-t-2 border-gray-300"></div>
            <div className="w-1/4 border-t-2 border-gray-300"></div>
            <div className="w-1/4 border-t-2 border-gray-300"></div>
          </div>
          {/* Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full max-w-xs relative z-10 border border-gray-300">
                <User className="w-12 h-12 text-gray-600 dark:text-gray-300 mx-auto mb-4 animate-fadeIn" />
                <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-100">Sign Up</h3>
                <p className="text-gray-600 dark:text-gray-200">Create an account by providing your email address and creating a password.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full max-w-xs relative z-10 border border-gray-300">
                <Edit className="w-12 h-12 text-gray-600 dark:text-gray-300 mx-auto mb-4 animate-scaleUp" />
                <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-100">Customize Your Profile</h3>
                <p className="text-gray-600 dark:text-gray-200">Add your social media links and customize your profile's appearance.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full max-w-xs relative z-10 border border-gray-300">
                <Share className="w-12 h-12 text-gray-600 dark:text-gray-300 mx-auto mb-4 animate-rotateIn" />
                <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-100">Publish Your BioTree</h3>
                <p className="text-gray-600 dark:text-gray-200">Once you're happy with your profile, publish it and start sharing your links.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-full max-w-xs relative z-10 border border-gray-300">
                <CheckCircle className="w-12 h-12 text-gray-600 dark:text-gray-300 mx-auto mb-4 animate-bounceIn" />
                <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-100">Final Review</h3>
                <p className="text-gray-600 dark:text-gray-200">Review your profile and make any necessary adjustments before finalizing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
