import type { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'neutral';

const styles: Record<ButtonVariant, { background: string; color: string }> = {
  primary: { background: 'var(--color-primary)', color: 'var(--color-primary-text)' },
  neutral: { background: 'var(--color-neutral)', color: 'var(--color-neutral-text)' },
};

export function Button({
  variant = 'neutral',
  style,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  return (
    <button
      data-variant={variant}
      style={{
        ...styles[variant],
        border: 'none',
        borderRadius: 'var(--radius)',
        padding: 'var(--space-2) var(--space-4)',
        cursor: 'pointer',
        ...style,
      }}
      {...props}
    />
  );
}
