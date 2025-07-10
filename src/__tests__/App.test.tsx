import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('show text', async () => {
  it('testing app', async () => {
    render(<App />);
    const h1 = screen.queryByText('Hello');
    expect(h1);
  });
});
