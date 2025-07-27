import type { TypeCharacter } from '@/types/types';

import { wrapperTryCatch } from '@/utils/wrapperTryCatch';

export async function getCharacterById(id: string): Promise<TypeCharacter> {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await wrapperTryCatch<TypeCharacter>(url, {
    method: 'GET',
  });
  return response;
}
