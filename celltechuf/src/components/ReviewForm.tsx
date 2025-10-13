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
    } catch (err) {
      setStatus('error')
      setMessage('Something went wrong. Please try again later.')
    }
  }

  return (
    <div className="w-full">
      {status === 'success' ? (
        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-2xl p-8 border border-green-300/30 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
          <p className="text-green-200 mb-6">Your review has been submitted and is awaiting approval.</p>
          <button
            onClick={() => setStatus('idle')}
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Leave Another Review
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="block text-white font-medium mb-3">Your name (optional)</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="UF Student"
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-3">How was your experience?</label>
            <div className="flex items-center gap-3">
              <Stars value={rating} onChange={setRating} />
              {rating > 0 && (
                <span className="text-orange-300 font-medium">
                  {rating === 5 ? 'Excellent!' : rating === 4 ? 'Great!' : rating === 3 ? 'Good' : rating === 2 ? 'Okay' : 'Poor'}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-white font-medium mb-3">Tell us about your experience</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
              placeholder="How was the service? What did you think of the repair quality and turnaround time?"
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all resize-none"
              required
            />
          </div>

          <button
            disabled={status === 'submitting' || !rating}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none flex items-center justify-center gap-2"
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
            <div className="bg-red-500/20 backdrop-blur-sm rounded-xl p-4 border border-red-300/30">
              <p className="text-red-200 text-center">{message}</p>
            </div>
          )}
        </form>
      )}
    </div>
  )
}
