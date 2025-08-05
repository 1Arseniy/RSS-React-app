import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { TypeCharacter, TypeCharacters } from '@/types/types';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/character/',
  }),
  endpoints: (create) => ({
    getCharacters: create.query<TypeCharacters, string, number>({
      query: (name, page = 1) => `?page=${page}${name ? `&name=${name}` : ''}`,
    }),
    getCharacterById: create.query<TypeCharacter, string>({
      query: (id) => `${id}`,
    }),
  }),
});

export const {
  useGetCharacterByIdQuery,
  useGetCharactersQuery,
  useLazyGetCharactersQuery,
} = api;

export type TypeTrigger = ReturnType<typeof useLazyGetCharactersQuery>[0];
