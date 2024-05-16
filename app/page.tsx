// import Image from 'next/image'
import { WelcomeContent, TelegramContent, CoursesContent, FaqContent, PriceContent } from './components'
import ScrollUp from './components/ScrollUp/ScrollUp'
import { Teachers } from './components/pages/mainpage/Sections/teachers/teachers'
import './page.css'

export default async function Home() {
  return (
    <>
      <ScrollUp />
      <main>
        <WelcomeContent />
        <TelegramContent />
        <Teachers />
        <CoursesContent />
        <PriceContent />
        <FaqContent />
      </main>
    </>
  )
}
