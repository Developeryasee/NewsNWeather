import { StyleSheet } from "react-native";
import { lightTheme } from "../../theme/light";
import { Typography } from "../../styles/typography";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";


export const createWeatherCardStyle = (theme = lightTheme) =>{
    return StyleSheet.create({
       container:{
            paddingVertical: verticalScale(theme.spacing.xl),
            paddingHorizontal: scale(theme.spacing.lg),
            backgroundColor: theme.colors.surface,
            marginTop: verticalScale(theme.spacing.base),
            borderRadius: moderateScale(30)
       },
       date:{
            ...Typography.caption,
            color: theme.colors.textMuted
       },
       description:{
          ...Typography.body,
          color: theme.colors.textTertiary,
          marginTop: verticalScale(theme.spacing.xs)
       },
       celsius:{
          ...Typography.h1,
          color: theme.colors.textPrimary,
          marginTop: verticalScale(theme.spacing.sm)
       }
    })
}