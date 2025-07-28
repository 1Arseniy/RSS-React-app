import { createContext } from 'react';

interface typeThemeContext {
  darkTheme: boolean;
  toggleTheme?: () => void;
}

const ThemeContext = createContext<typeThemeContext>({ darkTheme: false });

export default ThemeContext;
