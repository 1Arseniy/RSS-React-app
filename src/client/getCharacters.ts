import type { typeCharacters, typeCharacter } from '@/types/types';

import { wrapperTryCatch } from '@/utils/wrapperTryCatch';

export async function getCharacters(
  name?: string,
  page = 1
): Promise<typeCharacter[]> {
  const sortByName = name ? `&name=${name}` : '';
  const url = `https://rickandmortyapi.com/api/character/?page=${page}${sortByName}`;
  const response = await wrapperTryCatch<typeCharacters>(url, {
    method: 'GET',
  });
  return response.results ? response.results : [];
}
