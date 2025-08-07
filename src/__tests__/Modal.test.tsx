import { it, describe, expect } from 'vitest';

import store from '@/store';

import { Provider } from 'react-redux';

import { Modal } from '@/views';

import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';

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

    expect(
      await screen.findByText('Сharacter with this id not found')
    ).toBeVisible();
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

    expect(await screen.findByText('Full name: Rick Sanchez')).toBeVisible();
    expect(await screen.findByText('Gender: Male')).toBeVisible();
    expect(await screen.findByText('Status: Alive')).toBeVisible();
  });
});
