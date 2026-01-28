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

  india: {
    activities: {
      morning: [
        'Taj Mahal sunrise visit',
        'Morning prayer at Ganges',
        'Amber Fort exploration',
        'City Palace tour'
      ],
      afternoon: [
        'Local market shopping',
        'Heritage temple visits',
        'Cultural museum tour',
        'Street food walk'
      ],
      evening: [
        'Traditional dance performance',
        'Sunset boat ride',
        'Rooftop dinner with city views',
        'Night bazaar shopping'
      ]
    },
    food: [
      'Butter chicken and naan',
      'Biryani',
      'Street chaat',
      'Masala dosa',
      'Lassi'
    ],
    tips: [
      'Carry cash for small vendors',
      'Dress modestly at religious sites',
      'Bargain at local markets',
      'Stay hydrated'
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

  france: {
    activities: {
      morning: [
        'Local café breakfast',
        'Historic château visit',
        'Village market stroll',
        'Museum exploration'
      ],
      afternoon: [
        'Vineyard wine tasting',
        'Countryside cycling',
        'Art gallery tour',
        'Shopping at boutiques'
      ],
      evening: [
        'French cuisine dinner',
        'River walk at sunset',
        'Live music at bistro',
        'Night tour of monuments'
      ]
    },
    food: [
      'Fresh baguettes',
      'Regional cheese platter',
      'Duck confit',
      'Crème brûlée',
      'Local wine'
    ],
    tips: [
      'Greet shopkeepers with Bonjour',
      'Lunch is usually 12-2pm',
      'Many places closed on Sunday',
      'Keep small change handy'
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
  },

  japan: {
    activities: {
      morning: [
        'Temple and shrine visits',
        'Traditional garden walk',
        'Local fish market',
        'Tea ceremony experience'
      ],
      afternoon: [
        'Castle exploration',
        'Shopping districts',
        'Bullet train experience',
        'Cultural museum tour'
      ],
      evening: [
        'Traditional izakaya dinner',
        'Karaoke night',
        'Night temple illumination',
        'Hot springs relaxation'
      ]
    },
    food: [
      'Authentic sushi and sashimi',
      'Ramen and udon',
      'Okonomiyaki',
      'Matcha desserts',
      'Sake tasting'
    ],
    tips: [
      'Learn basic Japanese phrases',
      'Remove shoes indoors',
      'Respect queue culture',
      'IC card for transport'
    ]
  }
};

/* ---------------------------------- */
/* Utility Helpers                    */
/* ---------------------------------- */

const normalizeDestination = (input: string): string =>
  input.toLowerCase().trim().split(',')[0].replace(/\s+/g, '');

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

  private static getDestinationData(tripInput: TripInput): DestinationData {
    let searchKey = '';

    if (tripInput.locations.length > 0) {
      const firstLocation = normalizeDestination(tripInput.locations[0]);
      if (DESTINATIONS[firstLocation]) {
        searchKey = firstLocation;
      }
    }

    if (!searchKey) {
      const countryKey = normalizeDestination(tripInput.country);
      if (DESTINATIONS[countryKey]) {
        searchKey = countryKey;
      }
    }

    if (!searchKey) {
      const locationNames = tripInput.locations.length > 0
        ? tripInput.locations.join(', ')
        : tripInput.country;
      throw new Error(
        `No itinerary data available for "${locationNames}". Currently supported: Goa, Paris, Tokyo`
      );
    }

    return DESTINATIONS[searchKey];
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

    const destinationData = this.getDestinationData(tripInput);

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