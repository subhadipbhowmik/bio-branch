import Link from 'next/link'
import MyHead from '../components/MyHead'
import Creators from '@/components/Creators'
import DetailsCard from '@/components/DetailsCard'
import Faq from '@/components/Faq'
import Process from '@/components/Process'
import DarkModeToggle from '@/pages/DarkModeToggle'

export default function Home() {
  return (
      <>
          <MyHead
              title="Home"
              description="Welcome to TypeFinance, where we help you to choose the best financing for you"
              image="https://typefinance.com/typefinance-dp.jpg"
              url="https://typefinance.com"
          />

          <main className="w-full min-h-screen flex flex-col justify-center items-center">
              <DarkModeToggle /> {/* Include the toggle button */}
              <Creators />
              <DetailsCard />
              <Faq />
              <Process />
          </main>
      </>
  );
}