import React, { useEffect, useState } from 'react';
import { User, Edit, Share, CheckCircle } from 'lucide-react';

const TimelineEvent = ({ icon: Icon, title, description, index, isVisible }) => {
  const isEven = index % 2 === 0;
  const animations = ['animate-fadeIn', 'animate-scaleUp', 'animate-rotateIn', 'animate-bounceIn'];
  const animationClass = animations[index % animations.length];
  const gradients = [
    'from-blue-500 to-indigo-500',
    'from-pink-500 to-red-500',
    'from-green-500 to-teal-500',
    'from-yellow-500 to-orange-500'
  ];
  const gradientClass = gradients[index % gradients.length];

  return (
    <div className={`mb-8 flex flex-col md:flex-row md:justify-between items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
      <div className="order-1 w-full md:w-5/12"></div>
      <div
        className={`z-20 flex items-center order-1 bg-gradient-to-r ${gradientClass} shadow-xl w-8 h-8 md:w-12 md:h-12 rounded-full ${
          isVisible ? 'animate-bounce' : 'opacity-0'
        } transition-all duration-1000 ease-in-out`}
      >
        <Icon className={`w-4 h-4 md:w-6 md:h-6 text-white mx-auto ${isVisible ? animationClass : 'opacity-0'}`} />
      </div>
      <div className={`order-1 bg-gray-200 dark:bg-gradient-to-r ${gradientClass} rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 md:px-8 md:py-4 mt-4 md:mt-0 transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h3 className="mb-3 font-bold text-white text-xl md:text-2xl">{title}</h3>
        <p className="text-sm md:text-m leading-snug tracking-wide text-white">{description}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const [visibleEvents, setVisibleEvents] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const events = document.querySelectorAll('.timeline-event');
      const newVisibleEvents = [];
      events.forEach((event, index) => {
        const rect = event.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
        if (isVisible) {
          newVisibleEvents.push(index);
        }
      });
      setVisibleEvents(newVisibleEvents);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const events = [
    {
      icon: User,
      title: 'Sign Up',
      description: 'Create an account by providing your email address and creating a password.',
    },
    {
      icon: Edit,
      title: 'Customize Your Profile',
      description: 'Add your social media links and customize your profile\'s appearance.',
    },
    {
      icon: Share,
      title: 'Publish Your BioTree',
      description: 'Once you\'re happy with your profile, publish it and start sharing your links.',
    },
    {
      icon: CheckCircle,
      title: 'Final Review',
      description: 'Review your profile and make any necessary adjustments before finalizing.',
    }
  ];

  return (
    <div className="bg-gray-100 dark:bg-white py-16 md:py-32">
      <div className="container mx-auto w-full h-full px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800 dark:text-gray-900">How to Join BioTree</h2>
        <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border hidden md:block" style={{ left: '50%' }}></div>
          {events.map((event, index) => (
            <div key={index} className="timeline-event">
              <TimelineEvent {...event} index={index} isVisible={visibleEvents.includes(index)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;