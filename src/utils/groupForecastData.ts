import { ForecastItem, ForecastMain } from "../types/forecastWeather.type";
import { Weather } from "../types/weather.type";

export interface GroupedForecastItem {
  time: string;
  main: ForecastMain;
  weather: Weather[];
}

export interface ForecastSection {
  title: string;
  data: GroupedForecastItem[];
}

export const groupForecastByDay = (forecastList: ForecastItem[]): ForecastSection[] => {
  const result: Record<string, GroupedForecastItem[]> = {};
  const today = new Date().toDateString();

  forecastList.forEach((item) => {
    const dateObj = new Date(item.dt_txt);
    const dateStr = dateObj.toDateString();
    const timeStr = dateObj.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const title =
      dateStr === today
        ? "Today"
        : dateObj.toLocaleDateString(undefined, { weekday: "long" });

    if (!result[title]) {
      result[title] = [];
    }

    result[title].push({
      time: timeStr,
      main: item.main,
      weather: item.weather,
    });
  });

  return Object.entries(result).map(([title, data]) => ({ title, data }));
};
