import React, { createContext, useContext, useEffect, useState } from 'react'
import { normalizeScholarship } from './normalizeScholarship'

const ScholarshipContext = createContext(null)
const ENDPOINT = '/api/v1/scholarship_pages'

export function ScholarshipProvider({ slug, children }) {
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    let cancelled = false
    setState({ data: null, loading: true, error: null })

    fetch(`${ENDPOINT}/${slug}`, { headers: { Accept: 'application/json' } })
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: HTTP ${res.status}`)
        return res.json()
      })
      .then((raw) => {
        if (!cancelled) {
          setState({ data: normalizeScholarship(raw), loading: false, error: null })
        }
      })
      .catch((err) => {
        if (!cancelled) setState({ data: null, loading: false, error: err })
      })

    return () => {
      cancelled = true
    }
  }, [slug])

  return (
    <ScholarshipContext.Provider value={state}>
      {children}
    </ScholarshipContext.Provider>
  )
}

// Consumer hook used by sections.
export function useScholarship() {
  const ctx = useContext(ScholarshipContext)
  if (ctx === null) {
    throw new Error('useScholarship must be used inside <ScholarshipProvider>')
  }
  return ctx
}
