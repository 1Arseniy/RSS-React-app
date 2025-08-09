import { it, expect, describe, beforeEach } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Pagination } from '@/components';

import '@testing-library/jest-dom/vitest';

import { MemoryRouter } from 'react-router-dom';

import userEvent from '@testing-library/user-event';

import type { TypeProps } from '@/types/types';

import { useState } from 'react';

function PaginationWrapper() {
  const [state, setState] = useState<TypeProps>({
    page: 1,
    name: '',
  });
  return <Pagination states={state} setState={setState} />;
}

describe('tests Pagination', () => {
  let prevButton: HTMLButtonElement;
  let nextButton: HTMLButtonElement;
  beforeEach(() => {
    render(
      <MemoryRouter>
        <PaginationWrapper />
      </MemoryRouter>
    );
    prevButton = screen.getByRole('button', { name: 'Prev' });
    nextButton = screen.getByRole('button', { name: 'Next' });
  });

  it('should show user buttons: prev, next and curent page', () => {
    expect(prevButton).toBeVisible();
    expect(nextButton).toBeVisible();
    expect(screen.getByText('1')).toBeVisible();
  });

  it('page should be increased when user click "Next button"', async () => {
    await userEvent.click(nextButton);
    expect(screen.getByText('2')).toBeVisible();
  });

  it('the page should shrink when the user clicks the "Prev button"', async () => {
    await userEvent.click(prevButton);
    expect(screen.getByText('1')).toBeVisible();
  });
});
