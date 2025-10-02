import React from 'react';
import styled from 'styled-components';
import { EuroIcon } from 'lucide-react';
import { getMaxPrice } from '../../../data/agencies';

const FilterContainer = styled.div`
  margin-bottom: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: var(--color-primary);
  }
`;

const ResetButton = styled.button`
  font-size: 0.75rem;
  color: var(--color-primary);
  transition: color 0.2s;

  &:hover {
    color: #1d4ed8;
  }
`;

const RangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RangeInput = styled.input`
  width: 100%;
  height: 0.5rem;
  border-radius: 0.25rem;
  background: var(--color-background);
  cursor: pointer;
  appearance: none;
  
  &::-webkit-slider-thumb {
    appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background: var(--color-primary);
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
    }
  }
`;

const RangeLabels = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RangeLabel = styled.span`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`;

const CurrentPrice = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-primary);
`;


const PriceFilter = ({ maxPrice, onChange }) => {
  const highestPrice = getMaxPrice();
  const defaultMaxPrice = maxPrice === null ? highestPrice : maxPrice;
  
  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    onChange(value);
  };

  const handleReset = () => {
    onChange(null);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <FilterContainer>
      <Header>
        <Title>
          <EuroIcon size={18} />
          Budget maximum
        </Title>
        
        {maxPrice !== null && maxPrice < highestPrice && (
          <ResetButton onClick={handleReset}>
            Réinitialiser
          </ResetButton>
        )}
      </Header>
      
      <RangeContainer>
        <RangeInput 
          type="range" 
          min={3000} 
          max={highestPrice} 
          step={500}
          value={defaultMaxPrice}
          onChange={handleChange}
        />
        
        <RangeLabels>
          <RangeLabel>3 000 €</RangeLabel>
          <CurrentPrice>{formatPrice(defaultMaxPrice)}</CurrentPrice>
          <RangeLabel>{formatPrice(highestPrice)}</RangeLabel>
        </RangeLabels>
      </RangeContainer>
    </FilterContainer>
  );
};

export default PriceFilter;