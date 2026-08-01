import React from 'react'

export default function FaqItem({ category, question, isOpen, onToggle, children }) {
  return (
    <div className='grid grid-cols-[1fr_auto] md:grid-cols-[1fr_3fr_auto] gap-4 md:gap-6 border-b border-neutral-200 py-6 text-left'>
      <span className='hidden md:block text-brand-primary font-medium text-2xl'>{category}</span>

      <div>
        <h4 className='font-medium text-xl md:text-2xl text-brand-text'>{question}</h4>
        {isOpen && (
          <div className='mt-4 space-y-4 font-light text-base md:text-2xl text-brand-text'>{children}</div>
        )}
      </div>

      <button
        type='button'
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`h-8 w-8 shrink-0 rounded-full border text-lg leading-none transition-colors ${
          isOpen
            ? 'bg-brand-primary text-white border-brand-primary'
            : 'bg-white text-brand-text border-neutral-200'
        }`}
      >
        {isOpen ? '−' : '+'}
      </button>
    </div>
  )
}
