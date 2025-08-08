import { it, expect, describe, vi, beforeEach } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Card } from '@/components';

import '@testing-library/jest-dom/vitest';

import { MemoryRouter } from 'react-router-dom';

import * as useTheme from '@/hooks/useTheme';

import { Provider } from 'react-redux';
import store from '@/store';
import renderWithProvider from '@/__tests__/utils/renderWithProvider';

import data from '@/__tests__/mocks/characters.json';
import userEvent from '@testing-library/user-event';

describe('testing Card', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  const mockData = {
    id: 1,
    gender: 'uncnown',
    image: 'no',
    name: 'Alya',
    status: 'Alive',
  };

  describe.each([
    {
      props: mockData,
      expected: {
        name: 'Full name: Alya',
        image: 'no',
        gender: 'Gender: uncnown',
        status: 'Status: Alive',
      },
    },
    {
      props: undefined,
      expected: {
        name: 'Full name: empty',
        image: 'empty',
        gender: 'Gender: empty',
        status: 'Status: empty',
      },
    },
  ])('tests rendering', ({ props, expected }) => {
    it('should show card with props or without props', () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Card page={1} character={props} />
          </MemoryRouter>
        </Provider>
      );
      expect(screen.getByText(expected.name)).toBeVisible();
      expect(screen.getByText(expected.status)).toBeVisible();
      expect(screen.getByText(expected.gender)).toBeVisible();
      expect(screen.getByRole('img')).toHaveAttribute('src', expected.image);
    });
  });

  it('should call useTheme when component rendering', async () => {
    const spyTheme = vi.spyOn(useTheme, 'default');
    renderWithProvider(
      <MemoryRouter>
        <Card page={1} character={data[0]} />,
      </MemoryRouter>,
      { initialState: data }
    );
    expect(spyTheme).toHaveBeenCalled();
  });

  it('should if iten in redux checkbox - checked', () => {
    renderWithProvider(
      <MemoryRouter>
        <Card page={1} character={data[0]} />,
      </MemoryRouter>,
      { initialState: data }
    );

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should if iten not in redux checkbox - not-checked', async () => {
    renderWithProvider(
      <MemoryRouter>
        <Card page={1} character={data[0]} />,
      </MemoryRouter>,
      { initialState: data }
    );
    await userEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });
});
