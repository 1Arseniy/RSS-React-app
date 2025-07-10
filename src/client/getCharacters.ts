import type { typeCharacters, typeCharacter } from '../types/types';
import { wrapperTryCatch } from '../utils/wrapperTryCatch';

export async function getCharaters(name?: string): Promise<typeCharacter[]> {
  const sortByName = name ? `&name=${name}` : '';
  const url = `https://rickandmortyapi.com/api/character/?page=1${sortByName}`;
  const response = await wrapperTryCatch<typeCharacters>(url, {
    method: 'GET',
  });
  return response.results;
}
