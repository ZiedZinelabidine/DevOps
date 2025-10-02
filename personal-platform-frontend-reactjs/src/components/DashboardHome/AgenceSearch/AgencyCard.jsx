import React from 'react';
import styled from 'styled-components';
import { ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import StarRating from './StarRating';
import PriceTag from './PriceTag';
import SpecialtyBadge from './SpecialityBadge';

const Card = styled.div`
  position: relative;
  background: var(--color-surface);
  border-radius: 1.25rem;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--color-border);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 
      0 20px 25px -5px rgba(0, 0, 0, 0.05),
      0 10px 10px -5px rgba(0, 0, 0, 0.02);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #2563eb);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const CardHeader = styled.div`
  position: relative;
  padding: 2rem 2rem 0;
`;

const CardContent = styled.div`
  padding: 1.5rem 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const AgencyInfo = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  margin-bottom: 1rem;

  svg {
    width: 14px;
    height: 14px;
  }
`;

const Description = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
  font-size: 0.9375rem;
  margin-bottom: 1.5rem;
`;

const SpecialtiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ContactSection = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: ${props => props.theme.isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.02)'};
  border-top: 1px solid var(--color-border);
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  color: var(--color-text);
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.2s ease;
  background: var(--color-surface);
  border: 1px solid var(--color-border);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  svg {
    color: var(--color-text-secondary);
  }

  &:hover svg {
    color: var(--color-primary);
  }
`;

const WebsiteButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 1rem;
  width: 100%;
  background: var(--color-primary);
  color: white;
  border-radius: 0.75rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    color: white;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;


const AgencyCard = ({ agency }) => {
  return (
    <Card>
      <CardHeader>
        <HeaderTop>
          <AgencyInfo>
            <Title>{agency.name}</Title>
            <Location>
              <MapPin />
              {agency.region}
            </Location>
          </AgencyInfo>
          <StarRating rating={agency.rating} />
        </HeaderTop>
        <PriceTag minPrice={agency.minPrice} />
      </CardHeader>

      <CardContent>
        <Description>{agency.description}</Description>
        
        <SpecialtiesContainer>
          {agency.specialties.map((specialty, index) => (
            <SpecialtyBadge 
              key={`${agency.name}-${specialty}-${index}`} 
              specialty={specialty} 
            />
          ))}
        </SpecialtiesContainer>

        <ContactSection>
          <ContactLink href={`mailto:${agency.email}`}>
            <Mail size={18} />
            <span>{`${agency.email}`}</span>
          </ContactLink>
          <ContactLink href={`tel:${agency.phone}`}>
            <Phone size={18} />
            <span>{`${agency.phone}`}</span>
          </ContactLink>
        </ContactSection>

        <WebsiteButton 
          href={`https://${agency.url}`} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Visiter le site web
          <ExternalLink />
        </WebsiteButton>
      </CardContent>
    </Card>
  );
};

export default AgencyCard;