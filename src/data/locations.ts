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
  states?: State[];
  cities?: string[]; // For countries without states
}

export const COUNTRIES_DATA: CountryWithStates[] = [
  // Countries with States/Provinces
  {
    code: 'usa',
    name: 'United States',
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
    states: [
      { name: 'Bavaria', cities: ['Munich', 'Nuremberg', 'Augsburg', 'Regensburg'] },
      { name: 'Berlin', cities: ['Berlin'] },
      { name: 'North Rhine-Westphalia', cities: ['Cologne', 'Düsseldorf', 'Dortmund', 'Essen'] },
      { name: 'Baden-Württemberg', cities: ['Stuttgart', 'Mannheim', 'Karlsruhe', 'Freiburg'] },
      { name: 'Hamburg', cities: ['Hamburg'] },
      { name: 'Hesse', cities: ['Frankfurt', 'Wiesbaden', 'Kassel', 'Darmstadt'] },
    ]
  },
  // Countries without states (cities only)
  {
    code: 'france',
    name: 'France',
    cities: ['Paris', 'Nice', 'Lyon', 'Marseille', 'Bordeaux', 'Cannes', 'Strasbourg', 'Toulouse', 'Nantes', 'Lille']
  },
  {
    code: 'uk',
    name: 'United Kingdom',
    cities: ['London', 'Edinburgh', 'Manchester', 'Liverpool', 'Oxford', 'Cambridge', 'Bath', 'Brighton', 'York', 'Glasgow']
  },
  {
    code: 'japan',
    name: 'Japan',
    cities: ['Tokyo', 'Kyoto', 'Osaka', 'Hiroshima', 'Nara', 'Yokohama', 'Sapporo', 'Fukuoka', 'Nagoya', 'Okinawa']
  },
  {
    code: 'italy',
    name: 'Italy',
    cities: ['Rome', 'Venice', 'Florence', 'Milan', 'Naples', 'Amalfi Coast', 'Tuscany', 'Sicily', 'Verona', 'Pisa']
  },
  {
    code: 'spain',
    name: 'Spain',
    cities: ['Madrid', 'Barcelona', 'Seville', 'Valencia', 'Bilbao', 'Granada', 'Malaga', 'Ibiza', 'Toledo', 'Córdoba']
  },
  {
    code: 'thailand',
    name: 'Thailand',
    cities: ['Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya', 'Krabi', 'Koh Samui', 'Ayutthaya', 'Hua Hin', 'Chiang Rai']
  },
  {
    code: 'uae',
    name: 'United Arab Emirates',
    cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Al Ain']
  },
  {
    code: 'singapore',
    name: 'Singapore',
    cities: ['Singapore City', 'Sentosa', 'Marina Bay', 'Orchard Road', 'Chinatown']
  },
  {
    code: 'malaysia',
    name: 'Malaysia',
    cities: ['Kuala Lumpur', 'Penang', 'Langkawi', 'Malacca', 'Johor Bahru', 'Kota Kinabalu', 'Cameron Highlands']
  },
  {
    code: 'indonesia',
    name: 'Indonesia',
    cities: ['Jakarta', 'Bali', 'Yogyakarta', 'Bandung', 'Surabaya', 'Lombok', 'Ubud', 'Gili Islands']
  },
  {
    code: 'vietnam',
    name: 'Vietnam',
    cities: ['Hanoi', 'Ho Chi Minh City', 'Da Nang', 'Hoi An', 'Nha Trang', 'Hue', 'Ha Long Bay', 'Sapa']
  },
  {
    code: 'south-korea',
    name: 'South Korea',
    cities: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Jeju Island']
  },
  {
    code: 'philippines',
    name: 'Philippines',
    cities: ['Manila', 'Cebu', 'Davao', 'Boracay', 'Palawan', 'Baguio', 'Siargao']
  },
  {
    code: 'turkey',
    name: 'Turkey',
    cities: ['Istanbul', 'Ankara', 'Antalya', 'Izmir', 'Cappadocia', 'Bodrum', 'Pamukkale', 'Ephesus']
  },
  {
    code: 'egypt',
    name: 'Egypt',
    cities: ['Cairo', 'Alexandria', 'Luxor', 'Aswan', 'Hurghada', 'Sharm El Sheikh', 'Giza']
  },
  {
    code: 'south-africa',
    name: 'South Africa',
    cities: ['Cape Town', 'Johannesburg', 'Durban', 'Pretoria', 'Port Elizabeth', 'Stellenbosch', 'Kruger National Park']
  },
  {
    code: 'morocco',
    name: 'Morocco',
    cities: ['Marrakech', 'Casablanca', 'Fez', 'Rabat', 'Tangier', 'Chefchaouen', 'Essaouira']
  },
  {
    code: 'argentina',
    name: 'Argentina',
    cities: ['Buenos Aires', 'Mendoza', 'Córdoba', 'Bariloche', 'Iguazu Falls', 'Salta', 'Ushuaia']
  },
  {
    code: 'chile',
    name: 'Chile',
    cities: ['Santiago', 'Valparaíso', 'Viña del Mar', 'Atacama Desert', 'Patagonia', 'Easter Island']
  },
  {
    code: 'peru',
    name: 'Peru',
    cities: ['Lima', 'Cusco', 'Machu Picchu', 'Arequipa', 'Puno', 'Iquitos', 'Nazca']
  },
  {
    code: 'colombia',
    name: 'Colombia',
    cities: ['Bogotá', 'Medellín', 'Cartagena', 'Cali', 'Santa Marta', 'Barranquilla', 'San Andrés']
  },
  {
    code: 'portugal',
    name: 'Portugal',
    cities: ['Lisbon', 'Porto', 'Algarve', 'Sintra', 'Faro', 'Coimbra', 'Madeira', 'Azores']
  },
  {
    code: 'greece',
    name: 'Greece',
    cities: ['Athens', 'Santorini', 'Mykonos', 'Crete', 'Rhodes', 'Thessaloniki', 'Corfu', 'Delphi']
  },
  {
    code: 'switzerland',
    name: 'Switzerland',
    cities: ['Zurich', 'Geneva', 'Lucerne', 'Bern', 'Interlaken', 'Zermatt', 'St. Moritz', 'Lausanne']
  },
  {
    code: 'austria',
    name: 'Austria',
    cities: ['Vienna', 'Salzburg', 'Innsbruck', 'Graz', 'Hallstatt', 'Linz']
  },
  {
    code: 'netherlands',
    name: 'Netherlands',
    cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Delft', 'Haarlem', 'Maastricht']
  },
  {
    code: 'belgium',
    name: 'Belgium',
    cities: ['Brussels', 'Bruges', 'Antwerp', 'Ghent', 'Leuven', 'Liège']
  },
  {
    code: 'denmark',
    name: 'Denmark',
    cities: ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg', 'Roskilde']
  },
  {
    code: 'sweden',
    name: 'Sweden',
    cities: ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Kiruna']
  },
  {
    code: 'norway',
    name: 'Norway',
    cities: ['Oslo', 'Bergen', 'Tromsø', 'Stavanger', 'Trondheim', 'Lofoten Islands']
  },
  {
    code: 'finland',
    name: 'Finland',
    cities: ['Helsinki', 'Tampere', 'Turku', 'Rovaniemi', 'Lapland']
  },
  {
    code: 'iceland',
    name: 'Iceland',
    cities: ['Reykjavik', 'Akureyri', 'Blue Lagoon', 'Golden Circle', 'Vik']
  },
  {
    code: 'ireland',
    name: 'Ireland',
    cities: ['Dublin', 'Cork', 'Galway', 'Limerick', 'Killarney', 'Belfast']
  },
  {
    code: 'poland',
    name: 'Poland',
    cities: ['Warsaw', 'Krakow', 'Gdansk', 'Wroclaw', 'Poznan', 'Zakopane']
  },
  {
    code: 'czech-republic',
    name: 'Czech Republic',
    cities: ['Prague', 'Brno', 'Český Krumlov', 'Karlovy Vary', 'Plzeň']
  },
  {
    code: 'hungary',
    name: 'Hungary',
    cities: ['Budapest', 'Lake Balaton', 'Debrecen', 'Eger', 'Pécs']
  },
  {
    code: 'croatia',
    name: 'Croatia',
    cities: ['Zagreb', 'Dubrovnik', 'Split', 'Pula', 'Hvar', 'Zadar', 'Plitvice Lakes']
  },
  {
    code: 'russia',
    name: 'Russia',
    cities: ['Moscow', 'St. Petersburg', 'Kazan', 'Sochi', 'Vladivostok', 'Lake Baikal']
  },
  {
    code: 'new-zealand',
    name: 'New Zealand',
    cities: ['Auckland', 'Wellington', 'Queenstown', 'Christchurch', 'Rotorua', 'Dunedin', 'Milford Sound']
  },
  {
    code: 'fiji',
    name: 'Fiji',
    cities: ['Suva', 'Nadi', 'Denarau Island', 'Coral Coast', 'Mamanuca Islands']
  },
  {
    code: 'maldives',
    name: 'Maldives',
    cities: ['Malé', 'Maafushi', 'Hulhumalé', 'Addu City', 'Various Resort Islands']
  },
  {
    code: 'sri-lanka',
    name: 'Sri Lanka',
    cities: ['Colombo', 'Kandy', 'Galle', 'Ella', 'Sigiriya', 'Nuwara Eliya', 'Trincomalee']
  },
  {
    code: 'nepal',
    name: 'Nepal',
    cities: ['Kathmandu', 'Pokhara', 'Chitwan', 'Lumbini', 'Everest Base Camp']
  },
  {
    code: 'bhutan',
    name: 'Bhutan',
    cities: ['Thimphu', 'Paro', 'Punakha', 'Bumthang', 'Phobjikha Valley']
  },
  {
    code: 'saudi-arabia',
    name: 'Saudi Arabia',
    cities: ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Al Khobar', 'Abha']
  },
  {
    code: 'qatar',
    name: 'Qatar',
    cities: ['Doha', 'Al Wakrah', 'Al Khor', 'The Pearl', 'Lusail']
  },
  {
    code: 'israel',
    name: 'Israel',
    cities: ['Jerusalem', 'Tel Aviv', 'Haifa', 'Eilat', 'Dead Sea', 'Nazareth']
  },
  {
    code: 'jordan',
    name: 'Jordan',
    cities: ['Amman', 'Petra', 'Aqaba', 'Wadi Rum', 'Dead Sea', 'Jerash']
  },
  {
    code: 'oman',
    name: 'Oman',
    cities: ['Muscat', 'Salalah', 'Nizwa', 'Sur', 'Sohar']
  },
  {
    code: 'kenya',
    name: 'Kenya',
    cities: ['Nairobi', 'Mombasa', 'Masai Mara', 'Nakuru', 'Amboseli', 'Diani Beach']
  },
  {
    code: 'tanzania',
    name: 'Tanzania',
    cities: ['Dar es Salaam', 'Zanzibar', 'Arusha', 'Serengeti', 'Mount Kilimanjaro', 'Ngorongoro']
  },
  {
    code: 'cambodia',
    name: 'Cambodia',
    cities: ['Phnom Penh', 'Siem Reap', 'Angkor Wat', 'Sihanoukville', 'Battambang']
  },
  {
    code: 'laos',
    name: 'Laos',
    cities: ['Vientiane', 'Luang Prabang', 'Vang Vieng', 'Pakse', 'Plain of Jars']
  },
  {
    code: 'myanmar',
    name: 'Myanmar',
    cities: ['Yangon', 'Mandalay', 'Bagan', 'Inle Lake', 'Ngapali Beach']
  },
  {
    code: 'costa-rica',
    name: 'Costa Rica',
    cities: ['San José', 'Manuel Antonio', 'Monteverde', 'Arenal', 'Tamarindo', 'Puerto Viejo']
  },
  {
    code: 'panama',
    name: 'Panama',
    cities: ['Panama City', 'Bocas del Toro', 'Boquete', 'San Blas Islands', 'Colon']
  },
  {
    code: 'ecuador',
    name: 'Ecuador',
    cities: ['Quito', 'Guayaquil', 'Cuenca', 'Galápagos Islands', 'Baños', 'Otavalo']
  },
  {
    code: 'bolivia',
    name: 'Bolivia',
    cities: ['La Paz', 'Sucre', 'Uyuni Salt Flats', 'Potosí', 'Copacabana']
  },
  {
    code: 'uruguay',
    name: 'Uruguay',
    cities: ['Montevideo', 'Punta del Este', 'Colonia del Sacramento', 'Salto']
  },
  {
    code: 'venezuela',
    name: 'Venezuela',
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
