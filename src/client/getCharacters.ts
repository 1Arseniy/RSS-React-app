import type { typeCharacters, typeCharacter } from '../types/types';
import { wrapperTryCatch } from '../utils/wrapperTryCatch';

export async function getCharaters(): Promise<typeCharacter[]> {
  const response = await wrapperTryCatch<typeCharacters>(
    'https://rickandmortyapi.com/api/character',
    { method: 'GET' }
  );
  return response.results;
}
