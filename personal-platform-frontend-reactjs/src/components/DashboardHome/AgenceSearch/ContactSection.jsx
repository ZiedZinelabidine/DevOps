import React from 'react';
import styled from 'styled-components';
import { ArrowRight } from 'lucide-react';

const Section = styled.section`
  background: var(--color-surface);
  padding: 6rem 1.5rem;
  border-top: 1px solid var(--color-border);
`;

const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--color-text);
`;

const Description = styled.p`
  color: var(--color-text-secondary);
  font-size: 1.25rem;
  line-height: 1.75;
  max-width: 42rem;
  margin: 0 auto 2rem;
`;

const ContactButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  
  background: #1d4ed8;
  color: white;
  border-radius: 0.75rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
  
  &:hover {
    background: #1d4ed8;
  }
  
  &:active {
    transform: translateY(0);
  }
`;


const ContactSection  = ({TEXT}) => {
  return (
    <Section id="contact">
      <Container>
        <Title>{TEXT.title}</Title>
        <Description>
          {TEXT.subtitle}
        </Description>
        <ContactButton>
          Contactez-nous
          <ArrowRight size={20} />
        </ContactButton>
      </Container>
    </Section>
  );
};

export default ContactSection;