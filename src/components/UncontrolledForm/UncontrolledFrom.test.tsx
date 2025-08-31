import { it, expect, describe, vi, beforeEach } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Modal, UncontrolledForm } from '@/components';

import '@testing-library/jest-dom/vitest';

import userEvent from '@testing-library/user-event';

describe('tests UncontrolledForm', () => {
  const mockFunc = vi.fn();
  let inputName: HTMLInputElement;
  let submitButton: HTMLButtonElement;
  let inputAge: HTMLInputElement;
  let inputEmail: HTMLInputElement;
  let inputPassword: HTMLInputElement;
  let checkbox: HTMLInputElement;
  let inputCountry: HTMLInputElement;
  beforeEach(() => {
    render(
      <Modal isOpen={true} closeModal={mockFunc}>
        <UncontrolledForm onClose={mockFunc} />
      </Modal>
    );
    inputName = screen.getByPlaceholderText('Name');
    submitButton = screen.getByRole('button', { name: 'Submit' });
    inputAge = screen.getByPlaceholderText('Age');
    inputEmail = screen.getByPlaceholderText('Email');
    inputPassword = screen.getByPlaceholderText('Password');
    checkbox = screen.getByRole('checkbox');
    inputCountry = screen.getByPlaceholderText('Country');
  });

  it('should show error if in input have not correct text', async () => {
    await userEvent.type(inputName, 'cmdmcdm');
    await userEvent.click(submitButton);
    expect(
      await screen.findByText('first letter must be [A-Z]')
    ).toBeInTheDocument();
  });

  it('if user type correct data in input type "Name" error hidden', async () => {
    await userEvent.type(inputName, 'Arseniy');
    await userEvent.click(submitButton);
    expect(
      screen.queryByText('first letter must be [A-Z]')
    ).not.toBeInTheDocument();
  });

  it('should show error if in input have negative value', async () => {
    await userEvent.type(inputAge, '-1');
    await userEvent.click(submitButton);
    expect(
      await screen.findByText('number must be positive')
    ).toBeInTheDocument();
  });

  it('if user type correct data in input type "Age" error hidden', async () => {
    await userEvent.type(inputAge, '11');
    await userEvent.click(submitButton);
    expect(
      screen.queryByText('number must be positive')
    ).not.toBeInTheDocument();
  });

  it('if user type correct data in input type "Email" error hidden', async () => {
    await userEvent.type(inputEmail, 'krutoi.arseniy@gmail.com');
    await userEvent.click(submitButton);
    expect(screen.queryByText('Invalid email format')).not.toBeInTheDocument();
  });

  it('should show error if in input have not correct data', async () => {
    await userEvent.type(inputPassword, 'icndnc');
    await userEvent.click(submitButton);
    expect(
      await screen.findByText(
        'must contain [0-9], must contain [A-Z], must contain one special character'
      )
    ).toBeInTheDocument();
  });

  it('if user type correct data in input type "password" error hidden', async () => {
    await userEvent.type(inputPassword, '0Aa@');
    await userEvent.click(submitButton);
    expect(
      screen.queryByText(
        'must contain [0-9], must contain [A-Z], must contain one special character, must contain [a-z]'
      )
    ).not.toBeInTheDocument();
  });

  it('should show error if flag not checked', async () => {
    await userEvent.click(submitButton);
    expect(await screen.findByText('flag must be checked')).toBeInTheDocument();
  });

  it('should not show error if flag checked', async () => {
    userEvent.click(checkbox);
    await userEvent.click(submitButton);
    expect(screen.queryByText('flag must be checked')).not.toBeInTheDocument();
  });

  it('should show error if country not selected', async () => {
    await userEvent.click(submitButton);
    expect(
      await screen.findByText('country is required field')
    ).toBeInTheDocument();
  });

  it('should not show error if country selected', async () => {
    await userEvent.type(inputCountry, 'Belarus');
    await userEvent.click(submitButton);

    expect(
      screen.queryByText('country is required field')
    ).not.toBeInTheDocument();
  });
});
