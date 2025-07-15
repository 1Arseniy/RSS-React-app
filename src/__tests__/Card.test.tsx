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
      const fullName = screen.getByTestId('full-name');
      const gender = screen.getByTestId('gender');
      const status = screen.getByTestId('status');
      const img = screen.getByTestId('img');
      expect(fullName.textContent).toBe(expected.name);
      expect(gender.textContent).toBe(expected.gender);
      expect(status.textContent).toBe(expected.status);
      expect(img).toHaveAttribute('src', expected.image);
    });
  });
});
