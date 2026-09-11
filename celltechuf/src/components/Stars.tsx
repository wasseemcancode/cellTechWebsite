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
            text-2xl transition-transform duration-150 hover:scale-110 active:scale-95 focus-ring rounded-md p-0.5
            ${active >= s
              ? 'text-orange'
              : 'text-line-strong hover:text-orange/60'
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
