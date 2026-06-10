import React from 'react'
import HeroImage from '../assets/images/hero.jpg'
import Pills from '../components/Pills'
import { Star } from 'lucide-react'

function Hero() {
  return (
    <div className='bg-cream min-h-[70vh] flex flex-wrap justify-between items-center'>
      <div className='p-6 md:p-10 w-full md:w-[30%]'>
        <Pills
          title='SPECIALTY COFFEE . PUNE'
          pillStyle='bg-white text-primary font-normal text-xs'
        />
        <h1 className='text-4xl md:text-6xl font-serif font-bold my-5'>
          Your daily <br />ritual, <br />
          <em className='text-primary'>elevated</em>
        </h1>
        <p className='font-thin text-gray'>
          Artisan brews, seasonal plates, and a space designed to make your best moments happen. Come as you are.
        </p>
        <div className='mt-5 flex flex-wrap gap-3'>
          <a href="#menu">
            <Pills title='Explore Menu' pillStyle='py-3 px-6 bg-dark text-white cursor-pointer' />
          </a>
          <a href="#whyUs">
            <Pills title='Our Story' pillStyle='py-3 px-6 border border-dark' />
          </a>
        </div>
      </div>
      <div className='w-full md:w-[50%] min-h-[300px] md:h-[70vh] relative'>
        <img src={HeroImage} alt="" className='object-cover h-full w-full' />
        <div className='absolute bg-white/85 p-4 flex items-center gap-3 bottom-10 left-10 rounded-xl'>
          <Star fill='#D47C3A' stroke='0' size={16} />
          <div>
            <h2 className='text-sm font-semibold'>4.9 Rating</h2>
            <p className='text-gray text-xs'>1200+ happy guests</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero