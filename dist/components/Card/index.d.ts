import React from 'react';
import './Card.css';
export type CardVariant = 'japan' | 'spain' | 'india' | 'default' | string;
export interface CardProps {
    variant?: CardVariant;
    title: string;
    description: string;
    backgroundImage?: string;
    onClick?: () => void;
}
export declare const Card: React.FC<CardProps>;
