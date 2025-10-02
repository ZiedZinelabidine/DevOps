import React, { useState } from 'react';
import { Smartphone, Database, Cloud, Server, Lock, Gauge, Moon, Sun, Layers, Code2, Rocket, TestTube, Users, Bug, Sparkles } from 'lucide-react';
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
  },
  pillar: {
    ui: '#3b82f6',
    backend: '#8b5cf6',
    database: '#10b981'
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
  },
  pillar: {
    ui: '#60a5fa',
    backend: '#a78bfa',
    database: '#34d399'
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
  padding: 3rem;
`;

const Content = styled.div`
  max-width: 70rem;
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

const PillarSection = styled.section`
  background: ${props => props.theme.cardBg};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const PillarHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${props => props.theme.border};

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    color: ${props => props.theme.text};
    margin: 0 0 1rem 0;
  }

  p {
    color: ${props => props.theme.text};
    opacity: 0.8;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const PillarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const PillarCard = styled.div`
  background: ${props => props.theme.cardBg};
  border: 2px solid ${props => props.theme.pillar[props.$type]};
  border-radius: 1rem;
  padding: 2rem;
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    color: ${props => props.theme.pillar[props.$type]};
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid ${props => props.theme.border};
    
    &:last-child {
      border-bottom: none;
    }
    
    svg {
      flex-shrink: 0;
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

function Archi() {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Content>
          <Title>Les Trois Piliers d'une Application Mobile</Title>

          <PillarSection>
            <PillarHeader>
              <h2>Architecture d'une Application Mobile</h2>
              <p>Une application mobile repose sur trois piliers fondamentaux qui travaillent en synergie pour offrir une expérience utilisateur optimale.</p>
            </PillarHeader>

            <PillarGrid>
              <PillarCard $type="ui">
              <a href="https://itgalaxy.io/freelance-graphiste">

                <h3>
                  <Smartphone size={28} />
                  Interface Graphique
                </h3>
                </a>
                <FeatureList>
                  <li>
                    <Layers size={20} color={theme.pillar.ui} />
                    Design intuitif et moderne
                  </li>
                  <li>
                    <Gauge size={20} color={theme.pillar.ui} />
                    Expérience utilisateur fluide
                  </li>
                  <li>
                    <Smartphone size={20} color={theme.pillar.ui} />
                    Adaptation aux différents écrans
                  </li>
                </FeatureList>
              </PillarCard>

              <PillarCard $type="backend">
              <a href="https://itgalaxy.io/freelance-informatique">
                <h3>
                  <Server size={28} />
                  Backend
                </h3>
                </a>
                <FeatureList>
                  <li>
                    <Code2 size={20} color={theme.pillar.backend} />
                    Logique métier complexe
                  </li>
                  <li>
                    <Cloud size={20} color={theme.pillar.backend} />
                    Services cloud scalables
                  </li>
                  <li>
                    <Lock size={20} color={theme.pillar.backend} />
                    Sécurité des données
                  </li>
                </FeatureList>
              </PillarCard>

              <PillarCard $type="database">
              <a href="https://itgalaxy.io/infogerance-devops">

                <h3>
                  <Database size={28} />
                  Base de Données
                </h3>
                </a>
                <FeatureList>
                  <li>
                    <Database size={20} color={theme.pillar.database} />
                    Stockage structuré
                  </li>
                  <li>
                    <Gauge size={20} color={theme.pillar.database} />
                    Performance optimisée
                  </li>
                  <li>
                    <Lock size={20} color={theme.pillar.database} />
                    Protection des données
                  </li>
                </FeatureList>
              </PillarCard>
            </PillarGrid>
          </PillarSection>
        </Content>

      </Container>
    </ThemeProvider>
  );
}

export default Archi;