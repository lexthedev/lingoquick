// import Image from 'next/image'
import { WelcomeContent, TelegramContent, TargetsContent, FaqContent, PriceContent } from './components'
import ScrollUp from './components/ScrollUp/ScrollUp'
import './page.css'

export default async function Home() {
  return (
    <main>
      <ScrollUp />
      <WelcomeContent />
      <TelegramContent />
      <TargetsContent />
      <PriceContent />
      <FaqContent />
    </main>
  )
}
