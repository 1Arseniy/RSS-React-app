import { it, expect, describe, vi } from 'vitest';

import { render, screen } from '@testing-library/react';

import { InputSearch } from '@/components';

import '@testing-library/jest-dom/vitest';

import userEvent from '@testing-library/user-event';

describe('tests InputSearch', () => {
  const onChange = vi.fn();
  const rick = 'rick';
  const NumberOfCalls = 4;

  it('should updates input value when user types', async () => {
    render(<InputSearch setText={onChange} InputValue="" />);
    const input = screen.getByTestId('input');
    await userEvent.type(input, rick);
    expect(onChange).toHaveBeenCalledTimes(NumberOfCalls);
  });
});
