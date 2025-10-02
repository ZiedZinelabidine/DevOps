import React from 'react';
import styled from 'styled-components';
import { Award, TrendingUp, BarChart3 } from 'lucide-react';

const HeroSection = styled.section`
  padding: 8rem 1rem 6rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.background.primary} 0%, ${props => props.theme.colors.background.secondary} 100%);
  min-height: 50vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    max-width: 50%;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  background: ${props => props.theme.colors.background.secondary};
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.accent.blue};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Description = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 32rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.accent.blue};
  color: ${props => props.theme.colors.text.primary};
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
  width: 100%;

  &:hover {
    background: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
    cursor: pointer;
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  border: 2px solid ${props => props.theme.colors.accent.blue};
  color: ${props => props.theme.colors.text.primary};

  &:hover {
    background: ${props => props.theme.colors.background.secondary};
    border-color: ${props => props.theme.colors.primary};
  }
`;

const StatsCard = styled.div`
  background: ${props => props.theme.colors.background.secondary};
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius.xl};
  box-shadow: ${props => props.theme.shadows.xl};
  width: 100%;

  @media (min-width: 768px) {
    max-width: 450px;
  }
`;

const StatsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.background.tertiary};
  margin-bottom: 1.5rem;
`;

const StatsTitle = styled.div`
  h3 {
    font-weight: 600;
    color: ${props => props.theme.colors.text.primary};
    margin-bottom: 0.25rem;
  }

  p {
    color: ${props => props.theme.colors.text.secondary};
    font-size: 0.875rem;
  }
`;

const StatsValue = styled.div`
  text-align: right;

  span {
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme.colors.accent.blue};
  }

  p {
    color: ${props => props.theme.colors.accent.green};
    font-size: 0.875rem;
  }
`;

const ProgressBar = styled.div`
  margin-bottom: 2rem;

  .label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    
    span {
      font-size: 0.875rem;
      color: ${props => props.theme.colors.text.secondary};
    }

    .value {
      color: ${props => props.theme.colors.accent.green};
    }
  }

  .bar {
    width: 100%;
    height: 0.5rem;
    background: ${props => props.theme.colors.background.tertiary};
    border-radius: 9999px;
    overflow: hidden;

    .fill {
      height: 100%;
      background: ${props => props.theme.colors.accent.blue};
      border-radius: 9999px;
      transition: width 1s ease;
    }
  }
`;

const StatsFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.875rem;
`;

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <FlexContainer>
          <ContentSection>
            <Badge>
              <Award className="w-5 h-5 mr-2" />
              Google Ads Certifié
            </Badge>
            <Title>
              Optimisez votre ROI avec un freelance Google Ads
            </Title>
            <Description>
              Transformez votre stratégie publicitaire avec un freelance spécialisé en Google Ads. 
              Des campagnes ciblées, des résultats mesurables et un accompagnement personnalisé.
            </Description>
            <ButtonGroup>
              <PrimaryButton onClick={() => window.location.href = `${process.env.REACT_APP_FRONTED_URL}/svc/app-as-service`}>
                Consultation Gratuite
              </PrimaryButton>
            </ButtonGroup>
          </ContentSection>

          <StatsCard>
            <StatsHeader>
              <StatsTitle>
                <h3>Performance Moyenne</h3>
                <p>Clients 2023-2024</p>
              </StatsTitle>
              <StatsValue>
                <span>+187%</span>
                <p>ROI moyen</p>
              </StatsValue>
            </StatsHeader>

            <div>
              <ProgressBar>
                <div className="label">
                  <span>Taux de Conversion</span>
                  <span className="value">+82%</span>
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: '82%' }}></div>
                </div>
              </ProgressBar>

              <ProgressBar>
                <div className="label">
                  <span>CPA (Coût par Acquisition)</span>
                  <span className="value">-37%</span>
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: '37%' }}></div>
                </div>
              </ProgressBar>

              <ProgressBar>
                <div className="label">
                  <span>Visibilité</span>
                  <span className="value">+125%</span>
                </div>
                <div className="bar">
                  <div className="fill" style={{ width: '100%' }}></div>
                </div>
              </ProgressBar>
            </div>

            <StatsFooter>
              <BarChart3 className="h-4 w-4" />
              <span>Basé sur les données de plus de 50 campagnes gérées</span>
            </StatsFooter>
          </StatsCard>
        </FlexContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero;