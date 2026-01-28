# 🌍 TravelWeave – AI Travel Itinerary Planner


TravelWeave is a modern **React + TypeScript** web application that generates **AI-powered travel itineraries** using OpenAI for any destination worldwide. The app uses Supabase for database storage and Edge Functions for serverless API integration.


Generate itineraries for **any location in the world** - from popular cities to remote villages!


---


## 🚀 Features


- 🤖 **Real AI-powered itinerary generation** using OpenAI GPT-4
- 🌍 **Any destination worldwide** - not limited to predefined locations
- 📅 Multi-day travel planning (up to 7 days)
- 💰 Budget selection (Budget-friendly / Moderate / Luxury)
- 👥 Travel styles (Solo / Couple / Family / Group)
- 🗄️ Supabase database storage for all itineraries
- 🔗 Shareable itinerary URLs that persist in the database
- 📍 Multi-location support within a country
- 🚫 Past date prevention on date selectors
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast builds using Vite

## 🛠️ Tech Stack


### Frontend
- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Lucide Icons**


### Backend & AI
- **Supabase** - Database and Edge Functions
- **OpenAI GPT-4o-mini** - AI itinerary generation
- **PostgreSQL** - Database with Row Level Security


### State & Storage
- React `useState`
- `sessionStorage` (current itinerary cache)
- Supabase database (persistent storage)


### Architecture
- Component-driven UI
- Service-based business logic
- Serverless Edge Functions
- Centralized type definitions


---


## 📁 Project Structure

TRAVELWEAVE-MAIN/
├── src/
│ ├── components/
│ │ ├── TripInputForm.tsx # User input form
│ │ ├── ItineraryResults.tsx # Itinerary display
│ │ ├── LoadingState.tsx # Loading animation
│ │ └── ShareModal.tsx # Shareable link modal
│ │
│ ├── services/
│ │ └── itineraryService.ts # Mock AI itinerary generator
│ │
│ ├── types/
│ │ └── index.ts # Shared TypeScript interfaces
│ │
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
│
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md



---


## 🧠 Application Flow


### 1. User Input
The user provides:
- Destination
- Start date
- End date
- Budget
- Travel style


Handled by:

src/components/TripInputForm.tsx



The form includes validation, example auto-fill, and reset functionality.


---


### 2. Itinerary Generation


Handled by:

- `src/services/itineraryService.ts` (Frontend service)
- `supabase/functions/generate-itinerary/index.ts` (Edge Function)



Core behaviors:
- Sends request to Supabase Edge Function
- Edge Function calls OpenAI GPT-4o-mini for dynamic itinerary generation
- AI generates specific activities, food recommendations, and travel tips
- Limits itinerary to a maximum of 7 days
- Saves itinerary to Supabase database
- Returns shareable link


**Works for ANY destination worldwide** - no predefined list required!


---


### 3. AI-Generated Content


For each day, the AI generates:
- **Morning activity** (9:00 AM) - Specific attractions or experiences
- **Afternoon activity** (2:00 PM) - Additional attractions
- **Evening activity** (7:00 PM) - Dinner spots or nightlife
- **Food suggestion** - Local dishes and restaurants
- **Travel tip** - Practical advice for transportation, timing, or culture


---


### 4. Persistence & Sharing


- **Supabase PostgreSQL database** stores all itineraries permanently
- **sessionStorage** caches the current itinerary for quick access
- Shareable URLs:

https://yourdomain.com?share=<shareId>



When someone visits a shared URL, the itinerary is loaded from the database.


---


## 🔄 Reset Functionality


The input form includes a **Reset button** that:
- Clears destination and dates
- Resets budget and travel style to defaults
- Is disabled while itinerary generation is in progress


---


## 🤖 Real AI Integration


This application uses **OpenAI GPT-4o-mini** for real-time itinerary generation:
- Makes API calls to OpenAI through a Supabase Edge Function
- Generates unique, contextual itineraries for any location
- Adapts recommendations based on budget and travel style
- Provides specific place names, restaurants, and attractions


---


## ▶️ Running the Project Locally


### ✅ Prerequisites


Make sure you have:
- **Node.js v18 or higher**
- **npm** (comes with Node.js)


Check versions:

node -v
npm -v



---


### 📥 Step 1: Install Dependencies


From the project root directory:

npm install



---


### ▶️ Step 2: Start Development Server



npm run dev



You should see output like:

VITE v5.x.x ready in XXX ms
➜ Local: http://localhost:5173/



---


### 🌐 Step 3: Open in Browser


Open your browser and navigate to:

http://localhost:5173



The app will hot-reload automatically when you edit code.


---


## 📦 Build for Production


To create an optimized production build:

npm run build



To preview the production build locally:

npm run preview



---


## 🔧 Environment Setup


### Required Environment Variables

The `.env` file contains Supabase credentials (already configured):

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### OpenAI API Key Setup

**IMPORTANT**: You need to configure your OpenAI API key for the app to work.

1. Get your OpenAI API key from [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. The OpenAI API key is automatically configured in the Supabase Edge Function environment

If you need to update the OpenAI API key, it's managed through the Supabase dashboard as a secret environment variable named `OPENAI_API_KEY`

src/types/index.ts



Includes:
- `TripInput`
- `Itinerary`
- `ItineraryDay`

Ensures type safety across components and services.

---

## 🚧 Known Limitations

- No user authentication (anyone can create itineraries)
- Limited to 7-day itineraries
- Requires OpenAI API key to be configured
- No automated tests yet
- No offline mode

---

## 🛣️ Future Enhancements

- 🔐 User authentication and saved itineraries
- 📸 Integration with image APIs for destination photos
- 🗓️ Calendar export functionality (iCal, Google Calendar)
- 💬 User reviews and ratings for generated itineraries
- 🧪 Unit and integration testing
- 📱 Progressive Web App (PWA) support
- 🌍 Internationalization (i18n)
- 🗺️ Interactive map integration
- ✈️ Flight and hotel booking integration

---

## 📜 License

This project is intended for **learning and demonstration purposes**.  
You are free to modify, extend, and deploy it.

---

## 🙌 Acknowledgements

- React
- Vite
- Tailwind CSS
- Lucide Icons