import React from 'react';
import styled from 'styled-components';
import { Star } from 'lucide-react';

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StarContainer = styled.div`
  display: flex;
  gap: 0.125rem;
`;

const StarWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Rating = styled.span`
  margin-left: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  
  ${({ rating }) => {
    if (rating >= 4.5) return 'color: #15803d;';
    if (rating >= 4) return 'color: #16a34a;';
    if (rating >= 3.5) return 'color: #ca8a04;';
    if (rating >= 3) return 'color: #d97706;';
    return 'color: #737373;';
  }}
`;


const StarRating = ({ 
  rating, 
  maxRating = 5, 
  size = 16, 
  className 
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.3 && rating % 1 <= 0.7;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <RatingContainer className={className}>
      <StarContainer>
        {/* Full stars */}
        {Array(fullStars).fill(0).map((_, i) => (
          <Star 
            key={`full-${i}`} 
            size={size} 
            fill="#facc15"
            color="#facc15"
          />
        ))}
        
        {/* Half star */}
        {hasHalfStar && (
          <StarWrapper isHalf>
            <Star 
              size={size} 
              fill="#facc15"
              color="#facc15"
              style={{ clipPath: 'inset(0 50% 0 0)' }} 
            />
            <Star 
              size={size} 
              color="#e5e7eb"
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                clipPath: 'inset(0 0 0 50%)' 
              }} 
            />
          </StarWrapper>
        )}
        
        {/* Empty stars */}
        {Array(emptyStars).fill(0).map((_, i) => (
          <Star 
            key={`empty-${i}`} 
            size={size} 
            color="#e5e7eb" 
          />
        ))}
      </StarContainer>
      
      <Rating rating={rating}>{rating.toFixed(1)}</Rating>
    </RatingContainer>
  );
};

export default StarRating;