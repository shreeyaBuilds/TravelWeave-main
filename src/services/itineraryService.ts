import { TripInput, ItineraryDay, Itinerary } from '../types';

/* ---------------------------------- */
/* Destination Data Types             */
/* ---------------------------------- */

type DestinationActivities = {
  morning: string[];
  afternoon: string[];
  evening: string[];
};

type DestinationData = {
  activities: DestinationActivities;
  food: string[];
  tips: string[];
};

type DestinationsMap = Record<string, DestinationData>;

/* ---------------------------------- */
/* Destination Configuration          */
/* ---------------------------------- */

const DESTINATIONS: DestinationsMap = {
  goa: {
    activities: {
      morning: [
        'Beach walk at Baga Beach',
        'Sunrise yoga at Anjuna',
        'Visit Basilica of Bom Jesus',
        'Explore Old Goa churches'
      ],
      afternoon: [
        'Water sports at Calangute',
        'Spice plantation tour',
        'Fort Aguada exploration',
        'Dudhsagar Falls trek'
      ],
      evening: [
        'Sunset at Chapora Fort',
        'Night market at Anjuna',
        'Beach shacks at Morjim',
        'Cruise on Mandovi River'
      ]
    },
    food: [
      'Fresh seafood curry',
      'Bebinca dessert',
      'Feni cocktails',
      'Portuguese vindaloo',
      'Prawn balchão'
    ],
    tips: [
      'Rent a scooter for easy transport',
      'Try local cashew feni',
      'Book beach shacks in advance',
      'Carry sunscreen and hat'
    ]
  },

  paris: {
    activities: {
      morning: [
        'Eiffel Tower visit',
        'Louvre Museum tour',
        'Notre-Dame Cathedral',
        'Montmartre exploration'
      ],
      afternoon: [
        'Seine River cruise',
        'Champs-Élysées shopping',
        'Versailles Palace day trip',
        'Latin Quarter walk'
      ],
      evening: [
        'Dinner cruise on Seine',
        'Moulin Rouge show',
        'Evening at Trocadéro',
        'Wine tasting in Marais'
      ]
    },
    food: [
      'Croissants and café au lait',
      'Coq au vin',
      'French onion soup',
      'Macarons from Ladurée',
      'Escargot'
    ],
    tips: [
      'Buy museum pass for skip-the-line',
      'Learn basic French phrases',
      'Validate metro tickets',
      'Tip 10% at restaurants'
    ]
  },

  tokyo: {
    activities: {
      morning: [
        'Tsukiji Fish Market',
        'Senso-ji Temple visit',
        'Imperial Palace gardens',
        'Meiji Shrine'
      ],
      afternoon: [
        'Shibuya Crossing experience',
        'Harajuku fashion district',
        'Tokyo Skytree observation',
        'Ueno Park'
      ],
      evening: [
        'Izakaya hopping in Shinjuku',
        'Ginza district dining',
        'Roppongi nightlife',
        'Traditional tea ceremony'
      ]
    },
    food: [
      'Fresh sushi at Tsukiji',
      'Authentic ramen',
      'Tempura set meal',
      'Wagyu beef',
      'Mochi ice cream'
    ],
    tips: [
      'Get JR Pass for trains',
      'Bow when greeting',
      'No tipping culture',
      'Carry cash always'
    ]
  }
};

/* ---------------------------------- */
/* Utility Helpers                    */
/* ---------------------------------- */

const normalizeDestination = (input: string): string =>
  input.toLowerCase().trim().split(',')[0];

const randomFromArray = (arr: string[], seed: number): string =>
  arr[seed % arr.length];

/* ---------------------------------- */
/* Itinerary Service                  */
/* ---------------------------------- */

export class ItineraryService {
  /* ---------- Core Helpers ---------- */

  private static generateShareId(): string {
    return crypto.randomUUID();
  }

  private static formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  }

  private static calculateDays(startDate: string, endDate: string): number {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    return Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1);
  }

  private static getDestinationData(destination: string): DestinationData {
    const key = normalizeDestination(destination);

    if (!DESTINATIONS[key]) {
      throw new Error(
        `Destination "${destination}" is not supported yet`
      );
    }

    return DESTINATIONS[key];
  }

  /* ---------- Public API ---------- */

  static async generateItinerary(tripInput: TripInput): Promise<Itinerary> {
    // Simulate AI latency
    await new Promise((r) =>
      setTimeout(r, 1500 + Math.random() * 1500)
    );

    const daysCount = this.calculateDays(
      tripInput.startDate,
      tripInput.endDate
    );

    const destinationData = this.getDestinationData(
      tripInput.destination
    );

    const itineraryDays: ItineraryDay[] = [];

    for (let i = 0; i < Math.min(daysCount, 7); i++) {
      const currentDate = new Date(tripInput.startDate);
      currentDate.setDate(currentDate.getDate() + i);

      itineraryDays.push({
        dayNumber: i + 1,
        date: this.formatDate(currentDate.toISOString()),
        morning: randomFromArray(
          destinationData.activities.morning,
          i + 1
        ),
        afternoon: randomFromArray(
          destinationData.activities.afternoon,
          i + 2
        ),
        evening: randomFromArray(
          destinationData.activities.evening,
          i + 3
        ),
        foodSuggestion: randomFromArray(
          destinationData.food,
          i + 4
        ),
        travelTip: randomFromArray(
          destinationData.tips,
          i + 5
        )
      });
    }

    return {
      tripInput,
      days: itineraryDays,
      shareId: this.generateShareId(),
      createdAt: new Date().toISOString()
    };
  }

  /* ---------- Persistence ---------- */

  static saveItinerary(itinerary: Itinerary): void {
    sessionStorage.setItem(
      'currentItinerary',
      JSON.stringify(itinerary)
    );
    localStorage.setItem(
      `itinerary_${itinerary.shareId}`,
      JSON.stringify(itinerary)
    );
  }

  static loadItinerary(shareId?: string): Itinerary | null {
    try {
      const key = shareId
        ? `itinerary_${shareId}`
        : 'currentItinerary';

      const data =
        localStorage.getItem(key) ||
        sessionStorage.getItem(key);

      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  static generateShareUrl(shareId: string): string {
    return `${window.location.origin}?share=${shareId}`;
  }
}