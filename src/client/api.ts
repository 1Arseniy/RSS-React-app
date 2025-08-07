import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { TypeCharacter, TypeCharacters } from '@/types/types';

interface TypePropsGetCharacters {
  name: string;
  page?: number;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/character/',
  }),
  endpoints: (create) => ({
    getCharacters: create.query<TypeCharacter[], TypePropsGetCharacters>({
      query: ({ name, page = 1 }) =>
        `?page=${page}${name ? `&name=${name}` : ''}`,
      transformResponse: (response: TypeCharacters) => response.results,
    }),
    getCharacterById: create.query<TypeCharacter, string>({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetCharacterByIdQuery, useGetCharactersQuery } = api;
