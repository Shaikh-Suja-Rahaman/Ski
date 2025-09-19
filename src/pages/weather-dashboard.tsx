import WeatherSkeleton from '@/components/loading-skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { useGeolocation } from '@/hooks/use-geolocation';
import { AlertTriangle, MapPin, RefreshCw } from 'lucide-react';
import React from 'react'

const WeatherDashboard = () => {
  const {coordinates, error:locationError, getLocation, isLoading:locationLoading} = useGeolocation();
  //isLoadin:locationLoading is basically nothing but renaming my variable. so that I can avoid naming conflicts
  //if i ever use isLoading , it wont refer to this particualar variale
  //loggin my cooordinates to ensure that i can make it work correctly
  console.log(coordinates);

  const handleRefresh=()=>{
    getLocation();
    if(coordinates){
      //reload weather data
    }
  };
  if(locationLoading) {
    //when my is loading is true, i want to be showing the skeleton, and not just a
    //blank screen, as it can be a little annoying or boring to the suer
    return <WeatherSkeleton/>
  }
  if(locationError){
    return (
    <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{locationError}</p>
          <Button variant="outline" onClick={getLocation} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    )
  }
  if (!coordinates) {
    return (
      <Alert>
        <MapPin className="h-4 w-4" />
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Please enable location access to see your local weather.</p>
          <Button variant="outline" onClick={getLocation} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="space-y-4">
      {/* <FavoriteCities /> */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant="outline"
          size="icon"
          onClick={handleRefresh}
          // disabled={weatherQuery.isFetching || forecastQuery.isFetching}
        >
          <RefreshCw
            // className={`h-4 w-4 ${
            //   weatherQuery.isFetching ? "animate-spin" : ""
            // }`}
            className={`h-4 w-4`}
          />
        </Button>
      </div>

      <div className="grid gap-6">
        {/* <div className="flex flex-col lg:flex-row gap-4">
          <CurrentWeather
            data={weatherQuery.data}
            locationName={locationName}
          />
          <HourlyTemperature data={forecastQuery.data} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          <WeatherDetails data={weatherQuery.data} />
          <WeatherForecast data={forecastQuery.data} />
        </div> */}
      </div>
    </div>
  );

}

export default WeatherDashboard