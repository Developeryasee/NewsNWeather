import { StyleSheet } from "react-native";
import { lightTheme } from "../../theme/light";
import { Typography } from "../../styles/typography";
import { moderateScale } from "react-native-size-matters";


export const createWeatherCardStyle = (theme = lightTheme) =>{
    return StyleSheet.create({
       container:{
            paddingVertical: theme.spacing.xl,
            paddingHorizontal: theme.spacing.lg,
            backgroundColor: theme.colors.surface,
            marginTop: theme.spacing.xl,
            borderRadius: moderateScale(30)
       },
       date:{
            ...Typography.caption,
            color: theme.colors.textMuted
       },
       description:{
          ...Typography.body,
          color: theme.colors.textTertiary,
          marginTop: theme.spacing.xs
       },
       celsius:{
          ...Typography.h1,
          color: theme.colors.textPrimary,
          marginTop: theme.spacing.sm
       }
    })
}