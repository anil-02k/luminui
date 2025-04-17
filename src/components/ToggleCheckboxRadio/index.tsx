import React from 'react';
import './ToggleCheckboxRadio.css';

export type ControlVariant = 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
export type ControlSize = 'sm' | 'md' | 'lg';

export interface ToggleControlsProps {
  variant?: string;
  size?: number;
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  type: 'toggle' | 'checkbox' | 'radio';
  name?: string; // For radio buttons group
  value?: string; // For radio buttons value
}

export const ToggleControls: React.FC<ToggleControlsProps> = ({
  variant = 'default',
  size = 'md',
  label,
  helperText,
  fullWidth = false,
  className = '',
  disabled = false,
  checked = false,
  onChange,
  type,
  name,
  value,
}) => {
  const controlClasses = [
    'control',
    `control-${type}`,
    `control-${variant}`,
    `control-${size}`,
    checked ? 'control-checked' : '',
    disabled ? 'control-disabled' : '',
    fullWidth ? 'control-full-width' : '',
    className
  ].filter(Boolean).join(' ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  const renderControl = () => {
    switch (type) {
      case 'toggle':
        return (
          <label className={`toggle-container ${checked ? 'checked' : ''}`}>
            <input 
              type="checkbox" 
              checked={checked} 
              onChange={handleChange}
              disabled={disabled}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
          </label>
        );
      case 'checkbox':
        return (
          <label className="checkbox-container">
            <input 
              type="checkbox" 
              checked={checked} 
              onChange={handleChange}
              disabled={disabled}
              className="checkbox-input"
            />
            <span className="checkbox-checkmark"></span>
            {label && <span className="checkbox-label">{label}</span>}
          </label>
        );
      case 'radio':
        return (
          <label className="radio-container">
            <input 
              type="radio" 
              name={name}
              value={value}
              checked={checked} 
              onChange={handleChange}
              disabled={disabled}
              className="radio-input"
            />
            <span className="radio-checkmark"></span>
            {label && <span className="radio-label">{label}</span>}
          </label>
        );
      default:
        return null;
    }
  };

  return (
    <div className={controlClasses}>
      {type !== 'checkbox' && type !== 'radio' && label && (
        <span className="control-label">{label}</span>
      )}
      {renderControl()}
      {helperText && <span className="control-helper-text">{helperText}</span>}
    </div>
  );
};