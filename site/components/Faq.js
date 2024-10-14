import React from 'react';
import { HelpCircle, Info, CheckCircle, XCircle } from 'lucide-react';

const Faq = () => {
  const faqData = [
    {
      question: 'What is BioTree?',
      answer: 'BioTree is a platform where you can manage all your social media links in one place.',
      icon: <HelpCircle className="w-6 h-6 text-blue-500" />
    },
    {
      question: 'How can I create a BioTree?',
      answer: 'Simply sign up, create an account, and start adding your social media links to your profile.',
      icon: <Info className="w-6 h-6 text-green-500" />
    },
    {
      question: 'Is BioTree free to use?',
      answer: 'Yes, BioTree offers a free plan with essential features. We also offer premium features in our paid plan.',
      icon: <CheckCircle className="w-6 h-6 text-yellow-500" />
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
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <div className="flex-shrink-0">
              {faq.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
