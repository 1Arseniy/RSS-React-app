import {
  it,
  expect,
  describe,
  vi,
  beforeAll,
  afterAll,
  afterEach,
} from 'vitest';

import { render, screen } from '@testing-library/react';

import App from '@/App';

import * as getData from '@/client/getCharacters';

import { server } from '@/__tests__/mocks/node';
import { http, HttpResponse } from 'msw';

import '@testing-library/jest-dom/vitest';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('tests App', () => {
  describe('tests integration ', () => {
    it('should get data when App render', () => {
      const getCharactersSpy = vi.spyOn(getData, 'getCharacters');
      render(<App />);
      expect(getCharactersSpy).toHaveBeenCalled();
    });
  });

  describe('tests handles API error responses', () => {
    const serverError = 500;
    it('should return message with api error', async () => {
      server.use(
        http.get('https://rickandmortyapi.com/api/character', async () => {
          return HttpResponse.text('Error', { status: serverError });
        })
      );

      render(<App />);

      expect(
        await screen.findByText('Server not responding, try later')
      ).toBeVisible();
    });
  });
});
