# 🌍 TravelWeave – AI Travel Itinerary Planner


TravelWeave is a modern **React + TypeScript** web application that generates **AI-style travel itineraries** based on user input such as destination, dates, budget, and travel style.
The application is frontend-only and simulates AI behavior using a structured mock service.


Currently supported destinations:
- **Goa**
- **Paris**
- **Tokyo**


---


## 🚀 Features


- 🗺️ Destination-based itinerary generation
- 📅 Multi-day travel planning (up to 7 days)
- 💰 Budget selection (Low / Medium / Luxury)
- 👥 Travel styles (Solo / Couple / Family / Group)
- 🤖 AI-like randomized itinerary generation
- 🔄 Reset form functionality
- 💾 Session & local storage persistence
- 🔗 Shareable itinerary URLs
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast builds using Vite

## 🛠️ Tech Stack


### Frontend
- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Lucide Icons**


### State & Storage
- React `useState`
- `sessionStorage` (current itinerary)
- `localStorage` (shared itineraries)


### Architecture
- Component-driven UI
- Service-based business logic
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

src/services/itineraryService.ts



Core behaviors:
- Normalizes destination input
- Validates supported destinations
- Calculates trip duration
- Randomizes daily activities
- Limits itinerary to a maximum of 7 days
- Simulates AI processing delay


Unsupported destinations throw an explicit error instead of silently falling back.


---


### 3. Supported Destinations


Each destination contains:
- Morning / Afternoon / Evening activities
- Food suggestions
- Travel tips


Currently supported:
- Goa
- Paris
- Tokyo


---


### 4. Persistence & Sharing


- **sessionStorage** stores the latest itinerary
- **localStorage** stores itineraries with a generated `shareId`
- Shareable URLs:

https://yourdomain.com?share=
<shareId>



---


## 🔄 Reset Functionality


The input form includes a **Reset button** that:
- Clears destination and dates
- Resets budget and travel style to defaults
- Is disabled while itinerary generation is in progress


---


## 🧪 Mock AI Behavior


This project does **not** use a real AI backend yet.  
AI behavior is simulated by:
- Introducing artificial delays
- Randomizing itinerary suggestions
- Rotating activities across days


This allows easy future integration with real AI APIs.


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


## 🔧 Environment Variables


No environment variables are required for the current setup.


If integrating AI APIs later, use Vite-prefixed variable

src/types/index.ts



Includes:
- `TripInput`
- `Itinerary`
- `ItineraryDay`

Ensures type safety across components and services.

---

## 🚧 Known Limitations

- Frontend-only (no backend)
- Limited destinations
- Mock AI logic
- No authentication
- No automated tests yet

---

## 🛣️ Future Enhancements

- 🌐 Real AI API integration
- 🗺️ Additional destinations
- 💸 Budget-aware recommendations
- 🧳 Travel-style-based suggestions
- 🧪 Unit and integration testing
- 📱 Mobile optimizations
- 🌍 Internationalization (i18n)

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