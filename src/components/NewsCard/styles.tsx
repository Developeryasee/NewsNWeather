import { StyleSheet } from "react-native";
import { lightTheme } from "../../theme/light";
import { Typography } from "../../styles/typography";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { layout } from "../../styles/layout";


export const createNewsCardStyle = (theme = lightTheme) => {
    return StyleSheet.create({
        card: {
            padding: scale(theme.spacing.sm),
            gap: scale(theme.spacing.sm),
            marginBottom: verticalScale(theme.spacing.md)
        },
        image: {
            width: '100%',
            height: verticalScale(150),
            borderRadius: moderateScale(6),
            overflow: 'hidden',
            backgroundColor: theme.colors.surface,
            ...layout.center
        },
        country: {
            ...Typography.caption,
            color: theme.colors.textSecondary
        },
        title: {
            ...Typography.body,
            color: theme.colors.textPrimary,
            marginVertical: verticalScale(theme.spacing.xs)
        },
        dateNauthor: {
            ...Typography.caption,
            color: theme.colors.textSecondary,
            marginRight: scale(theme.spacing.md)
        },
        icon:{
            marginRight:scale(3)
        }
    })
}