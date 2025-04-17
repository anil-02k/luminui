import React from 'react';
import './BentoGrid.css';

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number;
  gap?: string;
  children: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  columns = 4,
  gap = '1rem',
  children,
  className = '',
  ...props
}) => {
  const gridStyle = {
    '--columns': columns,
    '--gap': gap,
  } as React.CSSProperties;

  return (
    <div 
      className={`bento-grid ${className}`}
      style={gridStyle}
      {...props}
    >
      {children}
    </div>
  );
};