import { it, expect, describe } from 'vitest';

import '@testing-library/jest-dom/vitest';

import data from '@/__tests__/mocks/characters.json';

import selectedReducer from '@/store/characterSlice';
import { addToSelectedCharacters, clearAllItems } from '@/store/characterSlice';

describe('tests characterSlice', () => {
  it('should return empty array selectedReducer first call', () => {
    const result = selectedReducer(undefined, { type: '' });
    expect(result.results).toEqual([]);
  });

  it('should add new item', () => {
    const action = { type: addToSelectedCharacters.type, payload: '' };
    const result = selectedReducer({ results: data }, action);
    expect(result.results[0]).toEqual(data[0]);
  });

  it('should clear redux', () => {
    const action = { type: clearAllItems.type, payload: '' };
    const result = selectedReducer({ results: data }, action);
    expect(result.results).toEqual([]);
  });
});
