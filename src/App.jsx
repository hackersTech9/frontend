import React, { useContext } from 'react';
import LoginContextProvider from "Context/LoginContext";
import AppRouter from "Routers/AppRouter";

import { ChakraProvider } from '@chakra-ui/react';

import theme from 'theme';
import themeLight from 'themeLight';
import { ThemeContext } from 'Context/ThemeContext';

function App() {

  const Theme = useContext(ThemeContext);
  const { defaultTheme } = Theme;

  return (
    <ChakraProvider theme={ defaultTheme ? theme : themeLight}>
      <LoginContextProvider>
        <AppRouter />
      </LoginContextProvider>
    </ChakraProvider>
  );
}

export default App;
