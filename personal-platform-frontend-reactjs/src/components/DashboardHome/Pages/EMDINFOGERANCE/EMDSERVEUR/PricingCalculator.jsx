import React, { useState } from 'react';
import styled from 'styled-components';
import { Server, Database, Calculator } from 'lucide-react';

const CalculatorSection = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const CalculatorContainer = styled.div`
  background: ${props => props.theme.colors.cardBg};
  border-radius: 0.75rem;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.colors.border};
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const Tab = styled.button`
  padding: 1rem 2rem;
  background: none;
  border: none;
  color: ${props => props.active ? props.theme.colors.secondary : props.theme.colors.text};
  border-bottom: 2px solid ${props => props.active ? props.theme.colors.secondary : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`;

const Select = styled.select`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.cardBg};
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.secondary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.secondary}20;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.cardBg};
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.secondary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.secondary}20;
  }
`;

const CalculateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: ${props => props.theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.secondary}dd;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
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

const Result = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: ${props => props.theme.colors.cardBg};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 0.75rem;
`;

const ResultTitle = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
`;

const PriceDisplay = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
  text-align: center;
`;

const Disclaimer = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text}80;
  margin-top: 0.5rem;
`;

const PricingCalculator = () => {
  const [activeTab, setActiveTab] = useState('ec2');
  const [instanceType, setInstanceType] = useState('t3.micro');
  const [region, setRegion] = useState('eu-west-3');
  const [hours, setHours] = useState(730);
  const [price, setPrice] = useState(0);

  const calculatePrice = (e) => {
    e.preventDefault();
    
    const basePrice = {
      't3.micro': 0.0104,
      't3.small': 0.0208,
      't3.medium': 0.0416,
      'db.t3.micro': 0.017,
      'db.t3.small': 0.034,
      'db.t3.medium': 0.068,
    }[instanceType] || 0;

    const regionMultiplier = {
      'eu-west-3': 1,
      'us-east-1': 0.95,
      'ap-northeast-1': 1.1,
    }[region] || 1;

    setPrice(Number((basePrice * hours * regionMultiplier).toFixed(2)));
  };

  return (
    <CalculatorSection>
        <Header>
          <Title>Outil en ligne gratuit pour le calcul des tarifs des serveurs</Title>
        </Header>
      <Container>
        <CalculatorContainer>
          <TabContainer>
            <Tab 
              active={activeTab === 'ec2'} 
              onClick={() => setActiveTab('ec2')}
            >
              <Server size={18} />
              Serveurs EC2
            </Tab>
            <Tab 
              active={activeTab === 'rds'} 
              onClick={() => setActiveTab('rds')}
            >
              <Database size={18} />
              Bases de données RDS
            </Tab>
          </TabContainer>

          <Form onSubmit={calculatePrice}>
            <FormGroup>
              <Label>Type d'instance</Label>
              <Select 
                value={instanceType}
                onChange={(e) => setInstanceType(e.target.value)}
              >
                {activeTab === 'ec2' ? (
                  <>
                    <option value="t3.micro">t3.micro (2 vCPU, 1 GiB RAM)</option>
                    <option value="t3.small">t3.small (2 vCPU, 2 GiB RAM)</option>
                    <option value="t3.medium">t3.medium (2 vCPU, 4 GiB RAM)</option>
                  </>
                ) : (
                  <>
                    <option value="db.t3.micro">db.t3.micro (2 vCPU, 1 GiB RAM)</option>
                    <option value="db.t3.small">db.t3.small (2 vCPU, 2 GiB RAM)</option>
                    <option value="db.t3.medium">db.t3.medium (2 vCPU, 4 GiB RAM)</option>
                  </>
                )}
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Région</Label>
              <Select 
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value="eu-west-3">Europe (Paris)</option>
                <option value="us-east-1">US East (N. Virginia)</option>
                <option value="ap-northeast-1">Asia Pacific (Tokyo)</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Heures d'utilisation par mois</Label>
              <Input
                type="number"
                min="1"
                max="744"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
              />
            </FormGroup>

            <CalculateButton type="submit">
              <Calculator size={18} />
              Calculer le prix
            </CalculateButton>
          </Form>

          <Result>
            <ResultTitle>Coût mensuel estimé :</ResultTitle>
            <PriceDisplay>${price}</PriceDisplay>
            <Disclaimer>
              *Prix indicatif basé sur une utilisation à la demande
            </Disclaimer>
          </Result>
        </CalculatorContainer>
      </Container>
    </CalculatorSection>
  );
};

export default PricingCalculator;