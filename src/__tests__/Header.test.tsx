import { it, expect, describe, vi, beforeEach, afterEach } from 'vitest';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { Header } from '@/components';

import '@testing-library/jest-dom/vitest';

describe('testing Header', () => {
  describe('tests rendering', () => {
    const rick = 'rick';
    localStorage.setItem('name', rick);
    const mockFunc = vi.fn();
    let input: HTMLInputElement;
    let button: HTMLButtonElement;

    beforeEach(() => {
      render(<Header getByRequest={mockFunc} />);
      input = screen.getByRole('textbox');
      button = screen.getByRole('button', { name: 'Search' });
    });

    afterEach(() => {
      cleanup();
    });

    it('should render button Search', () => {
      expect(button).toBeVisible();
    });

    it('should render input', () => {
      expect(input).toBeVisible();
    });

    it('should show name from LS', () => {
      expect(input.value).toBe(rick);
    });

    it('should show empty field if LS is empty', () => {
      if (!localStorage.getItem('name')) {
        expect(input.value).toBe('');
      }
    });
  });

  describe('tests user interaction ', () => {
    const rick = 'rick';
    localStorage.setItem('name', rick);
    const mockFunc = vi.fn();
    let input: HTMLInputElement;
    let button: HTMLButtonElement;
    beforeEach(() => {
      render(<Header getByRequest={mockFunc} />);
      input = screen.getByRole('textbox');
      button = screen.getByRole('button', { name: 'Search' });
    });

    afterEach(() => {
      cleanup();
    });

    it('should updates input value when user types', () => {
      fireEvent.change(input, rick);
      expect(input.value).toBe(rick);
    });

    it('when click button should save name in LS', () => {
      fireEvent.change(input, rick);
      fireEvent.click(button);
      expect(localStorage.getItem('name')).toBe(rick);
    });

    it('should leading and trailing spaces are removed', () => {
      fireEvent.change(input, rick);
      fireEvent.click(button);
      expect(input.value).toBe(rick);
    });
  });
});
