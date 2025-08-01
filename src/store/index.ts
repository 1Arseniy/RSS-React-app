import { configureStore } from '@reduxjs/toolkit';

import selectedReducer from '@/store/characterSlice';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    selectedCharacters: selectedReducer,
  },
});

export default store;

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
