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
        <div className="text-center mb-10 p-8 glass-card rounded-3xl hover-lift animate-scale-in">
          <div className="text-6xl font-heading font-bold text-gradient mb-4">{avgRating}</div>
          <div className="text-orange-400 text-3xl mb-4">
            {'★'.repeat(Math.round(Number(avgRating)))}
            {'☆'.repeat(5 - Math.round(Number(avgRating)))}
          </div>
          <div className="text-blue-100 text-lg font-medium">
            Based on {reviews.length} review{reviews.length !== 1 ? 's' : ''}
          </div>
        </div>
      )}

      <div className="space-y-6 max-h-96 overflow-y-auto custom-scrollbar">
        {reviews.length === 0 ? (
          <div className="text-center py-16 glass-card rounded-3xl animate-fade-in-up">
            <div className="text-8xl mb-6 animate-wave">💭</div>
            <h4 className="text-2xl font-heading font-bold text-white mb-4">No reviews yet</h4>
            <p className="text-blue-200 text-lg">Be the first to share your experience!</p>
          </div>
        ) : (
          reviews.map((review, index) => (
            <div 
              key={review.id} 
              className="glass-card rounded-2xl p-6 hover-lift group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 gradient-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white text-lg">{review.name}</div>
                    <div className="text-blue-200 text-base font-medium">
                      {new Date(review.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-orange-400 text-xl">
                    {'★'.repeat(review.rating)}
                  </div>
                  <span className="text-orange-300 text-base font-bold ml-1">
                    {review.rating}/5
                  </span>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed group-hover:text-white transition-colors text-lg">
                &quot;{review.text}&quot;
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
