import React from 'react';
import styled from 'styled-components';
import { Award, Users, Target, Briefcase, BadgeCheck, TrendingUp } from 'lucide-react';
import CardsPrestataires from '../../CardsPrestataires';

const ExpertiseSection = styled.section`
  margin-top: 10rem;
  padding-top: 1rem;
  background: black;
  `;

const Container = styled.div`
  max-width: 100%;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 4rem;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  color: ${props => props.theme.orange};
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  color: white;
  max-width: 42rem;
  margin: 0 auto;
`;

const ExpertsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;



const Expertise = () => {

  const TEXTS = {
    header: {
      title: "Nos Experts DevOps en Infogérance Hébergement serveurs",
      subtitle : "Découvrez notre sélection de freelance Freelance certifiées en France. Des experts en Infogérance Hébergement serveurs reconnus pour leur excellence dans la gestion de campagnes publicitaires et l'optimisation des performances."
    },
  }

  return (
    <ExpertiseSection id="expertise">
      <Container>
        <Header> 
          <Title>{TEXTS.header.title}</Title>
          <Description>
          {TEXTS.header.subtitle}
          </Description>
        </Header>

        <CardsPrestataires skill={'Docker'}/>

      </Container>
    </ExpertiseSection>
  );
};

export default Expertise;