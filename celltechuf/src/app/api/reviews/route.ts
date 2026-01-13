import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { supabase } from '@/lib/supabaseClient'

const ReviewSchema = z.object({
  name: z.string().min(1).max(50),
  rating: z.number().int().min(1).max(5),
  text: z.string().min(5).max(1000),
})

export async function GET() {
  if (!supabase) {
    return NextResponse.json({ reviews: [] })
  }

  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('approved', true)
    .order('created_at', { ascending: false })
    .limit(50)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ reviews: data ?? [] })
}

export async function POST(req: NextRequest) {
  if (!supabase) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 503 })
  }

  const json = await req.json().catch(() => null)
  const parsed = ReviewSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid review data' }, { status: 400 })
  }

  const { name, rating, text } = parsed.data

  const { error } = await supabase.from('reviews').insert({ name, rating, text })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  // Inserted as approved=false per schema/policy; requires moderation to appear.
  return NextResponse.json({ ok: true })
}
