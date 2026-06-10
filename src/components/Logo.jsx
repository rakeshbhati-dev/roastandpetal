import React from 'react'

function Logo({
  isBackgroundDark=false
}) {
  return (
    <a href="#">
      <h1 className={`font-serif font-bold text-xl ${isBackgroundDark?'text-white':'text-dark'} `}>Roast <span className='text-primary'>&</span> Petal</h1>
    </a>
  )
}

export default Logo