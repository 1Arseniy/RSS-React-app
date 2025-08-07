import { http, HttpResponse } from 'msw';

import data from '@/__tests__/mocks/characters.json';

export const handlers = [
  http.get('https://rickandmortyapi.com/api/character', async () => {
    return HttpResponse.json(data);
  }),

  http.get('https://rickandmortyapi.com/api/character/id', async () => {
    // const {id} = params
    return HttpResponse.json(data[0]);
  }),
];
