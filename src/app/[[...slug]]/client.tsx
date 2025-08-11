'use client';
import React from 'react';
import dynamic from 'next/dynamic';

import { ErrorBoundary } from '@/components';

import StoreProvider from '@/app/StoreProvider';

// import store from '@/store';

const App = dynamic(() => import('@/views/HomeView/HomeView'), { ssr: false });

export function ClientOnly() {
  return (
    <ErrorBoundary>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ErrorBoundary>
  );
}
