"use client"
import { useEffect, useState, useMemo } from 'react'
import { MessageSquareText } from 'lucide-react'
import { Review } from '@/types/review'
import { manualReviews } from '@/data/manualReviews'

const DEFAULT_MANUAL_DATE = '2024-12-01' // used when no date set, so manual reviews appear in the list

function toReview(entry: { name: string; text: string; date?: string }, index: number): Review {
  return {
    id: `manual-${index}`,
    name: entry.name,
    rating: 5,
    text: entry.text,
    created_at: entry.date ? `${entry.date}T12:00:00Z` : `${DEFAULT_MANUAL_DATE}T12:00:00Z`,
    approved: true,
  }
}

export default function ReviewsList() {
  const [dbReviews, setDbReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  const manualAsReviews = useMemo(
    () => manualReviews.map((entry, i) => toReview(entry, i)),
    []
  )

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/reviews')
        const data = await res.json()
        setDbReviews(data.reviews || [])
      } catch (err) {
        console.error('Failed to fetch reviews:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchReviews()
  }, [])

  const reviews = useMemo(() => {
    const combined = [...dbReviews, ...manualAsReviews]
    return combined.sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
  }, [dbReviews, manualAsReviews])

  const avgRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : '0.0'

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center gap-3 text-ink-muted font-body">
          <div className="w-5 h-5 border-2 border-line-strong border-t-blue rounded-full animate-spin"></div>
          <span>Loading reviews...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {reviews.length > 0 && (
        <div className="text-center mb-8 p-6 bg-paper-soft rounded-2xl">
          <div className="text-4xl font-heading text-ink mb-2">{avgRating}</div>
          <div className="text-orange text-lg mb-2">
            {'★'.repeat(Math.round(Number(avgRating)))}
            {'☆'.repeat(5 - Math.round(Number(avgRating)))}
          </div>
          <div className="label-caption">
            Based on {reviews.length} review{reviews.length !== 1 ? 's' : ''}
          </div>
        </div>
      )}

      <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar pr-1">
        {reviews.length === 0 ? (
          <div className="text-center py-16 bg-paper-soft rounded-2xl animate-fade-in-up">
            <MessageSquareText className="w-10 h-10 text-ink-muted mx-auto mb-4" strokeWidth={1.5} />
            <h4 className="text-lg font-semibold text-ink mb-2 font-body">No reviews yet</h4>
            <p className="text-ink-muted font-body">Be the first to share your experience!</p>
          </div>
        ) : (
          reviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-surface border border-line rounded-xl p-5 animate-fade-in-up"
              style={{ animationDelay: `${Math.min(index, 5) * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-3 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-blue rounded-full flex items-center justify-center text-white font-semibold shrink-0">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-semibold text-ink text-sm font-body">{review.name}</div>
                    <div className="text-ink-muted text-xs font-body">
                      {new Date(review.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="text-orange text-sm">
                    {'★'.repeat(review.rating)}
                  </div>
                  <span className="text-ink-muted text-xs font-medium font-body">
                    {review.rating}/5
                  </span>
                </div>
              </div>
              <p className="text-ink-soft font-heading italic leading-relaxed">
                &quot;{review.text}&quot;
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
