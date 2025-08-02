import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import type { TypeCharacters, TypeCharacter } from '@/types/types';

const initialState: TypeCharacters = {
  results: [],
};

const characterSlice = createSlice({
  name: 'selected characters',
  initialState,
  reducers: {
    addToSelectedCharacters(state, action: PayloadAction<TypeCharacter>) {
      state.results.push(action.payload);
    },

    removeFromSelectedCharacters(state, action: PayloadAction<number>) {
      state.results = state.results.filter(
        (character) => character.id !== action.payload
      );
    },

    clearAllItems(state) {
      state.results = [];
    },
  },
});

export const {
  addToSelectedCharacters,
  removeFromSelectedCharacters,
  clearAllItems,
} = characterSlice.actions;

export default characterSlice.reducer;
