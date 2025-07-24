import type { typeCharacters, TypeCharacter } from '@/types/types';

import { wrapperTryCatch } from '@/utils/wrapperTryCatch';

export async function getCharacters(
  name?: string,
  page = 1
): Promise<TypeCharacter[]> {
  const sortByName = name ? `&name=${name}` : '';
  // const isCurrentCharacter = id ? id : `?page=${page}${sortByName}`;
  const url = `https://rickandmortyapi.com/api/character/?page=${page}${sortByName}`;
  console.log('url', url);
  const response = await wrapperTryCatch<typeCharacters>(url, {
    method: 'GET',
  });
  return response.results ? response.results : [];
}
