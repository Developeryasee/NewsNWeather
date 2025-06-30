import { wrapApiCall } from ".";
import { weatherClient } from "./client";


export const CurrentWeatherData = (lat: number, lon: number) =>{
   return wrapApiCall(() => weatherClient.get(`weather?lat=${lat}&lon=${lon}`))
}

export const ForecastData = (lat: number, lon: number)=>{
    return wrapApiCall(()=> weatherClient.get(`forecast?lat=${lat}&lon=${lon}`))
}