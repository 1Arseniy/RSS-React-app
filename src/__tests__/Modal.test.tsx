import { it, describe, expect } from 'vitest';

import store from '@/store';

import { Provider } from 'react-redux';

import { Modal } from '@/views';

import '@testing-library/jest-dom/vitest';

import { render, screen, waitFor } from '@testing-library/react';

import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('tests Modal', () => {
  it('should show loader for user when get data', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Modal />
        </Provider>
      </MemoryRouter>
    );
    const loader = screen.getByTestId('loader');
    expect(loader).toBeVisible();
    expect(screen.getByRole('button', { name: 'Close' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Refresh call' })).toBeVisible();
  });

  it('should show message if id not found', async () => {
    render(
      <MemoryRouter initialEntries={['/details/9999']}>
        <Provider store={store}>
          <Routes>
            <Route path="details/:id" element={<Modal />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(
        screen.getByText('Сharacter with this id not found')
      ).toBeVisible();
    });
  });

  it('should show right card with data', async () => {
    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Provider store={store}>
          <Routes>
            <Route path="details/:id" element={<Modal />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByText('Full name: Rick Sanchez')).toBeVisible();
      expect(screen.getByText('Gender: Male')).toBeVisible();
      expect(screen.getByText('Status: Alive')).toBeVisible();
    });
  });
});
