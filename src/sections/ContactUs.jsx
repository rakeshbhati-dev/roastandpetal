import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

function ContactUs() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'
    id='contact'
    >
      <div className='bg-dark p-10'>
        <h4 className='text-primary text-xl font-serif mb-5'>Hours</h4>
        <div className='text-lightGray text-sm flex flex-col gap-5'>
          <p className='flex gap-2 items-center'><Clock size={16} /> Mon – Fri :  07:00 am – 10:00 pm </p>
          <p className='flex gap-2 items-center'><Clock size={16} /> Saturday :   08:00 am – 11:00 pm </p>
          <p className='flex gap-2 items-center'><Clock size={16} /> Sunday :     09:00 am – 08:00 pm </p>
        </div>
      </div>
      <div className='p-10'>
        <h4 className='text-dark text-xl font-serif mb-5'>Find Us</h4>
        <div className='text-gray text-sm flex flex-col gap-5'>
          <p className='flex gap-2 items-center'><MapPin size={16} color='#D47C3A' />42 Koregaon Park Lane, <br />Pune, Maharashtra 411001</p>
          <p className='flex gap-2 items-center'><Phone size={16} color='#D47C3A' />+91 98765 43210</p>
          <p className='flex gap-2 items-center'><Mail size={16} color='#D47C3A' />hello@roastandpetal.in</p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs