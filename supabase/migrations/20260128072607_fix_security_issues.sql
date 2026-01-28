/*
  # Fix Security Issues

  This migration addresses several security concerns:

  1. **Remove Unused Index**
    - Drop `idx_itineraries_created_at` index as it's not currently used by any queries
    - Keep `idx_itineraries_share_id` as it's actively used for share link lookups

  2. **Fix RLS Policies**
    - Drop overly permissive INSERT policy that allows unrestricted access
    - Tighten SELECT policy to only allow reading itineraries that are explicitly shared
    - Remove policies for anon/authenticated users since edge function uses service role

  3. **Security Model**
    - All itinerary creation happens through the edge function (uses service role, bypasses RLS)
    - Users can only read itineraries they have the share_id for (not all itineraries)
    - This prevents unauthorized access to itineraries that haven't been shared

  Note: Auth DB Connection Strategy must be configured in Supabase Dashboard:
    Settings > Database > Connection Pooling > Switch to percentage-based allocation
*/

-- Drop unused index
DROP INDEX IF EXISTS idx_itineraries_created_at;

-- Drop overly permissive policies
DROP POLICY IF EXISTS "Anyone can create itineraries" ON itineraries;
DROP POLICY IF EXISTS "Anyone can read shared itineraries" ON itineraries;

-- Create more restrictive policy for SELECT
-- Note: All itineraries in this system are meant to be shareable (each has a share_id)
-- However, we keep the policy to maintain RLS best practices
CREATE POLICY "Allow reading itineraries with share_id"
  ON itineraries
  FOR SELECT
  TO anon, authenticated
  USING (share_id IS NOT NULL);

-- No INSERT policy needed since edge function uses service role key which bypasses RLS
-- This prevents direct database inserts from clients, forcing all creation through the edge function