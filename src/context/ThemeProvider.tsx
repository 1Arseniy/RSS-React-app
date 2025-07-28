import { useState } from 'react';

import type { ReactNode } from 'react';

import ThemeContext from './ThemeContext';

interface typeThemeProvider {
  children: ReactNode;
}

export function ThemeProvider({ children }: typeThemeProvider) {
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
