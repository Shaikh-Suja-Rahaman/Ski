import { useEffect, useState } from "react";
import type { Coordinates } from "@/api/type";

// Default fallback location (New York City)
const DEFAULT_LOCATION: Coordinates = {
  lat: 40.7128,
  lon: -74.0060,
};

interface GeolocationState{
  coordinates : Coordinates | null;
  error: string | null;
  isLoading: boolean;
  isUsingDefault: boolean; // Track if we're using fallback location
}


export function useGeolocation() {
  const [locationData, setLocationData] = useState<GeolocationState>({
    coordinates:null,
    error:null,
    isLoading:true,
    isUsingDefault: false,
  });



  const getLocation= () => {
    setLocationData((prev) => ({...prev, isLoading: true, error: null, isUsingDefault: false}));
    if(!navigator.geolocation){ //geolocation api is useful for
      // Fallback to default location
      setLocationData({
        coordinates: DEFAULT_LOCATION,
        error : "GeoLocation is not supported by browser. Using default location (New York).",
        isLoading: false,
        isUsingDefault: true,
      });
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      setLocationData({
        coordinates: {
          lat:position.coords.latitude,
          lon:position.coords.longitude,
        },
        error : null,
        isLoading: false,
        isUsingDefault: false,
      })
      // return;
    }, (error)=> {
        let errorMessage: string;

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage =
              "Location permission denied. Using default location (New York).";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location unavailable. Using default location (New York).";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out. Using default location (New York).";
            break;
          default:
            errorMessage = "Could not get location. Using default location (New York).";
        }
        // Fallback to default location on any error
        setLocationData({
          coordinates: DEFAULT_LOCATION,
          error: errorMessage,
          isLoading: false,
          isUsingDefault: true,
        });

    }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      })
  }

  useEffect(()=>{
    getLocation(); //get location is called on startup when i use something which requres this hook
  },[]);

  return {
    ...locationData, //i am returning my location data and my get location function, so that i can manually call this and refresh my location
    getLocation
  }
}