import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid';
import SearchBox from './SearchBox';
import Link from 'next/link';
import DarkModeButton from './DarkModeButton';
import { useRouter } from 'next/router';

function Header() {

  return (
    <header className='max-w-6xl mx-auto px-10 bg-gray-100  dark:bg-zinc-900 '>
        <div className='md:p-8 p-6 items-center'>
            
            <Link href="./LikedArt">
            <HeartIcon className='md:h-10 md:w-10 h-8 w-8 cursor-pointer absolute right-[10%] hover:fill-orange-400'/>
            </Link>
            <Link href="/" prefetch={false}>
            <h1 className='font-serif md:text-5xl text-3xl text-center items-center'>The{" "}<span className='underline decoration-6 decoration-orange-400'>ART</span>{" "}Gallery</h1>
            </Link>
            
            {/* DarkModeButton*/}
            <DarkModeButton />
            
        </div> 
        <SearchBox />

    </header>
  )
}

export default Header