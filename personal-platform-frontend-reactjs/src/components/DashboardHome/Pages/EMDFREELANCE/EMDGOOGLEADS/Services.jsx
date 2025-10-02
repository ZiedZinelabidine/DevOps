import React from 'react';
import styled from 'styled-components';
import { Search, PieChart, Megaphone, BarChart2, Users, ShoppingCart, Globe, BarChart } from 'lucide-react';

const ServicesSection = styled.section`
  padding: 4rem 1rem;
  background: ${props => props.theme.colors.background.primary};

  @media (min-width: 768px) {
    padding: 6rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  color: ${props => props.theme.colors.accent.blue};
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  max-width: 42rem;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  background: ${props => props.theme.colors.background.secondary};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.lg};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const IconWrapper = styled.div`
  background: ${props => props.theme.colors.background.tertiary};
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.6;
`;

const CTASection = styled.div`
  margin-top: 4rem;
  background: ${props => props.theme.colors.background.secondary};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.lg};
`;

const CTAContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CTAText = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    flex: 3;
  }
`;

const CTATitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.6;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: ${props => props.theme.colors.accent.blue};
  color: ${props => props.theme.colors.text.primary};
  border-radius: ${props => props.theme.borderRadius.md};
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`;

const Services = () => {
  const services = [
    {
      title: "Audit de Compte Google Ads",
      description: "Analyse complète de votre compte pour identifier les opportunités d'optimisation et éliminer les dépenses inutiles.",
      icon: <Search className="h-7 w-7" color="currentColor" />
    },
    {
      title: "Création de Campagnes",
      description: "Élaboration de campagnes stratégiques ciblées avec structures optimisées pour maximiser votre retour sur investissement.",
      icon: <Megaphone className="h-7 w-7" color="currentColor" />
    },
    {
      title: "Optimisation de Campagnes",
      description: "Analyse et ajustement continus pour améliorer les performances et réduire le coût par acquisition.",
      icon: <BarChart2 className="h-7 w-7" color="currentColor" />
    },
    {
      title: "Remarketing Stratégique",
      description: "Développement de campagnes de remarketing ciblées pour capturer les prospects qui ont déjà interagi avec votre marque.",
      icon: <Users className="h-7 w-7" color="currentColor" />
    },
    {
      title: "Campagnes E-commerce",
      description: "Stratégies spécialisées pour les boutiques en ligne, incluant les campagnes Shopping et la promotion de produits.",
      icon: <ShoppingCart className="h-7 w-7" color="currentColor" />
    },
    {
      title: "Expansion Internationale",
      description: "Déploiement et gestion de campagnes multilingues pour pénétrer de nouveaux marchés à l'international.",
      icon: <Globe className="h-7 w-7" color="currentColor" />
    }
  ];

  return (
    <ServicesSection id="services">
      <Container>
        <Header>
          <Title>Services de nos Freelances</Title>
          <Description>
            Des solutions sur mesure pour optimiser vos campagnes Google Ads et maximiser votre retour sur investissement.
          </Description>
        </Header>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <IconWrapper>
                {service.icon}
              </IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <CTASection>
          <CTAContent>
            <CTAText>
              <CTATitle>Besoin d'un service personnalisé ?</CTATitle>
              <CTADescription>
                Chaque entreprise est unique. Si vous avez des besoins spécifiques qui ne figurent pas dans cette liste, 
                contactez-moi pour discuter d'une solution adaptée à votre situation particulière.
              </CTADescription>
            </CTAText>
            <CTAButton onClick={() => window.location.href = `${process.env.REACT_APP_FRONTED_URL}/svc/app-as-service`}>
              Contacter nos Freelances
            </CTAButton>
          </CTAContent>
        </CTASection>
      </Container>
    </ServicesSection>
  );
};

export default Services;