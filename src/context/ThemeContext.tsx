'use client';

import { createContext } from 'react';

interface TypeThemeContext {
  darkTheme: boolean;
  toggleTheme?: () => void;
}

const ThemeContext = createContext<TypeThemeContext>({ darkTheme: false });

export default ThemeContext;
