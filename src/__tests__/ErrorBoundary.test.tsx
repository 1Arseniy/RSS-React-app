import { it, expect, describe, vi, beforeEach } from 'vitest';

import { render, screen } from '@testing-library/react';

import { ErrorBoundary } from '@/components';

import '@testing-library/jest-dom/vitest';

const ComponentWithError = () => {
  throw new Error('Error');
};

describe('testing Error Boundary', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('tests error catching', async () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});
    render(
      <ErrorBoundary>
        <ComponentWithError />
      </ErrorBoundary>
    );

    expect(
      screen.getByText('Something went wrong, the button below should help')
    ).toBeVisible();
    expect(spy).toHaveBeenCalled();
  });
});
