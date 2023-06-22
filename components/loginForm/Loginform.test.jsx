// LoginForm.test.js
import { fireEvent, render } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  test('renders correctly with input fields and submit button', () => {
    const onSubmit = jest.fn();

    const { getByPlaceholderText, getByText } = render(<LoginForm onSubmit={onSubmit} />);

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const submitButton = getByText('Login');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('displays validation error if fields are empty', () => {
    const onSubmit = jest.fn();

    const { getByText } = render(<LoginForm onSubmit={onSubmit} />);

    const submitButton = getByText('Login');
    fireEvent.click(submitButton);

    const errorMessage = getByText('Please fill in both fields');
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays validation error if email is invalid', () => {
    const onSubmit = jest.fn();

    const { getByPlaceholderText, getByText } = render(<LoginForm onSubmit={onSubmit} />);

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    fireEvent.change(emailInput, { target: { value: 'invalid_email' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(submitButton);

    const errorMessage = getByText('Please enter a valid email address');
    expect(errorMessage).toBeInTheDocument();
  });

  test('calls onSubmit callback with correct values when form is submitted', () => {
    const onSubmit = jest.fn();

    const { getByPlaceholderText, getByText } = render(<LoginForm onSubmit={onSubmit} />);

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    const submitButton = getByText('Login');
    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalledWith('john.doe@example.com', 'password123');
  });
});
