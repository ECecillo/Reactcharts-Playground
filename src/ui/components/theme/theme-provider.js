import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
