import { it, expect, describe, vi, beforeEach } from 'vitest';

import { render, screen } from '@testing-library/react';

import { Modal, ControlledForm } from '@/components';

import '@testing-library/jest-dom/vitest';

import userEvent from '@testing-library/user-event';

describe('tests ControlledForm', () => {
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
        <ControlledForm onClose={mockFunc} />
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

  it('should show error if in inputs have not correct text', async () => {
    await userEvent.click(submitButton);
    expect(
      await screen.findByText('first letter must be [A-Z]')
    ).toBeInTheDocument();

    expect(
      await screen.findByText('number must be positive')
    ).toBeInTheDocument();

    expect(await screen.findByText('Invalid email format')).toBeInTheDocument();
    expect(await screen.findByText('field is required')).toBeInTheDocument();
    expect(await screen.findByText('flag must be checked')).toBeInTheDocument();
    expect(await screen.findByText('must contain [0-9]')).toBeInTheDocument();
    expect(
      await screen.findByText('must be image .png or .jpg')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('country is required field')
    ).toBeInTheDocument();
  });

  it('should hidden error if in inputs have correct text', async () => {
    await userEvent.click(submitButton);
    await userEvent.type(inputName, 'Arsen');
    await userEvent.type(inputAge, '11');
    await userEvent.type(inputEmail, 'krutoi.arseniy@gmail.com');
    await userEvent.type(inputPassword, '0Aa@');
    await userEvent.type(inputCountry, 'Belarus');
    await userEvent.click(checkbox);

    expect(
      screen.queryByText('first letter must be [A-Z]')
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText('number must be positive')
    ).not.toBeInTheDocument();

    expect(screen.queryByText('Invalid email format')).not.toBeInTheDocument();
    expect(screen.queryByText('flag must be checked')).not.toBeInTheDocument();
    expect(screen.queryByText('must contain [0-9]')).not.toBeInTheDocument();
    expect(
      screen.queryByText('country is required field')
    ).not.toBeInTheDocument();
  });
});
