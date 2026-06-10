import React from 'react'
import Section from '../components/Section'
import WhyCard from '../components/WhyCard'
import { Guitar, Sprout, TreePalm } from 'lucide-react'

function WhyChooseUs() {
  return (
    <Section
    background='dark'
    title='OUR PROMISE'
    heading='Why Choose Us'
    desc={<>
    `We're not just a café — we're a feeling. Here's what makes every visit to Roast & Petal a little different.`
    </>}
    id='whyUs'
    >
        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 mt-10'>
        <WhyCard icon={<Sprout />}
        title='Freshly Sourced Ingredients'
        description='Every bean, leaf, and bite on our menu is sourced directly from small farms and local suppliers. No preservatives, no shortcuts — just honest, wholesome flavour in every cup and plate.'
        />
        <WhyCard icon={<TreePalm />}
        title='Cozy Atmosphere'
        description='Warm lighting, hand-picked furniture, and lush indoor greenery
          create a space that feels like your favourite corner of the world.
          Designed to make you stay a little longer.'
        />
        <WhyCard icon={<Guitar />}
        title='Live Music Weekends'
        description=' Every Friday and Saturday evening, local artists take the stage.
          Sip your brew while the music fills the room — no cover charge,
          just good vibes and great company.'
        />
        </div>

    </Section>
  )
}

export default WhyChooseUs