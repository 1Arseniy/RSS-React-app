import { it, expect, describe } from 'vitest';

import { render, screen } from '@testing-library/react';

import { BuggyButton } from '@/components';

import '@testing-library/jest-dom/vitest';

describe('tests BuggyButton', () => {
  it('tests rendering', () => {
    render(<BuggyButton styles={[]} />);
    const button = screen.getByRole('button', { name: 'Error' });
    expect(button).toBeVisible();
  });
});
