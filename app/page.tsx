// import Image from 'next/image'
import { Section1Content, Section2Content, Section3Content, Section4Content } from './components'
import ScrollUp from './components/ScrollUp/ScrollUp'
import './page.css'

export default async function Home() {
  return (
    <main>
      <ScrollUp />
      <Section1Content />
      <Section2Content />
      <Section3Content />
      <Section4Content />
    </main>
  )
}
