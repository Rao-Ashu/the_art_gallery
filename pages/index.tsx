import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/homepage_files/Header'
import ArtList from '@/components/homepage_files/ArtList'
import { ThemeProvider } from 'next-themes'
import LikedArt from '@/pages/LikedArt'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>The ART Gallery</title>
      </Head>
      
      <ThemeProvider enableSystem={false} attribute="class">
      <div className=' bg-gray-100 dark:bg-zinc-900 transition-all duration-700'>
        <Header />
        <ArtList />
      </div>
      </ThemeProvider>

      
      
      
    </>
  )
}
