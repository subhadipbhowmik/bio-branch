import Link from 'next/link'
import MyHead from '../components/MyHead'
import Creators from '@/components/Creators'
import DetailsCard from '@/components/DetailsCard'
import Faq from '@/components/Faq'
import Process from '@/components/Process'
import { useRef } from 'react';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';

export default function Home() {

  // Scroll to the next section
  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <MyHead
        title="Home"
        description="Welcome to TypeFinance, where we help you to choose the best financing for you"
        image="https://typefinance.com/typefinance-dp.jpg"
        url="https://typefinance.com"
      />

      <main className="w-full min-h-screen flex flex-col justify-center items-center">
         {/* Scroll down button */}
        <button 
          onClick={scrollToNextSection}
          className="fixed top-20 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-all z-10"
          title="Scroll down"
        >
          {/* Double arrow icon */}
          <ChevronDoubleDownIcon className="h-6 w-6"/>
        </button>
        <Creators/>
        <DetailsCard/>
        <Faq/>
        <Process/>

      </main>
    </>
  )
}
