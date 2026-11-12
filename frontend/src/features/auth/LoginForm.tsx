import { type FormEvent, useState } from 'react';
import { Button } from '../../components/ui/Button';

export const INVALID_LOGIN = 'The email or password you entered is incorrect. Please check them and try again.';

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(INVALID_LOGIN);
  }

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: 'var(--space-3)', maxWidth: 320 }}>
      <h1>Sign in</h1>
      <input aria-label="Email" type="email" />
      <input aria-label="Password" type="password" />
      {error && (
        <p role="alert" style={{ color: 'var(--color-danger)', fontSize: 'var(--font-size-sm)' }}>
          {error}
        </p>
      )}
      <Button variant="primary" type="submit">
        Sign in
      </Button>
    </form>
  );
}
