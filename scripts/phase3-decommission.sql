-- WC26 Guide — Phase 3 Decommission
-- Run this in the Supabase SQL Editor:
-- https://supabase.com/dashboard/project/heqhmlzwixladmxkjyrw/sql/new

-- ============================================
-- WARNING: Review this before running!
-- ============================================
-- This script:
-- 1. Deletes all Supabase Auth users (optional)
-- 2. Removes RLS policies from user tables (bookmarks, points_events)
-- 3. Cleans up unused triggers
--
-- The profiles table is already gone (replaced by custom users table).

-- ============================================
-- 1. DELETE SUPABASE AUTH USERS (OPTIONAL)
-- ============================================
-- Supabase Auth users are no longer used — we use our custom users table.
-- Review the count first before uncommenting the DELETE line.

SELECT 
  COUNT(*) AS total_auth_users,
  MAX(created_at) AS last_signup
FROM auth.users

-- Uncomment the next line to actually delete all Auth users:
-- DELETE FROM auth.users;

-- ============================================
-- 2. DROP RLS POLICIES (RECOMMENDED)
-- ============================================
-- We use the /api proxy layer for auth now, not RLS.
-- These policies are no longer needed.

DROP POLICY IF EXISTS "Users can read own bookmarks" ON bookmarks;
DROP POLICY IF EXISTS "Users can insert own bookmarks" ON bookmarks;
DROP POLICY IF EXISTS "Users can delete own bookmarks" ON bookmarks;
DROP POLICY IF EXISTS "Users can read own points" ON points_events;
DROP POLICY IF EXISTS "Users can insert own points" ON points_events;

-- ============================================
-- 3. DROP UNUSED TRIGGERS
-- ============================================
-- These triggers used to auto-create profiles on signup.

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user() CASCADE;

-- ============================================
-- VERIFICATION
-- ============================================
SELECT '✅ Phase 3 cleanup completed' as status;
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
SELECT policyname FROM pg_policies WHERE schemaname = 'public';
