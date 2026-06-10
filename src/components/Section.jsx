import React from 'react'

function Section({ children, background = 'light', sectionStyle, title, heading, rightSection,desc,id }) {
    const isLight = background === 'light'
    return (
        <div className={`p-10 ${isLight ? 'bg-white' : 'bg-dark'} ${sectionStyle}`} id={id}>
            <div className='mb-5'>
                <h4 className='text-primary text-xs font-semibold'>{title}</h4>
                <div className='flex justify-between items-center'>
                    <p className={`font-serif ${isLight ? 'text-dark' : 'text-white'} font-bold text-3xl`}>{heading}</p>
                    {rightSection &&
                        <div>
                            {rightSection}
                        </div>
                    }
                </div>
                {desc &&
                <p className='text-sm text-lightGray mt-2 [word-spacing:2px]'>{desc}</p>
                }
            </div>
            {children}
        </div>
    )
}

export default Section