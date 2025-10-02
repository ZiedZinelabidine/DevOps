import React from 'react';
import styled from 'styled-components';
import { HardDrive, Shield, Wifi, ServerCrash, Gauge, Settings } from 'lucide-react';

// Constantes pour les textes
const TEXTS = {
  header: {
    title: "Nos Services",
    subtitle: "Des solutions complètes d'infogérance hébergement pour répondre à tous vos besoins informatiques."
  },
  services: [
    {
      icon: <HardDrive size={48} />,
      title: "Infogérance Serveurs",
      description: "Gestion complète de vos serveurs physiques et virtuels. Nous nous occupons de tout pour que vous puissiez vous concentrer sur votre cœur de métier.",
      features: [
        "Monitoring 24/7",
        "Maintenance préventive",
        "Gestion des mises à jour",
        "Résolution proactive des incidents"
      ]
    },
    {
      icon: <Shield size={48} />,
      title: "Sécurité et Protection",
      description: "Protection avancée contre les cybermenaces avec des solutions de sécurité adaptées à vos besoins spécifiques.",
      features: [
        "Pare-feu nouvelle génération",
        "Protection DDoS",
        "Antivirus/Antimalware",
        "Audits de sécurité réguliers"
      ]
    },
    {
      icon: <Wifi size={48} />,
      title: "Hébergement Web",
      description: "Solutions d'hébergement performantes pour vos sites web, applications et services en ligne.",
      features: [
        "Hébergement mutualisé",
        "Serveurs VPS",
        "Serveurs dédiés",
        "Solutions cloud"
      ]
    },
    {
      icon: <ServerCrash size={48} />,
      title: "Plan de Reprise d'Activité",
      description: "Solutions de sauvegarde et de reprise après sinistre pour assurer la continuité de vos services.",
      features: [
        "Sauvegardes automatisées",
        "Restauration rapide",
        "Réplication de données",
        "Tests de reprise périodiques"
      ]
    },
    {
      icon: <Gauge size={48} />,
      title: "Optimisation de Performance",
      description: "Analyse et optimisation des performances de vos systèmes pour une efficacité maximale.",
      features: [
        "Analyse de charge",
        "Tuning de serveurs",
        "Optimisation de bases de données",
        "Mise en cache avancée"
      ]
    },
    {
      icon: <Settings size={48} />,
      title: "Solutions Sur Mesure",
      description: "Développement de solutions personnalisées adaptées à vos besoins spécifiques.",
      features: [
        "Architecture sur mesure",
        "Migration de services",
        "Intégration de systèmes",
        "Consultation technique"
      ]
    }
  ]
};

// Composants stylisés
const ServicesSection = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.text}cc;
  max-width: 48rem;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  background: ${props => props.theme.colors.cardBg};
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconWrapper = styled.div`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.secondary};
`;

const ServiceTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.75rem;
  max-width: 1000px;
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.text}cc;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  width: 100%;
  text-align: left;
  space-y: 0.5rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: start;
  margin-bottom: 0.5rem;
`;

const CheckIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  background: ${props => props.theme.colors.secondary}20;
  color: ${props => props.theme.colors.secondary};
  border-radius: 9999px;
  margin-right: 0.75rem;
  flex-shrink: 0;
`;

const FeatureText = styled.span`
  color: ${props => props.theme.colors.text};
`;

// Composant principal
const Services = () => {
  return (
    <ServicesSection id="services">
      <Container>
        <Header>
          <Title>{TEXTS.header.title}</Title>
          <Subtitle>{TEXTS.header.subtitle}</Subtitle>
        </Header>

        <ServicesGrid>
          {TEXTS.services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceContent>
                <IconWrapper>{service.icon}</IconWrapper>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <FeatureList>
                  {service.features.map((feature, idx) => (
                    <FeatureItem key={idx}>
                      <CheckIcon>✓</CheckIcon>
                      <FeatureText>{feature}</FeatureText>
                    </FeatureItem>
                  ))}
                </FeatureList>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services;