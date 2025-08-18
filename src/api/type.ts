export interface Coordinates {
  lat : number;
  lon : number;
}
//refer to api docs of OpenWeather

export interface WeatherCondition { //interfaces's objects must have all these properties inside of it
  //unless i make it optional eg: "email.? string"
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherData {
  coord: Coordinates;
  weather: WeatherCondition[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max:number;
    pressure: number;
    humidity: number;
  };
  wind:{
    speed: number;
    deg:number;
  };
  sys:{
    sunrise:number;
    sunset:number;
    country: string;
  };
  name:string;
  dt:number; //date
}

export interface ForecastData {
  list: Array<{
    dt:number;
    main:WeatherData["main"];
    weather:WeatherData["weather"];
    wind:WeatherData["wind"];
    dt_txt: string;
  }>;
  city: {
    name: string;
    country: string;
    sunrise: number;
    sunset: number;
  }
}

export interface GeocodingResponse{
  name : string;
  local_names?: Record<string,string>; //these are optional
  lat:number;
  lon:number;
  country: string;
  state?: string; //not all places will have a state
}