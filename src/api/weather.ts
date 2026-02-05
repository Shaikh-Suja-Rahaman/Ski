import { API_CONFIG } from "./config";
import type { Coordinates, ForecastData, GeocodingResponse, WeatherData } from "./type";

//this code over here makes this very very scalable and neat
//who knew even api calling can be this complex yet proper
class WeatherAPI {

  //defining a class, that i can have objects off of this, and make my app more modular
  //classes in ts
  private createURL(endpoint: string, params: Record<string, string | number>) {
    //so endpoint is a variable of type string, and params is an object (aka record) which can either have string, string key value pair or string, number
    const searchParams = new URLSearchParams({
      //URLSearchParms is like magic, takes an object and makes it url friendly
      appid: API_CONFIG.API_KEY, //my api key
      //the api key is stored in my .env file, which i obvioously dont want to
      //push to github :)

      ...params, //object
    });
    return `${endpoint}?${searchParams.toString()}`; //toString does the magic
  } //this just takes my endpoint url and then adds the parameters like city and units in a fitting way. so that it fits the url

  private async fetchData<T>(url: string): Promise<T> {
    //<T> is generic TYPE, so i'll declare this during calling this function, its like a placeholder
    // now colon: promise<T> means that this function's return type is a promise and once that promise is resolved, it would return the <T> type which I had entered before, this is just for error rectification and to help typeScript catch errors
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Weather API Error: ${response.statusText}`);
    }

    return response.json(); //this should be of type weatherData
  }

  async getCurrentWeather({ lat, lon }: Coordinates): Promise<WeatherData> {
    const url = this.createURL(`${API_CONFIG.BASE_URL}/weather`, { //calling the create url function
      lat: lat.toString(), //this is a string - string
      lon: lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units, //this is string - nunmber
    });

    return this.fetchData<WeatherData>(url); //fetching the data using the fetchDatt function
  }

  async getForecast({ lat, lon }: Coordinates): Promise<ForecastData> {
    const url = this.createURL(`${API_CONFIG.BASE_URL}/forecast`, { //calling the create url function
      lat: lat.toString(),
      lon: lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });

    return this.fetchData<ForecastData>(url); //fetching the data using the fetchData function
  }

  async reverseGeocode({lat, lon}: Coordinates):Promise<GeocodingResponse[]> {
    const url = this.createURL(
      `${API_CONFIG.GEO}/reverse`, {
        lat: lat.toString(),
        lon: lon.toString(),
        limit :  1, //i just need the first object as it returns an array //string -> number
      }
    );

    return this.fetchData<GeocodingResponse[]>(url);
  }
}

export const weatherAPI = new WeatherAPI();
//this object is all i need to access my api endpoints
