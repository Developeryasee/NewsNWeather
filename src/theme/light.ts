import { Spacing } from "../styles/spacing";
import { Typography } from "../styles/typography";
import { AppTheme } from "./theme.type";

export const lightTheme: AppTheme = {
  mode: 'light',
  colors: {
    background: '#FFFFFF',
    surface: 'rgba(138,141,147,0.09)',

    textPrimary: '#616161',
    textSecondary: '#757575',
    textTertiary: '#757575',
    textMuted: '#9E9E9E',
    textAccent: '#757575',
  },
  spacing: Spacing,
  typography: Typography
};
