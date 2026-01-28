export interface City {
  name: string;
}

export interface State {
  name: string;
  cities: string[];
}

export interface CountryWithStates {
  code: string;
  name: string;
  currency: string;
  currencySymbol: string;
  states?: State[];
  cities?: string[];
}

export const COUNTRIES_DATA: CountryWithStates[] = [
  {
    code: 'usa',
    name: 'United States',
    currency: 'USD',
    currencySymbol: '$',
    states: [
      { name: 'California', cities: ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'San Jose'] },
      { name: 'New York', cities: ['New York City', 'Buffalo', 'Rochester', 'Albany', 'Syracuse'] },
      { name: 'Florida', cities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale'] },
      { name: 'Texas', cities: ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth'] },
      { name: 'Nevada', cities: ['Las Vegas', 'Reno', 'Henderson', 'Carson City'] },
      { name: 'Illinois', cities: ['Chicago', 'Aurora', 'Naperville', 'Rockford'] },
      { name: 'Washington', cities: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver'] },
      { name: 'Massachusetts', cities: ['Boston', 'Worcester', 'Springfield', 'Cambridge'] },
      { name: 'Hawaii', cities: ['Honolulu', 'Hilo', 'Kailua', 'Kapolei'] },
      { name: 'Arizona', cities: ['Phoenix', 'Tucson', 'Mesa', 'Chandler'] },
      { name: 'Colorado', cities: ['Denver', 'Colorado Springs', 'Aurora', 'Boulder'] },
      { name: 'Georgia', cities: ['Atlanta', 'Savannah', 'Augusta', 'Athens'] },
    ]
  },
  {
    code: 'india',
    name: 'India',
    currency: 'INR',
    currencySymbol: '₹',
    states: [
      { name: 'Goa', cities: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda'] },
      { name: 'Maharashtra', cities: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad'] },
      { name: 'Delhi', cities: ['New Delhi', 'Old Delhi', 'Dwarka', 'Rohini'] },
      { name: 'Rajasthan', cities: ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer', 'Pushkar'] },
      { name: 'Kerala', cities: ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Munnar', 'Alleppey'] },
      { name: 'Karnataka', cities: ['Bangalore', 'Mysore', 'Mangalore', 'Hubli', 'Hampi'] },
      { name: 'Uttar Pradesh', cities: ['Agra', 'Varanasi', 'Lucknow', 'Kanpur', 'Noida'] },
      { name: 'Tamil Nadu', cities: ['Chennai', 'Coimbatore', 'Madurai', 'Ooty', 'Pondicherry'] },
      { name: 'West Bengal', cities: ['Kolkata', 'Darjeeling', 'Siliguri', 'Durgapur'] },
      { name: 'Gujarat', cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'] },
      { name: 'Himachal Pradesh', cities: ['Shimla', 'Manali', 'Dharamshala', 'Kullu'] },
      { name: 'Uttarakhand', cities: ['Rishikesh', 'Dehradun', 'Nainital', 'Mussoorie'] },
    ]
  },
  {
    code: 'canada',
    name: 'Canada',
    currency: 'CAD',
    currencySymbol: 'C$',
    states: [
      { name: 'Ontario', cities: ['Toronto', 'Ottawa', 'Mississauga', 'Hamilton', 'London'] },
      { name: 'Quebec', cities: ['Montreal', 'Quebec City', 'Laval', 'Gatineau'] },
      { name: 'British Columbia', cities: ['Vancouver', 'Victoria', 'Surrey', 'Richmond', 'Kelowna'] },
      { name: 'Alberta', cities: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge'] },
      { name: 'Manitoba', cities: ['Winnipeg', 'Brandon', 'Steinbach'] },
      { name: 'Saskatchewan', cities: ['Saskatoon', 'Regina', 'Prince Albert'] },
      { name: 'Nova Scotia', cities: ['Halifax', 'Sydney', 'Dartmouth'] },
    ]
  },
  {
    code: 'australia',
    name: 'Australia',
    currency: 'AUD',
    currencySymbol: 'A$',
    states: [
      { name: 'New South Wales', cities: ['Sydney', 'Newcastle', 'Wollongong', 'Central Coast'] },
      { name: 'Victoria', cities: ['Melbourne', 'Geelong', 'Ballarat', 'Bendigo'] },
      { name: 'Queensland', cities: ['Brisbane', 'Gold Coast', 'Cairns', 'Townsville', 'Sunshine Coast'] },
      { name: 'Western Australia', cities: ['Perth', 'Fremantle', 'Mandurah', 'Bunbury'] },
      { name: 'South Australia', cities: ['Adelaide', 'Mount Gambier', 'Whyalla'] },
      { name: 'Tasmania', cities: ['Hobart', 'Launceston', 'Devonport'] },
      { name: 'Australian Capital Territory', cities: ['Canberra'] },
    ]
  },
  {
    code: 'china',
    name: 'China',
    currency: 'CNY',
    currencySymbol: '¥',
    states: [
      { name: 'Beijing', cities: ['Beijing'] },
      { name: 'Shanghai', cities: ['Shanghai'] },
      { name: 'Guangdong', cities: ['Guangzhou', 'Shenzhen', 'Dongguan', 'Foshan'] },
      { name: 'Sichuan', cities: ['Chengdu', 'Mianyang', 'Deyang'] },
      { name: 'Zhejiang', cities: ['Hangzhou', 'Ningbo', 'Wenzhou'] },
      { name: 'Jiangsu', cities: ['Nanjing', 'Suzhou', 'Wuxi', 'Changzhou'] },
      { name: 'Hubei', cities: ['Wuhan', 'Yichang', 'Xiangyang'] },
    ]
  },
  {
    code: 'brazil',
    name: 'Brazil',
    currency: 'BRL',
    currencySymbol: 'R$',
    states: [
      { name: 'São Paulo', cities: ['São Paulo', 'Campinas', 'Santos', 'Ribeirão Preto'] },
      { name: 'Rio de Janeiro', cities: ['Rio de Janeiro', 'Niterói', 'Petrópolis'] },
      { name: 'Bahia', cities: ['Salvador', 'Feira de Santana', 'Vitória da Conquista'] },
      { name: 'Minas Gerais', cities: ['Belo Horizonte', 'Uberlândia', 'Contagem'] },
      { name: 'Paraná', cities: ['Curitiba', 'Londrina', 'Maringá'] },
      { name: 'Amazonas', cities: ['Manaus', 'Parintins', 'Itacoatiara'] },
    ]
  },
  {
    code: 'mexico',
    name: 'Mexico',
    currency: 'MXN',
    currencySymbol: 'MX$',
    states: [
      { name: 'Mexico City', cities: ['Mexico City'] },
      { name: 'Jalisco', cities: ['Guadalajara', 'Puerto Vallarta', 'Zapopan'] },
      { name: 'Quintana Roo', cities: ['Cancún', 'Playa del Carmen', 'Tulum', 'Cozumel'] },
      { name: 'Nuevo León', cities: ['Monterrey', 'San Nicolás de los Garza'] },
      { name: 'Yucatán', cities: ['Mérida', 'Valladolid', 'Progreso'] },
      { name: 'Baja California', cities: ['Tijuana', 'Ensenada', 'Mexicali'] },
    ]
  },
  {
    code: 'germany',
    name: 'Germany',
    currency: 'EUR',
    currencySymbol: '€',
    states: [
      { name: 'Bavaria', cities: ['Munich', 'Nuremberg', 'Augsburg', 'Regensburg'] },
      { name: 'Berlin', cities: ['Berlin'] },
      { name: 'North Rhine-Westphalia', cities: ['Cologne', 'Düsseldorf', 'Dortmund', 'Essen'] },
      { name: 'Baden-Württemberg', cities: ['Stuttgart', 'Mannheim', 'Karlsruhe', 'Freiburg'] },
      { name: 'Hamburg', cities: ['Hamburg'] },
      { name: 'Hesse', cities: ['Frankfurt', 'Wiesbaden', 'Kassel', 'Darmstadt'] },
    ]
  },
  {
    code: 'france',
    name: 'France',
    currency: 'EUR',
    currencySymbol: '€',
    cities: ['Paris', 'Nice', 'Lyon', 'Marseille', 'Bordeaux', 'Cannes', 'Strasbourg', 'Toulouse', 'Nantes', 'Lille']
  },
  {
    code: 'uk',
    name: 'United Kingdom',
    currency: 'GBP',
    currencySymbol: '£',
    cities: ['London', 'Edinburgh', 'Manchester', 'Liverpool', 'Oxford', 'Cambridge', 'Bath', 'Brighton', 'York', 'Glasgow']
  },
  {
    code: 'japan',
    name: 'Japan',
    currency: 'JPY',
    currencySymbol: '¥',
    cities: ['Tokyo', 'Kyoto', 'Osaka', 'Hiroshima', 'Nara', 'Yokohama', 'Sapporo', 'Fukuoka', 'Nagoya', 'Okinawa']
  },
  {
    code: 'italy',
    name: 'Italy',
    currency: 'EUR',
    currencySymbol: '€',
    cities: ['Rome', 'Venice', 'Florence', 'Milan', 'Naples', 'Amalfi Coast', 'Tuscany', 'Sicily', 'Verona', 'Pisa']
  },
  {
    code: 'spain',
    name: 'Spain',
    currency: 'EUR',
    currencySymbol: '€',
    cities: ['Madrid', 'Barcelona', 'Seville', 'Valencia', 'Bilbao', 'Granada', 'Malaga', 'Ibiza', 'Toledo', 'Córdoba']
  },
  {
    code: 'thailand',
    name: 'Thailand',
    currency: 'THB',
    currencySymbol: '฿',
    cities: ['Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya', 'Krabi', 'Koh Samui', 'Ayutthaya', 'Hua Hin', 'Chiang Rai']
  },
  {
    code: 'uae',
    name: 'United Arab Emirates',
    currency: 'AED',
    currencySymbol: 'AED',
    cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Al Ain']
  },
  {
    code: 'singapore',
    name: 'Singapore',
    currency: 'SGD',
    currencySymbol: 'S$',
    cities: ['Singapore City', 'Sentosa', 'Marina Bay', 'Orchard Road', 'Chinatown']
  },
  {
    code: 'malaysia',
    name: 'Malaysia',
    currency: 'MYR',
    currencySymbol: 'RM',
    cities: ['Kuala Lumpur', 'Penang', 'Langkawi', 'Malacca', 'Johor Bahru', 'Kota Kinabalu', 'Cameron Highlands']
  },
  {
    code: 'indonesia',
    name: 'Indonesia',
    currency: 'IDR',
    currencySymbol: 'Rp',
    cities: ['Jakarta', 'Bali', 'Yogyakarta', 'Bandung', 'Surabaya', 'Lombok', 'Ubud', 'Gili Islands']
  },
  {
    code: 'vietnam',
    name: 'Vietnam',
    currency: 'VND',
    currencySymbol: '₫',
    cities: ['Hanoi', 'Ho Chi Minh City', 'Da Nang', 'Hoi An', 'Nha Trang', 'Hue', 'Ha Long Bay', 'Sapa']
  },
  {
    code: 'south-korea',
    name: 'South Korea',
    currency: 'KRW',
    currencySymbol: '₩',
    cities: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Jeju Island']
  },
  {
    code: 'philippines',
    name: 'Philippines',
    currency: 'PHP',
    currencySymbol: '₱',
    cities: ['Manila', 'Cebu', 'Davao', 'Boracay', 'Palawan', 'Baguio', 'Siargao']
  },
  {
    code: 'turkey',
    name: 'Turkey',
    currency: 'TRY',
    currencySymbol: '₺',
    cities: ['Istanbul', 'Ankara', 'Antalya', 'Izmir', 'Cappadocia', 'Bodrum', 'Pamukkale', 'Ephesus']
  },
  {
    code: 'egypt',
    name: 'Egypt',
    currency: 'EGP',
    currencySymbol: 'E£',
    cities: ['Cairo', 'Alexandria', 'Luxor', 'Aswan', 'Hurghada', 'Sharm El Sheikh', 'Giza']
  },
  {
    code: 'south-africa',
    name: 'South Africa',
    currency: 'ZAR',
    currencySymbol: 'R',
    cities: ['Cape Town', 'Johannesburg', 'Durban', 'Pretoria', 'Port Elizabeth', 'Stellenbosch', 'Kruger National Park']
  },
  {
    code: 'morocco',
    name: 'Morocco',
    currency: 'MAD',
    currencySymbol: 'MAD',
    cities: ['Marrakech', 'Casablanca', 'Fez', 'Rabat', 'Tangier', 'Chefchaouen', 'Essaouira']
  },
  {
    code: 'argentina',
    name: 'Argentina',
    currency: 'ARS',
    currencySymbol: 'AR$',
    cities: ['Buenos Aires', 'Mendoza', 'Córdoba', 'Bariloche', 'Iguazu Falls', 'Salta', 'Ushuaia']
  },
  {
    code: 'chile',
    name: 'Chile',
    currency: 'CLP',
    currencySymbol: 'CLP$',
    cities: ['Santiago', 'Valparaíso', 'Viña del Mar', 'Atacama Desert', 'Patagonia', 'Easter Island']
  },
  {
    code: 'peru',
    name: 'Peru',
    currency: 'PEN',
    currencySymbol: 'S/',
    cities: ['Lima', 'Cusco', 'Machu Picchu', 'Arequipa', 'Puno', 'Iquitos', 'Nazca']
  },
  {
    code: 'colombia',
    name: 'Colombia',
    currency: 'COP',
    currencySymbol: 'COL$',
    cities: ['Bogotá', 'Medellín', 'Cartagena', 'Cali', 'Santa Marta', 'Barranquilla', 'San Andrés']
  },
  {
    code: 'portugal',
    name: 'Portugal',
    currency: 'EUR',
    currencySymbol: '€',
    cities: ['Lisbon', 'Porto', 'Algarve', 'Sintra', 'Faro', 'Coimbra', 'Madeira', 'Azores']
  },
  {
    code: 'greece',
    name: 'Greece',
    currency: 'EUR',
    currencySymbol: '€',
    cities: ['Athens', 'Santorini', 'Mykonos', 'Crete', 'Rhodes', 'Thessaloniki', 'Corfu', 'Delphi']
  },
  {
    code: 'switzerland',
    name: 'Switzerland',
    currency: 'CHF',
    currencySymbol: 'CHF',
    cities: ['Zurich', 'Geneva', 'Lucerne', 'Bern', 'Interlaken', 'Zermatt', 'St. Moritz', 'Lausanne']
  },
  {
    code: 'austria',
    name: 'Austria',
    currency: 'EUR',
    currencySymbol: '€',
    cities: ['Vienna', 'Salzburg', 'Innsbruck', 'Graz', 'Hallstatt', 'Linz']
  },
  {
    code: 'netherlands',
    name: 'Netherlands',
    currency: 'EUR',
    currencySymbol: '€',
    cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Delft', 'Haarlem', 'Maastricht']
  },
  {
    code: 'belgium',
    name: 'Belgium',
    currency: 'EUR',
    currencySymbol: '€',
    cities: ['Brussels', 'Bruges', 'Antwerp', 'Ghent', 'Leuven', 'Liège']
  },
  {
    code: 'denmark',
    name: 'Denmark',
    currency: 'DKK',
    currencySymbol: 'kr',
    cities: ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg', 'Roskilde']
  },
  {
    code: 'sweden',
    name: 'Sweden',
    currency: 'SEK',
    currencySymbol: 'kr',
    cities: ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Kiruna']
  },
  {
    code: 'norway',
    name: 'Norway',
    currency: 'NOK',
    currencySymbol: 'kr',
    cities: ['Oslo', 'Bergen', 'Tromsø', 'Stavanger', 'Trondheim', 'Lofoten Islands']
  },
  {
    code: 'finland',
    name: 'Finland',
    currency: 'EUR',
    currencySymbol: '€',
    cities: ['Helsinki', 'Tampere', 'Turku', 'Rovaniemi', 'Lapland']
  },
  {
    code: 'iceland',
    name: 'Iceland',
    currency: 'ISK',
    currencySymbol: 'kr',
    cities: ['Reykjavik', 'Akureyri', 'Blue Lagoon', 'Golden Circle', 'Vik']
  },
  {
    code: 'ireland',
    name: 'Ireland',
    currency: 'EUR',
    currencySymbol: '€',
    cities: ['Dublin', 'Cork', 'Galway', 'Limerick', 'Killarney', 'Belfast']
  },
  {
    code: 'poland',
    name: 'Poland',
    currency: 'PLN',
    currencySymbol: 'zł',
    cities: ['Warsaw', 'Krakow', 'Gdansk', 'Wroclaw', 'Poznan', 'Zakopane']
  },
  {
    code: 'czech-republic',
    name: 'Czech Republic',
    currency: 'CZK',
    currencySymbol: 'Kč',
    cities: ['Prague', 'Brno', 'Český Krumlov', 'Karlovy Vary', 'Plzeň']
  },
  {
    code: 'hungary',
    name: 'Hungary',
    currency: 'HUF',
    currencySymbol: 'Ft',
    cities: ['Budapest', 'Lake Balaton', 'Debrecen', 'Eger', 'Pécs']
  },
  {
    code: 'croatia',
    name: 'Croatia',
    currency: 'EUR',
    currencySymbol: '€',
    cities: ['Zagreb', 'Dubrovnik', 'Split', 'Pula', 'Hvar', 'Zadar', 'Plitvice Lakes']
  },
  {
    code: 'russia',
    name: 'Russia',
    currency: 'RUB',
    currencySymbol: '₽',
    cities: ['Moscow', 'St. Petersburg', 'Kazan', 'Sochi', 'Vladivostok', 'Lake Baikal']
  },
  {
    code: 'new-zealand',
    name: 'New Zealand',
    currency: 'NZD',
    currencySymbol: 'NZ$',
    cities: ['Auckland', 'Wellington', 'Queenstown', 'Christchurch', 'Rotorua', 'Dunedin', 'Milford Sound']
  },
  {
    code: 'fiji',
    name: 'Fiji',
    currency: 'FJD',
    currencySymbol: 'FJ$',
    cities: ['Suva', 'Nadi', 'Denarau Island', 'Coral Coast', 'Mamanuca Islands']
  },
  {
    code: 'maldives',
    name: 'Maldives',
    currency: 'MVR',
    currencySymbol: 'MVR',
    cities: ['Malé', 'Maafushi', 'Hulhumalé', 'Addu City', 'Various Resort Islands']
  },
  {
    code: 'sri-lanka',
    name: 'Sri Lanka',
    currency: 'LKR',
    currencySymbol: 'Rs',
    cities: ['Colombo', 'Kandy', 'Galle', 'Ella', 'Sigiriya', 'Nuwara Eliya', 'Trincomalee']
  },
  {
    code: 'nepal',
    name: 'Nepal',
    currency: 'NPR',
    currencySymbol: 'Rs',
    cities: ['Kathmandu', 'Pokhara', 'Chitwan', 'Lumbini', 'Everest Base Camp']
  },
  {
    code: 'bhutan',
    name: 'Bhutan',
    currency: 'BTN',
    currencySymbol: 'Nu',
    cities: ['Thimphu', 'Paro', 'Punakha', 'Bumthang', 'Phobjikha Valley']
  },
  {
    code: 'saudi-arabia',
    name: 'Saudi Arabia',
    currency: 'SAR',
    currencySymbol: 'SAR',
    cities: ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Al Khobar', 'Abha']
  },
  {
    code: 'qatar',
    name: 'Qatar',
    currency: 'QAR',
    currencySymbol: 'QAR',
    cities: ['Doha', 'Al Wakrah', 'Al Khor', 'The Pearl', 'Lusail']
  },
  {
    code: 'israel',
    name: 'Israel',
    currency: 'ILS',
    currencySymbol: '₪',
    cities: ['Jerusalem', 'Tel Aviv', 'Haifa', 'Eilat', 'Dead Sea', 'Nazareth']
  },
  {
    code: 'jordan',
    name: 'Jordan',
    currency: 'JOD',
    currencySymbol: 'JOD',
    cities: ['Amman', 'Petra', 'Aqaba', 'Wadi Rum', 'Dead Sea', 'Jerash']
  },
  {
    code: 'oman',
    name: 'Oman',
    currency: 'OMR',
    currencySymbol: 'OMR',
    cities: ['Muscat', 'Salalah', 'Nizwa', 'Sur', 'Sohar']
  },
  {
    code: 'kenya',
    name: 'Kenya',
    currency: 'KES',
    currencySymbol: 'KSh',
    cities: ['Nairobi', 'Mombasa', 'Masai Mara', 'Nakuru', 'Amboseli', 'Diani Beach']
  },
  {
    code: 'tanzania',
    name: 'Tanzania',
    currency: 'TZS',
    currencySymbol: 'TSh',
    cities: ['Dar es Salaam', 'Zanzibar', 'Arusha', 'Serengeti', 'Mount Kilimanjaro', 'Ngorongoro']
  },
  {
    code: 'cambodia',
    name: 'Cambodia',
    currency: 'KHR',
    currencySymbol: '៛',
    cities: ['Phnom Penh', 'Siem Reap', 'Angkor Wat', 'Sihanoukville', 'Battambang']
  },
  {
    code: 'laos',
    name: 'Laos',
    currency: 'LAK',
    currencySymbol: '₭',
    cities: ['Vientiane', 'Luang Prabang', 'Vang Vieng', 'Pakse', 'Plain of Jars']
  },
  {
    code: 'myanmar',
    name: 'Myanmar',
    currency: 'MMK',
    currencySymbol: 'K',
    cities: ['Yangon', 'Mandalay', 'Bagan', 'Inle Lake', 'Ngapali Beach']
  },
  {
    code: 'costa-rica',
    name: 'Costa Rica',
    currency: 'CRC',
    currencySymbol: '₡',
    cities: ['San José', 'Manuel Antonio', 'Monteverde', 'Arenal', 'Tamarindo', 'Puerto Viejo']
  },
  {
    code: 'panama',
    name: 'Panama',
    currency: 'PAB',
    currencySymbol: 'B/.',
    cities: ['Panama City', 'Bocas del Toro', 'Boquete', 'San Blas Islands', 'Colon']
  },
  {
    code: 'ecuador',
    name: 'Ecuador',
    currency: 'USD',
    currencySymbol: '$',
    cities: ['Quito', 'Guayaquil', 'Cuenca', 'Galápagos Islands', 'Baños', 'Otavalo']
  },
  {
    code: 'bolivia',
    name: 'Bolivia',
    currency: 'BOB',
    currencySymbol: 'Bs',
    cities: ['La Paz', 'Sucre', 'Uyuni Salt Flats', 'Potosí', 'Copacabana']
  },
  {
    code: 'uruguay',
    name: 'Uruguay',
    currency: 'UYU',
    currencySymbol: '$U',
    cities: ['Montevideo', 'Punta del Este', 'Colonia del Sacramento', 'Salto']
  },
  {
    code: 'venezuela',
    name: 'Venezuela',
    currency: 'VES',
    currencySymbol: 'Bs.S',
    cities: ['Caracas', 'Maracaibo', 'Valencia', 'Angel Falls', 'Los Roques']
  },
];

export const getCountryByCode = (code: string): CountryWithStates | undefined => {
  return COUNTRIES_DATA.find(c => c.code === code);
};

export const getStatesByCountry = (countryCode: string): State[] => {
  const country = getCountryByCode(countryCode);
  return country?.states || [];
};

export const getCitiesByState = (countryCode: string, stateName: string): string[] => {
  const states = getStatesByCountry(countryCode);
  const state = states.find(s => s.name === stateName);
  return state?.cities || [];
};

export const getCitiesByCountry = (countryCode: string): string[] => {
  const country = getCountryByCode(countryCode);
  return country?.cities || [];
};
