import React from 'react';
import './Alert.css';
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success';
    size?: 'sm' | 'md' | 'lg';
    dismissible?: boolean;
    onDismiss?: () => void;
    icon?: React.ReactNode;
}
export declare const Alert: React.FC<AlertProps>;
