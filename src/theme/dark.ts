
import { Spacing } from "../styles/spacing";
import { Typography } from "../styles/typography";
import { AppTheme } from "./theme.type";
export const darkTheme: AppTheme= {
  mode: 'dark',
   colors: {
    background: '#212121',
    surface: 'rgba(138,141,147,0.16)',

    textPrimary: '#FFFFFF',
    textSecondary: '#BDBDBD',
    textTertiary: '#FAFAFA',
    textMuted: '#EEEEEE',
    textAccent: '#FFFFFF',
  },
  spacing: Spacing,
  typography: Typography
};

