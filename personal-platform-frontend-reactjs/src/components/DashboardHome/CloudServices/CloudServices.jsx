import React from 'react';
import { Database, Server, Cloud, Globe, Lock, Zap , ShoppingCart , MessageCircleQuestion , Blocks} from 'lucide-react';
import styled, { keyframes } from 'styled-components';

const categories = [
  {
    icon: Zap,
    title: 'IA',
    description: "Nous vous proposons un service d'intelligence artificielle qui vous permet de créer votre site web en quelques minutes.",
    gradient: 'linear-gradient(to right, #60a5fa, #a855f7)',
  },
  {
    icon: Database,
    title: 'Databases',
    description: 'Solutions de bases de données haute performance pour répondre à tous vos besoins en matière de données.',
    gradient: 'linear-gradient(to right, #60a5fa, #a855f7)',
  },
  {
    icon: Server,
    title: 'Servers',
    description: 'Infrastructure serveur fiable et évolutive.',
    gradient: 'linear-gradient(to right, #60a5fa, #a855f7)',
  },
  {
    icon: ShoppingCart,
    title: 'Commerce ',
    description: 'Kit de démarrage pour un commerce performant avec Shopify et Wordpress.',
    gradient: 'linear-gradient(to right, #60a5fa, #a855f7)',
  },
  {
    icon: MessageCircleQuestion,
    title: 'Observability & Monitoring',
    description: " Services de surveillance facilement intégrables à vos applications, avec la possibilité de créer des tableaux de bord et des alertes.",
    gradient: 'linear-gradient(to right, #60a5fa, #a855f7)',
  },
  {
    icon: Cloud,
    title: 'Serverless',
    description: 'Plateformes modernes de calcul sans serveur .',
    gradient: 'linear-gradient(to right, #60a5fa, #a855f7)',
  },
  {
    icon: Globe,
    title: 'Dev-tools',
    description: 'Nous vous offrons des outils de développement pour accélérer et optimiser votre code, ainsi que des cours entièrement gratuits sur des technologies modernes.',
    gradient: 'linear-gradient(to right, #60a5fa, #a855f7)',
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Solutions de sécurité de niveau entreprise.',
    gradient: 'linear-gradient(to right, #60a5fa, #a855f7)',
  },
  {
    icon: Blocks,
    title: 'CMS',
    description: "La solution CMS aide les organisations à transformer le storytelling numérique en croissance des ventes et en améliorations de l'expérience client .",
    gradient: 'linear-gradient(to right, #60a5fa, #a855f7)',
  },

];

const Container = styled.div`
  min-height: 100vh;
  background-color: black;
  color: white;
`;

const Content = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const Title = styled.h3`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #60a5fa, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled.p`
  color: #d1d5db;
  text-align: center;
  max-width: 42rem;
  margin: 0 auto 4rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const scaleUp = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.02);
  }
`;

const Card = styled.div`
  position: relative;
  background-color: #111827;
  border-radius: 0.75rem;
  padding: 1.5rem;
  overflow: hidden;
  border: 1px solid #1f2937;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    animation: ${scaleUp} 0.3s ease forwards;
  }
`;

const IconWrapper = styled.div`
  display: inline-block;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background: ${props => props.gradient};
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  color: #d1d5db;
`;

const LearnMore = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #60a5fa;
  transition: color 0.3s ease;

  &:hover {
    color: #93c5fd;
  }

  svg {
    width: 1rem;
    height: 1rem;
    margin-left: 0.25rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(0.25rem);
  }
`;

function CloudServices() {

  const handleSearchMarketplace = () => {
    window.location.href = `/search/products`;
  };


  return (
    <Container>
      <Content>
        <Title> Marketplace : Cloud & Services</Title>
        <Subtitle>
         Découvrez notre suite de solutions cloud conçues pour transformer vos projets.
         </Subtitle>

        <Grid>
          {categories.map((category) => (
            <Card key={category.title} onClick={() => handleSearchMarketplace()} >
              <IconWrapper gradient={category.gradient}>
                <category.icon size={24} color="white" />
              </IconWrapper>
              
              <CardTitle>{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
              
              <LearnMore>
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </LearnMore>
            </Card>
          ))}
        </Grid>
      </Content>
    </Container>
  );
}

export default CloudServices;