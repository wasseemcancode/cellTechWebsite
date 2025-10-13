# Cell Tech @ UF - Reviews Website

A Next.js website for collecting and displaying customer reviews for Cell Tech @ UF iPhone repair services.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Supabase:**
   - Create a new project at [supabase.com](https://supabase.com)
   - Copy `env.example` to `.env.local`
   - Fill in your Supabase URL, anon key, and service role key
   - Run the SQL in `db/schema.sql` in your Supabase SQL editor

3. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the site.

## Features

- **Customer Reviews**: Star ratings, text feedback, and customer names
- **Review Moderation**: All reviews require approval before appearing publicly
- **Contact CTAs**: One-tap call/text buttons with your business phone
- **Responsive Design**: Works on mobile and desktop
- **UF Branding**: Blue/orange color scheme matching your poster

## Database Schema

The `reviews` table includes:
- `id` (UUID, primary key)
- `name` (text, customer name)
- `rating` (integer, 1-5 stars)
- `text` (text, review content)
- `approved` (boolean, defaults to false)
- `created_at` (timestamp)

## Admin/Moderation

To approve reviews, you can:
1. Access your Supabase dashboard
2. Go to Table Editor > reviews
3. Set `approved = true` for reviews you want to display

## Deployment

Deploy to Vercel:
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

The site will be available at `celltechuf.vercel.app` or your custom domain.
