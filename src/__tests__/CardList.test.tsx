import { it, expect, describe, vi, afterEach } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';

import { CardList } from '@/components';

import '@testing-library/jest-dom/vitest';
import data from '@/__tests__/mocks/characters.json';

describe('testing CardList', () => {
  describe('tests rendering', () => {
    const mockFunc = vi.fn();
    const arrlength = 20;

    afterEach(() => {
      cleanup();
    });

    it('should show right cards length', async () => {
      render(
        <CardList
          states={{
            characterByRequest: data,
            loading: false,
            error: false,
          }}
          getByRequest={mockFunc}
        />
      );
      const cards = screen.getByTestId('cardList');
      expect(cards.children).toHaveLength(arrlength);
    });

    it('should right data', () => {
      render(
        <CardList
          states={{
            characterByRequest: data,
            loading: false,
            error: false,
          }}
          getByRequest={mockFunc}
        />
      );

      data.forEach((el) => {
        expect(screen.getByText(`Full name: ${el.name}`)).toBeVisible();
      });
    });

    it('should show message if array is empty', () => {
      render(
        <CardList
          states={{
            characterByRequest: [],
            loading: false,
            error: false,
          }}
          getByRequest={mockFunc}
        />
      );
      expect(
        screen.getByText('Сharacter with this name not found')
      ).toBeVisible();
    });

    it('should show loader before get data', () => {
      render(
        <CardList
          states={{
            characterByRequest: [],
            loading: true,
            error: false,
          }}
          getByRequest={mockFunc}
        />
      );
      const loader = screen.getByTestId('loader');
      expect(loader).toBeVisible();
    });
  });
});
