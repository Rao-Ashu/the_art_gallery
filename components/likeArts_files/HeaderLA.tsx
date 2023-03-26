import DarkModeButton from '@/components/homepage_files/DarkModeButton'
import Link from 'next/link'
import React from 'react'

function HeaderLA() {
  return (
    <header className='max-w-6xl mx-auto px-10 bg-gray-100  dark:bg-zinc-900 '>
        <div className='md:p-8 p-6 items-center'>
            
           
            <Link href="/" prefetch={false}>
            <h1 className='font-serif md:text-5xl text-3xl text-center items-center'>The{" "}<span className='underline decoration-6 decoration-orange-400'>ART</span>{" "}Gallery</h1>
            </Link>
            
            {/* DarkModeButton*/}
            <DarkModeButton />
            
        </div> 
        <h3 className='font-serif md:text-4xl text-2xl text-center items-center text-orange-400' >YOUR ARTS</h3>
        <hr className='border-gray-300 border-t-2'/>

    </header>
  )
}

export default HeaderLA