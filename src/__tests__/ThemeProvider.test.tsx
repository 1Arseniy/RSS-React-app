import { it, expect, describe } from 'vitest';

import { render, screen } from '@testing-library/react';

import { ThemeProvider } from '@/context/ThemeProvider';

import '@testing-library/jest-dom/vitest';

import store from '@/store';
import { Provider } from 'react-redux';

import useTheme from '@/hooks/useTheme';

import { Button } from '@/components';

import userEvent from '@testing-library/user-event';

function TestComponent() {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <div data-testid="isClass" className={darkTheme ? 'Dark' : 'White'}>
      <Button onClick={toggleTheme}>Click</Button>
    </div>
  );
}

describe('tests ThemeProvider', () => {
  it('should ', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>
      </Provider>
    );
    const div = screen.getByTestId('isClass');
    expect(div.classList.contains('White')).toBe(true);
    await userEvent.click(screen.getByRole('button', { name: 'Click' }));
    expect(div.classList.contains('Dark')).toBe(true);
  });
});
