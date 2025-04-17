import React from 'react';
import './Card.css';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'outlined' | 'elevated';
    size?: 'sm' | 'md' | 'lg';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    header?: React.ReactNode;
    footer?: React.ReactNode;
    hoverable?: boolean;
    onClick?: () => void;
    image?: {
        src: string;
        alt?: string;
        className?: string;
        text?: string;
    };
}
export declare const Card: React.FC<CardProps>;
