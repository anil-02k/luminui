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
export declare const Button: React.FC<ButtonProps>;
