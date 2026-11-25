'use client'
import { useState } from 'react'
import QuoteForm, { LOBS, type LOB } from '@/components/QuoteForm'
import BppBusinessQuoteForm from '@/components/quote/BppBusinessQuoteForm'

// Insurance-type picker above both forms. Both forms are always in the markup (the inactive one is
// `hidden`), so the Business form's field set is present in the served HTML.
export default function QuoteSwitcher() {
  const [lob, setLob] = useState<LOB>('Home')
  return (
    <div className="space-y-8">
      <div className="border-b border-outline-variant/40 focus-within:border-b-2 focus-within:border-gold transition-all">
        <label htmlFor="quote-line" className="block text-xs uppercase tracking-wider text-on-surface-variant mb-1">
          Insurance Type
        </label>
        <select
          id="quote-line"
          value={lob}
          onChange={(e) => setLob(e.target.value as LOB)}
          className="w-full border-none bg-transparent px-0 py-2 focus:ring-0 text-navy-dark font-medium appearance-none"
        >
          {LOBS.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>
      <div hidden={lob !== 'Business'}>
        <BppBusinessQuoteForm />
      </div>
      <div hidden={lob === 'Business'}>
        <QuoteForm lob={lob === 'Business' ? 'Home' : lob} />
      </div>
    </div>
  )
}
