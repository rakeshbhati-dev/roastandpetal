import React from 'react'
import Logo from '../components/Logo'

function Footer() {
  return (
    <div className='bg-dark p-10 flex flex-wrap justify-center gap-4 md:justify-between items-center text-gray'>
        <Logo
        isBackgroundDark={true}
        />
        <p>&copy;2026 Roast & Petal. All rights reserved.</p>
        <div className='flex gap-4'>
            <a href="https://www.instagram.com/" target='_blank' className='hover:text-primary'>Instagram</a>
            <a href="https://www.facebook.com/" target='_blank' className='hover:text-primary'>Facebook</a>
            <a href="https://x.com/" target='_blank' className='hover:text-primary'>Twitter</a>
        </div>
    </div>
  )
}

export default Footer