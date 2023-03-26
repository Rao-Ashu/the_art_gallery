import { HeartIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { PrismaClient } from '@prisma/client'
import ArtData from '@/Data/ArtData';

const prisma = new PrismaClient();
export async function getServerSideProps() {
  
  const Arts = await prisma.artDb.findMany();
  console.log(Arts);
  console.log("ashutosh");

  return {
    props: Arts
  };
}

// const likedArts = ArtData.filter(art=>{art.like === 1})

function LikeArtList() {

//   const [likedArt, setLikedArt] = useState(ArtData)
// const filterByLike = () =>{
//   setLikedArt(ArtData.filter(art =>{
//     return art.like === 1
//  }))
// }
  const [activeBtn, setActiveBtn] = useState([1]);
 
  return (
    <div className='w-[90%] items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10 mx-auto'> 
          {ArtData.map((art)=>{ 
            return art.like === 1 ?
            <div key={art.id} id={art.artName.toLowerCase()} className=' bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out'>
              <img src={art.link} className="w-full h-56 object-cover rounded-t-lg shadow-md" alt="" />
              <div>
                <div className='flex-1 flex flex-col p-5'>
                  <div className='grid grid-cols-2 relative'>
                    <h2 className='font-bold font-serif text-lg'>{art.artName}</h2>

                  
                    <HeartIcon className='cursor-pointer absolute right-[0.2%] h-8 w-8 fill-orange-400 hover:fill-white' 
                    onClick={() => {art.like=0; setActiveBtn([0])}}/>



                  </div>

                  <section className='mt-2 flex-1'>
                    <p className='font-serif'>{art.artistName}</p>
                    <div>
                      <p className='font-serif'>📍{art.origin} </p>
                    </div>

                  </section>
                </div>
                
                {/* OriginButton */}
                <button
                      onClick={()=> window.open("https://maps.google.com?q="+art.origin) } 
                      className='w-full bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500'
                  >ORIGIN</button>
              </div>

            </div> 
            :<></>
          })}
      </div>
           
  )
}



export default LikeArtList