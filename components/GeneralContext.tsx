'use client';

import React, { useState } from 'react';
type ThemeType = "light" | "dark";

type ThemeContextValue = { theme: ThemeType; switchTheme: (theme: ThemeType) => void };
const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);


const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const switchTheme = (theme: ThemeType) => setTheme(theme);
  return <ThemeContext.Provider value={{ switchTheme, theme }}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider, ThemeContext };