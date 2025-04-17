import React from 'react';
import './Alert.css';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success';
  size?: 'sm' | 'md' | 'lg';
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'primary',
  size = 'md',
  dismissible = false,
  onDismiss,
  icon,
  children,
  className = '',
  ...props
}) => {
  const alertClasses = [
    'alert',
    `alert-${variant}`,
    `alert-${size}`,
    dismissible ? 'alert-dismissible' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={alertClasses} role="alert" {...props}>
      {icon && <span className="alert-icon">{icon}</span>}
      <div className="alert-content">{children}</div>
      {dismissible && (
        <button
          className="alert-dismiss"
          onClick={onDismiss}
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  );
}; 