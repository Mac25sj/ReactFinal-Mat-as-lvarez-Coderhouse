// src/context/ThemeContext.jsx
import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [modoDark, setModoDark] = useState(false);

  const toggleTheme = () => setModoDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ modoDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);