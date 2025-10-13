"use client"
import { useState } from 'react'

export function Stars({ value = 0, onChange }: { value?: number; onChange?: (v: number) => void }) {
  const [hover, setHover] = useState<number | null>(null)
  const stars = [1, 2, 3, 4, 5]
  const active = hover ?? value
  
  return (
    <div className="flex gap-1">
      {stars.map((s) => (
        <button
          key={s}
          type="button"
          onMouseEnter={() => setHover(s)}
          onMouseLeave={() => setHover(null)}
          onClick={() => onChange?.(s)}
          aria-label={`${s} star${s > 1 ? 's' : ''}`}
          className={`
            text-3xl transition-all duration-200 transform hover:scale-110 active:scale-95
            ${active >= s 
              ? 'text-orange-400 drop-shadow-lg' 
              : 'text-white/30 hover:text-orange-300'
            }
            ${onChange ? 'cursor-pointer' : 'cursor-default'}
          `}
          disabled={!onChange}
        >
          ★
        </button>
      ))}
    </div>
  )
}
