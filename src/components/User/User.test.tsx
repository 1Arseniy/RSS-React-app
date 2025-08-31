import { it, expect, describe } from 'vitest';

import { render, screen } from '@testing-library/react';

import { User } from '@/components';

import '@testing-library/jest-dom/vitest';

import randomHEX from '@/utils/randomHEX';

describe('tests User', () => {
  const data = {
    name: 'Arseniy',
    age: '17',
    password: '0aA@',
    gender: 'Male',
    accept: 'on',
    country: 'Belarus',
    img: 'none',
    colorCard: randomHEX(),
    email: 'krutoi333333.arseniy@gmail.com',
  };

  it('should show right data', () => {
    render(<User {...data} />);
    expect(screen.getByText('Name: Arseniy')).toBeInTheDocument();
    expect(screen.getByText('Age: 17')).toBeInTheDocument();
    expect(screen.getByText('password: 0aA@')).toBeInTheDocument();
    expect(screen.getByText('gender: Male')).toBeInTheDocument();
    expect(
      screen.getByText('Accept Terms and Conditions agreement: on')
    ).toBeInTheDocument();
    expect(screen.getByText('Country: Belarus')).toBeInTheDocument();
    expect(
      screen.getByText('Email: krutoi333333.arseniy@gmail.com')
    ).toBeInTheDocument();
  });
});
