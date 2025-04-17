import React from 'react';
import './Card.css';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'outline' | 'elevated';
    size?: 'sm' | 'md' | 'lg';
    imageSrc?: string;
    imageAlt?: string;
    title?: string;
    subtitle?: string;
    footer?: React.ReactNode;
}
export declare const Card: React.FC<CardProps>;
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    action?: React.ReactNode;
}
export declare const CardHeader: React.FC<CardHeaderProps>;
export {};
