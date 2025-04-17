import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'rectangle' | 'rounded' | 'pill' | 'circle';
  outline?: boolean;
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  shape = 'rectangle',
  outline = false,
  fullWidth = false,
  isLoading = false,
  children,
  className = '',
  ...props
}) => {
  const buttonClasses = [
    'btn',
    outline ? `btn-outline-${variant}` : `btn-${variant}`,
    `btn-${size}`,
    `btn-${shape}`,
    fullWidth ? 'btn-full' : '',
    isLoading ? 'btn-loading' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={buttonClasses} {...props}>
      {isLoading && <span className="btn-spinner" />}
      {children}
    </button>
  );
}; 