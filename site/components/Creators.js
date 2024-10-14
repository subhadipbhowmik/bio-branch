import Link from 'next/link';
import React from 'react'

const Creators = () => {
  const avatarImages = [
    "https://subhadipbhowmik.github.io/shubhadipbhowmik/images/uday.jpg",
    "https://subhadipbhowmik.github.io/shubhadipbhowmik/images/daliya.png",
    "https://shubhadipbhowmik.vercel.app/_next/image/?url=%2Fmemories%2Fimage-7.jpg&w=640&q=75",
    "https://subhadipbhowmik.github.io/shubhadipbhowmik/images/swastika.jpg",
    "https://shubhadipbhowmik.vercel.app/_next/image/?url=%2Fmemories%2Fimage-14.jpg&w=640&q=75",
    "https://shubhadipbhowmik.vercel.app/_next/image/?url=%2Fmemories%2Fimage-17.jpg&w=640&q=75",
    "https://shubhadipbhowmik.vercel.app/_next/image/?url=%2Fmemories%2Fimage-21.jpg&w=640&q=75",
    "https://shubhadipbhowmik.vercel.app/_next/image/?url=%2Fmemories%2Fimage-26.jpg&w=640&q=75",
  ];

  return (
    <div className="flex flex-col items-center px-10 mt-16 py-12 bg-gray-50 rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="mb-6 text-center font-extrabold text-3xl text-gray-800 leading-tight">
        Join Thousands of Inspiring Creators
      </h1>

      {/* Avatar Images */}
      <div className="flex gap-3 mb-8 flex-wrap justify-center">
        {avatarImages.map((img, index) => (
          <img 
            key={index}
            className="w-16 h-16 rounded-full border-2 border-gray-200 hover:scale-105 transform transition-all duration-300"
            src={img}
            alt={`Creative ${index + 1}`}
          />
        ))}
      </div>

      {/* CTA Button */}
      <Link href="/apply">
      <button className="bg-indigo-600 text-white hover:bg-indigo-500 hover:scale-105 transition-all duration-300 px-8 py-3 rounded-full font-semibold shadow-md">
        Explore the Most Creative BioTrees
      </button>
      </Link>
    </div>
  )
}

export default Creators
