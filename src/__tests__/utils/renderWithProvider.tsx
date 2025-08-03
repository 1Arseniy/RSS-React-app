import { render } from '@testing-library/react';
import type { TypeCharacter } from '@/types/types';

import selectedReducer from '@/store/characterSlice';

import { configureStore } from '@reduxjs/toolkit';

import type { ReactNode } from 'react';
import { Provider } from 'react-redux';

function renderWithProvider(
  ui: ReactNode,
  { initialState }: { initialState: TypeCharacter[] }
) {
  const store = configureStore({
    reducer: {
      selectedCharacters: selectedReducer,
    },
    preloadedState: {
      selectedCharacters: {
        results: initialState,
      },
    },
  });
  return render(<Provider store={store}>{ui}</Provider>);
}

export default renderWithProvider;
