import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { Code2, Database, Box, Layers, Zap, Globe, FileJson, ArrowRight, Package, Boxes, Shield, Server, Cpu, Workflow, Settings, BookOpen, Rocket, Puzzle, Terminal, Cloud, Search, Library, FolderTree, GitBranch, Laptop, Lock, Key, LayoutGrid, Blocks, Bot, Cog, Fingerprint, Lightbulb, Paintbrush, Palette, Layout, Smartphone, Wand2, Sparkles, Shapes, Atom, TestTube, Infinity, Braces, Binary, Webhook, MonitorSmartphone, FlaskRound as Flask, Brain, LineChart, BarChart, Table, PieChart as ChartPie, Microscope, Dna, Sigma, Waves, Aperture } from 'lucide-react';
import Offers from '../Offres';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #1a1c2c 0%, #2d557d 100%);
    color: #fff;
    font-family: system-ui, -apple-system, sans-serif;
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.4;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
`;

const HeroSection = styled.div`
  position: relative;
  padding: 6rem 0;
  background: linear-gradient(45deg, #306998 0%, #FFD43B 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(255, 212, 59, 0.2) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    animation: ${pulseAnimation} 4s ease-in-out infinite;
  }
`;

const MaxWidthWrapper = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 60rem;
  margin: 0 auto;
  position: relative;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(to right, #fff, #FFD43B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const Subtitle = styled.span`
  display: block;
  font-size: 1.75rem;
  color: #FFE873;
  margin-top: 1rem;
  font-weight: 500;
`;

const Description = styled.p`
  color: #fff;
  font-size: 1.25rem;
  line-height: 1.8;
  margin: 2rem auto;
  max-width: 48rem;
`;

const ListsContainer = styled.div`
  display: grid;
  gap: 2rem;
  padding: 4rem 0;
  position: relative;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ListSection = styled.div`
  background: rgba(48, 105, 152, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(255, 212, 59, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const ListTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(to right, #FFD43B, #FFE873);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 2px;
    background: linear-gradient(to right, #FFD43B, transparent);
  }
`;

const FrameworkList = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const FrameworkCard = styled.div`
  background: rgba(48, 105, 152, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 212, 59, 0.1);
  animation: ${floatAnimation} 6s ease-in-out infinite;
  animation-delay: ${() => Math.random() * 2}s;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
                0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: rgba(255, 212, 59, 0.3);
    cursor: pointer;
  }

`;

const CardHeader = styled.div`
  padding: 1.5rem;
  background: ${props => props.color};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;

  svg {
    transition: all 0.3s ease;
  }

  ${FrameworkCard}:hover & svg:first-child {
    transform: scale(1.1) rotate(-5deg);
  }

  ${FrameworkCard}:hover & svg:last-child {
    transform: translateX(4px);
  }
`;

const CardTitle = styled.h3`
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  position: relative;
  z-index: 1;
`;

const CardDescription = styled.p`
  margin-top: 0.5rem;
  color: #e2e8f0;
  font-size: 0.875rem;
  line-height: 1.5;
  position: relative;
  z-index: 1;
`;

const TagContainer = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  background: rgba(48, 105, 152, 0.2);
`;

const Tag = styled.span`
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
  background: rgba(255, 212, 59, 0.1);
  color: #FFE873;
  border: 1px solid rgba(255, 212, 59, 0.3);
  transition: all 0.3s ease;

  ${FrameworkCard}:hover & {
    background: rgba(255, 212, 59, 0.2);
    border-color: rgba(255, 212, 59, 0.4);
    transform: scale(1.05);
  }
`;

const frameworks = {
  web: [
    {
      name: 'Django',
      description: 'Framework web complet et sécurisé',
      icon: <Shield size={32} />,
      features: ['ORM', 'Admin', 'Security'],
      color: 'rgba(9, 45, 66, 0.3)',
      url: 'https://www.djangoproject.com/'
    },
    {
      name: 'FastAPI',
      description: 'Framework API moderne et rapide',
      icon: <Zap size={32} />,
      features: ['Async', 'OpenAPI', 'Type Hints'],
      color: 'rgba(5, 150, 105, 0.3)',
      url: 'https://fastapi.tiangolo.com/'
    },
    {
      name: 'Flask',
      description: 'Micro-framework web léger',
      icon: <Flask size={32} />,
      features: ['Lightweight', 'Flexible', 'Extensions'],
      color: 'rgba(0, 0, 0, 0.3)',
      url: 'https://flask.palletsprojects.com/'
    },
    {
      name: 'Pyramid',
      description: 'Framework web modulaire',
      icon: <Shapes size={32} />,
      features: ['Modular', 'Scalable', 'Flexible'],
      color: 'rgba(220, 38, 38, 0.3)',
      url: 'https://trypyramid.com/'
    },
    {
      name: 'Tornado',
      description: 'Framework web asynchrone',
      icon: <Workflow size={32} />,
      features: ['Async', 'WebSocket', 'Non-blocking'],
      color: 'rgba(59, 130, 246, 0.3)',
      url: 'https://www.tornadoweb.org/en/stable/'
    },
    {
      name: 'aiohttp',
      description: 'Client/Server asyncio HTTP',
      icon: <Globe size={32} />,
      features: ['Async', 'HTTP', 'WebSocket'],
      color: 'rgba(139, 92, 246, 0.3)',
      url: 'https://docs.aiohttp.org/en/stable/'
    },
    {
      name: 'Dash',
      description: 'Framework pour applications analytiques',
      icon: <ChartPie size={32} />,
      features: ['Analytics', 'Plotly', 'Interactive'],
      color: 'rgba(236, 72, 153, 0.3)',
      url: 'https://dash.plotly.com/'
    },
    {
      name: 'Streamlit',
      description: 'Apps de data science en minutes',
      icon: <LineChart size={32} />,
      features: ['Data Apps', 'ML', 'Interactive'],
      color: 'rgba(239, 68, 68, 0.3)',
      url: 'https://streamlit.io/'
    }
  ],
  data: [
    {
      name: 'NumPy',
      description: 'Calcul numérique performant',
      icon: <Binary size={32} />,
      features: ['Arrays', 'Math', 'Scientific'],
      color: 'rgba(14, 165, 233, 0.3)',
      url: 'https://numpy.org/'
    },
    {
      name: 'Pandas',
      description: 'Analyse de données flexible',
      icon: <Table size={32} />,
      features: ['DataFrames', 'Analysis', 'IO'],
      color: 'rgba(99, 102, 241, 0.3)',
      url: 'https://pandas.pydata.org/'
    },
    {
      name: 'SciPy',
      description: 'Calcul scientifique avancé',
      icon: <Sigma size={32} />,
      features: ['Scientific', 'Optimization', 'Stats'],
      color: 'rgba(139, 92, 246, 0.3)',
      url: 'https://www.scipy.org/'
    },
    {
      name: 'Scikit-learn',
      description: 'Machine learning simplifié',
      icon: <Brain size={32} />,
      features: ['ML', 'Models', 'Preprocessing'],
      color: 'rgba(236, 72, 153, 0.3)',
      url: 'https://scikit-learn.org/stable/'
    },
    {
      name: 'PyTorch',
      description: 'Deep learning moderne',
      icon: <Atom size={32} />,
      features: ['DL', 'GPU', 'Dynamic'],
      color: 'rgba(239, 68, 68, 0.3)',
      url: 'https://pytorch.org/'
    },
    {
      name: 'TensorFlow',
      description: 'Plateforme ML complète',
      icon: <Boxes size={32} />,
      features: ['ML', 'Production', 'Ecosystem'],
      color: 'rgba(245, 158, 11, 0.3)',
      url: 'https://www.tensorflow.org/'
    },
    {
      name: 'Matplotlib',
      description: 'Visualisation de données classique',
      icon: <BarChart size={32} />,
      features: ['Plotting', '2D/3D', 'Publication'],
      color: 'rgba(16, 185, 129, 0.3)',
      url: 'https://matplotlib.org/'
    },
    {
      name: 'Seaborn',
      description: 'Visualisation statistique',
      icon: <LineChart size={32} />,
      features: ['Stats', 'Beautiful', 'High-level'],
      color: 'rgba(59, 130, 246, 0.3)',
      url: 'https://seaborn.pydata.org/'
    }
  ],
  tools: [
    {
      name: 'Poetry',
      description: 'Gestion de dépendances moderne',
      icon: <Package size={32} />,
      features: ['Dependencies', 'Publishing', 'Virtual Env'],
      color: 'rgba(139, 92, 246, 0.3)',
      url: 'https://python-poetry.org/'
    },
    {
      name: 'Black',
      description: 'Formateur de code sans compromis',
      icon: <Code2 size={32} />,
      features: ['Formatting', 'PEP8', 'Deterministic'],
      color: 'rgba(0, 0, 0, 0.3)',
      url: 'https://black.readthedocs.io/en/stable/'
    },
    {
      name: 'Pytest',
      description: 'Framework de test puissant',
      icon: <TestTube size={32} />,
      features: ['Testing', 'Fixtures', 'Plugins'],
      color: 'rgba(14, 165, 233, 0.3)',
      url: 'https://pytest.org/'
    },
    {
      name: 'MyPy',
      description: 'Vérification de types statique',
      icon: <Shield size={32} />,
      features: ['Types', 'Static', 'Checking'],
      color: 'rgba(236, 72, 153, 0.3)',
      url: 'https://mypy.readthedocs.io/en/stable/'
    },
    {
      name: 'Pylint',
      description: 'Linter Python complet',
      icon: <Search size={32} />,
      features: ['Linting', 'Quality', 'Standards'],
      color: 'rgba(245, 158, 11, 0.3)',
      url: 'https://pylint.pycqa.org/en/latest/'
    },
    {
      name: 'Jupyter',
      description: 'Notebooks interactifs',
      icon: <BookOpen size={32} />,
      features: ['Interactive', 'Notebooks', 'Sharing'],
      color: 'rgba(245, 158, 11, 0.3)',
      url: 'https://jupyter.org/'
    },
    {
      name: 'Pydantic',
      description: 'Validation de données',
      icon: <FileJson size={32} />,
      features: ['Validation', 'Serialization', 'Types'],
      color: 'rgba(16, 185, 129, 0.3)',
      url: 'https://pydantic-docs.helpmanual.io/'
    },
    {
      name: 'Typer',
      description: 'CLI moderne avec types',
      icon: <Terminal size={32} />,
      features: ['CLI', 'Types', 'Modern'],
      color: 'rgba(59, 130, 246, 0.3)',
      url: 'https://typer.tiangolo.com/'
    }
  ]
};

const OffreCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(30, 41, 59, 0.5);
  border-radius: 1rem;
  border: 1px solid rgba(99, 102, 241, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(99, 102, 241, 0.4);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;



function FrameWorksPython() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <HeroSection>
          <MaxWidthWrapper>
            <HeroContent>
              <Title>
                Écosystème Python | Experts & Freelances  | ItGalaxy.io
                <Subtitle>Web, Data Science et Outils</Subtitle>
              </Title>
              <Description>
                Découvrez les bibliothèques et frameworks Python essentiels pour le développement web,
                la science des données et l'intelligence artificielle.
              </Description>
            </HeroContent>
          </MaxWidthWrapper>
        </HeroSection>

        <MaxWidthWrapper>
          <ListsContainer>
            <ListSection>
              <ListTitle>Frameworks Web</ListTitle>
              <FrameworkList>
                {frameworks.web.map((framework) => (
                  <FrameworkCard key={framework.name} color={framework.color} onClick={() => window.location.href = framework.url} >
                    <CardHeader color={framework.color}>
                      <IconWrapper>
                        {framework.icon}
                        <ArrowRight size={20} color="#FFE873" />
                      </IconWrapper>
                      <CardTitle>{framework.name}</CardTitle>
                      <CardDescription>{framework.description}</CardDescription>
                    </CardHeader>
                    <TagContainer>
                      {framework.features.map((feature) => (
                        <Tag key={feature}>{feature}</Tag>
                      ))}
                    </TagContainer>
                  </FrameworkCard>
                ))}
              </FrameworkList>
            </ListSection>

            <ListSection>
              <ListTitle>Data Science & ML</ListTitle>
              <FrameworkList>
                {frameworks.data.map((framework) => (
                  <FrameworkCard key={framework.name} color={framework.color} onClick={() => window.location.href = framework.url}>
                    <CardHeader color={framework.color}>
                      <IconWrapper>
                        {framework.icon}
                        <ArrowRight size={20} color="#FFE873" />
                      </IconWrapper>
                      <CardTitle>{framework.name}</CardTitle>
                      <CardDescription>{framework.description}</CardDescription>
                    </CardHeader>
                    <TagContainer>
                      {framework.features.map((feature) => (
                        <Tag key={feature}>{feature}</Tag>
                      ))}
                    </TagContainer>
                  </FrameworkCard>
                ))}
              </FrameworkList>
            </ListSection>

            <ListSection>
              <ListTitle>Outils & Utilitaires</ListTitle>
              <FrameworkList>
                {frameworks.tools.map((framework) => (
                  <FrameworkCard key={framework.name} color={framework.color} onClick={() => window.location.href = framework.url}>
                    <CardHeader color={framework.color}>
                      <IconWrapper>
                        {framework.icon}
                        <ArrowRight size={20} color="#FFE873" />
                      </IconWrapper>
                      <CardTitle>{framework.name}</CardTitle>
                      <CardDescription>{framework.description}</CardDescription>
                    </CardHeader>
                    <TagContainer>
                      {framework.features.map((feature) => (
                        <Tag key={feature}>{feature}</Tag>
                      ))}
                    </TagContainer>
                  </FrameworkCard>
                ))}
              </FrameworkList>
            </ListSection>
          </ListsContainer>
        </MaxWidthWrapper>
      </Container>
      <OffreCard>
        <Offers />
      </OffreCard>
    </>
  );
}

export default FrameWorksPython;