// src/theme/ThemeContext.tsx

import React, { createContext, useContext, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { lightTheme } from './light';
import { darkTheme } from './dark';

const ThemeContext = createContext(lightTheme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
