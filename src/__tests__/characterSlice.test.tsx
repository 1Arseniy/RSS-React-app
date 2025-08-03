import { it, expect, describe } from 'vitest';

import '@testing-library/jest-dom/vitest';

import data from '@/__tests__/mocks/characters.json';

import selectedReducer from '@/store/characterSlice';
import {
  addToSelectedCharacters,
  clearAllItems,
  removeFromSelectedCharacters,
} from '@/store/characterSlice';

describe('tests characterSlice', () => {
  it('should return empty array selectedReducer first call', () => {
    const result = selectedReducer(undefined, { type: '' });
    expect(result.results).toEqual([]);
  });

  it('should add new item in redux', () => {
    const action = { type: addToSelectedCharacters.type, payload: data[0] };
    const result = selectedReducer({ results: [] }, action);
    expect(result.results[0].id).toEqual(1);
    expect(result.results[0].status).toEqual('Alive');
    expect(result.results[0].gender).toEqual('Male');
    expect(result.results[0].name).toEqual('Rick Sanchez');
  });

  it('should remove item from redux', () => {
    const action = {
      type: removeFromSelectedCharacters.type,
      payload: 1,
    };
    const result = selectedReducer({ results: [data[0]] }, action);
    expect(result.results).toEqual([]);
  });

  it('should clear redux', () => {
    const action = { type: clearAllItems.type, payload: '' };
    const result = selectedReducer({ results: data }, action);
    expect(result.results).toEqual([]);
  });
});
