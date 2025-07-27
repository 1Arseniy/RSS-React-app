import { it, expect, describe, vi } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Modal } from '@/views';

import '@testing-library/jest-dom/vitest';

describe('tests Modal', () => {
  vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
      ...actual,
      useNavigate: vi.fn(),
      useParams: () => ({ id: '1' }),
    };
  });
  it('should show loader for user when get data', () => {
    render(<Modal />);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeVisible();
    expect(screen.getByRole('button', { name: 'Close' })).toBeVisible();
  });
});
