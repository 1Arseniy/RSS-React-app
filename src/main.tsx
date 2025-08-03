import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import store from '@/store';

import App from '@/App.tsx';
import { ErrorBoundary } from '@/components';

import { ThemeProvider } from './context/ThemeProvider';

import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </ErrorBoundary>
);
