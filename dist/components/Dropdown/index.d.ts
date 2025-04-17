import React from 'react';
import './Dropdown.css';
export interface DropdownProps {
    options: string[];
    onSelect: (option: string) => void;
    label?: string;
}
export declare const Dropdown: React.FC<DropdownProps>;
