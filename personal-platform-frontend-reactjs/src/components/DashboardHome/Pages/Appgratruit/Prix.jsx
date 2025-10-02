import React, { useState } from 'react';
import { Calculator, Users, Palette, Database, Moon, Sun, Code, Building2, CreditCard, Megaphone } from 'lucide-react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const lightTheme = {
  background: 'linear-gradient(to bottom right, #f9fafb, #f3f4f6)',
  text: '#1f2937',
  cardBg: '#ffffff',
  primary: '#2563eb',
  secondary: '#9333ea',
  accent: '#f3f4f6',
  border: '#e5e7eb',
  pricing: {
    basic: '#60a5fa',
    intermediate: '#8b5cf6',
    complex: '#ec4899'
  }
};

const darkTheme = {
  background: 'linear-gradient(to bottom right, #111827, #1f2937)',
  text: '#f3f4f6',
  cardBg: '#1f2937',
  primary: '#3b82f6',
  secondary: '#a855f7',
  accent: '#374151',
  border: '#374151',
  pricing: {
    basic: '#3b82f6',
    intermediate: '#7c3aed',
    complex: '#db2777'
  }
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    margin: 0;
    transition: all 0.3s ease;
    font-family: system-ui, -apple-system, sans-serif;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 3rem 1rem;
`;

const Content = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.text};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Section = styled.section`
  background: ${props => props.theme.cardBg};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid ${props => props.theme.border};
  padding-bottom: 1rem;

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    color: ${props => props.theme.text};
    margin: 0;
  }
`;

const FactorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const FactorCard = styled.div`
  background: ${props => props.theme.accent};
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  p {
    margin: 0;
    line-height: 1.6;
  }
`;

const PricingTiers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const PricingCard = styled.div`
  background: ${props => props.theme.cardBg};
  border: 2px solid ${props => props.theme.pricing[props.tier]};
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  
  h3 {
    color: ${props => props.theme.pricing[props.tier]};
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
  }
  
  .price {
    font-size: 2rem;
    font-weight: bold;
    color: ${props => props.theme.pricing[props.tier]};
    margin: 1rem 0;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  
  li {
    margin: 0.75rem 0;
    padding-left: 1.5rem;
    position: relative;
    
    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: ${props => props.theme.primary};
    }
  }
`;

const ThemeToggle = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: ${props => props.theme.cardBg};
  border: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.text};
  padding: 0.75rem;
  border-radius: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: ${props => props.theme.accent};
  }
`;

function Prix() {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Content>
          <Section>
            <SectionHeader>
              <Calculator size={32} color={theme.primary} />
              <a href="https://itgalaxy.io/svc/app-as-service"> 
              <h2>Facteurs influençant le coût</h2>
            </a>  
            </SectionHeader>
            
            <FactorGrid>
              <FactorCard>
                <h3><Code size={24} color={theme.primary} />Complexité</h3>
                <p>Les fonctionnalités avancées comme les systèmes de paiement, réseaux sociaux et géolocalisation augmentent le coût.</p>
              </FactorCard>
              
              <FactorCard>
                <h3><Palette size={24} color={theme.primary} />Design UX/UI</h3>
                <p>Un design personnalisé et une interface utilisateur attrayante prennent plus de temps et augmentent les coûts.</p>
              </FactorCard>
              
              <FactorCard>
                <h3><Database size={24} color={theme.primary} />Backend</h3>
                <p>Une application nécessitant un backend complexe ou une gestion avancée des bases de données impacte le budget.</p>
              </FactorCard>
            </FactorGrid>
          </Section>

          <Section>
            <SectionHeader>
              <Users size={32} color={theme.secondary} />
              <a href="https://itgalaxy.io/svc/app-as-service"> 
              <h2>Options de développement</h2>
              </a>  
            </SectionHeader>

            <FactorGrid>
              <FactorCard>
                <a href="https://itgalaxy.io/search/prestataires"> 
                <h3><Users size={24} color={theme.secondary} />Freelances</h3>
                </a>
                <List>
                  <li>Prix plus compétitifs que les agences</li>
                  <li>Qualité variable selon l'expérience</li>
                  <li>Communication directe</li>
                </List>
              </FactorCard>

              <FactorCard>
              <a href="https://itgalaxy.io/svc/app-as-service"> 
                <h3><Building2 size={24} color={theme.secondary} />Agences</h3>
              </a>  

                <List>
                  <li>Équipes diversifiées et expertes</li>
                  <li>Service complet et support</li>
                  <li>Processus structuré</li>
                </List>
              </FactorCard>
            </FactorGrid>
          </Section>

          <Section>
            <SectionHeader>
              <CreditCard size={32} color={theme.secondary} />
              <a href="https://itgalaxy.io/svc/app-as-service"> 
              <h2>Estimation de budget</h2>
              </a>  
            </SectionHeader>

            <PricingTiers>
              <PricingCard tier="basic">
              <a href="https://itgalaxy.io/svc/app-as-service"> 
                <h3>Application Simple</h3>
                </a>
                <div className="price">2 000 € - 10 000 €</div>
                <List>
                  <li>Fonctionnalités de base</li>
                  <li>Interface simple</li>
                  <li>Une plateforme</li>
                </List>
              </PricingCard>

              <PricingCard tier="intermediate">
              <a href="https://itgalaxy.io/svc/app-as-service"> 
                <h3>Application Intermédiaire</h3>
              </a>
                <div className="price">10 000 € - 30 000 €</div>
                <List>
                  <li>Fonctionnalités avancées</li>
                  <li>Design personnalisé</li>
                  <li>Multi-plateformes</li>
                </List>
              </PricingCard>

              <PricingCard tier="complex">
              <a href="https://itgalaxy.io/svc/app-as-service"> 
                <h3>Application Complexe</h3>
               </a>
                <div className="price">30 000 € - 50 000 €+</div>
                <List>
                  <li>Fonctionnalités complexes</li>
                  <li>Intégrations externes</li>
                  <li>Architecture évoluée</li>
                </List>
              </PricingCard>
            </PricingTiers>
          </Section>

          <Section>
            <SectionHeader>
              <Megaphone size={32} color={theme.secondary} />
              <a href="https://itgalaxy.io/svc/app-as-service"> 
              <h2>Coûts supplémentaires</h2>
              </a>
            </SectionHeader>

            <FactorGrid>
              <FactorCard>
              <a href="https://itgalaxy.io/monitoring-site-web-elk/commentmonitorersiteweb"> 
                <h3>Maintenance</h3>
              </a>  
                <p>Prévoyez un budget pour la maintenance régulière et les mises à jour de l'application.</p>
              </FactorCard>

              <FactorCard>
              <a href="https://itgalaxy.io/freelance-seo"> 

                <h3>Marketing</h3>
              </a>  
                <p>Les coûts liés à la promotion de votre application et à son lancement doivent être pris en compte.</p>
              </FactorCard>
            </FactorGrid>
          </Section>
        </Content>
    </ThemeProvider>
  );
}

export default Prix;