import React from 'react';
import styled from 'styled-components';
import { Star } from 'lucide-react';

const FilterContainer = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: var(--color-primary);
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const RatingButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  border: 1px solid var(--color-border);
  
  ${({ isSelected }) => isSelected ? `
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary);
    
    svg {
      color: white;
    }
  ` : `
    background: var(--color-surface);
    color: var(--color-text);
    
    &:hover {
      background: var(--color-background);
      border-color: var(--color-primary);
    }
    
    svg {
      color: #facc15;
    }
  `}
`;


const RatingFilter = ({ minRating, onChange }) => {
  return (
    <FilterContainer>
      <Title>
        <Star size={18} />
        Note minimale
      </Title>
      
      <ButtonsContainer>
        {[0, 3, 3.5, 4, 4.5].map((rating) => (
          <RatingButton
            key={rating}
            onClick={() => onChange(rating)}
            isSelected={minRating === rating}
          >
            {rating === 0 ? (
              'Toutes'
            ) : (
              <>
                <Star size={14} />
                {rating}+
              </>
            )}
          </RatingButton>
        ))}
      </ButtonsContainer>
    </FilterContainer>
  );
};

export default RatingFilter;