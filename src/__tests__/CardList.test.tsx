import { it, expect, describe, vi, afterEach } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';

import { CardList } from '@/components';

import '@testing-library/jest-dom/vitest';

describe('testing CardList', () => {
  describe('tests rendering', () => {
    const mockFunc = vi.fn();
    const arrlength = 20;
    const mockData = Array.from({ length: arrlength }, () => ({
      gender: 'man',
      image: 'empty',
      name: 'Alya',
      status: 'unknown',
    }));

    afterEach(() => {
      cleanup();
    });

    it('should show right cards length', () => {
      render(
        <CardList
          states={{
            characterByRequest: mockData,
            loading: false,
            error: false,
          }}
          getByRequest={mockFunc}
        />
      );
      const card = screen.getByTestId('cardList');
      expect(card.children).toHaveLength(arrlength);
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
      const message = screen.getByTestId('notFound');
      expect(message.textContent).toBe('Сharacter with this name not found');
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

  describe('tests error handling', () => {
    const mockFunc = vi.fn();

    it('should show error message if api call fails', () => {
      render(
        <CardList
          states={{
            characterByRequest: [],
            loading: false,
            error: true,
          }}
          getByRequest={mockFunc}
        />
      );
      const errorMessage = screen.getByTestId('errorMessage');
      expect(errorMessage.textContent).toBe('Server not responding, try later');
    });
  });
});
