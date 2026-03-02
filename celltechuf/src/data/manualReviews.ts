/**
 * Manual reviews collected outside the website (texts, in-person, etc.).
 * All are 5 stars.
 *
 * For each review you can set:
 * - name: reviewer name
 * - text: review message
 * - date: date of submission (YYYY-MM-DD). This is shown on the review card and
 *   used to sort newest-first. If omitted, a default date is used.
 */
export type ManualReviewEntry = {
  name: string
  text: string
  /** Date of submission (YYYY-MM-DD). Shown on the card and used for sorting. */
  date?: string
}

export const manualReviews: ManualReviewEntry[] = [
  // Example with submission date:
  // { name: 'Sarah M.', text: 'Super fast screen repair!', date: '2024-11-15' },
  // { name: 'Jake K.', text: 'Fixed my charging port same day.', date: '2024-10-03' },
  {name: 'Naser Oqab', text: 'Wasseem is amazing! Super professional, fast, and knows exactly what he’s doing. He got the job done quickly and made the whole process smooth and easy. Highly reccomend to any college student looking for reliability and speed.', date: '2026-02-25'},
  
]
