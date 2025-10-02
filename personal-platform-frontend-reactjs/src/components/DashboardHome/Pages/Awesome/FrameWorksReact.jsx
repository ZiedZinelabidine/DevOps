import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import {
  Code2, Database, Box, Layers, Zap, Globe, FileJson, ArrowRight,
  Package, Boxes, Shield, Server, Cpu, Workflow, Settings, BookOpen,
  Rocket, Puzzle, Terminal, Cloud, Search, Library, FolderTree, GitBranch,
  Laptop, Lock, Key, LayoutGrid, Blocks, Bot, Cog, Fingerprint, Lightbulb,
  Paintbrush, Palette, Layout, Smartphone, Wand2, Sparkles, Shapes, Atom,
  TestTube, Infinity, Braces, Binary, Webhook, MonitorSmartphone
} from 'lucide-react';
import Offers from '../Offres';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #0f172a 0%, #312e81 100%);
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
  background: linear-gradient(45deg, #312e81 0%, #4c1d95 50%, #701a75 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
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
  background: linear-gradient(to right, #fff, #c4b5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const Subtitle = styled.span`
  display: block;
  font-size: 1.75rem;
  color: #c4b5fd;
  margin-top: 1rem;
  font-weight: 500;
`;

const Description = styled.p`
  color: #e0e7ff;
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
  background: rgba(30, 41, 59, 0.7);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(139, 92, 246, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const ListTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(to right, #a78bfa, #c4b5fd);
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
    background: linear-gradient(to right, #a78bfa, transparent);
  }
`;

const FrameworkList = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const FrameworkCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(139, 92, 246, 0.1);
  animation: ${floatAnimation} 6s ease-in-out infinite;
  animation-delay: ${() => Math.random() * 2}s;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
                0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: rgba(139, 92, 246, 0.3);
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
  color: #cbd5e1;
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
  background: rgba(15, 23, 42, 0.3);
`;

const Tag = styled.span`
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
  background: rgba(139, 92, 246, 0.2);
  color: #c4b5fd;
  border: 1px solid rgba(139, 92, 246, 0.3);
  transition: all 0.3s ease;

  ${FrameworkCard}:hover & {
    background: rgba(139, 92, 246, 0.3);
    border-color: rgba(139, 92, 246, 0.4);
    transform: scale(1.05);
  }
`;

const frameworks = {
  ui: [
    {
      name: 'Material UI',
      description: 'Bibliothèque de composants React populaire',
      icon: <Palette size={32} />,
      features: ['Components', 'Theming', 'Customization'],
      color: 'rgba(25, 118, 210, 0.2)',
      url: 'https://mui.com/'
    },
    {
      name: 'Chakra UI',
      description: 'Composants accessibles et modulaires',
      icon: <Layout size={32} />,
      features: ['Accessible', 'Composable', 'Theme'],
      color: 'rgba(48, 140, 122, 0.2)',
      url: 'https://chakra-ui.com/'
    },
    {
      name: 'Tailwind CSS',
      description: 'Framework CSS utility-first',
      icon: <Paintbrush size={32} />,
      features: ['Utility', 'JIT', 'Responsive'],
      color: 'rgba(56, 189, 248, 0.2)',
      url: 'https://tailwindcss.com/'
    },
    {
      name: 'Styled Components',
      description: 'CSS-in-JS avec support des thèmes',
      icon: <Wand2 size={32} />,
      features: ['CSS-in-JS', 'Theming', 'Dynamic'],
      color: 'rgba(219, 39, 119, 0.2)',
      url: 'https://styled-components.com/'
    },
    {
      name: 'Framer Motion',
      description: 'Bibliothèque d\'animations pour React',
      icon: <Sparkles size={32} />,
      features: ['Animation', 'Gestures', 'Transitions'],
      color: 'rgba(147, 51, 234, 0.2)',
      url: 'https://www.framer.com/motion/'
    },
    {
      name: 'Radix UI',
      description: 'Composants React headless et accessibles',
      icon: <Shapes size={32} />,
      features: ['Headless', 'Accessible', 'Primitives'],
      color: 'rgba(0, 0, 0, 0.2)',
      url: 'https://www.radix-ui.com/'
    },
    {
      name: 'React Spring',
      description: 'Animations basées sur la physique',
      icon: <Infinity size={32} />,
      features: ['Physics', 'Gestures', 'Web Animation'],
      color: 'rgba(139, 92, 246, 0.2)',
      url: 'https://react-spring.io/'
    },
    {
      name: 'Mantine',
      description: 'Bibliothèque de composants React moderne',
      icon: <LayoutGrid size={32} />,
      features: ['Components', 'Hooks', 'Dark Mode'],
      color: 'rgba(14, 165, 233, 0.2)',
      url: 'https://mantine.dev/'
    },
    {
      name: 'DaisyUI',
      description: 'Composants Tailwind CSS',
      icon: <Blocks size={32} />,
      features: ['Tailwind', 'Themes', 'Components'],
      color: 'rgba(168, 85, 247, 0.2)',
      url: 'https://daisyui.com/'
    },
    {
      name: 'React Icons',
      description: 'Collection d\'icônes populaires',
      icon: <Shapes size={32} />,
      features: ['Icons', 'SVG', 'Collections'],
      color: 'rgba(239, 68, 68, 0.2)',
      url: 'https://react-icons.github.io/react-icons/'
    }
  ],
  tools: [
    {
      name: 'React Query',
      description: 'Gestion d\'état serveur performante',
      icon: <Database size={32} />,
      features: ['Cache', 'Mutations', 'Real-time'],
      color: 'rgba(255, 65, 84, 0.2)',
      url: 'https://react-query.tanstack.com/'
    },
    {
      name: 'Redux Toolkit',
      description: 'Gestion d\'état avec Redux simplifiée',
      icon: <Atom size={32} />,
      features: ['State', 'Actions', 'Slices'],
      color: 'rgba(118, 74, 188, 0.2)',
      url: 'https://redux-toolkit.js.org/'
    },
    {
      name: 'React Hook Form',
      description: 'Gestion de formulaires performante',
      icon: <FileJson size={32} />,
      features: ['Forms', 'Validation', 'Performance'],
      color: 'rgba(236, 72, 153, 0.2)',
      url: 'https://react-hook-form.com/'
    },
    {
      name: 'Zustand',
      description: 'Gestion d\'état minimaliste',
      icon: <Box size={32} />,
      features: ['State', 'Simple', 'Fast'],
      color: 'rgba(16, 185, 129, 0.2)',
      url: 'https://zustand.surge.sh/'
    },
    {
      name: 'React Testing Library',
      description: 'Tests centrés sur l\'utilisateur',
      icon: <TestTube size={32} />,
      features: ['Testing', 'DOM', 'Accessibility'],
      color: 'rgba(239, 68, 68, 0.2)',
      url: 'https://testing-library.com/docs/react-testing-library/intro/'
    },
    {
      name: 'Storybook',
      description: 'Développement de composants isolé',
      icon: <BookOpen size={32} />,
      features: ['UI', 'Documentation', 'Testing'],
      color: 'rgba(245, 158, 11, 0.2)',
      url: 'https://storybook.js.org/'
    },
    {
      name: 'React Router',
      description: 'Routage pour applications React',
      icon: <GitBranch size={32} />,
      features: ['Routing', 'Navigation', 'Nested'],
      color: 'rgba(220, 38, 38, 0.2)',
      url: 'https://reactrouter.com/'
    },
    {
      name: 'SWR',
      description: 'Récupération de données React',
      icon: <Webhook size={32} />,
      features: ['Data Fetching', 'Cache', 'Real-time'],
      color: 'rgba(0, 0, 0, 0.2)',
      url: 'https://swr.vercel.app/'
    },
    {
      name: 'React DnD',
      description: 'Drag and Drop pour React',
      icon: <Workflow size={32} />,
      features: ['DnD', 'Gestures', 'Sorting'],
      color: 'rgba(139, 92, 246, 0.2)',
      url: 'https://react-dnd.github.io/react-dnd/about'
    },
    {
      name: 'React Virtualized',
      description: 'Rendu de listes performant',
      icon: <Layers size={32} />,
      features: ['Performance', 'Lists', 'Grid'],
      color: 'rgba(59, 130, 246, 0.2)',
      url: 'https://github.com/bvaughn/react-virtualized'
    }
  ],
  frameworks: [
    {
      name: 'Next.js',
      description: 'Framework React pour la production',
      icon: <Rocket size={32} />,
      features: ['SSR', 'Static', 'API Routes'],
      color: 'rgba(0, 0, 0, 0.2)',
      url: 'https://nextjs.org/'
    },
    {
      name: 'Remix',
      description: 'Framework web full stack',
      icon: <Infinity size={32} />,
      features: ['SSR', 'Nested Routes', 'Loader'],
      color: 'rgba(139, 92, 246, 0.2)',
      url: 'https://remix.run/'
    },
    {
      name: 'Gatsby',
      description: 'Framework pour sites statiques',
      icon: <Globe size={32} />,
      features: ['Static', 'GraphQL', 'Plugins'],
      color: 'rgba(163, 59, 152, 0.2)',
      url: 'https://www.gatsbyjs.com/'
    },
    {
      name: 'Astro',
      description: 'Framework web moderne',
      icon: <Sparkles size={32} />,
      features: ['Islands', 'MPA', 'Zero JS'],
      color: 'rgba(255, 93, 1, 0.2)',
      url: 'https://astro.build/'
    },
    {
      name: 'Redwood',
      description: 'Framework full-stack opinioné',
      icon: <Boxes size={32} />,
      features: ['Full Stack', 'GraphQL', 'Cells'],
      color: 'rgba(220, 38, 38, 0.2)',
      url: 'https://redwoodjs.com/'
    },
    {
      name: 'Blitz.js',
      description: 'Framework full-stack sans API',
      icon: <Zap size={32} />,
      features: ['Zero-API', 'Full Stack', 'Auth'],
      color: 'rgba(99, 102, 241, 0.2)',
      url: 'https://blitzjs.com/'
    },
    {
      name: 'T3 Stack',
      description: 'Stack typesafe moderne',
      icon: <Shield size={32} />,
      features: ['TypeScript', 'tRPC', 'Prisma'],
      color: 'rgba(139, 92, 246, 0.2)',
      url: 'https://trpc.io/'
    },
    {
      name: 'Expo',
      description: 'Framework React Native',
      icon: <Smartphone size={32} />,
      features: ['Mobile', 'Web', 'Native'],
      color: 'rgba(0, 0, 0, 0.2)',
      url: 'https://expo.dev/'
    },
    {
      name: 'React Native Web',
      description: 'React Native pour le web',
      icon: <MonitorSmartphone size={32} />,
      features: ['Cross-platform', 'Native', 'Web'],
      color: 'rgba(14, 165, 233, 0.2)',
      url: 'https://necolas.github.io/react-native-web/'
    },
    {
      name: 'Electron React',
      description: 'Applications desktop avec React',
      icon: <Laptop size={32} />,
      features: ['Desktop', 'Native', 'Cross-platform'],
      color: 'rgba(56, 189, 248, 0.2)',
      url: 'https://www.electronjs.org/docs/latest/quick-start'
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



function FrameWorksReact() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <HeroSection>
          <MaxWidthWrapper>
            <HeroContent>
              <Title>
                Écosystème React | Experts & Freelances  | ItGalaxy.io
                <Subtitle>UI, Outils et Frameworks</Subtitle>
              </Title>
              <Description>
                Découvrez les bibliothèques et outils React essentiels pour construire des applications
                web modernes, performantes et évolutives.
              </Description>
            </HeroContent>
          </MaxWidthWrapper>
        </HeroSection>

        <MaxWidthWrapper>
          <ListsContainer>
            <ListSection>
              <ListTitle>Bibliothèques UI</ListTitle>
              <FrameworkList>
                {frameworks.ui.map((framework) => (
                  <FrameworkCard key={framework.name} color={framework.color} onClick={() => window.location.href = framework.url} >
                    <CardHeader color={framework.color}>
                      <IconWrapper>
                        {framework.icon}
                        <ArrowRight size={20} color="#c4b5fd" />
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
                  <FrameworkCard key={framework.name} color={framework.color} onClick={() => window.location.href = framework.url} >
                    <CardHeader color={framework.color}>
                      <IconWrapper>
                        {framework.icon}
                        <ArrowRight size={20} color="#c4b5fd" />
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
              <ListTitle>Frameworks & Meta-frameworks</ListTitle>
              <FrameworkList>
                {frameworks.frameworks.map((framework) => (
                  <FrameworkCard key={framework.name} color={framework.color} onClick={() => window.location.href = framework.url} >
                    <CardHeader color={framework.color}>
                      <IconWrapper>
                        {framework.icon}
                        <ArrowRight size={20} color="#c4b5fd" />
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

export default FrameWorksReact;