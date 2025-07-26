import { it, expect, describe } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Modal } from '@/views';

import '@testing-library/jest-dom/vitest';

import { MemoryRouter } from 'react-router-dom';

describe('tests Modal', () => {
  it('should show loader for user when get data', () => {
    render(
      <MemoryRouter>
        <Modal />
      </MemoryRouter>
    );
    const loader = screen.getByTestId('loader');
    expect(loader).toBeVisible();
  });
});
