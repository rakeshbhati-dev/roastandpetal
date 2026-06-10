import React from 'react'

function MenuCard({
  tag,
  title,
  price,
  description,
  image
}) {
  return (
    <div className='rounded-xl border border-border hover:-translate-y-2 hover:shadow-lg transition-transform duration-300'>
      <div className='w-full h-[160px] rounded-xl'>
        <img src={image} alt={title} className='h-full w-full object-cover object-center rounded-t-xl' />
      </div>
      <div className='flex flex-col gap-2 p-5'>
        <h4 className='text-primary text-xs font-semibold'>{tag}</h4>
        <h3 className='font-bold text-dark'>{title}</h3>
        <p className='text-xs text-gray'>{description}</p>
        <div>
          <p className='font-serif font-semibold'>&#x20B9; {price}</p>
        </div>
      </div>
    </div>
  )
}

export default MenuCard