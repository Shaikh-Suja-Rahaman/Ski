# Ski Weather App ⛷️

A modern weather application built with React and TypeScript, designed to provide real-time weather information with a focus on ski conditions.

## Features 🌟

- **Real-time Weather Data**: Integration with OpenWeather API
- **Geolocation Support**: Automatic location detection
- **Dark/Light Mode**: Theme switching with next-themes
- **Responsive Design**: Built with Tailwind CSS
- **Modern UI Components**: Using shadcn/ui components
- **Type Safety**: Built with TypeScript
- **State Management**: React Query for efficient data fetching and caching

## Tech Stack 💻

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS
- **UI Components**:
  - Radix UI primitives
  - Lucide React icons
  - Sonner for toasts
- **State Management**: TanStack Query (React Query)
- **Build Tool**: Vite
- **Theme Management**: next-themes

## Getting Started 🚀

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Shaikh-Suja-Rahaman/Ski.git
cd Ski
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your OpenWeather API key:
```env
VITE_OPEN_WEATHER_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure 📁

```
src/
├── api/                  # API integration
│   ├── config.ts        # API configuration
│   ├── type.ts         # TypeScript interfaces
│   └── weather.ts      # Weather API functions
├── components/          # Reusable components
│   ├── ui/             # UI components (shadcn/ui)
│   ├── header.tsx      # App header
│   └── layout.tsx      # Layout component
├── context/            # React contexts
│   └── theme-provider.tsx  # Theme context
├── hooks/              # Custom React hooks
│   ├── use-geolocation.ts  # Geolocation hook
│   └── use-weather.ts      # Weather data hook
├── pages/              # Application pages
└── lib/               # Utility functions
```

## Available Scripts 📜

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- OpenWeather API for weather data
- shadcn/ui for beautiful UI components
- TanStack Query for robust data fetching
- Tailwind CSS for styling
- Vite for blazing fast development

---

Built with ❄️ by [Shaikh Suja Rahaman](https://github.com/Shaikh-Suja-Rahaman)
