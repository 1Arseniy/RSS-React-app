import { it, expect, describe, afterEach } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';

import { Card } from '@/components';

import '@testing-library/jest-dom/vitest';

describe('testing Card', () => {
  const mockData = {
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
      render(<Card character={props} />);
      const img = screen.getByTestId('img');
      expect(screen.getByText(expected.name)).toBeVisible();
      expect(screen.getByText(expected.status)).toBeVisible();
      expect(screen.getByText(expected.gender)).toBeVisible();
      expect(img).toHaveAttribute('src', expected.image);
    });
  });
});
