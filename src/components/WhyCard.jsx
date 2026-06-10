import React from 'react'

function WhyCard({
    icon,
    title,
    description
}) {
    return (
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 group hover:-translate-y-2 hover:bg-white/7 transition-transform duration-300">
            <div
                className="
      absolute left-0 top-0 h-full w-[3px]
      bg-primary
      opacity-0
      transition-opacity duration-300
      group-hover:opacity-100
    "
            />
            <div className='text-primary bg-primary/25 inline-block p-3 rounded-lg border border-primary'>
                {icon}
            </div>
            <h4 className='font-serif text-xl my-2 text-white'>{title}</h4>
            <p className='text-lightGray text-sm leading-5 [word-spacing:2px]'>{description}</p>
        </div>
    )
}

export default WhyCard