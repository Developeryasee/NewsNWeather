
import { StyleSheet } from "react-native"
import { lightTheme } from "../../theme/light"
import { Typography } from "../../styles/typography"
import { moderateScale, verticalScale } from "react-native-size-matters"

export const createWeatherScreenStyles = (theme = lightTheme) => {
    return StyleSheet.create({
        list: {
            flexGrow: 1,
            paddingBottom:verticalScale(16)
        },
        permissionText: {
            ...Typography.caption,
            fontSize: moderateScale(14),
            color: theme.colors.textSecondary,
        },
        permissionLink: {
            ...Typography.body,
            color: "#007AFF",
            textDecorationLine: "underline",
            marginTop:verticalScale(10)
        },
        
    })
}