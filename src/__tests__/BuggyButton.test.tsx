import { it, expect, describe, beforeEach, afterEach } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';

import { BuggyButton } from '@/components';

import '@testing-library/jest-dom/vitest';

describe('tests BuggyButton', () => {
  let button: HTMLButtonElement;

  beforeEach(() => {
    render(<BuggyButton styles={[]} />);
    button = screen.getByRole('button', { name: 'Error' });
  });

  afterEach(() => {
    cleanup();
  });

  it('tests rendering', () => {
    expect(button).toBeVisible();
  });
});
