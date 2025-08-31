import { it, expect, describe, vi } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Modal } from '@/components';

import '@testing-library/jest-dom/vitest';

describe('tests Modal', () => {
  const mockFunc = vi.fn();
  it('should', () => {
    render(<Modal isOpen={true} closeModal={mockFunc} />);
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
  });
});
