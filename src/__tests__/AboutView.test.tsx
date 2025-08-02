import { it, expect, describe } from 'vitest';

import { render, screen } from '@testing-library/react';

import { AboutView } from '@/views';

import '@testing-library/jest-dom/vitest';

import { MemoryRouter } from 'react-router-dom';

describe('tests AboutView', () => {
  it('should show message user when redirect in about', () => {
    render(
      <MemoryRouter>
        <AboutView />
      </MemoryRouter>
    );

    expect(
      screen.getByText(
        'Hello my name is Arseniy. Successfully completed the main course. Learned a lot during the RS School course.'
      )
    ).toBeVisible();

    expect(screen.getByRole('link', { name: 'RSS React' })).toHaveAttribute(
      'href',
      'https://rs.school/courses/reactjs'
    );
  });
});
