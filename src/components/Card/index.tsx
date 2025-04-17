import React from 'react';
import './Card.css';
import { Button } from '../Button'; // Import your custom Button

export type CardVariant = 'japan' | 'spain' | 'india' | 'default' | string;

export interface CardProps {
  variant?: CardVariant;
  title: string;
  description: string;
  backgroundImage?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  title,
  description,
  backgroundImage,
  onClick
}) => {
  const cardStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` } 
    : {};

  return (
    <div 
      className={`card ${variant}`}
      style={cardStyle}
    >
      <h1 className="card-title">{title}</h1>
      <div className="card-bottom">
        <div className="card-text">
          <p>{description}</p>
          <div className="card-line"></div>
          <Button 
            onClick={onClick}
            variant="primary"
            size="sm"
            className="card-button"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};