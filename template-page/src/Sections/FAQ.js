import React, { useState } from 'react'
import FaqItem from '../components/FaqItem'
import { useScholarship } from '../data/ScholarshipContext'

export default function FAQ() {
  const { data } = useScholarship()
  const FAQS = data.faqs
  const [openId, setOpenId] = useState(FAQS[0]?.id ?? null)

  return (
    <div className='mx-4 md:mx-20 lg:mx-60 mt-40 min-h-[55vh]'>
      <div className='flex flex-col md:flex-row md:justify-between gap-6 mb-10 md:mb-20'>
        <h4 className='text-brand-primary text-4xl md:text-5xl leading-tight md:leading-14 font-medium w-full md:w-2/5 text-left'>Frequently asked questions</h4>
        <div className='flex gap-3 items-center'>
          <label htmlFor="filter" className='font-light text-base text-brand-text opacity-50'>Filter by:</label>
          <div className='relative'>
            <select name="filter" id="filter" className='rounded-full bg-white text-brand-primary font-medium border border-neutral-200 appearance-none text-lg py-2 pl-4 pr-9 cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand-primary'>
              <option value="volvo">Program Conditions</option>
              <option value="saab">something</option>
              <option value="opel">something</option>
              <option value="audi">something</option>
            </select>
            <svg className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-brand-primary'
              viewBox='0 0 12 12' fill='none' stroke='currentColor' strokeWidth='1.5'>
              <path d='M2 4.5 L6 8.5 L10 4.5' />
            </svg>
          </div>
        </div>
      </div>
      <hr />
      <div className='mt-10'>
        {FAQS.map(({ id, category, question, body }) => (
          <FaqItem
            key={id}
            category={category}
            question={question}
            isOpen={openId === id}
            onToggle={() => setOpenId(openId === id ? null : id)}
          >
            {body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </FaqItem>
        ))}
      </div>
    </div>
  )
}
