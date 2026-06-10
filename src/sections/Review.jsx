import { Star } from 'lucide-react'
import React from 'react'

function Review() {
  return (
    <div className='bg-cream py-5 flex flex-col items-center gap-3'>
        <div className='flex gap-1'>
            <Star 
        stroke='0'
        fill='#D47C3A'
        size={16}
        />
        <Star 
        stroke='0'
        fill='#D47C3A'
        size={16}
        />
        <Star 
        stroke='0'
        fill='#D47C3A'
        size={16}
        />
        <Star 
        stroke='0'
        fill='#D47C3A'
        size={16}
        />
        <Star 
        stroke='0'
        fill='#D47C3A'
        size={16}
        />
        </div>
        <p className='text-center font-serif italic text-xl'>
            "The kind of place that makes you forget your deadlines. <br /> Best cold brew in Pune, hands down"
        </p>
        <p className='text-gray font-sm'>— Ananya R., Google Review</p>
    </div>
  )
}

export default Review