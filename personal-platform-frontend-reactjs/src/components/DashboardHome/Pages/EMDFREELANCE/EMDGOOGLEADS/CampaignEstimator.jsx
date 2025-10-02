import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Calculator, DollarSign, MousePointer, Target } from 'lucide-react';

const Container = styled.div`
  background-color: ${props => props.theme.colors.background.primary};
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.xl};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Section = styled.div``;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 1.5rem;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 0.5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RangeInput = styled.input`
  flex: 1;
  height: 0.5rem;
  background-color: ${props => props.theme.colors.background.tertiary};
  border-radius: 9999px;
  appearance: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 1rem;
    height: 1rem;
    background-color: ${props => props.theme.colors.accent.blue};
    border-radius: 50%;
  }
`;

const InputValue = styled.span`
  margin-left: 1rem;
  color: ${props => props.theme.colors.text.primary};
  min-width: 80px;
`;

const StatCard = styled.div`
  background-color: ${props => props.theme.colors.background.secondary};
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  margin-bottom: 1.5rem;
`;

const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.span`
  color: ${props => props.theme.colors.text.secondary};
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
`;

const InfoBox = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors.accent.blue}20;
  border: 1px solid ${props => props.theme.colors.accent.blue}40;
  border-radius: ${props => props.theme.borderRadius.lg};
`;

const InfoText = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.875rem;
`;

const CampaignEstimator = () => {
  const [clicks, setClicks] = useState(1000);
  const [cpc, setCpc] = useState(2.5);
  const [conversionRate, setConversionRate] = useState(3.5);

  const [dailyBudget, setDailyBudget] = useState(0);
  const [monthlyBudget, setMonthlyBudget] = useState(0);
  const [estimatedConversions, setEstimatedConversions] = useState(0);

  useEffect(() => {
    const dailyCost = clicks * cpc / 30;
    const monthlyCost = dailyCost * 30;
    const conversions = Math.round(clicks * (conversionRate / 100));

    setDailyBudget(dailyCost);
    setMonthlyBudget(monthlyCost);
    setEstimatedConversions(conversions);
  }, [clicks, cpc, conversionRate]);

  return (
    <Container>
      <Grid>
        <Section>
          <SectionTitle>Paramètres de la Campagne</SectionTitle>
          <InputGroup>
            <Label>Nombre de clics mensuel estimé</Label>
            <InputWrapper>
              <MousePointer size={20} color={props => props.theme.colors.accent.blue} />
              <RangeInput
                type="range"
                min="100"
                max="10000"
                step="100"
                value={clicks}
                onChange={(e) => setClicks(Number(e.target.value))}
              />
              <InputValue>{clicks}</InputValue>
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <Label>CPC Moyen (€)</Label>
            <InputWrapper>
              <DollarSign size={20} color={props => props.theme.colors.accent.green} />
              <RangeInput
                type="range"
                min="0.5"
                max="10"
                step="0.1"
                value={cpc}
                onChange={(e) => setCpc(Number(e.target.value))}
              />
              <InputValue>{cpc.toFixed(2)}€</InputValue>
            </InputWrapper>
          </InputGroup>

          <InputGroup>
            <Label>Taux de conversion (%)</Label>
            <InputWrapper>
              <Target size={20} color={props => props.theme.colors.accent.purple} />
              <RangeInput
                type="range"
                min="0.1"
                max="10"
                step="0.1"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
              />
              <InputValue>{conversionRate.toFixed(1)}%</InputValue>
            </InputWrapper>
          </InputGroup>
        </Section>

        <Section>
          <SectionTitle>Estimation des Coûts</SectionTitle>
          <StatCard>
            <StatHeader>
              <StatLabel>Budget Journalier Estimé</StatLabel>
              <Calculator size={20} color={props => props.theme.colors.accent.blue} />
            </StatHeader>
            <StatValue>{dailyBudget.toFixed(2)}€</StatValue>
          </StatCard>

          <StatCard>
            <StatHeader>
              <StatLabel>Budget Mensuel Estimé</StatLabel>
              <Calculator size={20} color={props => props.theme.colors.accent.green} />
            </StatHeader>
            <StatValue>{monthlyBudget.toFixed(2)}€</StatValue>
          </StatCard>

          <StatCard>
            <StatHeader>
              <StatLabel>Conversions Estimées / Mois</StatLabel>
              <Target size={20} color={props => props.theme.colors.accent.purple} />
            </StatHeader>
            <StatValue>{estimatedConversions}</StatValue>
          </StatCard>

          <InfoBox>
            <InfoText>
              Ces estimations sont basées sur des moyennes du secteur et peuvent varier en fonction de nombreux facteurs tels que la qualité des annonces, la pertinence des mots-clés, et la concurrence.
            </InfoText>
          </InfoBox>
        </Section>
      </Grid>
    </Container>
  );
};

export default CampaignEstimator;