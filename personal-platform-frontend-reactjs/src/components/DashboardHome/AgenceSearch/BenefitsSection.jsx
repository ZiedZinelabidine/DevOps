import React from 'react';
import styled from 'styled-components';
import { 
  Search, 
  Shield, 
  Clock, 
  Users, 
  Award, 
  TrendingUp 
} from 'lucide-react';

const Section = styled.section`
  background: var(--color-background);
  padding: 6rem 1.5rem;
`;

const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--color-text);
`;

const Subtitle = styled.p`
  text-align: center;
  color: var(--color-text-secondary);
  max-width: 36rem;
  margin: 0 auto 4rem;
  font-size: 1.125rem;
  line-height: 1.75;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BenefitCard = styled.div`
  background: var(--color-surface);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  background: var(--color-background);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
`;

const BenefitTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--color-text);
`;

const BenefitText = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
`;


const BenefitsSection = ({TEXT}) => {
  return (
    <Section id="benefits">
      <Container>
        <Title>{TEXT.title}</Title>
        <Subtitle>
          {TEXT.subtitle}
        </Subtitle>
        
        <Grid>
          {TEXT.benefits.map((benefit, index) => (
            <BenefitCard key={index}>
              <IconWrapper>
                <benefit.icon size={24} />
              </IconWrapper>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitText>{benefit.description}</BenefitText>
            </BenefitCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default BenefitsSection;