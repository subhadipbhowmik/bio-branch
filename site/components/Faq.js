"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuestionCircle, FaInfoCircle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

const faqData = [
  {
    question: 'What is BioTree?',
    answer: 'BioTree is a platform where you can manage all your social media links in one place.',
    icon: <FaQuestionCircle className="w-6 h-6 text-blue-500" />
  },
  {
    question: 'How can I create a BioTree?',
    answer: 'Simply sign up, create an account, and start adding your social media links to your profile.',
    icon: <FaInfoCircle className="w-6 h-6 text-green-500" />
  },
  {
    question: 'Is BioTree free to use?',
    answer: 'Yes, BioTree offers a free plan with essential features. We also offer premium features in our paid plan.',
    icon: <FaCheckCircle className="w-6 h-6 text-yellow-500" />
  },
  {
    question: 'Can I customize my BioTree?',
    answer: 'Yes, you can customize the appearance of your BioTree by choosing different themes and layouts.',
    icon: <FaTimesCircle className="w-6 h-6 text-red-500" />
  }
]

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false)

   return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqData.map((faq, index) => {
          return (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 flex flex-col space-y-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex-shrink-0">
                  {faq.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 flex-grow">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosArrowDown className="w-6 h-6 text-blue-500" />
                </motion.div>
              </div>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function FAQ() {
  return (
    <div className="mb-10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Everything you need to know about BioTree. Can't find the answer you're looking for? Feel free to contact our support team.
          </p>
        </div>
        <div className="mt-12 space-y-6">
          {faqData.map((faq, index) => (
            <FaqItem key={index} faq={faq} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}