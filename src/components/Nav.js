import React from 'react'

export default function Nav() {
  return (
    <div className="relative">
      <div className="bg-brand-primary flex justify-between items-center p-6 md:p-8">
        <div className="flex flex-col sm:flex-row text-white gap-0 sm:gap-2">
      <h1 className='font-bold'>HARBOUR.SPACE</h1>
      <h4 className='text-xs'>/INTERACTION DESIGN</h4>
      </div>
      <svg width="40" height="32" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="16" width="14" height="14" stroke="#fff" stroke-width="6" />
        <rect x="26" y="20" width="57" height="6" fill="#fff" />
        <rect x="12" y="37" width="71" height="6" fill="#fff" />
        <rect x="12" y="54" width="56" height="6" fill="#fff" />
        <rect x="66" y="50" width="14" height="14" stroke="#fff" stroke-width="6" />
      </svg>
      </div>
      <button className="hidden md:flex absolute bottom-0 right-8 md:right-40 translate-y-1/2 z-10 text-white border-none bg-[#4fa16c] rounded-full font-semibold w-20 md:w-28 aspect-square flex-col items-center justify-center">
        <span>APPLY</span>
        <span>NOW</span>
      </button>
    </div>
  )
}
