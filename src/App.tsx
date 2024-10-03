import ProviderWrapper from './components/ProviderWrapper';
import AppRoutes from './routes';
import GlobalStyle from './assets/styles/styles';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';

const getUserConfigs = () => {
  const userConfigs = localStorage.getItem('userConfigs');
  if (!userConfigs) {
    const defaultConfigs = {
      language: 'PT',
      theme: 'light'
    };
    localStorage.setItem('userConfigs', JSON.stringify(defaultConfigs));
    return defaultConfigs;
  }
  if (userConfigs) return JSON.parse(userConfigs);
};

const App = () => {
  const [userConfigs, setUserConfigs] = useState(getUserConfigs());

  const toggleTheme = () => {
    const newTheme = userConfigs.theme === 'light' ? 'dark' : 'light';
    const updatedConfigs = { ...userConfigs, theme: newTheme };
    setUserConfigs(updatedConfigs);
    localStorage.setItem('userConfigs', JSON.stringify(updatedConfigs));
  };

  const updateLanguage = (language: string) => {
    const updatedConfigs = { ...userConfigs, language };
    setUserConfigs(updatedConfigs);
    localStorage.setItem('userConfigs', JSON.stringify(updatedConfigs));
  };

  useEffect(() => {
    const storedConfigs = getUserConfigs();
    setUserConfigs(storedConfigs);
  }, []);

  const muiTheme = createTheme({
    palette: {
      mode: userConfigs.theme,
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <ProviderWrapper userConfigs={userConfigs}>
        <GlobalStyle />
        <CssBaseline />
        <AppRoutes
          userConfigs={userConfigs}
          toggleTheme={toggleTheme}
          updateLanguage={updateLanguage}
        />
      </ProviderWrapper>
    </ThemeProvider>
  );
}

export default App
