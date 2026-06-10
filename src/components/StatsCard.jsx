import React from 'react'

function StatsCard({
    title,
    subTitle,
    cardStyle
}) {
  return (
    <div className={`bg-[#2C2C2C] text-center border border-gray py-6 ${cardStyle}`}>
        <h3 className='text-primary font-serif text-3xl'>{title}</h3>
        <p className='text-lightGray text-xs mt-1'>{subTitle}</p>
    </div>
  )
}

export default StatsCard