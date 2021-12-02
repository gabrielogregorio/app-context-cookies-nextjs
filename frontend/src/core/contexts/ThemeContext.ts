import { createContext, useContext } from 'react';

interface ThemeContextProps {
    theme: string,
    setTheme: (theme: string) => void
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const useThemeContext = () => useContext(ThemeContext);
