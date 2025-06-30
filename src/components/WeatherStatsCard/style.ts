import { StyleSheet } from "react-native";
import { lightTheme } from "../../theme/light";
import { Typography } from "../../styles/typography";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";


export const createWeatherStatsStyle = (theme = lightTheme) => {
    return StyleSheet.create({
        container: {
            paddingVertical: verticalScale(theme.spacing.base),
            paddingHorizontal: scale(20),
            backgroundColor: theme.colors.surface,
            marginTop: verticalScale(theme.spacing.base),
            borderRadius: moderateScale(24),
        },
        label:{
            ...Typography.caption,
            color: theme.colors.textAccent,
            marginTop: verticalScale(theme.spacing.xs),
        },
        value:{
            ...Typography.label,
            color: theme.colors.textAccent,
            marginTop: verticalScale(theme.spacing.md),
        }
    })
}