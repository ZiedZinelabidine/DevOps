import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import {
  Smartphone, Palette, Layout, Layers, Zap, Globe, FileJson, ArrowRight,
  Package, Boxes, Shield, Server, Cpu, Workflow, Settings, BookOpen,
  Rocket, Puzzle, Terminal, Cloud, Search, Library, FolderTree, GitBranch,
  Laptop, Lock, Key, LayoutGrid, Blocks, Bot, Cog, Fingerprint, Lightbulb,
  Paintbrush, MonitorSmartphone, Code2, Database, Box, Binary, Braces,
  Aperture, Sparkles, Shapes, Wand2
} from 'lucide-react';
import Offers from '../Offres';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #042B59 0%, #1C2834 100%);
    color: #fff;
    font-family: system-ui, -apple-system, sans-serif;
  }
`;

const rippleAnimation = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  50% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(0.95);
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
  background: linear-gradient(45deg, #0553B1 0%, #1ECBE1 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(30, 203, 225, 0.2) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    animation: ${rippleAnimation} 4s ease-in-out infinite;
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
  background: linear-gradient(to right, #fff, #1ECBE1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const Subtitle = styled.span`
  display: block;
  font-size: 1.75rem;
  color: #BEE6FD;
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
  background: rgba(5, 83, 177, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(30, 203, 225, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const ListTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(to right, #1ECBE1, #BEE6FD);
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
    background: linear-gradient(to right, #1ECBE1, transparent);
  }
`;

const FrameworkList = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const FrameworkCard = styled.div`
  background: rgba(5, 83, 177, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(30, 203, 225, 0.1);
  animation: ${floatAnimation} 6s ease-in-out infinite;
  animation-delay: ${() => Math.random() * 2}s;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
                0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: rgba(30, 203, 225, 0.3);
    cursor : pointer;
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
  background: rgba(5, 83, 177, 0.2);
`;

const Tag = styled.span`
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
  background: rgba(30, 203, 225, 0.1);
  color: #BEE6FD;
  border: 1px solid rgba(30, 203, 225, 0.3);
  transition: all 0.3s ease;

  ${FrameworkCard}:hover & {
    background: rgba(30, 203, 225, 0.2);
    border-color: rgba(30, 203, 225, 0.4);
    transform: scale(1.05);
  }
`;
const frameworks = {
  ui: [
    {
      name: 'Material Design',
      description: 'Widgets officiels Material Design',
      icon: <Palette size={32} />,
      features: ['Material 3', 'Theming', 'Components'],
      color: 'rgba(5, 83, 177, 0.3)',
      url: 'https://material.io/'
    },
    {
      name: 'Cupertino',
      description: 'Widgets style iOS natif',
      icon: <Smartphone size={32} />,
      features: ['iOS Design', 'Native Look', 'Apple HIG'],
      color: 'rgba(30, 203, 225, 0.3)',
      url: 'https://flutter.dev/docs/development/ui/widgets/cupertino'
    },
    {
      name: 'Flutter Widgets',
      description: 'Widgets de base personnalisables',
      icon: <Layout size={32} />,
      features: ['Custom UI', 'Flexible', 'Reusable'],
      color: 'rgba(0, 150, 136, 0.3)',
      url: 'https://flutter.dev/docs/development/ui/widgets'
    },
    {
      name: 'Animations',
      description: 'API d\'animation puissante',
      icon: <Sparkles size={32} />,
      features: ['Smooth', 'Custom', 'Physics'],
      color: 'rgba(233, 30, 99, 0.3)',
      url: 'https://flutter.dev/docs/development/ui/animations'
    },
    {
      name: 'GetX UI',
      description: 'Widgets et composants GetX',
      icon: <Shapes size={32} />,
      features: ['Snackbars', 'Dialogs', 'Themes'],
      color: 'rgba(156, 39, 176, 0.3)',
      url: 'https://pub.dev/packages/get'
    },
    {
      name: 'Flutter SVG',
      description: 'Support SVG pour Flutter',
      icon: <Paintbrush size={32} />,
      features: ['Vector', 'Scalable', 'Custom Paint'],
      color: 'rgba(255, 152, 0, 0.3)',
      url: 'https://pub.dev/packages/flutter_svg'
    },
    {
      name: 'Responsive Framework',
      description: 'UI responsive automatique',
      icon: <MonitorSmartphone size={32} />,
      features: ['Adaptive', 'Breakpoints', 'Scaling'],
      color: 'rgba(33, 150, 243, 0.3)',
      url: 'https://pub.dev/packages/responsive_framework'
    },
    {
      name: 'Flutter Hooks',
      description: 'Hooks style React pour Flutter',
      icon: <Code2 size={32} />,
      features: ['State', 'Lifecycle', 'Reuse'],
      color: 'rgba(76, 175, 80, 0.3)',
      url: 'https://pub.dev/packages/flutter_hooks'
    }
  ],
  state: [
    {
      name: 'Provider',
      description: 'Gestion d\'état recommandée',
      icon: <Database size={32} />,
      features: ['DI', 'State', 'Official'],
      color: 'rgba(33, 150, 243, 0.3)',
      url: 'https://pub.dev/packages/provider'
    },
    {
      name: 'Riverpod',
      description: 'Provider nouvelle génération',
      icon: <Box size={32} />,
      features: ['Type-safe', 'Testing', 'Modular'],
      color: 'rgba(156, 39, 176, 0.3)',
      url: 'https://riverpod.dev/'
    },
    {
      name: 'Bloc',
      description: 'Gestion d\'état prédictible',
      icon: <Layers size={32} />,
      features: ['Reactive', 'Stream', 'Events'],
      color: 'rgba(233, 30, 99, 0.3)',
      url: 'https://bloclibrary.dev/#/'
    },
    {
      name: 'GetX',
      description: 'Solution tout-en-un légère',
      icon: <Zap size={32} />,
      features: ['State', 'Navigation', 'DI'],
      color: 'rgba(0, 150, 136, 0.3)',
      url: 'https://pub.dev/packages/get'
    },
    {
      name: 'MobX',
      description: 'État simple et scalable',
      icon: <Binary size={32} />,
      features: ['Observable', 'Actions', 'Reactions'],
      color: 'rgba(255, 152, 0, 0.3)',
      url: 'https://mobx.dartlang.org/'
    },
    {
      name: 'Redux',
      description: 'Gestion d\'état prédictible',
      icon: <Workflow size={32} />,
      features: ['Store', 'Actions', 'Middleware'],
      color: 'rgba(76, 175, 80, 0.3)',
      url: 'https://pub.dev/packages/redux'
    }
  ],
  tools: [
    {
      name: 'Flutter CLI',
      description: 'Outil en ligne de commande',
      icon: <Terminal size={32} />,
      features: ['Create', 'Build', 'Deploy'],
      color: 'rgba(33, 150, 243, 0.3)',
      url: 'https://flutter.dev/docs/get-started/install'
    },
    {
      name: 'DevTools',
      description: 'Outils de débogage puissants',
      icon: <Braces size={32} />,
      features: ['Debug', 'Profile', 'Inspect'],
      color: 'rgba(156, 39, 176, 0.3)',
      url: 'https://flutter.dev/docs/development/tools/devtools/overview'
    },
    {
      name: 'Hot Reload',
      description: 'Rechargement instantané',
      icon: <Aperture size={32} />,
      features: ['Fast', 'Development', 'Preview'],
      color: 'rgba(233, 30, 99, 0.3)',
      url: 'https://flutter.dev/docs/development/tools/hot-reload'
    },
    {
      name: 'Codemagic',
      description: 'CI/CD pour Flutter',
      icon: <Rocket size={32} />,
      features: ['CI/CD', 'Testing', 'Deploy'],
      color: 'rgba(0, 150, 136, 0.3)',
      url: 'https://codemagic.io/'
    },
    {
      name: 'Firebase',
      description: 'Backend as a Service',
      icon: <Cloud size={32} />,
      features: ['Auth', 'Database', 'Storage'],
      color: 'rgba(255, 152, 0, 0.3)',
      url: 'https://firebase.google.com/docs/flutter/setup'
    },
    {
      name: 'Flutter Test',
      description: 'Framework de test complet',
      icon: <Shield size={32} />,
      features: ['Unit', 'Widget', 'Integration'],
      color: 'rgba(76, 175, 80, 0.3)',
      url: 'https://flutter.dev/docs/cookbook/testing/unit/introduction'
    },
    {
      name: 'Dart Analyzer',
      description: 'Analyse statique du code',
      icon: <Search size={32} />,
      features: ['Lint', 'Analysis', 'Fix'],
      color: 'rgba(33, 150, 243, 0.3)',
      url: 'https://dart.dev/tools/dart-analyzer'
    },
    {
      name: 'Flutter Gen',
      description: 'Génération de code',
      icon: <Wand2 size={32} />,
      features: ['Assets', 'Colors', 'Fonts'],
      color: 'rgba(156, 39, 176, 0.3)',
      url: 'https://pub.dev/packages/flutter_gen'
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



function FrameWorksFlutter() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <HeroSection>
          <MaxWidthWrapper>
            <HeroContent>
              <Title>
                Écosystème Flutter | Experts & Freelances  | ItGalaxy.io
                <Subtitle>UI, État et Outils</Subtitle>
              </Title>
              <Description>
                Découvrez les packages, widgets et outils essentiels de Flutter pour créer
                des applications multiplateformes magnifiques et performantes.
              </Description>
            </HeroContent>
          </MaxWidthWrapper>
        </HeroSection>

        <MaxWidthWrapper>
          <ListsContainer>
            <ListSection>
              <ListTitle>UI & Widgets</ListTitle>
              <FrameworkList>
                {frameworks.ui.map((framework) => (
                  <FrameworkCard key={framework.name} color={framework.color} onClick={() => window.location.href = framework.url}>
                    <CardHeader color={framework.color}>
                      <IconWrapper>
                        {framework.icon}
                        <ArrowRight size={20} color="#BEE6FD" />
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
              <ListTitle>Gestion d'État</ListTitle>
              <FrameworkList>
                {frameworks.state.map((framework) => (
                  <FrameworkCard key={framework.name} color={framework.color} onClick={() => window.location.href = framework.url}>
                    <CardHeader color={framework.color}>
                      <IconWrapper>
                        {framework.icon}
                        <ArrowRight size={20} color="#BEE6FD" />
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
              <ListTitle>Outils & Services</ListTitle>
              <FrameworkList>
                {frameworks.tools.map((framework) => (
                  <FrameworkCard key={framework.name} color={framework.color} onClick={() => window.location.href = framework.url}>
                    <CardHeader color={framework.color}>
                      <IconWrapper>
                        {framework.icon}
                        <ArrowRight size={20} color="#BEE6FD" />
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

export default FrameWorksFlutter;