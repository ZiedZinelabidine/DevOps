import React from 'react';
import styled from 'styled-components';
import { 
  DollarSign, 
  TrendingDown, 
  BarChart2, 
  AlertCircle, 
  PieChart,
  Settings,
  RefreshCw,
  Zap,
  LineChart
} from 'lucide-react';

const FinOpsSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(to bottom, ${props => props.theme.colors.gradientFrom}, ${props => props.theme.colors.gradientTo});
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
  color: white;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #CBD5E1;
  max-width: 48rem;
  margin: 0 auto;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const MetricCard = styled.div`
  background: ${props => props.theme.colors.cardBg};
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-0.25rem);
  }
`;

const MetricIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.orange};
`;

const MetricValue = styled.div`
  font-size: 1.875rem;
  font-weight: bold;
  color: ${props => props.theme.colors.orange};
  margin-bottom: 0.5rem;
`;

const MetricLabel = styled.div`
  color: ${props => props.theme.colors.text}cc;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  background: ${props => props.theme.colors.cardBg};
  border-radius: 0.75rem;
  padding: 2rem;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.orange};
  }
`;

const FeatureIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.orange};
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  space-y: 1rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;

  svg {
    color: ${props => props.theme.colors.orange};
    margin-right: 0.75rem;
    flex-shrink: 0;
  }
`;

const CTASection = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

const CTABox = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 1rem;
  background: ${props => props.theme.colors.cardBg};
  border-radius: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
`;

const CTAText = styled.p`
  color: ${props => props.theme.colors.text};
`;

const FinOps = () => {
  const finopsFeatures = [
    {
      title: "Optimisation des Coûts",
      icon: <TrendingDown className="w-12 h-12" />,
      features: [
        "Analyse détaillée des dépenses cloud",
        "Identification des ressources sous-utilisées",
        "Recommandations d'optimisation automatisées",
        "Gestion des instances réservées"
      ]
    },
    {
      title: "Monitoring et Reporting",
      icon: <BarChart2 className="w-12 h-12" />,
      features: [
        "Tableaux de bord en temps réel",
        "Rapports de coûts détaillés",
        "Alertes de dépassement de budget",
        "Prévisions de dépenses"
      ]
    },
    {
      title: "Gouvernance FinOps",
      icon: <Settings className="w-12 h-12" />,
      features: [
        "Politiques de contrôle des coûts",
        "Attribution des coûts par équipe",
        "Budgets et quotas automatisés",
        "Conformité financière"
      ]
    }
  ];

  const metrics = [
    {
      icon: <PieChart className="w-6 h-6" />,
      label: "Réduction moyenne des coûts",
      value: "30%"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      label: "Optimisation continue",
      value: "24/7"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      label: "Temps de ROI moyen",
      value: "3 mois"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      label: "Visibilité des coûts",
      value: "100%"
    }
  ];

  const TEXTS = {
    header: {
      title: "Infogérance Hébergement",
      subtitle : "Optimisez vos coûts cloud et maximisez votre ROI avec notre approche FinOps intégrée"
    },
  }

  return (
    <FinOpsSection>
      <Container>
        <Header>
          <Title>{TEXTS.header.title}</Title>
          <Subtitle>
             {TEXTS.header.subtitle}
          </Subtitle>
        </Header>

        <MetricsGrid>
          {metrics.map((metric, index) => (
            <MetricCard key={index}>
              <MetricIcon>{metric.icon}</MetricIcon>
              <MetricValue>{metric.value}</MetricValue>
              <MetricLabel>{metric.label}</MetricLabel>
            </MetricCard>
          ))}
        </MetricsGrid>

        <FeaturesGrid>
          {finopsFeatures.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureList>
                {feature.features.map((item, idx) => (
                  <FeatureItem key={idx}>
                    <DollarSign className="w-5 h-5" />
                    {item}
                  </FeatureItem>
                ))}
              </FeatureList>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </FinOpsSection>
  );
};

export default FinOps;