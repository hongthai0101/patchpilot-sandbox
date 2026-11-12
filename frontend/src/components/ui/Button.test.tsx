import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('defaults to the neutral variant', () => {
    render(<Button>Go</Button>);
    expect(screen.getByRole('button', { name: 'Go' }).dataset.variant).toBe('neutral');
  });

  it('renders the primary variant', () => {
    render(<Button variant="primary">Save</Button>);
    expect(screen.getByRole('button', { name: 'Save' }).dataset.variant).toBe('primary');
  });
});
