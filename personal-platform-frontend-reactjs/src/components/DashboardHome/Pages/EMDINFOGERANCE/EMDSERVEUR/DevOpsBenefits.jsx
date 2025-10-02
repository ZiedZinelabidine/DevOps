import React from 'react';
import styled from 'styled-components';
import { 
  Workflow, 
  GitBranch, 
  Gauge, 
  Shield, 
  Clock, 
  BarChart, 
  Cloud, 
  Terminal,
  RefreshCw,
  Users,
  Zap,
  Lock
} from 'lucide-react';
import {
  Section,
  Container,
  Title,
  Subtitle,
  Card,
  Grid,
  IconWrapper,
  GradientBackground
} from './components';

// Constantes pour les textes
const TEXTS = {
  header: {
    title: "Avantages de Notre Solution DevOps et Cloud",
    subtitle: "Une approche moderne et intégrée pour optimiser votre infrastructure et vos processus de développement"
  },
  benefits: [
    {
      category: "Automatisation DevOps",
      icon: <Workflow className="w-12 h-12 text-teal-500" />,
      items: [
        {
          title: "CI/CD Automatisé",
          description: "Intégration et déploiement continus avec des pipelines automatisés pour des mises en production fluides",
          icon: <GitBranch className="w-6 h-6" />
        },
        {
          title: "Tests Automatisés",
          description: "Suite complète de tests automatiques pour garantir la qualité et la fiabilité du code",
          icon: <RefreshCw className="w-6 h-6" />
        },
        {
          title: "Infrastructure as Code",
          description: "Gestion de l'infrastructure via le code pour une scalabilité et une reproductibilité optimales",
          icon: <Terminal className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Performance et Monitoring",
      icon: <Gauge className="w-12 h-12 text-blue-500" />,
      items: [
        {
          title: "Monitoring 24/7",
          description: "Surveillance continue des performances avec alertes en temps réel",
          icon: <Clock className="w-6 h-6" />
        },
        {
          title: "Analyse Prédictive",
          description: "Anticipation des besoins en ressources grâce à l'analyse des tendances",
          icon: <BarChart className="w-6 h-6" />
        },
        {
          title: "Optimisation Continue",
          description: "Amélioration constante des performances et de l'efficacité des ressources",
          icon: <Zap className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Hébergement Cloud",
      icon: <Cloud className="w-12 h-12 text-purple-500" />,
      items: [
        {
          title: "Multi-Cloud",
          description: "Solutions d'hébergement flexibles sur les principales plateformes cloud",
          icon: <Cloud className="w-6 h-6" />
        },
        {
          title: "Haute Disponibilité",
          description: "Architecture redondante pour une disponibilité maximale de vos services",
          icon: <Users className="w-6 h-6" />
        },
        {
          title: "Sécurité Renforcée",
          description: "Protection avancée contre les menaces et conformité aux normes de sécurité",
          icon: <Lock className="w-6 h-6" />
        }
      ]
    }
  ]
};

// Composants stylisés
const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin: 1rem 0;
  text-align: center;
`;

const BenefitCard = styled(Card)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: ${props => props.theme.colors.cardBg}80;
  backdrop-filter: blur(8px);
`;

const BenefitTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
`;

const BenefitDescription = styled.p`
  color: ${props => props.theme.colors.text}cc;
  font-size: 0.875rem;
`;

// Composant principal
const DevOpsBenefits = () => {
  return (
    <Section>
      <Container>
        <Title>{TEXTS.header.title}</Title>
        <Subtitle>{TEXTS.header.subtitle}</Subtitle>

        <Grid>
          {TEXTS.benefits.map((category, idx) => (
            <div key={idx}>
              <div>
                {category.items.map((item, itemIdx) => (
                  <BenefitCard key={itemIdx}>
                    <IconWrapper small>
                      {item.icon}
                    </IconWrapper>
                    <div>
                      <BenefitTitle>{item.title}</BenefitTitle>
                      <BenefitDescription>{item.description}</BenefitDescription>
                    </div>
                  </BenefitCard>
                ))}
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default DevOpsBenefits;