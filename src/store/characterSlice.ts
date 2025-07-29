import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import type { typeCharacters, TypeCharacter } from '@/types/types';

const initialState: typeCharacters = {
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

    toggleCardSelected(state, action) {
      console.log(state);
      console.log(action);
    },

    // getResultsLength(state) {
    //   return state.results.length
    // }
  },
});

export const {
  toggleCardSelected,
  addToSelectedCharacters,
  removeFromSelectedCharacters,
} = characterSlice.actions;

export default characterSlice.reducer;
