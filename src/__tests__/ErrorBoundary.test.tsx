import { it, expect, describe, vi } from 'vitest';

import { fireEvent, render, screen } from '@testing-library/react';

import { ErrorBoundary } from '@/components';

import '@testing-library/jest-dom/vitest';

const ComponentWithError = () => {
  throw new Error('Error');
};

const BuggyButton = () => {
  return (
    <button data-testid="buggyButton" onClick={() => ComponentWithError}>
      Test
    </button>
  );
};

describe('testing Error Boundary', () => {
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

  it('tests error button', () => {
    render(
      <ErrorBoundary>
        <BuggyButton />
      </ErrorBoundary>
    );

    const buggyButton = screen.getByTestId('buggyButton');
    fireEvent.click(buggyButton);
    const errorFallback = screen.getByTestId('errorFallback');
    expect(errorFallback).toBeVisible();
  });
});
