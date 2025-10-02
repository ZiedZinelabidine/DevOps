import React from 'react';
import styled from 'styled-components';

const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s;
  
  ${({ priceLevel }) => {
    switch (priceLevel) {
      case 'premium':
        return `
          background: #fef2f2;
          color: #991b1b;
        `;
      case 'high':
        return `
          background: #fff7ed;
          color: #9a3412;
        `;
      case 'medium':
        return `
          background: #fefce8;
          color: #854d0e;
        `;
      default:
        return `
          background: #f0fdf4;
          color: #166534;
        `;
    }
  }}

  &:hover {
    transform: scale(1.05);
  }
`;


const PriceTag = ({ minPrice, className }) => {
  const formattedPrice = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(minPrice);

  const getPriceLevel = (price) => {
    if (price >= 10000) return 'premium';
    if (price >= 7000) return 'high';
    if (price >= 5000) return 'medium';
    return 'low';
  };

  return (
    <Tag priceLevel={getPriceLevel(minPrice)} className={className}>
      À partir de {formattedPrice}
    </Tag>
  );
};

export default PriceTag;