import Link from 'next/link';
import MyHead from '../components/MyHead';
import Creators from '@/components/Creators';
import DetailsCard from '@/components/DetailsCard';
import Faq from '@/components/Faq';
import Process from '@/components/Process';
import { useState, useEffect } from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const carouselContent = [
    {
      src: 'https://www.zlti.com/wp-content/uploads/2021/06/enterprise-file-management.png',
      message: 'Manage All Your Social Links in One Place',
      alignment: 'left',
    },
    {
      src: 'https://www.agilitypr.com/wp-content/uploads/2023/01/website.jpg',
      message: 'Track and Enhance Your Online Presence',
      alignment: 'center',
    },
    {
      src: 'https://www.perfectiongeeks.com/images/blog/web-branding.jpg',
      message: 'Build a Powerful Personal Brand',
      alignment: 'right',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselContent.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselContent.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const alignmentStyles = {
    left: 'items-center justify-start pl-8',
    center: 'items-center justify-center',
    right: 'items-center justify-end pr-8',
  };

  return (
    <>
      <MyHead
        title="Home"
        description="Welcome to BioTree, the powerful platform to manage all your social media links in one place and enhance your online presence."
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://typefinance.com"
      />

      <main className="w-full min-h-screen flex flex-col justify-center items-center relative">
        {/* Carousel */}
        <div className="w-full max-w-7xl h-96 overflow-hidden relative mt-20 mx-8 rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-purple-600">
          {carouselContent.map((content, index) => (
            <img
              key={index}
              src={content.src}
              alt={`Carousel image ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 rounded-xl ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}

          {/* Overlay with dynamic message and alignment */}
          <div
            className={`absolute inset-0 bg-black bg-opacity-40 flex ${alignmentStyles[carouselContent[currentImageIndex].alignment]}`}
          >
            <h2 className="text-white text-3xl font-semibold shadow-md px-4">
              {carouselContent[currentImageIndex].message}
            </h2>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-gray-400'}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow hover:bg-opacity-75"
            title="Previous"
          >
            &#10094;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow hover:bg-opacity-75"
            title="Next"
          >
            &#10095;
          </button>
        </div>

        {/* Scroll down button */}
        <button 
          onClick={scrollToNextSection}
          className="fixed top-20 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-all z-10"
          title="Scroll down"
        >
          <ChevronDoubleDownIcon className="h-6 w-6"/>
        </button>

        {/* Page Content */}
        <Creators/>
        <DetailsCard/>
        <Faq/>
        <Process/>
      </main>
    </>
  );
}
