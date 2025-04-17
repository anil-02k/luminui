import React from 'react';
import './Dropdown.css';

export type DropdownVariant = 'slate' | 'green' | 'blue' | 'yellow' | 'black';
export type DropdownShape = 'rounded' | 'semi-square' | 'default';

export interface DropdownProps {
  options: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
  variant?: DropdownVariant;
  shape?: DropdownShape;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  variant = 'slate',
  shape = 'default',
  placeholder = 'Select an option',
  value,
  onChange,
  className = ''
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const dropdownClasses = [
    'styled-dropdown',
    variant,
    shape !== 'default' ? shape : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={dropdownClasses}>
      <select 
        value={value}
        onChange={handleChange}
        className="dropdown-select"
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option 
            key={option.value} 
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};