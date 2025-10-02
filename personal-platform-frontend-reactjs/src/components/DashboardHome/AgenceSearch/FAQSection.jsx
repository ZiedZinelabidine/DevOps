import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronDown, ChevronUp } from 'lucide-react';

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

const FAQList = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled.div`
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  overflow: hidden;
  background: var(--color-surface);
`;

const Question = styled.h2`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  justify-content: space-between;
  padding: 1.25rem;
  background: none;
  border: none;
  text-align: left;
  color: var(--color-text);
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.theme.isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'};
  }
  
  svg {
    color: var(--color-text-secondary);
    transition: transform 0.2s;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'none'};
  }
`;

const Answer = styled.div`
  padding: ${props => props.isOpen ? '0 1.25rem 1.25rem' : '0 1.25rem'};
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-height: ${props => props.isOpen ? '1000px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

const FAQSection = ({TEXT}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq">
      <Container>
        <Title>{TEXT.title}</Title>
        <Subtitle>
        {TEXT.subtitle}
        </Subtitle>
        
        <FAQList>
          {TEXT.faqs.map((faq, index) => (
            <FAQItem key={index}>
              <Question
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </Question>
              <Answer isOpen={openIndex === index}>
                {faq.answer}
              </Answer>
            </FAQItem>
          ))}
        </FAQList>
      </Container>
    </Section>
  );
};

export default FAQSection;