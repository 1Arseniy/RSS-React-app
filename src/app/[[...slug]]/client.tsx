'use client';
import React from 'react';
import dynamic from 'next/dynamic';

import { ErrorBoundary } from '@/components';

import { Provider } from 'react-redux';

import store from '@/store';
import { ThemeProvider } from '@/context/ThemeProvider';

const App = dynamic(() => import('@/App'), { ssr: false });

export function ClientOnly() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
}
