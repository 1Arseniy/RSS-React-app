import { Component } from 'react';

import { it, expect, describe, vi, afterEach } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import { ErrorBoundary } from '@/components';

import '@testing-library/jest-dom/vitest';

const ComponentWithError = () => {
  throw new Error('Error');
};

class BuggyButton extends Component<object, { error: boolean }> {
  state = { error: false };

  Click = () => {
    this.setState({ error: true });
  };

  render() {
    if (this.state.error) {
      ComponentWithError();
    }

    return (
      <button data-testid="buggyButton" onClick={this.Click}>
        Test
      </button>
    );
  }
}

describe('testing Error Boundary', () => {
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
        <BuggyButton />
      </ErrorBoundary>
    );

    const buggyButton = screen.getByTestId('buggyButton');
    await userEvent.click(buggyButton);
    const errorFallback = screen.getByTestId('errorFallback');
    expect(errorFallback).toBeVisible();
  });
});
