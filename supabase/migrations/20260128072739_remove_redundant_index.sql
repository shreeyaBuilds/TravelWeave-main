/*
  # Remove Redundant Index

  1. **Index Optimization**
    - Drop `idx_itineraries_share_id` index as it's redundant
    - The UNIQUE constraint on share_id already creates an index (`itineraries_share_id_key`)
    - Having both is unnecessary and wastes database resources

  2. **Note on Auth DB Connection Strategy**
    This must be configured manually in Supabase Dashboard:
    - Go to Settings > Database > Connection Pooling
    - Switch from fixed connection count to percentage-based allocation
    - This cannot be done via SQL migration
*/

-- Drop redundant index (UNIQUE constraint already provides an index)
DROP INDEX IF EXISTS idx_itineraries_share_id;