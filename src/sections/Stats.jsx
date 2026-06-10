import React from 'react'
import StatsCard from '../components/StatsCard'

function Stats() {
  return (
    <div className='flex'>
        <StatsCard title='12+' subTitle='ORIGIN SOURCED' cardStyle='w-1/3' />
        <StatsCard title='5yr' subTitle='IN KOREGAON PARK' cardStyle='w-1/3' />
        <StatsCard title='∞' subTitle='REFILLS OF LOVE' cardStyle='w-1/3' />
    </div>
  )
}

export default Stats