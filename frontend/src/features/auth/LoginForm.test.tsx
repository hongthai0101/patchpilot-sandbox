import { fireEvent, render, screen } from '@testing-library/react';
import { INVALID_LOGIN, LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('shows the error after a failed sign in', () => {
    render(<LoginForm />);
    fireEvent.click(screen.getByRole('button', { name: 'Sign in' }));
    expect(screen.getByRole('alert').textContent).toBe(INVALID_LOGIN);
  });

  it('lets the error wrap instead of clipping it', () => {
    render(<LoginForm />);
    fireEvent.click(screen.getByRole('button', { name: 'Sign in' }));
    const { style } = screen.getByRole('alert');
    expect(style.whiteSpace).not.toBe('nowrap');
    expect(style.textOverflow).not.toBe('ellipsis');
    expect(style.color).toBe('var(--color-danger)');
    expect(style.fontSize).toBe('var(--font-size-sm)');
  });
});
