import { configureStore } from '@reduxjs/toolkit';

import selectedReducer from '@/store/characterSlice';

const store = configureStore({
  reducer: {
    selectedCharacters: selectedReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
