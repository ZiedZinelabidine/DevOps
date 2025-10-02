import React from 'react';
import { Server, Database, Cpu, HardDrive, Network, Shield } from 'lucide-react';
import styled from 'styled-components';

// Constantes pour les textes
const TEXTS = {
  header: {
    title: "Notre Infrastructure",
    subtitle: "Une infrastructure de pointe pour garantir sécurité, performance et disponibilité maximales."
  },
  specs: {
    title: "Spécifications Techniques",
    datacenters: {
      heading: "Datacenters",
      items: [
        "Localisation en France (Paris, Lyon, Strasbourg)",
        "Certification Tier III et Tier IV",
        "Redondance électrique et climatique"
      ]
    },
    serveurs: {
      heading: "Serveurs",
      items: [
        "Processeurs dernière génération (Intel Xeon / AMD EPYC)",
        "RAM DDR4 ECC haute performance",
        "Stockage SSD NVMe et SAN haute disponibilité"
      ]
    },
    reseau: {
      heading: "Réseau",
      items: [
        "Connectivité redondante multi-opérateurs",
        "Bande passante garantie jusqu'à 10 Gbps",
        "Protection DDoS avancée"
      ]
    }
  },
  icons: [
    { icon: <Server className="w-12 h-12" />, label: "Serveurs" },
    { icon: <Database className="w-12 h-12" />, label: "Stockage" },
    { icon: <Network className="w-12 h-12" />, label: "Réseau" },
    { icon: <Cpu className="w-12 h-12" />, label: "Processeurs" },
    { icon: <Shield className="w-12 h-12" />, label: "Sécurité" },
    { icon: <HardDrive className="w-12 h-12" />, label: "Backup" }
  ]
};

// Composants stylisés
const InfrastructureSection = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme.colors.primary};
  color: white;
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
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #CBD5E1;
  max-width: 48rem;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const VisualizationContainer = styled.div`
  position: relative;
  height: 24rem;

  @media (min-width: 1024px) {
    height: auto;
  }
`;

const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, ${props => props.theme.colors.secondary}20, ${props => props.theme.colors.primary}20);
  border-radius: 0.75rem;
`;

const IconGrid = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  max-width: 32rem;
  margin: 0 auto;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: ${props => props.theme.colors.cardBg}80;
  backdrop-filter: blur(8px);
  border: 1px solid ${props => props.theme.colors.border}50;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.cardBgHover}80;
    transform: translateY(-4px);
  }
`;

const IconWrapper = styled.div`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 0.5rem;
`;

const IconLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #E5E7EB;
`;

const ConnectionLines = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const SpecsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SpecsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1.5rem;
`;

const SpecsCard = styled.div`
  background: ${props => props.theme.colors.cardBg}70;
  backdrop-filter: blur(8px);
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border}50;
`;

const SpecsHeading = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: white;
`;

const SpecsList = styled.ul`
  list-style: none;
  space-y: 0.75rem;
`;

const SpecsItem = styled.li`
  display: flex;
  align-items: start;
  margin-bottom: 0.75rem;
`;

const CheckIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  background: ${props => props.theme.colors.secondary}50;
  color: ${props => props.theme.colors.secondary};
  border-radius: 9999px;
  margin-right: 0.75rem;
  flex-shrink: 0;
`;

const SpecsText = styled.span`
  color: #CBD5E1;
`;

// Composant principal
const Infrastructure = () => {
  return (
    <InfrastructureSection id="infrastructure">
      <Container>
        <Header>
          <Title>{TEXTS.header.title}</Title>
          <Subtitle>{TEXTS.header.subtitle}</Subtitle>
        </Header>

        <Grid>
          <SpecsContainer>
            <SpecsTitle>{TEXTS.specs.title}</SpecsTitle>
            
            <SpecsCard>
              <SpecsHeading>{TEXTS.specs.datacenters.heading}</SpecsHeading>
              <SpecsList>
                {TEXTS.specs.datacenters.items.map((spec, index) => (
                  <SpecsItem key={index}>
                    <CheckIcon>✓</CheckIcon>
                    <SpecsText>{spec}</SpecsText>
                  </SpecsItem>
                ))}
              </SpecsList>
            </SpecsCard>
            
            <SpecsCard>
              <SpecsHeading>{TEXTS.specs.serveurs.heading}</SpecsHeading>
              <SpecsList>
                {TEXTS.specs.serveurs.items.map((spec, index) => (
                  <SpecsItem key={index}>
                    <CheckIcon>✓</CheckIcon>
                    <SpecsText>{spec}</SpecsText>
                  </SpecsItem>
                ))}
              </SpecsList>
            </SpecsCard>
            
            <SpecsCard>
              <SpecsHeading>{TEXTS.specs.reseau.heading}</SpecsHeading>
              <SpecsList>
                {TEXTS.specs.reseau.items.map((spec, index) => (
                  <SpecsItem key={index}>
                    <CheckIcon>✓</CheckIcon>
                    <SpecsText>{spec}</SpecsText>
                  </SpecsItem>
                ))}
              </SpecsList>
            </SpecsCard>
          </SpecsContainer>

          <VisualizationContainer>
            <GradientBackground />
            <IconGrid>
              {TEXTS.icons.map((item, index) => (
                <IconBox key={index}>
                  <IconWrapper>{item.icon}</IconWrapper>
                  <IconLabel>{item.label}</IconLabel>
                </IconBox>
              ))}
            </IconGrid>
            <ConnectionLines viewBox="0 0 400 400">
              <path d="M200 80 L200 320" stroke="rgba(45, 212, 191, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
              <path d="M80 200 L320 200" stroke="rgba(45, 212, 191, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
              <path d="M120 120 L280 280" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
              <path d="M120 280 L280 120" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="2" strokeDasharray="5,5" />
            </ConnectionLines>
          </VisualizationContainer>
        </Grid>
      </Container>
    </InfrastructureSection>
  );
};

export default Infrastructure;