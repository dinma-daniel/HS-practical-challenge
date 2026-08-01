import React from 'react'
import Carousel from '../components/Carousel'
import Pattern from '../images/Pattern.svg'


export default function Testimonial() {
  return (
    <div className='relative mt-40 w-auto overflow-hidden pt-20'>
      {/* Mobile: purple panel sitting behind the pattern (-z-20 vs the
          pattern's -z-10) and behind the top of the testimonial card. */}
      <div
        aria-hidden='true'
        className='pointer-events-none md:hidden absolute inset-x-4 top-2 -z-20 h-60 rounded-md bg-brand-primary'
      />

      <img
        src={Pattern}
        alt=''
        aria-hidden='true'
        className='pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-5/6 h-72 max-w-none object-cover object-top mix-blend-multiply'
      />

      <Carousel />
    </div>
  )
}
