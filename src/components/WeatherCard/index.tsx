import React, { memo } from "react";
import { Text, View } from "react-native";
import { useTheme } from "../../theme/ThemeContext";
import { createWeatherCardStyle } from "./style";
import BigCloudDark from "../../assets/icons/clouddark.svg";
import BigCloudLight from "../../assets/icons/cloudlight.svg";
import { layout } from "../../styles/layout";
import SvgIcon from "../SvgIcon";
import { scale, verticalScale } from "react-native-size-matters";
type WeatherCardProps = {
    celsius?: number;
    date: string;
    description?: string;
}
const WeatherCard: React.FC<WeatherCardProps> = ({ celsius, date, description }) => {
    const theme = useTheme();
    const styles = createWeatherCardStyle(theme);
    return (
        <View style={[styles.container, layout.rowSpaceBetween,]}>
            <View>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.description}>{description}</Text>
                {celsius && (
                    <Text style={styles.celsius}>{`${celsius}°C`}</Text>
                )}
            </View>
            <SvgIcon
                icon={theme.mode === "dark" ? BigCloudDark : BigCloudLight}
                width={scale(82)}
                height={verticalScale(62)}
            />
        </View>
    )
}
export default memo(WeatherCard);
