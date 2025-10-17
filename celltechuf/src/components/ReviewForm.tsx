"use client"
import { useState } from 'react'
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
        <div className="glass-card rounded-3xl p-10 text-center border-green-300/20 bg-gradient-to-br from-green-500/10 to-green-600/10 animate-scale-in">
          <div className="text-8xl mb-6 animate-bounce-subtle">🎉</div>
          <h3 className="text-3xl font-heading font-bold text-white mb-4">Thank You!</h3>
          <p className="text-green-100 mb-8 text-lg">Your review has been submitted and is awaiting approval.</p>
          <button
            onClick={() => setStatus('idle')}
            className="glass-card hover-lift glow-on-hover button-press text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 focus-ring"
          >
            Leave Another Review
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-8">
          <div>
            <label className="block text-white font-heading font-semibold mb-4 text-lg">Your name (optional)</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="UF Student"
              className="w-full glass-card rounded-2xl px-6 py-4 text-white placeholder-blue-200 focus-ring transition-all duration-300 text-lg"
            />
          </div>

          <div>
            <label className="block text-white font-heading font-semibold mb-4 text-lg">How was your experience?</label>
            <div className="flex items-center gap-4">
              <Stars value={rating} onChange={setRating} />
              {rating > 0 && (
                <span className="text-gradient font-bold text-lg animate-fade-in-up">
                  {rating === 5 ? 'Excellent!' : rating === 4 ? 'Great!' : rating === 3 ? 'Good' : rating === 2 ? 'Okay' : 'Poor'}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-white font-heading font-semibold mb-4 text-lg">Tell us about your experience</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={5}
              placeholder="How was the service? What did you think of the repair quality and turnaround time?"
              className="w-full glass-card rounded-2xl px-6 py-4 text-white placeholder-blue-200 focus-ring transition-all duration-300 resize-none text-lg"
              required
            />
          </div>

          <button
            disabled={status === 'submitting' || !rating}
            className="w-full gradient-accent glow-on-hover button-press disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-5 px-8 rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none flex items-center justify-center gap-3 focus-ring text-lg"
          >
            {status === 'submitting' ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>✨</span>
                <span>Submit Review</span>
              </>
            )}
          </button>

          {message && status === 'error' && (
            <div className="glass-card rounded-2xl p-6 border-red-300/20 bg-gradient-to-br from-red-500/10 to-red-600/10 animate-fade-in-up">
              <p className="text-red-200 text-center text-lg font-medium">{message}</p>
            </div>
          )}
        </form>
      )}
    </div>
  )
}
