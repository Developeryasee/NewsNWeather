import { StyleSheet } from "react-native";
import { lightTheme } from "../../theme/light";
import { Typography } from "../../styles/typography";


export const createHeaderStyle = (theme = lightTheme) =>{
    return StyleSheet.create({
        welcomeText:{
            ...Typography.caption,
            color: theme.colors.textSecondary,
            marginBottom: theme.spacing.xs
        },
        title:{
            ...Typography.h2,
            color: theme.colors.textPrimary,
        }
    })
}