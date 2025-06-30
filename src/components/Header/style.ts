import { StyleSheet } from "react-native";
import { lightTheme } from "../../theme/light";
import { Typography } from "../../styles/typography";
import { scale, verticalScale } from "react-native-size-matters";
import { layout } from "../../styles/layout";


export const createHeaderStyle = (theme = lightTheme) =>{
    return StyleSheet.create({
        container:{
            paddingBottom: verticalScale(theme.spacing.sm),
            ...layout.rowSpaceBetween, 
            ...layout.alignEnd
        },
        welcomeText:{
            ...Typography.caption,
            color: theme.colors.textSecondary,
            marginBottom: verticalScale(theme.spacing.xs)
        },
        h2:{
            ...Typography.h2,
            color: theme.colors.textPrimary,
        },
        icon:{
            marginRight: scale(theme.spacing.sm)
        }
    })
}