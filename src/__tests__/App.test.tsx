import { it, expect, describe, beforeEach } from 'vitest';

import { screen } from '@testing-library/react';

import { render } from '@testing-library/react';

import App from '@/App';

import '@testing-library/jest-dom/vitest';

import userEvent from '@testing-library/user-event';

describe('tests App', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should show 2 button - "Show uncontrolled form", "Show controlled form" ', () => {
    expect(
      screen.getByRole('button', { name: 'Show uncontrolled form' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Show controlled form' })
    ).toBeInTheDocument();
  });

  it('should show modal with uncontrolled form if click - "Show uncontrolled form"', async () => {
    await userEvent.click(
      screen.getByRole('button', { name: 'Show uncontrolled form' })
    );
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
  });

  it('should show modal with controlled form if click - "Show controlled form', async () => {
    await userEvent.click(
      screen.getByRole('button', { name: 'Show controlled form' })
    );
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
  });

  it('should close modal if click - "Close"', async () => {
    await userEvent.click(
      screen.getByRole('button', { name: 'Show controlled form' })
    );

    await userEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(
      screen.getByRole('button', { name: 'Show uncontrolled form' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Show controlled form' })
    ).toBeInTheDocument();
  });

  it('should close modal if click - outside the modal', async () => {
    await userEvent.click(
      screen.getByRole('button', { name: 'Show controlled form' })
    );
    await userEvent.click(screen.getByTestId('close-modal'));

    expect(
      screen.getByRole('button', { name: 'Show uncontrolled form' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Show controlled form' })
    ).toBeInTheDocument();
  });
});
