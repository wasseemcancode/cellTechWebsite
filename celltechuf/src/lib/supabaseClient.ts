import { createClient } from '@supabase/supabase-js'

// Public client for browser/server actions that only need anon key
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)

// Server-only elevated client (optional). Use for moderation/admin tasks.
export const supabaseService = (() => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return null
  return createClient(url, key)
})()
