import React from 'react';
import './BentoGrid.css';

type BentoCardVariant = 
  | 'cloud' 
  | 'logo' 
  | 'device' 
  | 'inbox' 
  | 'ai-gen' 
  | 'default' 
  | string;

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BentoCardVariant;
  span?: number;
  title?: string;
  description?: string;
  background?: string;
  children?: React.ReactNode;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  variant = 'default',
  span = 1,
  title,
  description,
  background,
  children,
  className = '',
  ...props
}) => {
  const cardStyle = {
    '--span': span,
    '--background': background,
  } as React.CSSProperties;

  return (
    <div 
      className={`bento-card bento-card-${variant} ${className}`}
      style={cardStyle}
      {...props}
    >
      {(title || description) && (
        <div className="bento-card-description">
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </div>
      )}
      {children && (
        <div className="bento-card-details">
          {children}
        </div>
      )}
    </div>
  );
};