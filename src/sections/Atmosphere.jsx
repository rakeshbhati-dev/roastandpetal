import React from 'react'
import Section from '../components/Section'
import Interior from '../assets/images/interior.jpg'
import Kitchen from '../assets/images/kitchen.jpg'
import Art from '../assets/images/latte_art.jpg'
import Music from '../assets/images/music.jpg'
import Garden from '../assets/images/garden.jpg'

function Atmosphere() {
  const images = [Interior, Kitchen, Art, Music, Garden];
  return (
    <Section
      title='Atmosphere'
      heading='The Vibe'
      id='gallery'
    >
      <div className="grid
  grid-cols-1
  md:grid-cols-[2fr_1fr_1fr]
  grid-rows-auto
  md:grid-rows-[180px_180px]
  gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`
        w-full h-full object-cover object-center rounded-xl
        cursor-pointer transition-all duration-300
        hover:scale-[1.02] hover:brightness-105
        ${index === 0 ? "row-span-2" : ""}
      `}
          />
        ))}
      </div>

    </Section>
  )
}

export default Atmosphere