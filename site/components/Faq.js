import React, { useState } from 'react';
import { HelpCircle, Info, CheckCircle, XCircle } from 'lucide-react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const faqData = [
    {
      question: 'What is BioTree?',
      answer: 'BioTree is a powerful platform that enables you to efficiently manage all your social media links in one convenient location, helping you enhance your online presence.',
      icon: <HelpCircle className="w-8 h-8 text-blue-600" />
    },
    {
      question: 'How can I create a BioTree?',
      answer: 'To create your BioTree, simply sign up, create an account, and start adding your social media links to your profile. It’s quick and easy!',
      icon: <Info className="w-8 h-8 text-green-600" />
    },
    {
      question: 'Is BioTree free to use?',
      answer: 'Yes, BioTree offers a free plan that includes essential features. Additionally, we provide premium features in our paid plans for those looking for advanced functionalities.',
      icon: <CheckCircle className="w-8 h-8 text-yellow-600" />
    },
    {
      question: 'Can I customize my BioTree?',

      answer: 'Yes, you can customize the appearance of your BioTree by choosing different themes and layouts.',
      icon: <XCircle className="w-6 h-6 text-red-500" />
    },
    {
      question: 'What devices does BioTree support?',
      answer: 'BioTree works seamlessly on both mobile and desktop devices, offering a responsive and user-friendly experience.',
      icon: <DeviceMobile className="w-6 h-6 text-purple-500" />
    },
    {
      question: 'Can I track the performance of my BioTree links?',
      answer: 'Yes, BioTree provides analytics on link clicks and visitor insights, helping you track your performance.',
      icon: <TrendingUp className="w-6 h-6 text-indigo-500" />
    },
    {
      question: 'How do I upgrade to a premium plan?',
      answer: 'To upgrade, go to your account settings and choose the premium plan that best suits your needs.',
      icon: <ArrowUpCircle className="w-6 h-6 text-orange-500" />
    },
    {
      question: 'Is my BioTree data secure?',
      answer: 'We prioritize the security of your data with advanced encryption and regular security audits.',
      icon: <Shield className="w-6 h-6 text-cyan-500" />
    },
    {
      question: 'Can I integrate other tools with my BioTree?',
      answer: 'Yes, BioTree allows integration with third-party tools like Google Analytics, Mailchimp, and more.',
      icon: <PuzzlePiece className="w-6 h-6 text-pink-500" />
    },
    {
      question: 'How do I delete my BioTree account?',
      answer: 'To delete your account, go to account settings, scroll to the bottom, and click on the "Delete Account" button.',
      icon: <Trash className="w-6 h-6 text-gray-500" />
    },

  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Frequently Asked Questions</h2>
      <div className="space-y-8">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item-container bg-white rounded-lg shadow-lg p-6 flex transition-transform transform 
            cursor-pointer hover:scale-105 hover:shadow-xl hover:bg-gray-50 duration-300 ease-in-out 
            ${activeIndex === index ? 'bg-gray-100 border border-gray-300' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-start mb-2 space-x-4">
              <div className="flex-shrink-0">
                {/* Inline style for 360-degree rotation */}
                <span
                  style={{
                    display: 'inline-block',
                    transition: 'transform 0.3s ease-in-out',
                    transform: activeIndex === index ? 'rotate(360deg)' : 'rotate(0deg)',
                  }}
                >
                  {faq.icon}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">{faq.question}</h3>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out 
                ${activeIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
              style={{ height: activeIndex === index ? 'auto' : '0px' }}
            >
              <p className="text-gray-600 leading-relaxed transition-opacity duration-500">{faq.answer}</p>
            </div>
            <span className="text-sm text-gray-500 mt-2">{activeIndex === index ? 'Hide' : 'Show'} Answer</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
