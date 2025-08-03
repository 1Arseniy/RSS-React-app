import type { TypeCharacters, TypeCharacter } from '@/types/types';

import { wrapperTryCatch } from '@/utils/wrapperTryCatch';

export async function getCharacters(
  name?: string,
  page = 1
): Promise<TypeCharacter[]> {
  const sortByName = name ? `&name=${name}` : '';
  const url = `https://rickandmortyapi.com/api/character/?page=${page}${sortByName}`;
  const response = await wrapperTryCatch<TypeCharacters>(url, {
    method: 'GET',
  });
  return response.results ? response.results : [];
}
