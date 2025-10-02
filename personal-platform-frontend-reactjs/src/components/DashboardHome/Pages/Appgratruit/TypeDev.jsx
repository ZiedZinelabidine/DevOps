import React, { useState } from 'react';
import { 
  Smartphone, Database, Cloud, Server, Lock, Gauge, Moon, Sun, Layers, 
  Code2, Palette, Wand2, Users2, Boxes, PenTool, Figma, Laptop, AppWindow,
  Shield, GitBranch, Cpu, HardDrive, Network, Scale, ChevronRight, Globe,
  Workflow, Cog, Store, MessageSquare, Rocket, Building2, Container as ContainerIcon
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

const PageContainer = styled.div`
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

  & + & {
    margin-top: 3rem;
  }
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

const DevelopmentCard = styled(Card)`
  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1.5rem 0 1rem;
    color: ${props => props.theme.text};
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid ${props => props.theme.border};

    &:last-child {
      border-bottom: none;
    }

    svg {
      flex-shrink: 0;
      margin-top: 0.25rem;
    }
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1.5rem;
  color: ${props => props.theme.text};
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

function TypeDev() {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageContainer>
        <Content>
          <Title>Développement d'Applications Mobiles</Title>

          <Section>
            <SectionHeader>
              <h2>
                <Workflow size={28} />
                Types de Développement et Technologies
              </h2>
              <p>Le choix du type de développement et des technologies est crucial pour le succès de votre projet mobile.</p>
            </SectionHeader>

            <Grid>
              <DevelopmentCard $type="design">
                <CardTitle>
                <a href="https://itgalaxy.io/search/prestataires/">
                  <Cog size={24} />
                  Type de Développement
                  </a>
                </CardTitle>
                <List>
                  <li>
                    <ChevronRight size={20} />
                    <div>
                      <strong>Applications Simples</strong>
                      <p>Pour les <a href="https://itgalaxy.io/freelance-it">  sites e-commerce  </a> et applications basiques, utilisez des outils no-code ou low-code pour un développement rapide.</p>
                    </div>
                  </li>
                  <li>
                    <ChevronRight size={20} />
                    <div>
                      <strong>Applications Complexes</strong>
                      <p>Nécessite des développeurs expérimentés pour le <a href="https://itgalaxy.io/freelance-app"> mobile </a> et le <a href="https://itgalaxy.io/freelance-informatique"> backend </a>, avec une expertise en architecture.</p>
                    </div>
                  </li>
                </List>
              </DevelopmentCard>

              <DevelopmentCard $type="backend">
                <CardTitle>
                <a href="https://itgalaxy.io/formations/awesome-frameworks/react">
                  <Code2 size={24} />
                  Frameworks et Technologies
                 </a> 
                </CardTitle>
                <List>
                  <li>
                    <ChevronRight size={20} />
                    <div>
                    <a href="https://itgalaxy.io/freelance-app">
                      <strong>Mobile</strong>
                      </a>
                      <p><a href="https://itgalaxy.io/formations/awesome-frameworks/react"> React </a> Native pour le cross-platform, Swift pour iOS natif, Kotlin pour Android natif.</p>
                    </div>
                  </li>
                  <li>
                    <ChevronRight size={20} />
                    <div>
                    <a href="https://itgalaxy.io/freelance-informatique">
                      <strong>Backend</strong>
                      </a>
                      <p> <a href="https://itgalaxy.io/formations/awesome-frameworks/nodejs">
                      Node.js </a> pour la scalabilité, Golang pour la performance, Python pour l'analyse de données.</p>
                    </div>
                  </li>
                </List>
              </DevelopmentCard>

              <DevelopmentCard $type="security">
                <CardTitle>
                <a href="https://itgalaxy.io/svc/infra-as-service">
                  <Cloud size={24} />
                  Hébergement
                </a>
                </CardTitle>
                <List>
                  <li>
                    <ChevronRight size={20} />
                    <div>
                      <strong>Cloud Providers</strong>
                      <p><a href="https://formations-aws.itgalaxy.io/" >AWS</a>, Google Cloud , Azure ou <a href="https://formations-k8s.itgalaxy.io/introduction-kubernetes/"> Kubernetes </a> pour une infrastructure évolutive et sécurisée.</p>
                    </div>
                  </li>
                  <li>
                    <ChevronRight size={20} />
                    <div>
                      <strong>Considérations</strong>
                      <p>Sécurité, conformité RGPD, backups automatiques et monitoring.</p>
                    </div>
                  </li>
                </List>
              </DevelopmentCard>
            </Grid>
          </Section>
        </Content>
      </PageContainer>
    </ThemeProvider>
  );
}

export default TypeDev;