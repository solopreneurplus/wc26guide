-- WC26 Guide — Supabase Schema Migration
-- Run this in the Supabase SQL Editor (https://supabase.com/dashboard/project/heqhmlzwixladmxkjyrw/sql/new)

-- ============================================
-- 1. PROFILES
-- ============================================
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  name TEXT,
  is_paid BOOLEAN DEFAULT false,
  timezone TEXT DEFAULT 'America/New_York',
  points INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- 2. BOOKMARKS
-- ============================================
CREATE TABLE bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  match_id TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, match_id)
);

ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own bookmarks"
  ON bookmarks FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own bookmarks"
  ON bookmarks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own bookmarks"
  ON bookmarks FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================
-- 3. POINTS EVENTS
-- ============================================
CREATE TABLE points_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  points INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE points_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own points"
  ON points_events FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own points"
  ON points_events FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Auto-update profile points total on insert
CREATE OR REPLACE FUNCTION public.update_profile_points()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.profiles
  SET points = (SELECT COALESCE(SUM(points), 0) FROM public.points_events WHERE user_id = NEW.user_id)
  WHERE id = NEW.user_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_points_inserted
  AFTER INSERT ON public.points_events
  FOR EACH ROW
  EXECUTE FUNCTION public.update_profile_points();

-- ============================================
-- 4. SCHEMA VERIFICATION
-- ============================================
SELECT '✅ WC26 Guide schema created successfully' as status;
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';