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
export declare const Dropdown: React.FC<DropdownProps>;
