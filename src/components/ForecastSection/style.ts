import { StyleSheet } from "react-native";
import { lightTheme } from "../../theme/light";
import { Typography } from "../../styles/typography";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { layout } from "../../styles/layout";


export const createForecastSectionStyle = (theme = lightTheme) => {
    return StyleSheet.create({
        container: {
            marginTop: verticalScale(theme.spacing.lg),
            gap: verticalScale(theme.spacing.base),
        },
        title: {
            ...Typography.body,
            color: theme.colors.textAccent,
        },
        forecastsection: {
            padding: scale(theme.spacing.md),
            backgroundColor: theme.colors.surface,
            borderRadius: moderateScale(10),
            ...layout.rowSpaceBetween
        },
        time:{
            ...Typography.body,
            fontSize: moderateScale(12),
            color: theme.colors.textAccent  
        },
        temp:{
            ...Typography.caption,
            fontSize: moderateScale(13),
            color: theme.colors.textAccent,
        }
    })
}