# Supabase Setup Guide for Cell Tech @ UF

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/log in
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - **Name**: `celltech-uf` (or any name you prefer)
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose closest to your location
5. Click "Create new project"
6. Wait for the project to be created (takes ~2 minutes)

## Step 2: Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)
   - **service_role** key (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

## Step 3: Update Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the empty values with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

## Step 4: Create Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy and paste the contents of `db/schema.sql` into the editor
4. Click "Run" to execute the SQL

This will create:
- `reviews` table with proper structure
- Row Level Security policies
- Proper permissions for public access

## Step 5: Test the Setup

1. Restart your Next.js development server:
   ```bash
   npm run dev
   ```
2. Go to your website at `http://localhost:3000`
3. Try submitting a review using the form
4. Check your Supabase dashboard → **Table Editor** → **reviews** to see if the review was inserted

## Step 6: Approve Reviews (Optional)

Reviews are inserted with `approved = false` by default. To make them visible:

1. Go to **Table Editor** → **reviews** in Supabase
2. Find the review you want to approve
3. Edit the row and set `approved` to `true`
4. Save the changes
5. The review will now appear on your website

## Troubleshooting

- **Reviews not appearing**: Check if they're approved in the database
- **Connection errors**: Verify your environment variables are correct
- **Permission errors**: Make sure the SQL schema was executed properly

## Security Notes

- The `anon` key is safe to expose in your frontend
- The `service_role` key should NEVER be exposed to the client
- Row Level Security ensures users can only see approved reviews
- All reviews require manual approval before being visible

---

Your review system will be fully functional once these steps are completed!
