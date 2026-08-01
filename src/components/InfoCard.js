import React from 'react'

export default function InfoCard({ label, value, description, className = '' }) {
  return (
    <div className={`p-8 border rounded-md text-left ${className}`}>
      <div>
        <h4 className='text-brand-primary font-meduim text-base'>{label}</h4>
        <h4 className='font-light text-3xl text-brand-text flex justify-between'>{value}</h4>
      </div>
      <hr className='my-6 w-10' />
      <h4 className='text-brand-text font-light text-base'>{description}</h4>
    </div>
  )
}
