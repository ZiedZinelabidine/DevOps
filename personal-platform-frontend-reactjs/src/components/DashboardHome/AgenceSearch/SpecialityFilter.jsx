import React from 'react';
import styled from 'styled-components';
import { Tags } from 'lucide-react';
import { getUniqueSpecialties } from '../../../data/agencies';

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

const BadgesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SpecialtyBadge = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;

  ${({ specialty, isSelected }) => {
    const colors = {
      'Web': isSelected 
        ? 'background: #2563eb; color: white;' 
        : 'background: #dbeafe; color: #1e40af;',
      'SEO': isSelected 
        ? 'background: #7c3aed; color: white;' 
        : 'background: #ede9fe; color: #5b21b6;',
      'Design': isSelected 
        ? 'background: #db2777; color: white;' 
        : 'background: #fce7f3; color: #9d174d;',
      'Mobile': isSelected 
        ? 'background: #059669; color: white;' 
        : 'background: #d1fae5; color: #065f46;',
      'Cloud': isSelected 
        ? 'background: #0891b2; color: white;' 
        : 'background: #cffafe; color: #155e75;'
    };
    
    return colors[specialty] || 'background: #f3f4f6; color: #374151;';
  }}

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  ${props => props.isSelected && `
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `}

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 640px) {
    padding: 0.375rem 0.75rem;
    font-size: 0.8125rem;
  }
`;


const SpecialtyFilter = ({ 
  selectedSpecialties, 
  onToggleSpecialty 
}) => {
  const specialties = getUniqueSpecialties();

  return (
    <FilterContainer>
      <Title>
        <Tags size={18} />
        Spécialités
      </Title>
      
      <BadgesGrid>
        {specialties.map((specialty) => (
          <SpecialtyBadge
            key={specialty}
            specialty={specialty}
            isSelected={selectedSpecialties.includes(specialty)}
            onClick={() => onToggleSpecialty(specialty)}
            type="button"
          >
            {specialty}
          </SpecialtyBadge>
        ))}
      </BadgesGrid>
    </FilterContainer>
  );
};

export default SpecialtyFilter;