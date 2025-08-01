import { it, expect, describe } from 'vitest';

import { screen } from '@testing-library/react';

import { Flyout } from '@/components';

import '@testing-library/jest-dom/vitest';

import data from '@/__tests__/mocks/characters.json';

import renderWithProviders from '@/__tests__/utils/renderWithProviders';

describe('tests Flyout', () => {
  it('should show user menu with some text and two buttons: Unselect all and Download', () => {
    renderWithProviders(<Flyout />, { initialState: data });
    expect(screen.getByText('selected 20 items')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Unselect all' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Download' })).toBeVisible();
  });

  it('should hidden menu if redux not have data', () => {
    renderWithProviders(<Flyout />, { initialState: [] });
    expect(screen.queryByRole('button', { name: 'Unselect all' })).toBeNull();
  });
});
