import React, { useState } from 'react';
import { Check } from 'lucide-react';
import styled from 'styled-components';

const PricingSection = styled.section`
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
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.text}cc;
  max-width: 48rem;
  margin: 0 auto;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 3rem;
`;

const ToggleWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  background: ${props => props.theme.colors.cardBg};
  border-radius: 0.5rem;
`;

const ToggleButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  background: ${props => props.active ? 'white' : 'transparent'};
  color: ${props => props.active ? props.theme.colors.text : props.theme.colors.text + 'cc'};
  box-shadow: ${props => props.active ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const Discount = styled.span`
  color: ${props => props.theme.colors.secondary};
  font-weight: 600;
  font-size: 0.75rem;
  margin-left: 0.25rem;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PricingCard = styled.div`
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  border: ${props => props.highlighted ? 
    `2px solid ${props.theme.colors.secondary}` : 
    `1px solid ${props.theme.colors.border}`};
  box-shadow: ${props => props.highlighted ?
    '0 4px 6px -1px rgba(0, 0, 0, 0.1)' :
    '0 1px 3px rgba(0, 0, 0, 0.1)'};

  &:hover {
    transform: translateY(-4px);
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: ${props => props.theme.colors.secondary};
  color: white;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
`;

const CardContent = styled.div`
  padding: 2rem;
  background: ${props => props.highlighted ?
    `linear-gradient(to bottom right, ${props.theme.colors.secondary}10, ${props.theme.colors.background})` :
    props.theme.colors.cardBg};
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  text-transform: capitalize;
`;

const PriceContainer = styled.div`
  margin: 1rem 0 1.5rem;
`;

const Price = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;

const PriceUnit = styled.span`
  color: ${props => props.theme.colors.text}cc;
  margin-left: 0.5rem;
`;

const BillingPeriod = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text}cc;
  margin-top: 0.25rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
  space-y: 0.75rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: start;
  margin-bottom: 0.75rem;
  color: ${props => props.theme.colors.text};
`;

const FeatureIcon = styled(Check)`
  color: ${props => props.theme.colors.secondary};
  margin-right: 0.5rem;
  flex-shrink: 0;
`;

const SelectButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
  background: ${props => props.highlighted ?
    props.theme.colors.secondary :
    props.theme.colors.cardBg};
  color: ${props => props.highlighted ? 'white' : props.theme.colors.text};

  &:hover {
    background: ${props => props.highlighted ?
      props.theme.colors.secondary + 'dd' :
      props.theme.colors.cardBgHover};
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const CTAText = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primary}dd;
  }
`;


const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  const planFeatures = {
    essential: [
      "1 serveur dédié ou 3 VPS",
      "Monitoring 24/7",
      "Sauvegardes quotidiennes",
      "Support par email",
      "Temps de réponse < 8h",
      "Mises à jour de sécurité"
    ],
    business: [
      "5 serveurs dédiés ou 10 VPS",
      "Monitoring 24/7 avancé",
      "Sauvegardes toutes les 6h",
      "Support par email et téléphone",
      "Temps de réponse < 4h",
      "Mises à jour de sécurité",
      "Protection DDoS",
      "Audit sécurité annuel"
    ],
    enterprise: [
      "Serveurs illimités",
      "Monitoring temps réel",
      "Sauvegardes personnalisées",
      "Support prioritaire 24/7",
      "Temps de réponse < 1h",
      "Mises à jour de sécurité",
      "Protection DDoS avancée",
      "Audits sécurité trimestriels",
      "Plan de reprise d'activité",
      "Ingénieur dédié"
    ]
  };

  const plans = {
    essential: { monthly: 299, annually: 249 },
    business: { monthly: 699, annually: 599, highlighted: true },
    enterprise: { monthly: 1499, annually: 1299 }
  };

  return (
    <PricingSection id="tarifs">
      <Container>
        <Header>
          <Title>Nos Tarifs</Title>
          <Subtitle>
            Des offres adaptées à tous les besoins, de la startup à la grande entreprise.
          </Subtitle>
          
          <ToggleContainer>
            <ToggleWrapper>
              <ToggleButton
                active={!annual}
                onClick={() => setAnnual(false)}
              >
                Mensuel
              </ToggleButton>
              <ToggleButton
                active={annual}
                onClick={() => setAnnual(true)}
              >
                Annuel <Discount>-15%</Discount>
              </ToggleButton>
            </ToggleWrapper>
          </ToggleContainer>
        </Header>

        <PricingGrid>
          {(Object.keys(plans)).map((planKey) => {
            const price = annual ? plans[planKey].annually : plans[planKey].monthly;
            const isHighlighted = plans[planKey].highlighted;
            
            return (
              <PricingCard key={planKey} highlighted={isHighlighted}>
                {isHighlighted && (
                  <PopularBadge>Populaire</PopularBadge>
                )}
                
                <CardContent highlighted={isHighlighted}>
                  <PlanName>{planKey}</PlanName>
                  
                  <PriceContainer>
                    <Price>{price}€</Price>
                    <PriceUnit>/mois</PriceUnit>
                    {annual && <BillingPeriod>Facturation annuelle</BillingPeriod>}
                  </PriceContainer>
                  
                  <FeatureList>
                    {planFeatures[planKey].map((feature, idx) => (
                      <FeatureItem key={idx}>
                        <FeatureIcon size={20} />
                        {feature}
                      </FeatureItem>
                    ))}
                  </FeatureList>
                  
                  <SelectButton highlighted={isHighlighted}>
                    Sélectionner
                  </SelectButton>
                </CardContent>
              </PricingCard>
            );
          })}
        </PricingGrid>
        
        <CTASection>
          <CTAText>
            Besoin d'une solution sur mesure ? Contactez-nous pour un devis personnalisé.
          </CTAText>
          <CTAButton href="#contact">
            Demander un devis
          </CTAButton>
        </CTASection>
      </Container>
    </PricingSection>
  );
};

export default Pricing;