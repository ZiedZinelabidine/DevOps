import React, { useState } from 'react';
import { 
  Smartphone, Database, Cloud, Server, Lock, Gauge, Moon, Sun, Layers, 
  Code2, Palette, Wand2, Users2, Boxes, PenTool, Figma, Laptop, AppWindow,
  Shield, GitBranch, Cpu, HardDrive, Network, Scale
} from 'lucide-react';
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
  },
  tool: {
    design: '#f59e0b',
    nocode: '#10b981',
    collab: '#3b82f6',
    backend: '#8b5cf6',
    database: '#10b981',
    security: '#ef4444'
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
  },
  tool: {
    design: '#fbbf24',
    nocode: '#34d399',
    collab: '#60a5fa',
    backend: '#a78bfa',
    database: '#34d399',
    security: '#f87171'
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
  padding: 3rem 1rem;
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

const Section = styled.section`
  background: ${props => props.theme.cardBg};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${props => props.theme.border};

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    color: ${props => props.theme.text};
    margin: 0 0 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  p {
    color: ${props => props.theme.text};
    opacity: 0.8;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const Card = styled.div`
  background: ${props => props.theme.cardBg};
  border: 2px solid ${props => props.theme.tool[props.$type]};
  border-radius: 1rem;
  padding: 2rem;
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    color: ${props => props.theme.tool[props.$type]};
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  p {
    margin: 0 0 1.5rem 0;
    line-height: 1.6;
    opacity: 0.9;
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

    a {
      color: inherit;
      text-decoration: none;
      transition: color 0.2s ease;
      
      &:hover {
        color: ${props => props.theme.primary};
      }
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

function Backend() {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
       <Container>
        <Content>
          <Title>Gestion des Traitements de Données</Title>

          <Section>
            <SectionHeader>
              <h2>
                <Server size={28} />
                Architecture Backend
              </h2>
              <p>Une architecture backend robuste est essentielle pour gérer efficacement les données et assurer la performance de votre application.</p>
            </SectionHeader>

            <Grid>
              <Card $type="backend">
               <a href="https://itgalaxy.io/freelance-informatique">
                <h3>
                  <Cpu size={28} />
                  Technologies Backend
                </h3>
                </a>
                <p>Choisissez les technologies adaptées à vos besoins.</p>
                <FeatureList>
                  <li>
                    <Code2 size={20} color={theme.tool.backend} />
                    <a href="https://itgalaxy.io/search/prestataires/skill/Node.js">
                    Node.js  </a> pour la scalabilité
                  </li>
                  <li>
                    <GitBranch size={20} color={theme.tool.backend} />
                    <a href="https://itgalaxy.io/search/prestataires/skill/python">
                    Python </a>  pour l'analyse
                  </li>
                  <li>
                    <Network size={20} color={theme.tool.backend} />
                    <a href="https://itgalaxy.io/freelance-developpeur">
                    API RESTful </a>  
                  </li>
                </FeatureList>
              </Card>

              <Card $type="database">
              <a href="https://itgalaxy.io/infogerance-devops">
                <h3>
                  <Database size={28} />
                  Bases de Données
                </h3>
                </a>
                <p>Solutions de stockage adaptées à vos données.</p>
                <FeatureList>
                  <li>
                    <HardDrive size={20} color={theme.tool.database} />
                    PostgreSQL relationnel
                  </li>
                  <li>
                    <Cloud size={20} color={theme.tool.database} />
                    MongoDB NoSQL
                  </li>
                  <li>
                    <Scale size={20} color={theme.tool.database} />
                    Optimisation des requêtes
                  </li>
                </FeatureList>
              </Card>

              <Card $type="security">
              <a href="https://itgalaxy.io/monitoring-site-web-elk/commentmonitorersiteweb">
                <h3>
                  <Shield size={28} />
                  Sécurité & Performance
                </h3>
                </a>
                <p>Protection des données et optimisation.</p>
                <FeatureList>
                  <li>
                    <Lock size={20} color={theme.tool.security} />
                    Chiffrement des données
                  </li>
                  <li>
                    <Shield size={20} color={theme.tool.security} />
                    Authentification sécurisée
                  </li>
                  <li>
                    <Scale size={20} color={theme.tool.security} />
                    Scalabilité horizontale
                  </li>
                </FeatureList>
              </Card>
            </Grid>
          </Section>
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default Backend;