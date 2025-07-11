import { it, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';
import '@testing-library/jest-dom/vitest';

describe('show button and show input in Header', () => {
  const rick = 'rick';
  localStorage.setItem('name', rick);
  const mockFunc = vi.fn();
  render(<Header getByRequest={mockFunc} />);

  it('should render button Search', () => {
    const button = screen.getByRole('button', { name: 'Search' });
    expect(button).toBeVisible();
  });

  it('should render input', () => {
    const input: HTMLInputElement = screen.getByRole('textbox');
    expect(input).toBeVisible();
    expect(input.value).toBe(rick);
    if (!localStorage.getItem('name')) {
      expect(input.value).toBe('');
    }
  });
});
