import React from 'react';
import './Input.css';

export type InputVariant = 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
  size?: number;
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  variant = 'default',
  size = 'md',
  label,
  helperText,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const inputClasses = [
    'input',
    `input-${variant}`,
    `input-${size}`,
    fullWidth ? 'input-full-width' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input className={inputClasses} {...props} />
      {helperText && <span className="input-helper-text">{helperText}</span>}
    </div>
  );
};