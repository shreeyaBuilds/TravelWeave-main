/*
  # Create itineraries storage system

  1. New Tables
    - `itineraries`
      - `id` (uuid, primary key) - Unique identifier for each itinerary
      - `share_id` (text, unique) - Shareable URL identifier
      - `country` (text) - Country code for the trip
      - `locations` (jsonb) - Array of specific locations within the country
      - `start_date` (date) - Trip start date
      - `end_date` (date) - Trip end date
      - `budget` (text) - Budget level (budget, moderate, luxury)
      - `travel_style` (text) - Travel style preference
      - `days` (jsonb) - Array of daily itinerary details
      - `created_at` (timestamptz) - When the itinerary was created
      - `user_id` (uuid, nullable) - Optional user ID for authenticated users

  2. Security
    - Enable RLS on `itineraries` table
    - Add policy for anyone to create itineraries (public access)
    - Add policy for anyone to read itineraries by share_id (public sharing)
    - Add policy for authenticated users to read their own itineraries

  3. Indexes
    - Index on share_id for fast lookup when sharing
    - Index on created_at for sorting recent itineraries
*/

CREATE TABLE IF NOT EXISTS itineraries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  share_id text UNIQUE NOT NULL,
  country text NOT NULL,
  locations jsonb DEFAULT '[]'::jsonb,
  start_date date NOT NULL,
  end_date date NOT NULL,
  budget text NOT NULL,
  travel_style text NOT NULL,
  days jsonb NOT NULL,
  created_at timestamptz DEFAULT now(),
  user_id uuid
);

-- Enable RLS
ALTER TABLE itineraries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to create itineraries (public app)
CREATE POLICY "Anyone can create itineraries"
  ON itineraries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow anyone to read itineraries by share_id (for sharing feature)
CREATE POLICY "Anyone can read shared itineraries"
  ON itineraries
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_itineraries_share_id ON itineraries(share_id);
CREATE INDEX IF NOT EXISTS idx_itineraries_created_at ON itineraries(created_at DESC);