import { it, expect, describe, vi, afterEach, beforeEach } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import { ErrorBoundary } from '@/components';
import { BuggyButton } from '@/components';

import '@testing-library/jest-dom/vitest';

const ComponentWithError = () => {
  throw new Error('Error');
};

describe('testing Error Boundary', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
  });

  it('tests error catching', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ComponentWithError />
      </ErrorBoundary>
    );

    const errorFallback = screen.getByTestId('errorFallback');
    expect(errorFallback).toBeVisible();
    expect(spy).toHaveBeenCalled();
  });

  it('tests error button', async () => {
    render(
      <ErrorBoundary>
        <BuggyButton styles={[]} />
      </ErrorBoundary>
    );

    const buggyButton = screen.getByRole('button');
    await userEvent.click(buggyButton);
    const errorFallback = screen.getByTestId('errorFallback');
    expect(errorFallback).toBeVisible();
  });
});
