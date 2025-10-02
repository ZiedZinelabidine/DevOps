import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import {
  Server, Database, Box, Layers, Zap, Globe, FileJson, ArrowRight,
  Package, Boxes, Shield, Code2, Cpu, Workflow, Settings, BookOpen,
  Rocket, Puzzle, Terminal, Cloud, Search, Library, FolderTree, GitBranch,
  Network, Laptop, Lock, Key, Wrench, MonitorSmartphone, Webhook, Infinity,
  Gauge, Braces, Binary, Blocks, Bot, Cog, Fingerprint, Lightbulb
} from 'lucide-react';
import Offers from '../Offres';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #0a0f1c 0%, #1a1b26 100%);
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
  background: linear-gradient(45deg, #1e3a8a 0%, #312e81 50%, #4c1d95 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%);
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
  background: linear-gradient(to right, #fff, #93c5fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const Subtitle = styled.span`
  display: block;
  font-size: 1.75rem;
  color: #93c5fd;
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
  border: 1px solid rgba(99, 102, 241, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const ListTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(to right, #60a5fa, #93c5fd);
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
    background: linear-gradient(to right, #60a5fa, transparent);
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
  border: 1px solid rgba(99, 102, 241, 0.1);
  animation: ${floatAnimation} 6s ease-in-out infinite;
  animation-delay: ${() => Math.random() * 2}s;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
                0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: rgba(99, 102, 241, 0.3);
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
  background: rgba(99, 102, 241, 0.2);
  color: #93c5fd;
  border: 1px solid rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;

  ${FrameworkCard}:hover & {
    background: rgba(99, 102, 241, 0.3);
    border-color: rgba(99, 102, 241, 0.4);
    transform: scale(1.05);
  }
`;
const frameworks = {
  web: [
    {
      name: 'Express.js',
      description: 'Framework web rapide, minimaliste et flexible',
      icon: <Server size={32} />,
      features: ['Routing', 'Middleware', 'REST API'],
      color: 'rgba(59, 130, 246, 0.2)',
      url: 'https://expressjs.com/'
    },
    {
      name: 'Next.js',
      description: 'Framework React pour la production',
      icon: <Rocket size={32} />,
      features: ['SSR', 'Static', 'Hybrid'],
      color: 'rgba(0, 0, 0, 0.2)',
      url: 'https://nextjs.org/'
    },
    {
      name: 'NestJS',
      description: 'Framework Node.js progressif',
      icon: <Shield size={32} />,
      features: ['TypeScript', 'Modulaire', 'Enterprise'],
      color: 'rgba(220, 38, 38, 0.2)',
      url: 'https://nestjs.com/'
    },
    {
      name: 'Fastify',
      description: 'Framework web rapide et à faible overhead',
      icon: <Zap size={32} />,
      features: ['Performance', 'Plugins', 'Schema'],
      color: 'rgba(37, 99, 235, 0.2)',
      url: 'https://www.fastify.io/'
    },
    {
      name: 'Koa',
      description: 'Framework web nouvelle génération',
      icon: <Box size={32} />,
      features: ['Async', 'Middleware', 'Léger'],
      color: 'rgba(16, 185, 129, 0.2)',
      url: 'https://koajs.com/'
    },
    {
      name: 'Remix',
      description: 'Framework web full stack',
      icon: <Infinity size={32} />,
      features: ['Full Stack', 'SSR', 'Nested Routes'],
      color: 'rgba(139, 92, 246, 0.2)',
      url: 'https://remix.run/'
    },
    {
      name: 'Adonis.js',
      description: 'Framework web MVC full-stack',
      icon: <Boxes size={32} />,
      features: ['MVC', 'ORM', 'Auth'],
      color: 'rgba(236, 72, 153, 0.2)',
      url: 'https://adonisjs.com/'
    },
    {
      name: 'Hapi',
      description: 'Framework pour applications et services',
      icon: <Settings size={32} />,
      features: ['Enterprise', 'Plugins', 'Security'],
      color: 'rgba(245, 158, 11, 0.2)',
      url: 'https://hapi.dev/'
    },
    {
      name: 'Meteor',
      description: 'Plateforme full-stack JavaScript',
      icon: <Globe size={32} />,
      features: ['Real-time', 'Full Stack', 'DDP'],
      color: 'rgba(168, 85, 247, 0.2)',
      url: 'https://www.meteor.com/'
    },
    {
      name: 'Sails.js',
      description: 'Framework MVC pour Node.js',
      icon: <Layers size={32} />,
      features: ['MVC', 'Waterline ORM', 'WebSockets'],
      color: 'rgba(236, 72, 153, 0.2)',
      url: 'https://sailsjs.com/'
    }
  ],
  tools: [
    {
      name: 'TypeScript',
      description: 'Superset JavaScript typé',
      icon: <Code2 size={32} />,
      features: ['Types', 'ES6+', 'Tooling'],
      color: 'rgba(59, 130, 246, 0.2)',
      url: 'https://www.typescriptlang.org/'
    },
    {
      name: 'Prisma',
      description: 'ORM nouvelle génération',
      icon: <Database size={32} />,
      features: ['Type-safe', 'Migrations', 'Studio'],
      color: 'rgba(236, 72, 153, 0.2)',
      url: 'https://www.prisma.io/'
    },
    {
      name: 'Jest',
      description: 'Framework de test JavaScript',
      icon: <Puzzle size={32} />,
      features: ['Testing', 'Snapshots', 'Coverage'],
      color: 'rgba(245, 158, 11, 0.2)',
      url: 'https://jestjs.io/'
    },
    {
      name: 'PM2',
      description: 'Gestionnaire de processus pour Node.js',
      icon: <Cpu size={32} />,
      features: ['Process', 'Monitoring', 'Cluster'],
      color: 'rgba(16, 185, 129, 0.2)',
      url: 'https://pm2.keymetrics.io/'
    },
    {
      name: 'ESLint',
      description: 'Outil de linting JavaScript',
      icon: <Search size={32} />,
      features: ['Linting', 'Rules', 'Plugins'],
      color: 'rgba(139, 92, 246, 0.2)',
      url: 'https://eslint.org/'
    },
    {
      name: 'Webpack',
      description: 'Bundler de modules JavaScript',
      icon: <Package size={32} />,
      features: ['Bundling', 'Optimization', 'HMR'],
      color: 'rgba(37, 99, 235, 0.2)',
      url: 'https://webpack.js.org/'
    },
    {
      name: 'GraphQL',
      description: 'Langage de requête pour APIs',
      icon: <Braces size={32} />,
      features: ['Query', 'Schema', 'Resolvers'],
      color: 'rgba(220, 38, 38, 0.2)',
      url: 'https://graphql.org/'
    },
    {
      name: 'Sequelize',
      description: 'ORM Node.js pour SQL',
      icon: <FolderTree size={32} />,
      features: ['ORM', 'Migrations', 'Multi-SQL'],
      color: 'rgba(168, 85, 247, 0.2)',
      url: 'https://sequelize.org/'
    },
    {
      name: 'Socket.io',
      description: 'Bibliothèque temps réel',
      icon: <Webhook size={32} />,
      features: ['WebSocket', 'Real-time', 'Events'],
      color: 'rgba(6, 182, 212, 0.2)',
      url: 'https://socket.io/'
    },
    {
      name: 'Nx',
      description: 'Système de build intelligent',
      icon: <Binary size={32} />,
      features: ['Monorepo', 'Cache', 'Plugins'],
      color: 'rgba(99, 102, 241, 0.2)',
      url: 'https://nx.dev/'
    }
  ],
  cloud: [
    {
      name: 'Serverless',
      description: 'Framework pour applications sans serveur',
      icon: <Cloud size={32} />,
      features: ['FaaS', 'AWS', 'Azure'],
      color: 'rgba(236, 72, 153, 0.2)',
      url: 'https://www.serverless.com/'
    },
    {
      name: 'AWS SDK',
      description: 'SDK pour services Amazon Web Services',
      icon: <Library size={32} />,
      features: ['AWS', 'Services', 'Cloud'],
      color: 'rgba(245, 158, 11, 0.2)',
      url: 'https://aws.amazon.com/sdk-for-javascript/'
    },
    {
      name: 'Firebase Admin',
      description: 'SDK admin pour Firebase',
      icon: <Lock size={32} />,
      features: ['Auth', 'Database', 'Storage'],
      color: 'rgba(16, 185, 129, 0.2)',
      url: 'https://firebase.google.com/docs/admin/setup'
    },
    {
      name: 'Pulumi',
      description: 'Infrastructure as Code moderne',
      icon: <Blocks size={32} />,
      features: ['IaC', 'Multi-cloud', 'TypeScript'],
      color: 'rgba(139, 92, 246, 0.2)',
      url: 'https://www.pulumi.com/'
    },
    {
      name: 'Terraform CDK',
      description: 'CDK pour Terraform en TypeScript',
      icon: <Cog size={32} />,
      features: ['IaC', 'CDK', 'Terraform'],
      color: 'rgba(37, 99, 235, 0.2)',
      url: 'https://www.terraform.io/docs/cd'
    },
    {
      name: 'Kubernetes Client',
      description: 'Client officiel pour Kubernetes',
      icon: <Workflow size={32} />,
      features: ['K8s', 'Container', 'Orchestration'],
      color: 'rgba(220, 38, 38, 0.2)',
      url: 'https://kubernetes.io/docs/reference/svcs-api/'
    },
    {
      name: 'Vercel SDK',
      description: 'SDK pour la plateforme Vercel',
      icon: <MonitorSmartphone size={32} />,
      features: ['Deploy', 'Edge', 'Serverless'],
      color: 'rgba(168, 85, 247, 0.2)',
      url: 'https://vercel.com/docs'
    },
    {
      name: 'Auth0',
      description: 'Plateforme d\'authentification',
      icon: <Fingerprint size={32} />,
      features: ['Auth', 'Identity', 'SSO'],
      color: 'rgba(6, 182, 212, 0.2)',
      url: 'https://auth0.com/'
    },
    {
      name: 'Stripe SDK',
      description: 'SDK pour paiements Stripe',
      icon: <Key size={32} />,
      features: ['Payments', 'Billing', 'Subscriptions'],
      color: 'rgba(99, 102, 241, 0.2)',
      url: 'https://stripe.com/docs/api'
    },
    {
      name: 'OpenAI Node',
      description: 'SDK pour l\'API OpenAI',
      icon: <Bot size={32} />,
      features: ['AI', 'GPT', 'Embeddings'],
      color: 'rgba(236, 72, 153, 0.2)',
      url: 'https://github.com/openai/openai-node'
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



function FrameWorksNode() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <HeroSection>
          <MaxWidthWrapper>
            <HeroContent>
              <Title>
                Écosystème Node.js | Experts & Freelances  | ItGalaxy.io
                <Subtitle>Frameworks, Outils et Solutions Cloud</Subtitle>
              </Title>
              <Description>
                Découvrez les frameworks et outils Node.js essentiels pour construire des applications
                modernes, performantes et évolutives.
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
                  <FrameworkCard key={framework.name} color={framework.color} onClick={() => window.location.href = framework.url}>
                    <CardHeader color={framework.color}>
                      <IconWrapper>
                        {framework.icon}
                        <ArrowRight size={20} color="#93c5fd" />
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
              <ListTitle>Outils & Bibliothèques</ListTitle>
              <FrameworkList>
                {frameworks.tools.map((framework) => (
                  <FrameworkCard key={framework.name} color={framework.color} onClick={() => window.location.href = framework.url}>
                    <CardHeader color={framework.color}>
                      <IconWrapper>
                        {framework.icon} 
                        <ArrowRight size={20} color="#93c5fd" />
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
              <ListTitle>Solutions Cloud</ListTitle>
              <FrameworkList>
                {frameworks.cloud.map((framework) => (
                  <FrameworkCard key={framework.name} color={framework.color} onClick={() => window.location.href = framework.url}>
                    <CardHeader color={framework.color}>
                      <IconWrapper>
                        {framework.icon}
                        <ArrowRight size={20} color="#93c5fd" />
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

export default FrameWorksNode;