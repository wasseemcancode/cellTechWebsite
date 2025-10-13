-- Supabase SQL schema for reviews
-- 1) Create table
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  name text not null check (char_length(name) <= 50),
  rating int not null check (rating >= 1 and rating <= 5),
  text text not null check (char_length(text) <= 1000),
  approved boolean not null default false
);

-- 2) Enable Row Level Security
alter table public.reviews enable row level security;

-- 3) Allow anyone to insert but not read unapproved
create policy "Anyone can insert reviews" on public.reviews
  for insert to anon, authenticated
  with check (true);

create policy "Only approved visible to public" on public.reviews
  for select to anon, authenticated
  using (approved = true);

-- 4) Service role (server) can do everything - it bypasses RLS
-- No extra policy required; service role bypasses RLS by default.
