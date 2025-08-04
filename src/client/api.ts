import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { TypeCharacter } from '@/types/types';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/character/',
  }),
  endpoints: (create) => ({
    getCharacterById: create.query<TypeCharacter, string>({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetCharacterByIdQuery } = api;
