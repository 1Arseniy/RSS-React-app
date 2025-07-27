import { it, expect, describe } from 'vitest';

import { render, screen } from '@testing-library/react';

import { NotFoundView } from '@/views';

import '@testing-library/jest-dom/vitest';

import { MemoryRouter } from 'react-router-dom';

describe('tests NotFoundView', () => {
  it('should show message user if the route is not found', () => {
    render(
      <MemoryRouter>
        <NotFoundView />
      </MemoryRouter>
    );

    expect(screen.getByText('Page is not found')).toBeVisible();
    expect(screen.getByRole('link', { name: 'Go to Home' })).toBeVisible();
  });
});
