import { it, expect, describe, afterEach, vi, beforeEach } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';

import { CardList } from '@/components';

import '@testing-library/jest-dom/vitest';

import data from '@/__tests__/mocks/characters.json';

import { MemoryRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import store from '@/store';

describe('testing CardList', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  describe('tests rendering', () => {
    const arrlength = 20;
    const mockFunc = vi.fn();
    const error: FetchBaseQueryError = {
      status: 404,
      data: '',
    };

    afterEach(() => {
      cleanup();
    });

    it('should show right cards length', async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <CardList
              {...{
                page: 1,
              }}
              queryResult={{
                refetch: mockFunc,
                error: undefined,
                isFetching: false,
                data: data,
              }}
            />
          </MemoryRouter>
        </Provider>
      );
      const cards = screen.getByTestId('cardList');
      expect(cards.children).toHaveLength(arrlength);
    });

    it('should display right data for user', () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <CardList
              {...{
                page: 1,
              }}
              queryResult={{
                refetch: mockFunc,
                error: undefined,
                isFetching: false,
                data: data,
              }}
            />
          </MemoryRouter>
        </Provider>
      );

      data.forEach((el) => {
        expect(screen.getByText(`Full name: ${el.name}`)).toBeVisible();
      });
    });

    it('should show message for user if no matching results found', () => {
      render(
        <MemoryRouter>
          <CardList
            {...{
              page: 1,
            }}
            queryResult={{
              refetch: mockFunc,
              error: error,
              isFetching: false,
              data: [],
            }}
          />
        </MemoryRouter>
      );
      expect(
        screen.getByText('Сharacter with this name not found')
      ).toBeVisible();
    });

    it('should show loader for user when get data', () => {
      render(
        <MemoryRouter>
          <CardList
            {...{
              page: 1,
            }}
            queryResult={{
              refetch: mockFunc,
              error: undefined,
              isFetching: true,
              data: [],
            }}
          />
        </MemoryRouter>
      );
      const loader = screen.getByTestId('loader');
      expect(loader).toBeVisible();
    });
  });
});
