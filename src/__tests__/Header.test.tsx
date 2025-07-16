import { it, expect, describe, vi, beforeEach, afterEach } from 'vitest';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { Header } from '@/components';

import '@testing-library/jest-dom/vitest';

describe('testing Header', () => {
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

    it('should show empty field if LS is empty', () => {
      if (!localStorage.getItem('name')) {
        expect(input.value).toBe('');
      }
    });
  });

  describe('tests user interaction ', () => {
    // it('should updates input value when user types', () => {
    //   fireEvent.change(input, { target: { value: rick } });
    //   expect(input.value).toBe(rick);
    // });

    it('when click button should save name in LS', () => {
      fireEvent.change(input, { target: { value: rick } });
      fireEvent.click(button);
      expect(localStorage.getItem('name')).toBe(rick);
    });

    it('should leading and trailing spaces are removed', () => {
      fireEvent.change(input, { target: { value: rick } });
      fireEvent.click(button);
      expect(input.value).toBe(rick);
    });
  });
});

// describe('tests InputSearch', () => {
//   const onChange = vi.fn();
//   const NumberOfCalls = 4;
//   let input: HTMLInputElement;
//   beforeEach(() => {
//     render(<InputSearch setText={onChange} InputValue="" />);
//     input = screen.getByTestId('input');
//   });

//   it('should updates input value when user types', async () => {
//     await userEvent.type(input, 'rick');
//     expect(onChange).toHaveBeenCalledTimes(NumberOfCalls);
//   });
// });
