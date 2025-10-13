"use client"
import { useEffect, useState } from 'react'
import { Review } from '@/types/review'

export default function ReviewsList() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/reviews')
        const data = await res.json()
        setReviews(data.reviews || [])
      } catch (err) {
        console.error('Failed to fetch reviews:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchReviews()
  }, [])

  const avgRating = reviews.length > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : '0.0'

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center gap-3 text-white">
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          <span>Loading reviews...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {reviews.length > 0 && (
        <div className="text-center mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
          <div className="text-4xl font-bold text-orange-400 mb-2">{avgRating}</div>
          <div className="text-orange-500 text-2xl mb-2">
            {'★'.repeat(Math.round(Number(avgRating)))}
            {'☆'.repeat(5 - Math.round(Number(avgRating)))}
          </div>
          <div className="text-blue-200 text-sm">
            Based on {reviews.length} review{reviews.length !== 1 ? 's' : ''}
          </div>
        </div>
      )}

      <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
        {reviews.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💭</div>
            <h4 className="text-xl font-semibold text-white mb-2">No reviews yet</h4>
            <p className="text-blue-200">Be the first to share your experience!</p>
          </div>
        ) : (
          reviews.map((review, index) => (
            <div 
              key={review.id} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{review.name}</div>
                    <div className="text-blue-200 text-sm">
                      {new Date(review.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="text-orange-400 text-lg">
                    {'★'.repeat(review.rating)}
                  </div>
                  <span className="text-orange-300 text-sm font-medium ml-1">
                    {review.rating}/5
                  </span>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed group-hover:text-white transition-colors">
                "{review.text}"
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
