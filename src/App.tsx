import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

import HomePage from '@pages/HomePage';
import { testString } from '@utils/stringHelpers';
import { getTheme } from './theme';
import MainLayout from './layout/MainLayout';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () => getTheme('light'), // getTheme(prefersDarkMode ? 'dark' : 'light'),
    [prefersDarkMode]
  );

  useEffect(() => {
    testString();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <HomePage />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
