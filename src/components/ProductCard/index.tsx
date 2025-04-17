import * as React from 'react';
import './ProductCard.css';
import { Button } from '../Button';

export interface ProductCardProps {
  imageUrl: string;
  altText?: string;
  title: string;
  description: string;
  tags?: string[];
  price: string;
  isFavorite?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  altText = '',
  title,
  description,
  tags = [],
  price,
  isFavorite = false,
}) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={imageUrl} alt={altText} className="product-image" />
        <span className={`favorite-star ${isFavorite ? 'active' : ''}`}>
          ★
        </span>
      </div>
      
      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        
        {tags.length > 0 && (
          <div className="product-tags">
            {tags.map((tag, index) => (
              <span key={index} className="product-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="product-action">
          <span className="product-price">{price}</span>
          <Button 
            variant="primary"
            size="sm"
            className="order-button"
          >
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};