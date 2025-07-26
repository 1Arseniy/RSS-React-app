import { it, expect, describe, afterEach } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';

import { ModalContent } from '@/views';

import '@testing-library/jest-dom/vitest';

import data from '@/__tests__/mocks/characters.json';

import { MemoryRouter } from 'react-router-dom';

describe('tests ModalContent', () => {
  afterEach(() => {
    cleanup();
  });
  it('should display right data for user', () => {
    render(
      <MemoryRouter>
        <ModalContent
          modalStates={{
            loading: false,
            character: data[0],
          }}
        />
      </MemoryRouter>
    );
    expect(screen.getByText(`Full name: ${data[0].name}`)).toBeVisible();
    expect(screen.getByText(`Gender: ${data[0].gender}`)).toBeVisible();
    expect(screen.getByText(`Status: ${data[0].status}`)).toBeVisible();
    expect(screen.getByRole('img')).toHaveAttribute('src', data[0].image);
  });
});
