import React from 'react'
import Profile from '../images/tesimony-profile.png'

export default function TestimonyCard({ name, course, image, content, major = '' }) {
    return (
        <div className='border grid grid-rows-[3fr_7fr] w-[85vw] md:w-[40rem] shrink-0 snap-center h-96 rounded-lg'>
            <div className='flex gap-4 justify-between items-end p-6 md:p-10 bg-white'>
                <div className=' flex gap-4'>
                <img src={Profile} alt={name} className='h-16 w-16 shrink-0 rounded-full object-cover' />
                    <div className='flex flex-col text-left justify-end'>
                        <h4 className='font-medium text-lg text-brand-text'>{name}</h4>
                        <h4 className='font-light text-sm text-brand-text opacity-50'>{course}</h4>
                    </div>
                </div>

                <svg
                    role='img'
                    aria-label='LinkedIn'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='h-6 w-6 shrink-0 text-neutral-300 '
                >
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z' />
                </svg>
            </div>

            <div className='text-left bg-zinc-100 p-6 md:p-10 flex flex-col justify-between'>
                <h4 className='font-light text-lg md:text-xl text-brand-text leading-relaxed'>
                    {content}
                </h4>
                <h4 className='font-light text-sm text-brand-text'>Education . {major}</h4>
            </div>
        </div>



    )
}
