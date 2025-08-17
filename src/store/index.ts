import { configureStore } from '@reduxjs/toolkit';

import selectedReducer from '@/store/characterSlice';
import { useDispatch, useSelector } from 'react-redux';

import { api } from '@/client/api';

export const makeStore = () => {
  return configureStore({
    reducer: {
      selectedCharacters: selectedReducer,
      [api.reducerPath]: api.reducer,
    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

export default makeStore;

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
