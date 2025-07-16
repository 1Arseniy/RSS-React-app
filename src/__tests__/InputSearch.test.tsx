import { it, expect, describe, vi, beforeEach } from 'vitest';

import { render, screen } from '@testing-library/react';

import { InputSearch } from '@/components';

import '@testing-library/jest-dom/vitest';

import userEvent from '@testing-library/user-event';

describe('tests InputSearch', () => {
  const onChange = vi.fn();
  const rick = 'rick';
  const NumberOfCalls = 4;
  let input: HTMLInputElement;

  beforeEach(() => {
    render(<InputSearch setText={onChange} InputValue="" />);
    input = screen.getByTestId('input');
  });

  it('should updates input value when user types', async () => {
    await userEvent.type(input, rick);
    expect(onChange).toHaveBeenCalledTimes(NumberOfCalls);
  });
});
