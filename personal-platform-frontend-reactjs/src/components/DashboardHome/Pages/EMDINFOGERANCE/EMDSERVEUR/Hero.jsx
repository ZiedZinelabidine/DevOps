import React from 'react';
import { Shield, Server, Cloud } from 'lucide-react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

// Constantes pour les textes
const TEXTS = {
  hero: {
    title: "Infogérance Hébergement avec Des Experts Freelances DevOps",
    description: "Découvrez les meilleures freelances DevOps, et des experts en Hébergement avec cloud AWS."
  },
  features: [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Sécurité maximale",
      description: "Protection avancée contre les menaces avec surveillance 24/7"
    },
    {
      icon: <Server className="h-10 w-10" />,
      title: "Performance garantie",
      description: "Infrastructure haute performance avec SLA 99.9%"
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "Solutions cloud",
      description: "Hébergement cloud flexible et scalable selon vos besoins"
    }
  ]
};

// Composants stylisés
const Background = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, ${props => props.theme.colors.gradientFrom}, ${props => props.theme.colors.gradientTo});
`;

const AnimatedBackground = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;
`;

const GradientOrb = styled.div`
  position: absolute;
  border-radius: 9999px;
  filter: blur(3rem);
  animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-delay: ${props => props.delay || '0s'};

  &.orb-1 {
    top: 5rem;
    left: 25%;
    width: 16rem;
    height: 16rem;
    background: ${props => props.theme.colors.secondary};
  }

  &.orb-2 {
    bottom: 5rem;
    right: 25%;
    width: 20rem;
    height: 20rem;
    background: ${props => props.theme.colors.primary};
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  max-width: 64rem;
  margin: 2rem auto 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const FeatureIcon = styled.div`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.secondary};
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: #CBD5E1;
  text-align: center;
`;

const HeroSection = styled.section`
  padding-top: 12%;
  padding-bottom: 5%;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  overflow: hidden;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
`;

const HeroContainer = styled.div`
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: relative;
  z-index: 10;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, white, #FF9900, white);

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

const HeroSubtitle = styled.span`
  color: #FF9900;
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  color: #d1d5db;
  margin-bottom: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
`;

// Composant principal
const Hero = () => {
  return (


    <Container>
       <Helmet>
            <title>Infogérance Hébergement avec Des Experts Freelances DevOps</title>
            <meta name="description" content="Découvrez les meilleures freelances DevOps, et des experts en Hébergement avec cloud AWS , Azure , Google Cloud , Infrastructure as Code." />
            <link rel="canonical" href="https://itgalaxy.io/infogerance-hebergement" />
            <meta property="og:title" content="Découvrez les meilleures freelances DevOps, et des experts en cloud AWS." />
            <meta property="og:description" content="Découvrez les meilleures freelances DevOps, et des experts en Hébergement avec cloud AWS." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://itgalaxy.io/infogerance-hebergement" />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:site_name" content="ItGalaxy.io" />
            <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/infogerance-hebergement" />
            <link rel="alternate" hreflang="en" href="https://itgalaxy.io/infogerance-hebergement" />
        </Helmet>

      <HeroSection>
        <HeroOverlay />
        <HeroContainer>
          <HeroTitle>
            <HeroSubtitle>{TEXTS.hero.title}</HeroSubtitle>
          </HeroTitle>
          <HeroDescription>{TEXTS.hero.description}</HeroDescription>
        </HeroContainer>
      </HeroSection>

      <FeaturesGrid>
        {TEXTS.features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </Container>
  );
};

export default Hero;