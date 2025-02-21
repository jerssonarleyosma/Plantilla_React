import React, { createContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

const GlobalData = ({ children }) => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark'); // Elimina las clases previas
    document.documentElement.classList.add(theme); // Agrega la clase actual

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <GlobalContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalData };