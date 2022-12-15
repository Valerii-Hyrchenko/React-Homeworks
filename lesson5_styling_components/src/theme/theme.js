import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
       main: '#FFF',
    },
    secondary: {
      main: '#000',
    },
  },
  
  typography: {
    fontFamily: 'Abel',
    fontSize: 26.25,
  },
  
});

export const inputTheme = createTheme({
  palette: {
    primary: {
       main: '#010000',
    },
    secondary: {
      main: '#E7D7EF',
    },
  },
  typography: {
    fontFamily: 'Abel',
    fontSize: 26.25,
  },
})