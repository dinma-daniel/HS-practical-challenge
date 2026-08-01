import React from 'react'
import InfoCard from '../components/InfoCard'
import Aboutphoto from '../images/aboutphoto.jpg'
import LeftPattern from '../images/Left.svg'

export default function About() {
  return (
    <div className='mx-4 md:mx-20 lg:mx-60 mt-40 min-h-[65vh] w-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex items-center justify-center p-6'>
          <div className='relative aspect-square w-full max-w-md'>
            <img
              src={LeftPattern}
              alt=''
              aria-hidden='true'
              className='pointer-events-none absolute inset-0 -z-10 h-full w-full'
            />

            <img
              src={Aboutphoto}
              alt='Apprentices at work'
              className='absolute left-1/2 top-1/2 aspect-square w-5/6 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover'
            />
          </div>
        </div>
        <div className='text-left p-4 md:p-10 flex flex-col justify-center'>
          <h1 className='text-brand-primary text-4xl md:text-5xl leading-tight md:leading-14 font-medium pb-2 mb-8'>About the apprenticeship</h1>
          <h4 className='font-light text-xl md:text-2xl text-brand-text mb-8'>Our scholarships are designed to give talented and driven young people from any background access to top-class education, experience and network. We offer a fully-funded master’s degree alongside an apprenticeship and a guaranteed job upon graduation.  </h4>
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='w-full md:w-1/3 p-8 border rounded-md flex flex-col justify-between gap-10 md:gap-0'>
        <div className='text-left'>
        <h4 className='text-brand-primary font-meduim text-base'>Scholarship value</h4>
        <h4 className='text-brand-text font-light text-5xl'>€31,300</h4>
        </div>
        <div>
          <hr />
          <div className='grid grid-cols-2 pt-10 md:pt-20 gap-y-5 text-left'>
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
          <h2 className='col-span-2 w-full text-center leading-[0.1em] border-b mt-2.5 mb-5'><span className='bg-white py-0 px-5 font-meduim text-brand-text'>GRADUATION</span></h2>
          <InfoCard
            className='col-span-2'
            label='A full-time contract'
            value='1 Year / Full-Time'
            description='You’ll be guaranteed a 1 year contract with SCG upon graduation.  '
          />
        </div>

      </div>
    </div>
  )
}
