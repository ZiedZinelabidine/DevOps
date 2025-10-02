import React, { useState } from 'react';
import styled from 'styled-components';
import { DatabaseZap, Database, Check } from 'lucide-react';
import Header from 'components/Header/Header';
import Register from 'components/Authentification/modals/register';

const Container = styled.div`
  height: 100vh;
  background-color: black;
  color: white;
  overflow-y: auto; 
`;

const HeroSection = styled.div`
`;

const HeroContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 1rem;
  text-align: center;
`;

const HeroIcon = styled(DatabaseZap)`
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1.5rem;
  color: #c084fc;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.25rem;
  color: #d1d5db;
  max-width: 42rem;
  margin: 0 auto;
`;

const PricingSection = styled.div`
  max-width: 1580px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const PricingGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;


const PlanCard = styled.div`
  position: relative;
  border-radius: 1rem;
  padding: 2rem;
  background-color: ${props => props.popular ? '#581c87' : '#1f2937'};
  border: ${props => props.popular ? '2px solid #a855f7' : 'none'};
  cursor: pointer;
  &:hover {
    border: 2px solid #a855f7;
  }
`;

const PopularBadge = styled.span`
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #a855f7;
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
`;

const PlanContent = styled.div`
  text-align: center;
`;

const PlanIcon = styled(Database)`
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1rem;
  color: #c084fc;
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const PlanPrice = styled.div`
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const PriceUnit = styled.span`
  font-size: 1.125rem;
  color: #9ca3af;
`;

const SpecsContainer = styled.div`
  margin-bottom: 1.5rem;
  > * + * {
    margin-top: 0.5rem;
  }
`;

const StorageText = styled.p`
  color: #c084fc;
  font-weight: 600;
`;

const SpecText = styled.p`
  color: #d1d5db;
`;

const SelectButton = styled.button`
  width: 100%;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: background-color 0.2s;
  background-color: ${props => (props.popular ? '#a855f7' : '#6b21a8')};

  &:hover {
    background-color: ${props => (props.popular ? '#9333ea' : '#581c87')};
  }

  // Optional: Add more styles for accessibility
  border: none;
  color: white;
  cursor: pointer;

  // Optional: To focus on the button
  &:focus {
    outline: none;
  }
`;

const FeaturesList = styled.div`
  margin-top: 2rem;
  > * + * {
    margin-top: 0.75rem;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  color: #d1d5db;
`;

const FeatureIcon = styled(Check)`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  color: #c084fc;
`;

const plans = [
  {
    name: 'Nano',
    storage: '8GB',
    ram: '0.5GB',
    cpu: '1 vCPU',
    price: '$0.59',
    features: ['Mongodb 7.0 LTS', 'Basic Support', '99.9% Uptime'],
  },
  {
    name: 'Micro',
    storage: '8GB',
    ram: '1GB',
    cpu: '1 vCPU',
    price: '$0.69',
    features: ['Mongodb 7.0 LTS', 'Basic Support', '99.9% Uptime'],
  },
  {
    name: 'Small',
    storage: '8GB',
    ram: '2GB',
    cpu: '1 vCPU',
    price: '$0.79',
    features: ['Mongodb 7.0 LTS',  'Priority Support', '99.9% Uptime'],
    popular: true,
  },
  {
    name: 'Medium',
    storage: '8GB',
    ram: '4GB',
    cpu: '2 vCPU',
    price: '$0.89',
    features: ['Mongodb 7.0 LTS', '24/7 Premium Support', '99.99% Uptime'],
  },
];

function HpMongodb() {
    const [openModalRegister, setOpenModalRegister] = useState(false);
   
  
    const handleModalRegister = () => {
      setOpenModalRegister(true);
    };
    const handleCloseModalRegister = () => {
      setOpenModalRegister(false);
    };
  

  return (
    <Container>
    <Header />
      <HeroSection>
        <HeroContent>
          <HeroIcon />
          <HeroTitle>Mongodb Server Solutions</HeroTitle>
          <HeroText>
            High-performance Mongodb servers with reliable storage and exceptional support
          </HeroText>
        </HeroContent>
      </HeroSection>

      <PricingSection>
        <PricingGrid>
          {plans.map((plan) => (
            <PlanCard key={plan.name} onClick={handleModalRegister} popular={plan.popular}>
              {plan.popular && (
                <PopularBadge>Most Popular</PopularBadge>
              )}
              <PlanContent>
                <PlanIcon />
                <PlanName>{plan.name}</PlanName>
                <PlanPrice>
                  {plan.price}<PriceUnit>/hour</PriceUnit>
                </PlanPrice>
                
                <SpecsContainer>
                  <StorageText>{plan.storage} Storage</StorageText>
                  <SpecText>{plan.ram} RAM</SpecText>
                  <SpecText>{plan.cpu}</SpecText>
                </SpecsContainer>

                <SelectButton onClick={handleModalRegister} popular={plan.popular}>
                  Select Plan
                </SelectButton>

                <FeaturesList>
                  {plan.features.map((feature) => (
                    <FeatureItem key={feature}>
                      <FeatureIcon />
                      <span>{feature}</span>
                    </FeatureItem>
                  ))}
                </FeaturesList>
              </PlanContent>
            </PlanCard>
          ))}
        </PricingGrid>
      </PricingSection>
      {openModalRegister && (
      <Register
      openModalRegister={openModalRegister}
      setOpenModalRegister={setOpenModalRegister}
      handleModalRegister={handleCloseModalRegister}
      switchBetweenModals={false}
      proxy={"marketplace"}
    />)}
    </Container>
  );
}

export default HpMongodb;