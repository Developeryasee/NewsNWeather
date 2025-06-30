import { CurrentWeather } from "../types/currentWeather.type";

export function estimateRainChance(data: CurrentWeather): number {
  const { humidity } = data.main;
  const cloudCover = data.clouds.all;
  const windSpeed = data.wind.speed;
  const weatherDescription = data.weather[0]?.description.toLowerCase() || "";

  let chance = 0;

  if (cloudCover > 70) chance += 30;
  if (humidity > 60) chance += 20;
  if (weatherDescription.includes("rain")) chance += 50;
  if (weatherDescription.includes("drizzle")) chance += 30;
  if (weatherDescription.includes("storm")) chance += 60;
  if (windSpeed > 10) chance += 10;

  return Math.min(100, chance);
}
