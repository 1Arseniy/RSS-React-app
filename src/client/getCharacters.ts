import type { typeCharacters, typeCharacter } from '../types/types';
import { wrapperTryCatch } from '../utils/wrapperTryCatch';

export async function getCharaters(name?: string): Promise<typeCharacter[]> {
  const sortByName = name ? `&name=${name}` : '';
  const response = await wrapperTryCatch<typeCharacters>(
    `https://rickandmortyapi.com/api/character/?page=1${sortByName}`,
    { method: 'GET' }
  );
  return response.results;
}
