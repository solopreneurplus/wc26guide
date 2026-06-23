-- WC26 Guide v1.0 — Auth Migration
-- Run this in the Supabase SQL Editor after adding SUPABASE_SERVICE_ROLE_KEY to .env.local
-- https://supabase.com/dashboard/project/heqhmlzwixladmxkjyrw/sql/new

-- ============================================
-- 1. USERS TABLE (replaces profiles + Supabase Auth)
-- ============================================
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT,
  is_paid BOOLEAN DEFAULT false,
  discount_code TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Migrate existing profiles data into users table
INSERT INTO users (id, email, name, is_paid, created_at)
SELECT p.id, p.email, p.name, p.is_paid, p.created_at
FROM profiles p
ON CONFLICT (id) DO UPDATE SET
  is_paid = EXCLUDED.is_paid,
  name = EXCLUDED.name;

-- Disable the old auto-profile trigger (it references auth.users)
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Drop old RLS policies on bookmarks (user_id references profiles)
-- Bookmarks: change FK to reference users instead of profiles
-- Note: if the FK constraint allows it, existing data references profiles(id)
-- which is the same UUID — no data migration needed for bookmarks/ponts

-- ============================================
-- 2. UPDATE FOREIGN KEYS
-- ============================================
-- Drop and recreate the bookmark FK
ALTER TABLE bookmarks DROP CONSTRAINT IF EXISTS bookmarks_user_id_fkey;
ALTER TABLE bookmarks ADD CONSTRAINT bookmarks_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

-- Drop and recreate the points_events FK
ALTER TABLE points_events DROP CONSTRAINT IF EXISTS points_events_user_id_fkey;
ALTER TABLE points_events ADD CONSTRAINT points_events_user_id_fkey
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

-- Drop old RLS policies (we handle auth via JWT now, not RLS)
DROP POLICY IF EXISTS "Users can read own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can read own bookmarks" ON bookmarks;
DROP POLICY IF EXISTS "Users can insert own bookmarks" ON bookmarks;
DROP POLICY IF EXISTS "Users can delete own bookmarks" ON bookmarks;
DROP POLICY IF EXISTS "Users can read own points" ON points_events;
DROP POLICY IF EXISTS "Users can insert own points" ON points_events;

-- ============================================
-- 3. VERIFICATION
-- ============================================
SELECT '✅ WC26 Guide v1.0 migration applied' as status;
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name IN ('users', 'profiles', 'bookmarks', 'points_events');