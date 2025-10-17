"use client"
import { useState } from 'react'

export function Stars({ value = 0, onChange }: { value?: number; onChange?: (v: number) => void }) {
  const [hover, setHover] = useState<number | null>(null)
  const stars = [1, 2, 3, 4, 5]
  const active = hover ?? value
  
  return (
    <div className="flex gap-2">
      {stars.map((s) => (
        <button
          key={s}
          type="button"
          onMouseEnter={() => setHover(s)}
          onMouseLeave={() => setHover(null)}
          onClick={() => onChange?.(s)}
          aria-label={`${s} star${s > 1 ? 's' : ''}`}
          className={`
            text-4xl transition-all duration-300 transform hover:scale-125 active:scale-110 focus-ring rounded-lg p-1
            ${active >= s 
              ? 'text-orange-400 drop-shadow-2xl animate-pulse-glow' 
              : 'text-white/40 hover:text-orange-300'
            }
            ${onChange ? 'cursor-pointer hover-lift' : 'cursor-default'}
          `}
          disabled={!onChange}
        >
          ★
        </button>
      ))}
    </div>
  )
}
