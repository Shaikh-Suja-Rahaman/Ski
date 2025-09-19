import { useEffect, useState } from "react";
import type { Coordinates } from "@/api/type";

interface GeolocationState{
  coordinates : Coordinates | null;
  error: string | null;
  isLoading: boolean;

}


export function useGeolocation() {
  const [locationData, setLocationData] = useState<GeolocationState>({
    coordinates:null,
    error:null,
    isLoading:true,
  });



  const getLocation= () => {
    setLocationData((prev) => ({...prev, isLoading: true, error: null}));
    if(!navigator.geolocation){ //geolocation api is useful for
      setLocationData({
        coordinates: null,
        error : "GeoLocation is not supported by browser",
        isLoading: false,
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
      })
      // return;
    }, (error)=> {
        let errorMessage: string;

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage =
              "Location permission denied. Please enable location access.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out.";
            break;
          default:
            errorMessage = "An unknown error occurred.";
        }
        setLocationData({
          coordinates: null,
          error: errorMessage,
          isLoading: false,
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