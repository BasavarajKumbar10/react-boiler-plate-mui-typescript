import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { grey, pink, cyan, blueGrey } from '@mui/material/colors';
import { PaletteMode,  } from '@mui/material';

const darkModePalette = {
  // palette values for dark mode
  primary: blueGrey,
  divider: blueGrey[700],
  background: {
    default: '#212121',
    paper: '#212121'
  },
  text: {
    primary: '#fff',
    secondary: grey[500]
  }
};

const lightModePalette = {
  primary: pink,
  secondary: cyan,
  divider: pink[200],
  text: {
    primary: grey[900],
    secondary: grey[800]
  }
};

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? lightModePalette : darkModePalette)
  }
});

export const getTheme = (mode: PaletteMode) => {
  return responsiveFontSizes(createTheme(getDesignTokens(mode)));
};
