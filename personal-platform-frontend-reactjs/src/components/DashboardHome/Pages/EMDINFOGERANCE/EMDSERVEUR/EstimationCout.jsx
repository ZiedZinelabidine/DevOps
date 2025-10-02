import styled, { keyframes } from 'styled-components';
import React from 'react';
import { Database, Check } from 'lucide-react';

// Constantes pour les textes
const TEXTS = {
  costEstimates: {
    title: "Estimation des coûts d'hébergement",
    description: "Obtenez une estimation précise des coûts pour vos projets d'infogérance et d'hébergement cloud.",
    services: {
      title: "Services inclus"
    },
    calculateCostButton: "Demandez un devis"
  }
};

// Données pour les estimations de coûts
const costEstimates = [
  {
    title: "Architecture Basic Solution",
    description: "Infrastructure complète pour architecture Basic ( Frontend + une API + base donnée)  avec haute disponibilité",
    price: "200€",
    gradient: "from-[#FF9900] to-[#FF5500]",
    icon: <Database />,
    services: [
        "2 Serveurs avec Amazon ECS Fargate",
        "1 Base de données Postgres",
        "1 Application Load Balancer",
        "1 Route 53",
        "1 AWS Lambda functions pour des scripts comme les envoie des mails",
        "1 bucket Stockage S3 pour vos média"
    ]
  },
  {
    title: "Architecture Microservices Avancé",
    description: "Infrastructure évolutive pour applications microservices Avancé",
    price: "500€",
    gradient: "from-[#3B82F6] to-[#1D4ED8]",
    icon: <Database />,
    services: [
        "5 Serveurs avec Amazon ECS Fargate",
        "2 Base de données Postgres et MongoDB",
        "3 Application Load Balancer",
        "1 Route 53",
        "5 AWS Lambda functions pour des scripts comme les envoie des mails",
        "5 bucket Stockage S3 pour vos média"
    ]
  },
  {
    title: "Architecture Microservices Complexe",
    description: "Infrastructure évolutive pour applications microservices Complexe",
    price: "<500€",
    gradient: "from-[#10B981] to-[#059669]",
    icon: <Database />,
    "services": [
        "+15 Serveurs avec Amazon EKS Fargate",
        "+3 Base de données Postgres et MongoDB",
        "+5 Applications Load Balancer",
        "+1 Route 53",
        "+5 AWS Lambda functions pour des scripts comme les envoie des mails",
        "+5 bucket Stockage S3 pour vos média"
      ]
  }
];

// Composants stylisés
const CostEstimatesSection = styled.section`
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000');
  opacity: 0.05;
  background-size: cover;
  background-position: center;
`;

const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, rgba(255, 153, 0, 0.1), rgba(35, 47, 62, 0.05), rgba(255, 153, 0, 0.1));
  filter: blur(3rem);
`;

const Container = styled.div`
  position: relative;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
 color: #FF9900;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #d1d5db;
  max-width: 42rem;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const EstimateCard = styled.div`
  position: relative;
  background: rgba(26, 35, 51, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 1.5rem;
  border: 1px solid rgba(113, 128, 150, 0.3);
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const GradientBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.25rem;
  background: ${props => props.gradient};
  border-radius: 1.5rem 1.5rem 0 0;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const IconContainer = styled.div`
  padding: 1rem;
  border-radius: 1rem;
  background: ${props => props.gradient};
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #FF9900;
`;

const PriceContainer = styled.div`
  padding: 1.5rem;
  border-radius: 1rem;
  background: linear-gradient(to bottom right, #232f3e, #1a2333);
  border: 1px solid rgba(113, 128, 150, 0.3);
  margin-bottom: 2rem;
`;

const Price = styled.span`
  font-size: 3rem;
  font-weight: 700;
  background: white;
  -webkit-background-clip: text;
  background-clip: text;
 color: #FF9900;
`;

const PriceDescription = styled.p`
  font-size: 1rem;
  color: #d1d5db;
  margin-top: 0.5rem;
`;

const ServicesHeader = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.75rem;
  background: rgba(113, 128, 150, 0.1);
  border: 1px solid rgba(113, 128, 150, 0.2);
  margin-bottom: 0.75rem;
`;

const ServiceText = styled.span`
  font-size: 1rem;
  color: #d1d5db;
`;

const CTAButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 0.75rem;
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;
   background: rgba(113, 128, 150, 0.1);


  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

// Composant principal
const CostEstimates = () => {
  return (
    <CostEstimatesSection>
      <BackgroundImage />
      <GradientBackground />
      <Container>
        <Header>
          <Title>{TEXTS.costEstimates.title}</Title>
          <Description>{TEXTS.costEstimates.description}</Description>
        </Header>
        <Grid>
          {costEstimates.map((estimate, index) => (
            <EstimateCard key={index}>
              <GradientBorder gradient={estimate.gradient} />
              <CardHeader>
                <IconContainer gradient={estimate.gradient}>
                  {React.cloneElement(estimate.icon, { className: 'text-white' })}
                </IconContainer>
                <CardTitle>{estimate.title}</CardTitle>
              </CardHeader>
              <PriceContainer>
                <Price gradient={estimate.gradient}>{estimate.price}</Price>
                <PriceDescription>{estimate.description}</PriceDescription>
              </PriceContainer>
              <ServicesHeader>
                <Database className="w-5 h-5 text-[#FF9900]" />
                <span>{TEXTS.costEstimates.services.title}</span>
                </ServicesHeader>
              <div>
                {estimate.services.map((service, serviceIndex) => (
                  <ServiceItem key={serviceIndex}>
                    <Check className="w-5 h-5 text-[#FF9900]" />
                    <ServiceText>{service}</ServiceText>
                  </ServiceItem>
                ))}
              </div>
              <CTAButton
                gradient={estimate.gradient}
                onClick={() => (window.location.href = '/contact')}
              >
                {TEXTS.costEstimates.calculateCostButton}
              </CTAButton>
            </EstimateCard>
          ))}
        </Grid>
      </Container>
    </CostEstimatesSection>
  );
};

export default CostEstimates;