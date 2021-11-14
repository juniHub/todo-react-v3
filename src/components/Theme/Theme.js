import React from "react";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";
import grey from "@material-ui/core/colors/grey";
import useLocalStorage from "../../hooks/useLocalStorage";

const themeLight = createTheme({
  palette: {

    primary: orange,
    secondary: grey,

    
    background: {
      default: '#fef6e4',
     
    },
    text: {
     primary: '#72757e',
     secondary: '#faae2b',

  }
}
  
});

const themeDark = createTheme({
  palette: {

    primary: orange,
    secondary: grey,
   
   
    background: {
      default: '#232946',
     
    },
    text: {
      primary: '#72757e',
      secondary: '#faae2b',
    },
    
  },
});

const Theme = (props) => {
  const { children, darkMode } = props;
  const defaultTheme = darkMode ? themeDark : themeLight;
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export const withTheme = (Component) => {
  return (props) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
    return (
      <Theme darkMode={darkMode}>
        <Component {...props} darkMode={darkMode} setDarkMode={setDarkMode} />
      </Theme>
    );
  };
};
