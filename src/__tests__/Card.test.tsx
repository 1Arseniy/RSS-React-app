import { it, expect, describe, afterEach } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';

import { Card } from '@/components';

import '@testing-library/jest-dom/vitest';

import { MemoryRouter } from 'react-router-dom';

describe('testing Card', () => {
  const mockData = {
    id: 1,
    gender: 'uncnown',
    image: 'no',
    name: 'Alya',
    status: 'Alive',
  };

  afterEach(() => {
    cleanup();
  });

  describe.each([
    {
      props: mockData,
      expected: {
        name: 'Full name: Alya',
        image: 'no',
        gender: 'Gender: uncnown',
        status: 'Status: Alive',
      },
    },
    {
      props: undefined,
      expected: {
        name: 'Full name: empty',
        image: 'empty',
        gender: 'Gender: empty',
        status: 'Status: empty',
      },
    },
  ])('tests rendering', ({ props, expected }) => {
    it('should show card with props or without props', () => {
      render(
        <MemoryRouter>
          <Card
            states={{
              characterByRequest: [],
              loading: false,
              error: false,
              page: 1,
              isOpen: false,
            }}
            character={props}
          />
        </MemoryRouter>
      );
      expect(screen.getByText(expected.name)).toBeVisible();
      expect(screen.getByText(expected.status)).toBeVisible();
      expect(screen.getByText(expected.gender)).toBeVisible();
      expect(screen.getByRole('img')).toHaveAttribute('src', expected.image);
    });
  });
});
