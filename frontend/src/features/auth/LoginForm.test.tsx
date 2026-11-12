import { fireEvent, render, screen } from '@testing-library/react';
import { INVALID_LOGIN, LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('shows the error after a failed sign in', () => {
    render(<LoginForm />);
    fireEvent.click(screen.getByRole('button', { name: 'Sign in' }));
    expect(screen.getByRole('alert').textContent).toBe(INVALID_LOGIN);
  });
});
