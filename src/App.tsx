import ProviderWrapper from './components/ProviderWrapper';
import AppRoutes from './routes';
import GlobalStyle from './assets/styles/styles';

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
  const userConfigs = getUserConfigs();

  return (
    <ProviderWrapper userConfigs={userConfigs}>
      <GlobalStyle />
      <AppRoutes
        userConfigs={userConfigs}
      />
    </ProviderWrapper>
  );
}

export default App
