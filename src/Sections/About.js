import React from 'react'
import InfoCard from '../components/InfoCard'
import Aboutphoto from '../images/aboutphoto.jpg'
import AboutphotoMobile from '../images/aboutphoto2.png'
import LeftPattern from '../images/Left.svg'

export default function About() {
  return (
    <div className='mx-4 md:mx-20 lg:mx-60 mt-40 min-h-[65vh] w-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        {/* On mobile the photo overlaps the copy card below it, so it needs to
            paint above that card's background — hence z-10 on the image. */}
        <div className='flex items-center justify-center p-6 -mb-[min(50%,248px)] md:mb-0'>
          <div className='relative aspect-square w-full max-w-md'>
            <img
              src={LeftPattern}
              alt=''
              aria-hidden='true'
              className='pointer-events-none absolute inset-0 -z-10 h-full w-full'
            />

            <img
              src={AboutphotoMobile}
              alt='Apprentices at work'
              className='md:hidden absolute left-1/2 top-1/2 z-10 aspect-square w-5/6 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover'
            />

            <img
              src={Aboutphoto}
              alt='Apprentices at work'
              className='hidden md:block absolute left-1/2 top-1/2 z-10 aspect-square w-5/6 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover'
            />
          </div>
        </div>

        {/* Transparent wrapper: the purple band is a sibling of the white card,
            not a child, so a negative z-index puts it behind the card's own
            background rather than behind the wrapper's. */}
        <div className='relative'>
          <div
            aria-hidden='true'
            className='pointer-events-none md:hidden absolute left-1/2 top-0 -z-10 h-[76%] w-screen -translate-x-1/2 bg-brand-primary'
          />
          {/* pt is a percentage so the clearance below the overlapping photo
              scales with the column width, capped where the photo container
              stops growing at max-w-md. */}
          <div className='relative text-left px-6 pb-6 pt-[min(42%,209px)] md:p-10 flex flex-col justify-center bg-white border rounded-md md:border-0 md:bg-transparent md:rounded-none'>
            <h1 className='text-brand-primary text-4xl md:text-5xl leading-tight md:leading-14 font-medium pb-2 mb-8'>About the apprenticeship</h1>
            <h4 className='font-light text-xl md:text-2xl text-brand-text mb-8'>Our scholarships are designed to give talented and driven young people from any background access to top-class education, experience and network. We offer a fully-funded master’s degree alongside an apprenticeship and a guaranteed job upon graduation.  </h4>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='w-full md:w-1/3 p-8 border-none md:border rounded-md flex flex-col justify-between gap-10 md:gap-0'>
        <div className='text-left'>
        <h4 className='text-brand-primary font-meduim text-base'>Scholarship value</h4>
        <h4 className='text-brand-text font-light text-base md:text-5xl'>€31,300</h4>
        </div>
        <div>
          <hr className='hidden md:block' />
          <div className='grid grid-cols-2 pt-0 md:pt-20 gap-y-5 text-left'>
        <div>
      <h4 className='text-brand-primary font-meduim text-base'>Tuition covered</h4>
      <h4 className='text-brand-text font-light text-base'>€20,900</h4>
        </div>
        <div>
      <h4 className='text-brand-primary font-meduim text-base'>Remaining</h4>
      <h4 className='text-brand-text font-light text-base'>€2,000</h4>
        </div>
        <div className='col-span-2'>
      <h4 className='text-brand-primary font-meduim text-base'>Living stipend</h4>
      <h4 className='text-brand-text font-light text-base'>€8,400 (€700/month)</h4>
        </div>
      
    </div>
        </div>
        </div>
        <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <InfoCard
            label='Study commitment'
            value='3 hours / day'
            description='You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time. '
          />
          <InfoCard
            label='Work commitment'
            value='4 hours / day'
            description='Immerse yourself in the professional world during your apprenticeship. You’ll learn the ropes from the best and get to apply your newly acquired knowledge in the field from day one.  '
          />
          <h2 className='sm:col-span-2 w-full text-center leading-[0.1em] border-b mt-2.5 mb-5'><span className='bg-white py-0 px-5 font-meduim text-brand-text'>GRADUATION</span></h2>
          <InfoCard
            className='sm:col-span-2'
            label='A full-time contract'
            value='1 Year / Full-Time'
            description='You’ll be guaranteed a 1 year contract with SCG upon graduation.  '
          />
        </div>

      </div>
    </div>
  )
}
