import { it, expect, describe } from 'vitest';

import { render, screen } from '@testing-library/react';

import { PasswordStrength } from '@/components';

import '@testing-library/jest-dom/vitest';

describe('tests PasswordStrength', () => {
  it('should show "Easy password"', () => {
    render(<PasswordStrength strLength={3} />);
    expect(screen.getByText('Easy password')).toBeInTheDocument();
  });
  it('should show "Medium password"', () => {
    render(<PasswordStrength strLength={5} />);
    expect(screen.getByText('Medium password')).toBeInTheDocument();
  });
  it('should show "Difficult password"', () => {
    render(<PasswordStrength strLength={8} />);
    expect(screen.getByText('Difficult password')).toBeInTheDocument();
  });
});
