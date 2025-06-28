export interface AppTheme {
    mode: string,
    colors: {
        background: string,
        surface: string,

        textPrimary: string,
        textSecondary: string,
        textTertiary: string,
        textMuted: string,
        textAccent: string,
    },
    spacing: {
        xs: number,
        sm: number,
        md: number,
        lg: number,
        xl: number,
    },
    typography: {
        h1: { fontSize: number, fontFamily: string },
        h2: { fontSize: number, fontFamily: string },
        body: { fontSize: number, fontFamily: string },
        label: { fontSize: number, fontFamily: string },
        caption: { fontSize: number, fontFamily: string },
    }
};

