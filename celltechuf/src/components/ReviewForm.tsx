"use client"
import { useState } from 'react'
import { CircleCheck } from 'lucide-react'
import { Stars } from './Stars'

export default function ReviewForm() {
  const [name, setName] = useState('')
  const [rating, setRating] = useState<number>(0)
  const [text, setText] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!rating) {
      setMessage('Please select a star rating.')
      setStatus('error')
      return
    }
    setStatus('submitting')
    setMessage('')

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name || 'UF Student', rating, text }),
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus('success')
      setMessage('Thanks! Your review is submitted and awaiting approval.')
      setName('')
      setRating(0)
      setText('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again later.')
    }
  }

  return (
    <div className="w-full">
      {status === 'success' ? (
        <div className="bg-paper-soft rounded-2xl p-8 text-center animate-scale-in">
          <CircleCheck className="w-12 h-12 text-orange mx-auto mb-4" strokeWidth={1.5} />
          <h3 className="text-2xl font-heading text-ink mb-2">Thank You!</h3>
          <p className="text-ink-soft mb-6 font-body">Your review has been submitted and is awaiting approval.</p>
          <button
            onClick={() => setStatus('idle')}
            className="btn btn-outline button-press focus-ring px-6 py-2.5 text-sm"
          >
            Leave Another Review
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="block text-ink font-medium mb-2 text-sm font-body">Your name (optional)</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="UF Student"
              className="w-full bg-surface border border-line rounded-lg px-4 py-3 text-ink placeholder-ink-muted focus-ring transition-all duration-200 font-body"
            />
          </div>

          <div>
            <label className="block text-ink font-medium mb-2 text-sm font-body">How was your experience?</label>
            <div className="flex items-center gap-3">
              <Stars value={rating} onChange={setRating} />
              {rating > 0 && (
                <span className="text-orange font-semibold text-sm font-body animate-fade-in-up">
                  {rating === 5 ? 'Excellent!' : rating === 4 ? 'Great!' : rating === 3 ? 'Good' : rating === 2 ? 'Okay' : 'Poor'}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-ink font-medium mb-2 text-sm font-body">Tell us about your experience</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={5}
              placeholder="How was the service? What did you think of the repair quality and turnaround time?"
              className="w-full bg-surface border border-line rounded-lg px-4 py-3 text-ink placeholder-ink-muted focus-ring transition-all duration-200 resize-none font-body"
              required
            />
          </div>

          <button
            disabled={status === 'submitting' || !rating}
            className="btn btn-primary button-press focus-ring w-full disabled:opacity-50 disabled:cursor-not-allowed py-3 px-8 text-sm"
          >
            {status === 'submitting' ? (
              <>
                <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <span>Submit Review</span>
            )}
          </button>

          {message && status === 'error' && (
            <div className="bg-surface border border-red-200 rounded-lg p-4 animate-fade-in-up">
              <p className="text-red-700 text-center text-sm font-medium font-body">{message}</p>
            </div>
          )}
        </form>
      )}
    </div>
  )
}
