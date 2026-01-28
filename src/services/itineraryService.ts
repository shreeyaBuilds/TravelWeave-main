import { createClient } from '@supabase/supabase-js';
import { TripInput, ItineraryDay, Itinerary } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

/* ---------------------------------- */
/* Itinerary Service                  */
/* ---------------------------------- */

export class ItineraryService {
  /* ---------- Public API ---------- */

  static async generateItinerary(tripInput: TripInput): Promise<Itinerary> {
    const apiUrl = `${supabaseUrl}/functions/v1/generate-itinerary`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tripInput),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to generate itinerary');
    }

    const itinerary: Itinerary = await response.json();

    // Cache in session for quick access
    sessionStorage.setItem('currentItinerary', JSON.stringify(itinerary));

    return itinerary;
  }

  /* ---------- Persistence ---------- */

  static saveItinerary(itinerary: Itinerary): void {
    sessionStorage.setItem(
      'currentItinerary',
      JSON.stringify(itinerary)
    );
  }

  static async loadItinerary(shareId?: string): Promise<Itinerary | null> {
    if (!shareId) {
      // Try to load from session storage
      try {
        const data = sessionStorage.getItem('currentItinerary');
        return data ? JSON.parse(data) : null;
      } catch {
        return null;
      }
    }

    // Load from Supabase by share_id
    try {
      const { data, error } = await supabase
        .from('itineraries')
        .select('*')
        .eq('share_id', shareId)
        .maybeSingle();

      if (error || !data) {
        return null;
      }

      // Transform database format to Itinerary format
      const itinerary: Itinerary = {
        tripInput: {
          country: data.country,
          locations: data.locations || [],
          startDate: data.start_date,
          endDate: data.end_date,
          budget: data.budget,
          travelStyle: data.travel_style,
        },
        days: data.days as ItineraryDay[],
        shareId: data.share_id,
        createdAt: data.created_at,
      };

      return itinerary;
    } catch {
      return null;
    }
  }

  static generateShareUrl(shareId: string): string {
    return `${window.location.origin}?share=${shareId}`;
  }
}