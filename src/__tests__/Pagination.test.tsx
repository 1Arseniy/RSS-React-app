import { it, expect, describe, vi, beforeEach } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Pagination } from '@/components';

import '@testing-library/jest-dom/vitest';

import data from '@/__tests__/mocks/characters.json';

import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import type { TypeProps } from '@/types/types';
import { useState } from 'react';

function PaginationWrapper() {
  const mockFunc = vi.fn();
  const [state, setState] = useState<TypeProps>({
    page: 1,
    name: '',
  });
  return (
    <Pagination
      states={state}
      queryResult={{
        refetch: mockFunc,
        isError: false,
        error: undefined,
        isFetching: false,
        data: data,
      }}
      setState={setState}
    />
  );
}

describe('tests Pagination', () => {
  let prevButton: HTMLButtonElement;
  let nextButton: HTMLButtonElement;
  let refreshButton: HTMLButtonElement;
  beforeEach(() => {
    render(
      <MemoryRouter>
        <PaginationWrapper />
      </MemoryRouter>
    );
    prevButton = screen.getByRole('button', { name: 'Prev' });
    nextButton = screen.getByRole('button', { name: 'Next' });
    refreshButton = screen.getByRole('button', { name: 'Refresh Call' });
  });

  it('should show user buttons: prev, next and curent page', () => {
    expect(prevButton).toBeVisible();
    expect(nextButton).toBeVisible();
    expect(refreshButton).toBeVisible();
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
