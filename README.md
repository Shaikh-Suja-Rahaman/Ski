# Ski Weather App ⛷️🌤️

A modern, responsive weather application built with React and TypeScript. Get real-time weather data, hourly forecasts, and 5-day predictions for any location worldwide.

**🔗 Live Demo: [ski-rose.vercel.app](https://ski-rose.vercel.app/)**

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-teal?logo=tailwindcss)

## Features 🌟

### Weather Information
- **Current Weather**: Real-time temperature, feels-like, humidity, wind speed, and atmospheric pressure
- **Hourly Forecast**: 24-hour temperature chart with interactive visualization using Recharts
- **5-Day Forecast**: Extended weather predictions with min/max temperatures
- **Weather Details**: Comprehensive data including sunrise/sunset times, visibility, and wind direction

### Location Features
- **Auto Geolocation**: Automatically detects your location on page load
- **City Search**: Search for any city worldwide with autocomplete suggestions
- **Favorite Cities**: Save your favorite locations for quick access
- **Search History**: Recently searched cities are saved for convenience

### User Experience
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Loading Skeletons**: Smooth loading states for better UX
- **Error Handling**: Graceful error messages with retry options
- **Toast Notifications**: Feedback for user actions (adding/removing favorites)

## Tech Stack 💻

| Category | Technology |
|----------|------------|
| **Framework** | React 19 |
| **Language** | TypeScript |
| **Build Tool** | Vite |
| **Routing** | React Router DOM v7 |
| **State Management** | TanStack Query (React Query) |
| **Styling** | Tailwind CSS 4 |
| **UI Components** | shadcn/ui + Radix UI |
| **Charts** | Recharts |
| **Icons** | Lucide React |
| **Animations** | Motion (Framer Motion) |
| **Notifications** | Sonner |
| **Theme** | next-themes |
| **Date Utilities** | date-fns |

## Getting Started 🚀

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm
- OpenWeather API key (free tier works!)

### Getting Your OpenWeather API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Click **"Sign Up"** and create a free account
3. After signing in, go to **"My API Keys"** in your profile
4. Copy your default API key or generate a new one
5. The free tier includes:
   - 1,000 API calls/day
   - Current weather data
   - 5-day/3-hour forecast
   - Geocoding API

> ⚠️ **Note**: New API keys may take a few minutes to activate.

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Shaikh-Suja-Rahaman/Ski.git
cd Ski
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create environment file:**
```bash
# Create a .env file in the root directory
touch .env
```

4. **Add your API key to `.env`:**
```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

5. **Start the development server:**
```bash
npm run dev
```

6. **Open your browser:**
   Navigate to `http://localhost:5173`

## Project Structure 📁

```
src/
├── api/                        # API Layer
│   ├── config.ts              # API endpoints & configuration
│   ├── type.ts                # TypeScript interfaces for API responses
│   └── weather.ts             # WeatherAPI class with all API methods
│
├── components/                 # React Components
│   ├── ui/                    # Reusable UI components (shadcn/ui)
│   │   ├── alert.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── command.tsx        # Command palette for search
│   │   ├── dialog.tsx
│   │   ├── scroll-area.tsx
│   │   ├── skeleton.tsx
│   │   ├── sonner.tsx         # Toast notifications
│   │   └── tooltip.tsx
│   │
│   ├── city-search.tsx        # City search with autocomplete
│   ├── current-weather.tsx    # Current weather display card
│   ├── favourite-button.tsx   # Add/remove favorite button
│   ├── favourite-cities.tsx   # Favorite cities list with weather
│   ├── header.tsx             # App header with search & theme toggle
│   ├── hourly-temperature.tsx # Hourly forecast chart (Recharts)
│   ├── layout.tsx             # Main layout wrapper
│   ├── loading-skeleton.tsx   # Loading state skeleton
│   ├── weather-details.tsx    # Detailed weather info grid
│   └── weather-forecast.tsx   # 5-day forecast cards
│
├── context/                    # React Context
│   └── theme-provider.tsx     # Theme context (dark/light mode)
│
├── hooks/                      # Custom React Hooks
│   ├── use-favourites.ts      # Manage favorite cities (localStorage)
│   ├── use-geolocation.ts     # Browser geolocation with fallback
│   ├── use-local-storage.ts   # Generic localStorage hook
│   ├── use-search-history.ts  # Search history management
│   └── use-weather.ts         # Weather API queries (React Query)
│
├── lib/                        # Utilities
│   └── utils.ts               # Helper functions (cn, etc.)
│
├── pages/                      # Page Components
│   ├── city-page.tsx          # Individual city weather page
│   └── weather-dashboard.tsx  # Main dashboard page
│
├── App.tsx                     # App routes & providers
├── main.tsx                    # Entry point
└── index.css                   # Global styles & Tailwind
```

## API Architecture 🏗️

The app uses a clean, scalable API architecture:

```typescript
// Centralized API configuration
API_CONFIG = {
  BASE_URL: "https://api.openweathermap.org/data/2.5",
  GEO: "https://api.openweathermap.org/geo/1.0",
  API_KEY: import.meta.env.VITE_OPENWEATHER_API_KEY
}

// WeatherAPI class methods:
- getCurrentWeather(coords)    // Get current weather
- getForecast(coords)          // Get 5-day forecast
- reverseGeocode(coords)       // Convert coords to city name
- searchLocations(query)       // Search cities by name
```

## Available Scripts 📜

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Environment Variables 🔐

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_OPENWEATHER_API_KEY` | Your OpenWeather API key | ✅ Yes |

## Deployment 🚀

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Add environment variable:
   - Name: `VITE_OPENWEATHER_API_KEY`
   - Value: Your API key
4. Deploy!

### Other Platforms

The app builds to static files, so it works on any static hosting:
- Netlify
- GitHub Pages
- Cloudflare Pages

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- RoadSideCoder - Inspired by his work 
- [OpenWeather API](https://openweathermap.org/) - Weather data provider
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [TanStack Query](https://tanstack.com/query) - Powerful data fetching
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling
- [Recharts](https://recharts.org/) - Chart library
- [Vite](https://vitejs.dev/) - Lightning fast build tool

---

Built with ❄️ by [Shaikh Suja Rahaman](https://github.com/Shaikh-Suja-Rahaman)
