import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {

  const [defaultTheme, setDefaultTheme] = useState(true);

  const changeTheme = () => {
    setDefaultTheme(!defaultTheme);
  }

  return(
    <ThemeContext.Provider value={{defaultTheme, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeContextProvider;