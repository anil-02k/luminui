import React from 'react';
import './Accordion.css';
export interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    disabled?: boolean;
}
export interface AccordionProps {
    children: React.ReactNode;
    className?: string;
    allowMultiple?: boolean;
}
export declare const AccordionItem: React.FC<AccordionItemProps>;
export declare const Accordion: React.FC<AccordionProps>;
