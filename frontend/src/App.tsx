import { useState } from 'react';
import { LoginForm } from './features/auth/LoginForm';
import { ProfilePage } from './features/patient/ProfilePage';

export function App() {
  const [page, setPage] = useState<'login' | 'profile'>('login');
  return (
    <main style={{ padding: 'var(--space-4)', fontFamily: 'var(--font-body)' }}>
      <nav style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-4)' }}>
        <button onClick={() => setPage('login')}>Login</button>
        <button onClick={() => setPage('profile')}>Patient profile</button>
      </nav>
      {page === 'login' ? <LoginForm /> : <ProfilePage />}
    </main>
  );
}
