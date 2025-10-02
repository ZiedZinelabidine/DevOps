import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import {
  Code2, Database, Box, Layers, Zap, Globe, FileJson, ArrowRight,
  Package, Boxes, Shield, Server, Cpu, Workflow, Settings, BookOpen,
  Rocket, Puzzle, Wrench, Terminal, Laptop, Monitor, Cloud, Lock,
  Key, Search, LayoutGrid, Library, Folder, FolderTree, GitBranch,
  Clock
} from 'lucide-react';
import Offers from '../Offres';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
    color: #fff;
    font-family: system-ui, -apple-system, sans-serif;
  }
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
`;

const HeroSection = styled.div`
  position: relative;
  padding: 4rem 0;
  background: linear-gradient(-45deg, #1e40af, #3730a3, #6d28d9, #4f46e5);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
`;

const MaxWidthWrapper = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 60rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(to right, #fff, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const Subtitle = styled.span`
  display: block;
  font-size: 1.5rem;
  color: #c7d2fe;
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

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100%;
    background: radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
    z-index: -1;
  }
`;

const ListSection = styled.div`
  backdrop-filter: blur(8px);
  background: rgba(30, 41, 59, 0.7);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(99, 102, 241, 0.2);
`;

const ListTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(to right, #818cf8, #c7d2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 2px;
    background: linear-gradient(to right, #818cf8, transparent);
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

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
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
    transition: transform 0.3s ease;
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
  color: #c7d2fe;
  border: 1px solid rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;

  ${FrameworkCard}:hover & {
    background: rgba(99, 102, 241, 0.3);
    border-color: rgba(99, 102, 241, 0.4);
  }
`;

const FeaturesSection = styled.div`
  background: rgba(30, 41, 59, 0.7);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
  }
`;

const FeatureGrid = styled.div`
  margin-top: 4rem;
  display: grid;
  gap: 3rem;
  position: relative;
  z-index: 1;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
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
const frameworks = {
  populaires: [
    {
      name: 'Laravel',
      description: 'Framework PHP élégant pour des applications web modernes',
      icon: <Box size={32} />,
      features: ['MVC', 'Artisan CLI', 'Eloquent ORM'],
      color: 'rgba(239, 68, 68, 0.2)',
      url: 'https://laravel.com/'
    },
    {
      name: 'Symfony',
      description: 'Framework PHP professionnel et composants réutilisables',
      icon: <Puzzle size={32} />,
      features: ['Components', 'Enterprise', 'Flexible'],
      color: 'rgba(0, 0, 0, 0.2)',
      url: 'https://symfony.com/'
    },
    {
      name: 'CodeIgniter',
      description: 'Framework léger avec une empreinte minimale',
      icon: <Zap size={32} />,
      features: ['Léger', 'Rapide', 'Simple'],
      color: 'rgba(220, 38, 38, 0.2)',
      url: 'https://codeigniter.com/'
    },
    {
      name: 'CakePHP',
      description: 'Framework PHP rapide et moderne pour le web',
      icon: <Boxes size={32} />,
      features: ['Convention', 'Sécurité', 'ORM'],
      color: 'rgba(217, 70, 239, 0.2)',
      url: 'https://cakephp.org/'
    },
    {
      name: 'Yii Framework',
      description: 'Framework PHP haute performance',
      icon: <Rocket size={32} />,
      features: ['Performance', 'Sécurité', 'DRY'],
      color: 'rgba(37, 99, 235, 0.2)',
      url: 'https://www.yiiframework.com/'
    },
    {
      name: 'Laminas',
      description: 'Successeur de Zend Framework pour entreprises',
      icon: <Package size={32} />,
      features: ['Enterprise', 'Modulaire', 'Robuste'],
      color: 'rgba(16, 185, 129, 0.2)',
      url: 'https://getlaminas.org/'
    },
    {
      name: 'Slim',
      description: 'Micro-framework PHP pour APIs et applications web',
      icon: <Terminal size={32} />,
      features: ['Micro', 'API', 'PSR-7'],
      color: 'rgba(245, 158, 11, 0.2)',
      url: 'https://www.slimframework.com/'
    },
    {
      name: 'Phalcon',
      description: 'Framework PHP haute performance écrit en C',
      icon: <Cpu size={32} />,
      features: ['C-extension', 'Rapide', 'Bas niveau'],
      color: 'rgba(59, 130, 246, 0.2)',
      url: 'https://phalcon.io/'
    },
    {
      name: 'FuelPHP',
      description: 'Framework PHP communautaire flexible',
      icon: <Workflow size={32} />,
      features: ['HMVC', 'Modulaire', 'Flexible'],
      color: 'rgba(139, 92, 246, 0.2)',
      url: 'https://fuelphp.com/'
    },
    {
      name: 'Aura',
      description: 'Framework de composants PHP indépendants',
      icon: <Layers size={32} />,
      features: ['Composants', 'Indépendant', 'Léger'],
      color: 'rgba(236, 72, 153, 0.2)',
      url: 'https://auraphp.com/'
    }
  ],
  composants: [
    {
      name: 'Composer',
      description: 'Gestionnaire de dépendances PHP',
      icon: <Package size={32} />,
      features: ['Packages', 'Autoload', 'Dépendances'],
      color: 'rgba(99, 102, 241, 0.2)',
      url: 'https://getcomposer.org/'
    },
    {
      name: 'PHPUnit',
      description: 'Framework de test unitaire pour PHP',
      icon: <Shield size={32} />,
      features: ['Tests', 'TDD', 'Assertions'],
      color: 'rgba(6, 182, 212, 0.2)',
      url: 'https://phpunit.de/'
    },
    {
      name: 'Doctrine',
      description: 'ORM PHP et suite d\'outils de persistance',
      icon: <Database size={32} />,
      features: ['ORM', 'DBAL', 'Migrations'],
      color: 'rgba(245, 158, 11, 0.2)',
      url: 'https://www.doctrine-project.org/'
    },
    {
      name: 'Guzzle',
      description: 'Client HTTP PHP pour intégrer des services web',
      icon: <Globe size={32} />,
      features: ['HTTP', 'API', 'Client'],
      color: 'rgba(16, 185, 129, 0.2)',
      url: 'http://guzzlephp.org/'
    },
    {
      name: 'Carbon',
      description: 'Extension de DateTime pour PHP',
      icon: <Clock size={32} />,
      features: ['DateTime', 'Localization', 'Formatage'],
      color: 'rgba(236, 72, 153, 0.2)',
      url: 'https://carbon.nesbot.com/'
    },
    {
      name: 'Monolog',
      description: 'Bibliothèque de logging pour PHP',
      icon: <FileJson size={32} />,
      features: ['Logging', 'Handlers', 'PSR-3'],
      color: 'rgba(124, 58, 237, 0.2)',
      url: 'https://seldaek.github.io/monolog/'
    },
    {
      name: 'Symfony Components',
      description: 'Composants PHP réutilisables',
      icon: <Puzzle size={32} />,
      features: ['Modulaire', 'Standalone', 'Robuste'],
      color: 'rgba(0, 0, 0, 0.2)',
      url: 'https://symfony.com/doc/current/components/index.html'
    },
    {
      name: 'PHP-DI',
      description: 'Container d\'injection de dépendances',
      icon: <Box size={32} />,
      features: ['DI', 'Container', 'PSR-11'],
      color: 'rgba(239, 68, 68, 0.2)',
      url: 'https://php-di.org/'
    },
    {
      name: 'Flysystem',
      description: 'Abstraction de système de fichiers',
      icon: <FolderTree size={32} />,
      features: ['Fichiers', 'Storage', 'Cloud'],
      color: 'rgba(37, 99, 235, 0.2)',
      url: 'https://flysystem.thephpleague.com/'
    },
    {
      name: 'League Packages',
      description: 'Collection de packages PHP de qualité',
      icon: <Library size={32} />,
      features: ['Qualité', 'Standards', 'Modern'],
      color: 'rgba(168, 85, 247, 0.2)',
      url: 'https://thephpleague.com/'
    }
  ],
  alternatifs: [
    {
      name: 'ReactPHP',
      description: 'Event-driven PHP non-bloquant',
      icon: <Server size={32} />,
      features: ['Async', 'Event-driven', 'Non-blocking'],
      color: 'rgba(59, 130, 246, 0.2)',
      url: 'http://reactphp.org/'
    },
    {
      name: 'Swoole',
      description: 'Framework PHP asynchrone et haute performance',
      icon: <Cpu size={32} />,
      features: ['Async', 'WebSocket', 'Coroutines'],
      color: 'rgba(245, 158, 11, 0.2)',
      url: 'https://www.swoole.co.uk/'
    },
    {
      name: 'Workerman',
      description: 'Framework PHP pour applications socket',
      icon: <Settings size={32} />,
      features: ['Socket', 'Temps réel', 'Performance'],
      color: 'rgba(16, 185, 129, 0.2)',
      url: 'https://github.com/walkor/Workerman'
    },
    {
      name: 'API Platform',
      description: 'Framework pour construire des API web',
      icon: <Globe size={32} />,
      features: ['API', 'REST', 'GraphQL'],
      color: 'rgba(236, 72, 153, 0.2)',
      url: 'https://api-platform.com/'
    },
    {
      name: 'Roadrunner',
      description: 'Serveur d\'application PHP haute performance',
      icon: <Rocket size={32} />,
      features: ['Go', 'Performance', 'PSR-7'],
      color: 'rgba(139, 92, 246, 0.2)',
      url: 'https://roadrunner.dev/'
    },
    {
      name: 'Pest',
      description: 'Framework de test élégant pour PHP',
      icon: <BookOpen size={32} />,
      features: ['Testing', 'Elegant', 'Simple'],
      color: 'rgba(6, 182, 212, 0.2)',
      url: 'https://pestphp.com/'
    },
    {
      name: 'Amphp',
      description: 'Toolkit pour PHP asynchrone',
      icon: <Workflow size={32} />,
      features: ['Async', 'Concurrency', 'Streams'],
      color: 'rgba(124, 58, 237, 0.2)',
      url: 'https://amphp.org/'
    },
    {
      name: 'Hyperf',
      description: 'Framework PHP microservices',
      icon: <Cloud size={32} />,
      features: ['Microservices', 'Coroutine', 'Cloud'],
      color: 'rgba(239, 68, 68, 0.2)',
      url: 'https://hyperf.wiki/'
    },
    {
      name: 'PHPStan',
      description: 'Analyseur statique PHP',
      icon: <Search size={32} />,
      features: ['Static Analysis', 'Quality', 'Types'],
      color: 'rgba(37, 99, 235, 0.2)',
      url: 'https://phpstan.org/'
    },
    {
      name: 'Psalm',
      description: 'Outil d\'analyse statique par Vimeo',
      icon: <GitBranch size={32} />,
      features: ['Types', 'Security', 'Analysis'],
      color: 'rgba(168, 85, 247, 0.2)',
      url: 'https://psalm.dev/'
    }
  ]
};


function FrameWorksPhp() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <HeroSection>
          <MaxWidthWrapper>
            <HeroContent>
              <Title>
                Écosystème PHP Moderne | Experts & Freelances  | ItGalaxy.io
                <Subtitle>Frameworks, Composants et Outils</Subtitle>
              </Title>
              <Description>
                Découvrez les frameworks et outils PHP les plus populaires qui aident les développeurs à créer 
                des applications web robustes, sécurisées et performantes.
              </Description>
            </HeroContent>
          </MaxWidthWrapper>
        </HeroSection>

        <MaxWidthWrapper>
          <ListsContainer>
            <ListSection>
              <ListTitle>Frameworks Populaires</ListTitle>
              <FrameworkList>
                {frameworks.populaires.map((framework) => (
                  <FrameworkCard key={framework.name} color={framework.color}  onClick={() => window.location.href = framework.url}>
                    <CardHeader color={framework.color}>
                      <IconWrapper>
                        {framework.icon}
                        <ArrowRight size={20} color="#c7d2fe" />
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
              <ListTitle>Composants & Bibliothèques</ListTitle>
              <FrameworkList>
                {frameworks.composants.map((framework) => (
                  <FrameworkCard key={framework.name} color={framework.color}>
                    <CardHeader color={framework.color}>
                      <IconWrapper>
                        {framework.icon}
                        <ArrowRight size={20} color="#c7d2fe" />
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
              <ListTitle>Solutions Alternatives</ListTitle>
              <FrameworkList>
                {frameworks.alternatifs.map((framework) => (
                  <FrameworkCard key={framework.name} color={framework.color}>
                    <CardHeader color={framework.color}>
                      <IconWrapper>
                        {framework.icon}
                        <ArrowRight size={20} color="#c7d2fe" />
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

        <FeaturesSection>
          <MaxWidthWrapper>
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <Title as="h2" style={{ fontSize: '2.5rem' }}>
                Pourquoi Utiliser les Frameworks PHP ?
              </Title>
              <Description>
                Les frameworks PHP modernes offrent de nombreux avantages pour le développement d'applications web
              </Description>
            </div>

            <FeatureGrid>
              <FeatureCard>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Shield size={48} color="#fbbf24" />
                </div>
                <CardTitle>Sécurité Intégrée</CardTitle>
                <CardDescription>
                  Protection contre les vulnérabilités web courantes avec des outils de sécurité intégrés
                </CardDescription>
              </FeatureCard>

              <FeatureCard>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Database size={48} color="#60a5fa" />
                </div>
                <CardTitle>Gestion des Données</CardTitle>
                <CardDescription>
                  Outils puissants pour la manipulation et la persistance des données
                </CardDescription>
              </FeatureCard>

              <FeatureCard>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Code2 size={48} color="#34d399" />
                </div>
                <CardTitle>Architecture Moderne</CardTitle>
                <CardDescription>
                  Patterns de conception modernes pour des applications maintenables et évolutives
                </CardDescription>
              </FeatureCard>
            </FeatureGrid>
          </MaxWidthWrapper>
        </FeaturesSection>
        <FeatureCard>
        <Offers />
        </FeatureCard>

      </Container>
    </>
  );
}

export default FrameWorksPhp;