// import Image from 'next/image'
import { WelcomeContent, TelegramContent, CoursesContent, FaqContent, PriceContent } from './components'
import ScrollUp from './components/ScrollUp/ScrollUp'
import './page.css'

export default async function Home() {
  return (
    <main>
      <ScrollUp />
      <WelcomeContent />
      <CoursesContent />
      <PriceContent />
      <TelegramContent />
      <FaqContent />
    </main>
  )
}
