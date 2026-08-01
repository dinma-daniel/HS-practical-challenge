import React from 'react'
import TCard from '../components/TestimonyCard'

export default function Carousel() {
  return (
    <div className='flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar'>
      <TCard 
      name='Irene Pereyra'
      course='Interaction Design Fellow ‘19'
      content='This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program. '
      major='B.A. Visual Design'
      />
      <TCard 
      name='Irene Pereyra'
      course='Interaction Design Fellow ‘19'
      content='This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program. '
      major='B.A. Visual Design'
      />
      <TCard 
      name='Irene Pereyra'
      course='Interaction Design Fellow ‘19'
      content='This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program. '
      major='B.A. Visual Design'
      />
      
    </div>
  )
}
