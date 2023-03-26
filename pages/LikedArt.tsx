import HeaderLA from '@/components/likeArts_files/HeaderLA'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import React from 'react'
import LikeArtList from './api/component_db_related/LikeArtList'


function LikedArt() {
    
    
  return (
    <>
      <Head>
        <title>The ART Gallery</title>
      </Head>
      
      <ThemeProvider enableSystem={false} attribute="class">
      <div className=' bg-gray-100 dark:bg-zinc-900 transition-all duration-700'>
        <HeaderLA />
        <LikeArtList />
      </div>
      </ThemeProvider>

      
      
      
    </>
  )
}

export default LikedArt