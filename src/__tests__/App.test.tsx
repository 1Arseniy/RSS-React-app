import {
  it,
  expect,
  describe,
  vi,
  beforeAll,
  afterAll,
  afterEach,
  beforeEach,
} from 'vitest';

import { render, screen } from '@testing-library/react';

import App from '@/App';

import { server } from '@/__tests__/mocks/node';
import { http, HttpResponse } from 'msw';

import { Provider } from 'react-redux';
import store from '@/store';

import '@testing-library/jest-dom/vitest';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('tests App', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  describe('tests handles API error responses', () => {
    const serverError = 500;
    it('should return message with api error', async () => {
      server.use(
        http.get('https://rickandmortyapi.com/api/character', async () => {
          return HttpResponse.text('Error', { status: serverError });
        })
      );

      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      expect(
        await screen.findByText('Server not responding, try later')
      ).toBeVisible();
    });
  });
});
