import React, { useState } from 'react';
import { Layers, Code2, Rocket, Settings2, Moon, Sun, Database, Cloud, Smartphone, TestTube, Users, Gauge, Bug, Sparkles } from 'lucide-react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const lightTheme = {
  background: 'linear-gradient(to bottom right, #f9fafb, #f3f4f6)',
  text: '#1f2937',
  cardBg: '#ffffff',
  primary: '#2563eb',
  secondary: '#9333ea',
  accent: '#f3f4f6',
  border: '#e5e7eb',
  step: {
    1: '#3b82f6',
    2: '#8b5cf6',
    3: '#ec4899',
    4: '#10b981'
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
  step: {
    1: '#60a5fa',
    2: '#a78bfa',
    3: '#f472b6',
    4: '#34d399'
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

const StepSection = styled.section`
  background: ${props => props.theme.cardBg};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  border-left: 4px solid ${props => props.theme.step[props.$stepNumber]};
`;

const StepHeader = styled.div`
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

const StepNumber = styled.div`
  background: ${props => props.theme.step[props.$stepNumber]};
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.25rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

const FeatureCard = styled.div`
  background: ${props => props.theme.accent};
  border-radius: 0.75rem;
  padding: 1.5rem;
  
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  p {
    margin: 0;
    line-height: 1.6;
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

function Etapes() {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Content>
          <StepSection $stepNumber={1}>
            <StepHeader>
              <StepNumber $stepNumber={1}>1</StepNumber>
              <h2>Comprendre l'architecture</h2>
            </StepHeader>
            <FeatureGrid>
              <FeatureCard>
              <a href="https://itgalaxy.io/freelance-graphiste">
                <h3><Smartphone size={24} color={theme.step[1]} />Interface Utilisateur</h3>
                </a>
                <p>Design intuitif et expérience utilisateur fluide pour garantir l'engagement des utilisateurs.</p>
              </FeatureCard>
              <FeatureCard>
              <a href="https://itgalaxy.io/freelance-informatique">
                <h3><Database size={24} color={theme.step[1]} />Backend</h3>
              </a> 
                <p>Infrastructure robuste pour gérer les données et la logique métier de l'application.</p>
              </FeatureCard>
              <FeatureCard>
                <a href="https://itgalaxy.io/freelance-developpeur">
                <h3><Cloud size={24} color={theme.step[1]} />API</h3>
                </a>
                <p>Interfaces de communication efficaces entre le frontend et le backend.</p>
              </FeatureCard>
            </FeatureGrid>
          </StepSection>

          <StepSection $stepNumber={2}>
            <StepHeader>
              <StepNumber $stepNumber={2}>2</StepNumber>
              <h2>Choix technologiques</h2>
            </StepHeader>
            <FeatureGrid>
              <FeatureCard>
              <a href="https://itgalaxy.io/formations/awesome-frameworks/flutter">
                <h3><Code2 size={24} color={theme.step[2]} />Frameworks</h3>
                </a>
                <p>Sélection entre React Native, Flutter, ou développement natif selon les besoins du projet.</p>
              </FeatureCard>
              <FeatureCard>
              <a href="https://itgalaxy.io/infogerance-devops">
                <h3><Layers size={24} color={theme.step[2]} />Architecture</h3>
               </a>
                <p>Définition de l'architecture technique pour assurer performance et scalabilité.</p>
              </FeatureCard>
              <FeatureCard>
              <a href="https://itgalaxy.io/infogerance-serveur">
                <h3><Cloud size={24} color={theme.step[2]} />Hébergement</h3>
                </a>
                <p>Choix de la solution d'hébergement adaptée (Firebase, AWS, etc.).</p>
              </FeatureCard>
            </FeatureGrid>
          </StepSection>

          <StepSection $stepNumber={3}>
            <StepHeader>
              <StepNumber $stepNumber={3}>3</StepNumber>
              <h2>Développement et mise en production</h2>
            </StepHeader>
            <FeatureGrid>
              <FeatureCard>
              <a href="https://itgalaxy.io/freelance-info">
                <h3><Rocket size={24} color={theme.step[3]} />Développement</h3>
              </a>  
                <p>Implémentation des fonctionnalités selon les spécifications techniques.</p>
              </FeatureCard>
              <FeatureCard>
              <a href="https://itgalaxy.io/freelance-designer">
                <h3><TestTube size={24} color={theme.step[3]} />Tests</h3>
                </a>
                <p>Tests rigoureux pour garantir la qualité et la fiabilité de l'application.</p>
              </FeatureCard>
              <FeatureCard>
              <a href="https://itgalaxy.io/infogerance-devops">
                <h3><Gauge size={24} color={theme.step[3]} />Performance</h3>
              </a>  
                <p>Optimisation des performances pour une expérience utilisateur fluide.</p>
              </FeatureCard>
            </FeatureGrid>
          </StepSection>

          <StepSection $stepNumber={4}>
            <StepHeader>
              <StepNumber $stepNumber={4}>4</StepNumber>
              <h2>Maintenance et amélioration</h2>
            </StepHeader>
            <FeatureGrid>
              <FeatureCard>
              <a href="https://itgalaxy.io/formations/monitoring-site-web-elk/commentmonitorersiteweb">
                <h3><Bug size={24} color={theme.step[4]} />Corrections</h3>
              </a>
                <p>Résolution rapide des bugs et problèmes signalés.</p>
              </FeatureCard>
              <FeatureCard>
              <a href="https://itgalaxy.io/formations/monitoring-site-web-elk/commentmonitorersiteweb">
                <h3><Users size={24} color={theme.step[4]} />Retours utilisateurs</h3>
              </a>
                <p>Analyse des retours pour améliorer l'expérience utilisateur.</p>
              </FeatureCard>
              <FeatureCard>
              <a href="https://itgalaxy.io/freelance-web">
                <h3><Sparkles size={24} color={theme.step[4]} />Évolutions</h3>
               </a> 
                <p>Ajout de nouvelles fonctionnalités pour maintenir l'application compétitive.</p>
              </FeatureCard>
            </FeatureGrid>
          </StepSection>
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default Etapes;