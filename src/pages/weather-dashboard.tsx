import WeatherSkeleton from '@/components/loading-skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { useGeolocation } from '@/hooks/use-geolocation';
import { useForecastQuery, useReverseGeocodeQuery, useWeatherQuery } from '@/hooks/use-weather';
import { AlertTriangle, Info, MapPin, RefreshCw } from 'lucide-react';
import { CurrentWeather } from '@/components/current-weather';
import React from 'react'

const WeatherDashboard = () => {
  const {coordinates, error:locationError, getLocation, isLoading:locationLoading, isUsingDefault} = useGeolocation();
  //isLoadin:locationLoading is basically nothing but renaming my variable. so that I can avoid naming conflicts
  //if i ever use isLoading , it wont refer to this particualar variale
  //loggin my cooordinates to ensure that i can make it work correctly
  console.log(coordinates);

  const locationQuery =  useReverseGeocodeQuery(coordinates);
  const weatherQuery = useWeatherQuery(coordinates)
  const forecastQuery = useForecastQuery(coordinates)

  console.log(locationQuery);


  const handleRefresh=()=>{
    getLocation();
    if(coordinates){
      //reload weather data
      weatherQuery.refetch()
      locationQuery.refetch()
      forecastQuery.refetch()
    }
  };
  if(locationLoading) {
    //when my is loading is true, i want to be showing the skeleton, and not just a
    //blank screen, as it can be a little annoying or boring to the suer
    return <WeatherSkeleton/>
  }

  // Only show error if we don't have coordinates at all (no fallback worked)
  if(locationError && !coordinates){
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
          <Button variant="outline" onClick={getLocation} className="w-fit"> <MapPin className="mr-2 h-4 w-4" /> Enable Location </Button> </AlertDescription> </Alert>); } const locationName = locationQuery.data?.[0];
  if(weatherQuery.error || forecastQuery.error){
    return(
         <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle> Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Failed to fetch weather data. Please try again</p>
          <Button variant="outline" onClick={getLocation} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            retry
          </Button>
        </AlertDescription>
      </Alert>
    )
  }

  if(!weatherQuery.data || !forecastQuery.data){
    return <WeatherSkeleton/>
  }

  return (
    <div className="space-y-4">
      {/* Show info banner when using default location */}
      {isUsingDefault && (
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Using Default Location</AlertTitle>
          <AlertDescription className="flex flex-col gap-4">
            <p>{locationError || "Showing weather for New York. Enable location for your local weather."}</p>
            <Button variant="outline" onClick={getLocation} className="w-fit">
              <MapPin className="mr-2 h-4 w-4" />
              Try Location Again
            </Button>
          </AlertDescription>
        </Alert>
      )}
      {/* <FavoriteCities /> */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant="outline"
          size="icon"
          onClick={handleRefresh}
          disabled={weatherQuery.isFetching || forecastQuery.isFetching}
        >
          <RefreshCw
            className={`h-4 w-4 ${
              weatherQuery.isFetching ? "animate-spin duration-75" : ""
            }`}
            // className={`h-4 w-4`}
          />
        </Button>
      </div>

      <div className="grid gap-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <CurrentWeather
            data={weatherQuery.data}
            locationName={locationName}
          />
          {/* <HourlyTemperature data={forecastQuery.data} /> */}
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          {/* <WeatherDetails data={weatherQuery.data} /> */}
          {/* <WeatherForecast data={forecastQuery.data} /> */}
        </div>
      </div>
    </div>
  );

}

export default WeatherDashboard