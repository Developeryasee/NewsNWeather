import React, { memo } from "react";
import { Image, Text, View } from "react-native";
import type { ForecastSection as ForecastSectionType } from "../../utils/groupForecastData";
import { useTheme } from "../../theme/ThemeContext";
import { createForecastSectionStyle } from "./style";
import { kelvinToCelsius } from "../../utils/temperature";

interface ForecastSectionProps {
    data: ForecastSectionType[];
}
const ForecastSection: React.FC<ForecastSectionProps> = ({ data }) => {
    const theme = useTheme();
    const styles = createForecastSectionStyle(theme);
    return (
        <View>
            {
                data.map((forcast, index) => (
                    <View key={index} style={styles.container}>
                        <Text style={styles.title}>{forcast.title}</Text>
                        {
                            forcast.data.map((item, index) => (
                                <View style={styles.forecastsection} key={index}>
                                    <Text style={styles.time}>{item.time}</Text>
                                    <Text style={styles.temp}>{kelvinToCelsius(item.main.temp)} °C</Text>
                                    <Text style={styles.temp}>H: {kelvinToCelsius(item.main.temp_max)}° L: {kelvinToCelsius(item.main.temp_min)}°</Text>
                                </View>
                            ))
                        }

                    </View>
                ))
            }
        </View>
    )
}
export default memo(ForecastSection);