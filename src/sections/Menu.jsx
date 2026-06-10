import React from 'react'
import Section from '../components/Section'
import MenuCard from '../components/MenuCard'
import Espresso from '../assets/images/espresso.jpg'
import ColdBrew from '../assets/images/cold-brew.jpg'
import Avacado from '../assets/images/avacado-toast.jpg'
import Cake from '../assets/images/cake.jpg'

function Menu() {
  return (
    <Section title='WHAT WE SERVE' heading='Our Favourites' rightSection={
      <a href='#menu' className='text-primary text-sm font-semibold'>
        Full Menu
      </a>
    }
    id='menu'
    >
      <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4'>
        <MenuCard image={Espresso} 
        tag='ESPRESSO' 
        title='Caramel Cloud' 
        description='Double shot, oat milk, salted caramel foam' 
        price='290' />
        <MenuCard image={ColdBrew} 
        tag='COLD BREW' 
        title='Midnight Mist' 
        description='18hr steep, coconut water, hint of vanilla' 
        price='330' />
        <MenuCard image={Avacado} 
        tag='BITES' 
        title='Avocado Crunch' 
        description='Sourdough, avocado, chilli flakes, micro herbs' 
        price='260' />
        <MenuCard image={Cake} 
        tag='DESSERT' 
        title='Choco Lava' 
        description='Spanish cheesecake, berry compote, honey' 
        price='230' />
        
      </div>

      
        
    </Section>
  )
}

export default Menu