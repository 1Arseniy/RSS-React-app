import { useState } from 'react';

import type { ReactNode } from 'react';

import ThemeContext from './ThemeContext';

interface TypeThemeProvider {
  children: ReactNode;
}

export function ThemeProvider({ children }: TypeThemeProvider) {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
