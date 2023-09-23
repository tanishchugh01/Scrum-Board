import Image from 'next/image'
import { Inter } from 'next/font/google'
import ScrumBoard from '@/modules/ScrumBoard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ScrumBoard />
  )
}
