import { it, expect, describe, vi, beforeEach } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Pagination } from '@/components';

import '@testing-library/jest-dom/vitest';

import data from '@/__tests__/mocks/characters.json';

import { MemoryRouter } from 'react-router-dom';

describe('tests Pagination', () => {
  const mockFunc = vi.fn();
  let prevButton: HTMLButtonElement;
  let nextButton: HTMLButtonElement;
  let refreshButton: HTMLButtonElement;
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Pagination
          states={{
            name: '',
            page: 2,
          }}
          queryResult={{
            refetch: mockFunc,
            isError: false,
            error: undefined,
            isFetching: false,
            data: data,
          }}
          setState={mockFunc}
        />
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
    expect(screen.getByText('2')).toBeVisible();
  });
});
