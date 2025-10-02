import React, { useState } from 'react';
import { Smartphone, Database, Cloud, Server, Lock, Gauge, Moon, Sun, Layers, Code2, Palette, Wand2, Users2, Boxes, PenTool, Figma, Laptop, AppWindow } from 'lucide-react';
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
    collab: '#3b82f6'
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
    collab: '#60a5fa'
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
      color: ${props => props.theme.primary};

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

function Graphic() {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Content>
          <Title>Mise en Place d'une Interface Graphique</Title>

          <Section>
            <SectionHeader>
              <h2>
                <Palette size={28} />
                Conception d'Interface Mobile
              </h2>
              <p>La création d'une interface graphique efficace nécessite une approche méthodique et des outils adaptés pour garantir une expérience utilisateur optimale.</p>
            </SectionHeader>

            <Grid>
              <Card $type="design">

              <a href="https://itgalaxy.io/freelance-graphiste">
                <h3>
                  <PenTool size={28} />
                  Outils de Conception
                </h3>
                </a>
                <p>Des plateformes professionnelles pour créer des interfaces attrayantes et fonctionnelles.</p>
                <FeatureList>
                  <li>
                    <Figma size={20} color={theme.tool.design} />
                    <a href="https://itgalaxy.io/search/prestataires/skill/figma">
                    Figma </a> pour le prototypage
                  </li>
                  <li>
                    <Palette size={20} color={theme.tool.design} />
                    <a href="https://itgalaxy.io/search/prestataires/skill/adobe">  Adobe XD </a> pour le design
                  </li>
                  <li>
                    <Layers size={20} color={theme.tool.design} />
                    Bibliothèques de composants
                  </li>
                </FeatureList>
              </Card>

              <Card $type="collab">
              <a href="https://itgalaxy.io/freelance-graphiste">
                <h3>
                  <Users2 size={28} />
                  Collaboration Experte
                </h3>
                </a>
                <p>Travaillez avec des professionnels pour créer une interface exceptionnelle.</p>
                <FeatureList>
                  <li>
                    <Wand2 size={20} color={theme.tool.collab} />
                    Expertise en UX/UI
                  </li>
                  <li>
                    <Users2 size={20} color={theme.tool.collab} />
                    Équipes spécialisées
                  </li>
                  <li>
                    <Gauge size={20} color={theme.tool.collab} />
                    Tests utilisateurs
                  </li>
                </FeatureList>
              </Card>

              <Card $type="nocode">
                <h3>
                  <Boxes size={28} />
                  Solutions No Code
                </h3>
                <p>Plateformes de développement visuel pour créer rapidement des applications.</p>
                <FeatureList>
                  <li>
                    <AppWindow size={20} color={theme.tool.nocode} />
                    <a href="https://www.adalo.com" target="_blank" rel="noopener noreferrer">
                      Adalo
                    </a>
                    {' '}pour iOS/Android
                  </li>
                  <li>
                    <Laptop size={20} color={theme.tool.nocode} />
                    <a href="https://bubble.io" target="_blank" rel="noopener noreferrer">
                      Bubble
                    </a>
                    {' '}pour Web/Mobile
                  </li>
                  <li>
                    <Boxes size={20} color={theme.tool.nocode} />
                    <a href="https://thunkable.com" target="_blank" rel="noopener noreferrer">
                      Thunkable
                    </a>
                    {' '}pour Mobile
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

export default Graphic;