import React from 'react'
import SCG from '../images/scg.png'
import Background from '../images/Background.svg'

export default function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-20 lg:mx-60 mt-20 md:min-h-[65vh] w-auto'>
      <div className='text-left p-4 md:p-10 flex flex-col justify-between gap-6 md:gap-0'>
      <h1 className='text-brand-primary text-4xl md:text-5xl leading-tight md:leading-14 font-medium'>Interaction Design Apprenticeship</h1>
      <h4 className='font-medium text-xl md:text-2xl text-brand-text'>A fully funded work-study program to launch your tech career </h4>
      <h4 className='font-light text-xl md:text-2xl text-brand-text'>Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to accessing exceptional education and career opportunities through a Masters Fellowship. </h4>
      <h3 className='font-light text-xl md:text-2xl text-brand-text'><span className='font-medium text-brand-text'>Position:</span> Marketing Performance</h3>
      <button className='rounded-full p-4 bg-brand-primary text-white font-medium border-none max-w-[60%] md:max-w-[30%] text-lg'>Apply Now</button>
    </div>

    <div className='text-left p-4 md:p-10 flex flex-col justify-around gap-6 md:gap-0'>
      <div className='flex gap-3 items-center'>
        <div className='h-14 w-11 overflow-hidden'>
          <img src={SCG} alt="Zeptolab logo" className='h-full max-w-none object-left' />
        </div>

        <div>
        <h4 className='font-light text-lg opacity-50'>Powered by:</h4>
        <h4 className='font-light text-3xl text-brand-text'>Zeptolab</h4>
        </div>
      </div>
    
    <div className='border p-8 rounded-md'>
      <h4 className='text-brand-primary font-medium text-base'>Application closes in</h4>
      <h4 className='font-light text-3xl text-brand-text flex justify-between'><span>6 Day</span>  :  <span>22 Hrs</span>  :  <span>56 Min</span>  :  <span>13 Seg</span> </h4>
      </div>
      <div className='relative'>
        <img
          src={Background}
          alt=''
          aria-hidden='true'
          className='pointer-events-none absolute top-1/2 left-1/3 -z-10 w-[561px] max-w-none'
        />
        <div className='relative grid grid-cols-2 border p-8 gap-y-2 rounded-md bg-white'>
        <div>
      <h4 className='text-brand-primary font-meduim text-base'>Location</h4>
      <h4 className='text-brand-text font-light text-base'>Bangkok</h4>
        </div>
        <div>
      <h4 className='text-brand-primary font-meduim text-base'>Duration</h4>
      <h4 className='text-brand-text font-light text-base'>1 Year</h4>
      <h4 className='text-brand-text font-light text-base'>Fulltime</h4>
        </div>
        <div>
      <h4 className='text-brand-primary font-meduim text-base'>Start date</h4>
      <h4 className='text-brand-text font-light text-base'>30 June 2020</h4>
        </div>
        <div>
      <h4 className='text-brand-primary font-meduim text-base'>End date</h4>
      <h4 className='text-brand-text font-light text-base'>3 Aug 2020</h4>
        </div>

    </div>
      </div>
    
    </div>

    </div>
  )
}
