import { it, expect, describe, vi, beforeEach, afterEach } from 'vitest';

import { cleanup, render, screen } from '@testing-library/react';

import { Header } from '@/components';

import '@testing-library/jest-dom/vitest';

import userEvent from '@testing-library/user-event';

describe('testing Header', () => {
  const rick = 'rick';
  const mockFunc = vi.fn();
  let input: HTMLInputElement;
  let button: HTMLButtonElement;

  beforeEach(() => {
    localStorage.setItem('name', rick);
    render(<Header getByRequest={mockFunc} />);
    input = screen.getByRole('textbox');
    button = screen.getByRole('button', { name: 'Search' });
  });

  afterEach(() => {
    cleanup();
  });

  describe('tests rendering', () => {
    it('should render button Search', () => {
      expect(button).toBeVisible();
    });

    it('should render input', () => {
      expect(input).toBeVisible();
    });

    it('should show name from LS', () => {
      expect(input.value).toBe(rick);
    });
  });
});

describe.each([
  ['rick', 'rick'],
  ['Alya       ', 'Alya'],
  ['Shanks  ', 'Shanks'],
])('tests user interaction', (value, expected) => {
  const mockFunc = vi.fn();
  let input: HTMLInputElement;
  let button: HTMLButtonElement;

  beforeEach(() => {
    localStorage.clear();
    render(<Header getByRequest={mockFunc} />);
    input = screen.getByRole('textbox');
    button = screen.getByRole('button', { name: 'Search' });
  });

  afterEach(() => {
    cleanup();
  });

  it('when click button should save name in LS', async () => {
    await userEvent.type(input, value);
    await userEvent.click(button);
    expect(localStorage.getItem('name')).toBe(expected);
  });

  it('should leading and trailing spaces are removed', async () => {
    await userEvent.type(input, value);
    await userEvent.click(button);
    expect(input.value).toBe(expected);
  });

  it('should show empty field if LS is empty', () => {
    expect(input.value).toBe('');
  });
});
