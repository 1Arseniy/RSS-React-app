import { createRoot } from 'react-dom/client';

import App from '@/App.tsx';
import { ErrorBoundary } from '@/components';

import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
