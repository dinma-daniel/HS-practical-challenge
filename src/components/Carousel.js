import React, { useRef } from 'react'
import TCard from '../components/TestimonyCard'

const TESTIMONIALS = [
  {
    name: 'Irene Pereyra',
    course: 'Interaction Design Fellow ‘19',
    content: 'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program. ',
    major: 'B.A. Visual Design',
  },
  {
    name: 'Irene Pereyra',
    course: 'Interaction Design Fellow ‘19',
    content: 'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program. ',
    major: 'B.A. Visual Design',
  },
  {
    name: 'Irene Pereyra',
    course: 'Interaction Design Fellow ‘19',
    content: 'This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program. ',
    major: 'B.A. Visual Design',
  },
]

export default function Carousel() {
  const scroller = useRef(null)

  // Advance by one card plus the gap-6 (24px) between them.
  const scrollByCard = (direction) => {
    const el = scroller.current
    if (!el) return
    const card = el.firstElementChild
    const step = card ? card.offsetWidth + 24 : el.clientWidth
    el.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <div className='relative'>
      {/* px-[7.5vw] is half of (100vw - the card's 85vw), so the first card
          sits centred at scroll 0 rather than flush against the left edge. */}
      <div
        ref={scroller}
        className='flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar px-[7.5vw] md:px-0'
      >
        {TESTIMONIALS.map((t, i) => (
          <TCard key={i} {...t} />
        ))}
      </div>

      <div className='mt-6 flex justify-end gap-3 px-[7.5vw] md:hidden'>
        <button
          type='button'
          onClick={() => scrollByCard(-1)}
          aria-label='Previous testimonial'
          className='grid h-11 w-11 place-items-center rounded-full border bg-white text-brand-text'
        >
          <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' aria-hidden='true' className='h-5 w-5'>
            <path d='M15 6l-6 6 6 6' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </button>

        <button
          type='button'
          onClick={() => scrollByCard(1)}
          aria-label='Next testimonial'
          className='grid h-11 w-11 place-items-center rounded-full border bg-white text-brand-text'
        >
          <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5' aria-hidden='true' className='h-5 w-5'>
            <path d='M9 6l6 6-6 6' strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </button>
      </div>
    </div>
  )
}
