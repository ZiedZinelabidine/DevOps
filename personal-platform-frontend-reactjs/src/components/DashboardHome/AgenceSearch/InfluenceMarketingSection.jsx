import React from 'react';
import styled from 'styled-components';
import { TrendingUp, Target, BarChart, Users, Shield, Globe } from 'lucide-react';

const Section = styled.section`
  padding: 6rem 1.5rem;
  border-top: 1px solid var(--color-border);
`;

const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;

`;

const Header = styled.div`
  max-width: 48rem;
  margin: 0 auto 4rem;
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

const Card = styled.div`
  background: var(--color-surface);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  background: var(--color-surface);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-text);
`;

const CardText = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const  TEXT = {
  title : "Pourquoi collaborer avec une agence d'influence marketing ?" ,
  description: "Le marketing d'influence est devenu un levier incontournable pour les entreprises souhaitant renforcer leur image de marque et toucher un public ciblé sur les réseaux sociaux. Découvrez les avantages d'une collaboration avec une agence spécialisée.",
  benefits: [{
    icon: TrendingUp,
    title: 'Expertise stratégique',
    description: 'Bénéficiez d\'une équipe d\'experts en marketing d\'influence pour analyser les tendances et sélectionner les meilleurs influenceurs.'
  },
  {
    icon: Target,
    title: 'Ciblage précis',
    description: 'Identifiez et collaborez avec des créateurs de contenu parfaitement alignés avec votre marque et votre audience cible.'
  },
  {
    icon: BarChart,
    title: 'Résultats mesurables',
    description: 'Suivez et optimisez vos campagnes grâce à des indicateurs de performance précis et des analyses détaillées.'
  },
  {
    icon: Users,
    title: 'Réseau d\'influenceurs',
    description: 'Accédez à un vaste réseau d\'influenceurs qualifiés et authentiques pour maximiser l\'impact de vos campagnes.'
  },
  {
    icon: Shield,
    title: 'Gestion professionnelle',
    description: 'Profitez d\'une gestion complète de vos campagnes, de la stratégie à l\'exécution, en passant par le suivi.'
  },
  {
    icon: Globe,
    title: 'Portée internationale',
    description: 'Étendez votre influence au-delà des frontières avec des campagnes adaptées aux marchés internationaux.'
  }
]};

const InfluenceMarketingSection = ({TEXT}) => {
  return (
    <Section>
      <Container>
        <Header>
          <Title>{TEXT.title}</Title>
          <Description>
           {TEXT.description}
          </Description>
        </Header>
        <Grid>
          {TEXT.benefits.map((benefit, index) => (
            <Card key={index}>
              <CardTitle>{benefit.title}</CardTitle>
              <CardText>{benefit.description}</CardText>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default InfluenceMarketingSection;