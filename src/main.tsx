import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import '@/styles/index.css';

import App from '@/App.tsx';
import { Loader } from './components';
import { getData } from './client/getData';

const promise = getData();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <App promise={promise} />
    </Suspense>
  </StrictMode>
);
