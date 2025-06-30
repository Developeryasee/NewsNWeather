import React, { memo } from "react";
import { Text, View } from "react-native";
import { useTheme } from "../../theme/ThemeContext";
import { createWeatherStatsStyle } from "./style";
import { layout } from "../../styles/layout";
import WindIcon from "../../assets/icons/wind.svg";
import HumidityIcon from "../../assets/icons/humidity.svg";
import RainIcon from "../../assets/icons/rain.svg";
import WindLightIcon from "../../assets/icons/windlight.svg";
import HumidityLightIcon from "../../assets/icons/humiditylight.svg";
import RainLightIcon from "../../assets/icons/rainlight.svg";
import SvgIcon from "../SvgIcon";
import { scale, verticalScale } from "react-native-size-matters";
type WeatherStatsCardProps = {
    speed: number;
    humidity: number;
    rain_chance: number;
}
const WeatherStatsCard: React.FC<WeatherStatsCardProps> = ({ speed, humidity, rain_chance }) => {
    const theme = useTheme();
    const styles = createWeatherStatsStyle(theme);
    return (
        <View style={[styles.container, layout.rowSpaceBetween]}>
            <View style={layout.alignCenter}>
                <SvgIcon
                    icon={theme.mode === "dark" ? WindIcon : WindLightIcon}
                    width={scale(16)}
                    height={verticalScale(16)}
                    color="transparent"
                />
                <Text style={styles.value}>{`${speed} m/s`}</Text>
                <Text style={styles.label}>Wind</Text>
            </View>
            <View style={layout.alignCenter}>
                <SvgIcon
                    icon={theme.mode === "dark" ? HumidityIcon : HumidityLightIcon}
                    width={scale(16)}
                    height={verticalScale(16)}
                    color="transparent"
                />
                <Text style={styles.value}>{`${humidity}%`}</Text>
                <Text style={styles.label}>Humidity</Text>
            </View>
            <View style={layout.alignCenter}>
                <SvgIcon
                    icon={theme.mode === "dark" ? RainIcon : RainLightIcon}
                    width={scale(16)}
                    height={verticalScale(16)}
                    color="transparent"
                />
                <Text style={styles.value}>{`${rain_chance}%`}</Text>
                <Text style={styles.label}>Rain</Text>
            </View>
        </View>
    )
}
export default memo(WeatherStatsCard);