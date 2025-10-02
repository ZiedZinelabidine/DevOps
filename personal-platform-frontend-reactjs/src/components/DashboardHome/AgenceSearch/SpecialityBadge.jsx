import React from 'react';
import styled from 'styled-components';

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s;
  cursor: ${props => props.onClick ? 'pointer' : 'default'};

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
    transform: ${props => props.onClick ? 'translateY(-1px)' : 'none'};
  }

  ${props => props.isSelected && `
    box-shadow: 0 0 0 2px var(--color-surface), 0 0 0 4px currentColor;
  `}
`;


const SpecialtyBadge = ({ 
  specialty, 
  selected = false, 
  onClick,
  className
}) => {
  return (
    <Badge
      specialty={specialty}
      isSelected={selected}
      onClick={onClick}
      className={className}
    >
      {specialty}
    </Badge>
  );
};

export default SpecialtyBadge;