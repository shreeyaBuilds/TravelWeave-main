export interface TripInput {
  country: string;
  locations: string[];
  startDate: string;
  endDate: string;
  budget: 'Low' | 'Medium' | 'Luxury';
  travelStyle: 'Solo' | 'Couple' | 'Family' | 'Group';
}

export interface Country {
  code: string;
  name: string;
  locations: string[];
}

export interface ItineraryDay {
  dayNumber: number;
  date: string;
  morning: string;
  afternoon: string;
  evening: string;
  foodSuggestion: string;
  travelTip: string;
}

export interface Itinerary {
  tripInput: TripInput;
  days: ItineraryDay[];
  shareId: string;
  createdAt: string;
}

export type AppState = 'input' | 'loading' | 'results' | 'shared';