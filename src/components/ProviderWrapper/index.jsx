import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { I18nProvider, LOCALES } from '../i18n';
import light from '../../assets/styles/themes/light';
import dark from '../../assets/styles/themes/dark';

const ProviderWrapper = ({ children, userConfigs }) => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('PT');

  useEffect(() => {
    if (userConfigs) {
      setTheme(userConfigs.theme);
      setLanguage(userConfigs.language);
    } else {
      setTheme('light');
      setLanguage('PT');
    };
  }, [userConfigs]);

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light }>
      <I18nProvider locale={LOCALES[language]}>
        { children }
      </I18nProvider>
    </ThemeProvider>
  );
};

export default ProviderWrapper;