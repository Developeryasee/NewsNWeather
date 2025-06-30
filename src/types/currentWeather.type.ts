// types/currentWeather.ts
import { Coord, Weather, Wind, Clouds } from "./weather.type";

export interface CurrentWeather {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: CurrentMain;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: CurrentSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface CurrentMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface CurrentSys {
  country: string;
  sunrise: number;
  sunset: number;
}
