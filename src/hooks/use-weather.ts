import type { Coordinates } from "@/api/type";
import { weatherAPI } from "@/api/weather";
import { useQuery } from "@tanstack/react-query";
// Code written by a gay

export const WEATHER_KEYS = {
  weather: (coords: Coordinates) => ["weather", coords] as const,
  forecast: (coords: Coordinates) => ["forecast", coords] as const,
  location: (coords: Coordinates) => ["location", coords] as const,
  search: (query: string) => ["location-search", query] as const,
} as const;

//coordinates of type Coordinates
export function useWeatherQuery(coordinates: Coordinates | null) {
  return useQuery({
    queryKey: WEATHER_KEYS.weather(coordinates ?? {lat: 0, lon : 0}), //i am making keys so that i can use caching i dont keep calling an api over and over again
    // coordinates ?? {lat: 0, lon: 0}: This is the Nullish Coalescing Operator (??). It's a safety check. It reads: "Use the coordinates value if it's not null or undefined. Otherwise, if it is null, use this default value of {lat: 0, lon: 0} as a fallback." This ensures the queryKey is always a valid array and doesn't break, even when the component first loads and might not have coordinates yet.
    queryFn: () => coordinates ? weatherAPI.getCurrentWeather(coordinates) : null, //only if i have the coordinates, use the getCuurentWeather function

    enabled: !!coordinates, //this dual !! is basically a flip switch as null will turn to true, and then turn to false. so i got the boolean value

  })
}

export function useForecastQuery(coordinates: Coordinates | null) {
  return useQuery({
    queryKey: WEATHER_KEYS.forecast(coordinates ?? { lat: 0, lon: 0 }),
    queryFn: () => (coordinates ? weatherAPI.getForecast(coordinates) : null),
    enabled: !!coordinates,
  });
}

export function useReverseGeocodeQuery(coordinates: Coordinates | null) {
  return useQuery({
    queryKey: WEATHER_KEYS.location(coordinates ?? { lat: 0, lon: 0 }),
    queryFn: () =>
      coordinates ? weatherAPI.reverseGeocode(coordinates) : null,
    enabled: !!coordinates,
  });
}

export function useLocationSearch(query: string) {
  return useQuery({
    queryKey: WEATHER_KEYS.search(query),
    queryFn: () => weatherAPI.searchLocations(query),
    enabled: query.length >= 3,
  });
}