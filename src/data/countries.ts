import { Country } from '../types';

export const COUNTRIES: Country[] = [
  {
    code: 'india',
    name: 'India',
    locations: [
      'Goa',
      'Mumbai',
      'Delhi',
      'Jaipur',
      'Kerala',
      'Bangalore',
      'Agra',
      'Varanasi',
      'Udaipur',
      'Rishikesh'
    ]
  },
  {
    code: 'france',
    name: 'France',
    locations: [
      'Paris',
      'Nice',
      'Lyon',
      'Marseille',
      'Bordeaux',
      'Cannes',
      'Strasbourg',
      'Toulouse',
      'Normandy',
      'French Riviera'
    ]
  },
  {
    code: 'japan',
    name: 'Japan',
    locations: [
      'Tokyo',
      'Kyoto',
      'Osaka',
      'Hiroshima',
      'Nara',
      'Yokohama',
      'Sapporo',
      'Fukuoka',
      'Nagoya',
      'Okinawa'
    ]
  },
  {
    code: 'usa',
    name: 'United States',
    locations: [
      'New York',
      'Los Angeles',
      'San Francisco',
      'Las Vegas',
      'Miami',
      'Chicago',
      'Seattle',
      'Boston',
      'Hawaii',
      'Orlando'
    ]
  },
  {
    code: 'italy',
    name: 'Italy',
    locations: [
      'Rome',
      'Venice',
      'Florence',
      'Milan',
      'Naples',
      'Amalfi Coast',
      'Tuscany',
      'Sicily',
      'Verona',
      'Pisa'
    ]
  },
  {
    code: 'uk',
    name: 'United Kingdom',
    locations: [
      'London',
      'Edinburgh',
      'Manchester',
      'Liverpool',
      'Oxford',
      'Cambridge',
      'Bath',
      'Brighton',
      'York',
      'Cornwall'
    ]
  }
];

export const getCountryByCode = (code: string): Country | undefined => {
  return COUNTRIES.find(c => c.code === code);
};
