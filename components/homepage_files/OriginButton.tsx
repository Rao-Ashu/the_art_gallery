import { useRouter } from 'next/router'
import React from 'react'

type Props = {
    location: Location
 }

function OriginButton({location}: Props) {
    
  
    return (
    <button
        
        className='w-full bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500'
    >ORIGIN</button>
  )
}

export default OriginButton