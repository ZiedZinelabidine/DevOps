import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {
  Boxes,
  Palette,
  Zap,
  Layout,
  FileJson,
  Globe,
  ArrowRight,
  Wind,
  Layers,
  Feather,
  Box,
  Columns,
  Grid,
  LayoutGrid,
  Paintbrush,
  Brush,
  Code2,
  Frame,
  Laptop,
  Monitor,
  Smartphone,
  Tablet,
  PenTool,
  Scissors,
  Shapes,
  Type,
  Wand2,
  Wrench,
  Puzzle,
  Package
} from 'lucide-react';
import Offers from '../Offres';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #111827;
    color: #fff;
    font-family: system-ui, -apple-system, sans-serif;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background-color: #111827;
`;

const HeroSection = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #111827;
`;

const MaxWidthWrapper = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  padding-bottom: 2rem;
  text-align: center;
  
  @media (min-width: 768px) {
    padding-bottom: 5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: #fff;
  
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

const Subtitle = styled.span`
  display: block;
  color: #818cf8;
  margin-top: 0.5rem;
`;

const Description = styled.p`
  margin: 1.25rem auto;
  max-width: 48rem;
  color: #9ca3af;
  font-size: 1.125rem;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ListsContainer = styled.div`
  display: grid;
  gap: 3rem;
  padding: 3rem 0;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    align-items: start;
  }
`;

const ListSection = styled.div`
  flex: 1;
`;

const ListTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #818cf8;
  margin-bottom: 1.5rem;
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #374151;
`;

const FrameworkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FrameworkCard = styled.div`
  background-color: #1f2937;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #374151;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const CardHeader = styled.div`
  padding: 1.5rem;
  background-color: ${props => props.color};
  background-opacity: 0.05;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
`;

const CardDescription = styled.p`
  margin-top: 0.5rem;
  color: #9ca3af;
  font-size: 0.875rem;
  line-height: 1.4;
`;

const TagContainer = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
  background-color: #374151;
  color: #e5e7eb;
`;

const FeaturesSection = styled.div`
  background-color: #1f2937;
  padding: 4rem 0;
`;

const FeatureGrid = styled.div`
  margin-top: 3rem;
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  text-align: center;
`;
const frameworks = {
  populaires: [
    {
      name: 'Tailwind CSS',
      description: 'Framework CSS utilitaire pour un développement UI rapide et flexible',
      icon: <Wind size={32} />,
      features: ['Utilitaire', 'Personnalisable', 'Moderne'],
      color: 'rgba(56, 189, 248, 0.1)',
      url: 'https://tailwindcss.com/'
    },
    {
      name: 'Bootstrap',
      description: 'Le framework CSS le plus populaire pour des sites responsifs',
      icon: <Boxes size={32} />,
      features: ['Responsif', 'Composants', 'Documentation'],
      color: 'rgba(167, 139, 250, 0.1)',
      url: 'https://getbootstrap.com/'
    },
    {
      name: 'Material UI',
      description: "L'implémentation React du Material Design de Google",
      icon: <Palette size={32} />,
      features: ['Material Design', 'React', 'Écosystème'],
      color: 'rgba(96, 165, 250, 0.1)',
      url: 'https://mui.com/'
    },
    {
      name: 'Chakra UI',
      description: 'Composants UI accessibles et personnalisables',
      icon: <Feather size={32} />,
      features: ['Accessible', 'Thèmes', 'Modulaire'],
      color: 'rgba(74, 222, 128, 0.1)',
      url: 'https://chakra-ui.com/'
    },
    {
      name: 'Ant Design',
      description: 'Système de design enterprise-ready pour React',
      icon: <Box size={32} />,
      features: ['Enterprise', 'Complet', 'React'],
      color: 'rgba(239, 68, 68, 0.1)',
      url: 'https://ant.design/'
    },
    {
      name: 'Semantic UI',
      description: 'Framework avec une syntaxe sémantique intuitive',
      icon: <Code2 size={32} />,
      features: ['Sémantique', 'Intuitif', 'Flexible'],
      color: 'rgba(34, 211, 238, 0.1)',
      url: 'https://semantic-ui.com/'
    },
    {
      name: 'Foundation',
      description: 'Framework professionnel pour sites responsifs',
      icon: <Layout size={32} />,
      features: ['Professionnel', 'Grille', 'Adaptable'],
      color: 'rgba(248, 113, 113, 0.1)',
      url: 'https://get.foundation/'
    },
    {
      name: 'UIkit',
      description: 'Framework léger et modulaire pour interfaces modernes',
      icon: <Puzzle size={32} />,
      features: ['Léger', 'Modulaire', 'Modern'],
      color: 'rgba(147, 51, 234, 0.1)',
      url: 'https://getuikit.com/'
    },
    {
      name: 'Primer',
      description: 'Système de design de GitHub',
      icon: <Package size={32} />,
      features: ['GitHub', 'Cohérent', 'Professionnel'],
      color: 'rgba(79, 70, 229, 0.1)',
      url: 'https://primer.style/'
    },
    {
      name: 'Bulma',
      description: 'Framework CSS moderne basé sur Flexbox',
      icon: <Layers size={32} />,
      features: ['Flexbox', 'Simple', 'Moderne'],
      color: 'rgba(45, 212, 191, 0.1)',
      url: 'https://bulma.io/'
    }
  ],
  composants: [
    {
      name: 'Radix UI',
      description: 'Composants React sans style pour une personnalisation totale',
      icon: <Paintbrush size={32} />,
      features: ['Headless', 'Accessible', 'React'],
      color: 'rgba(244, 63, 94, 0.1)',
      url: 'https://www.radix-ui.com/'
    },
    {
      name: 'Mantine',
      description: 'Bibliothèque React avec plus de 100 composants',
      icon: <Frame size={32} />,
      features: ['React', 'TypeScript', 'Hooks'],
      color: 'rgba(99, 102, 241, 0.1)',
      url: 'https://mantine.dev/'
    },
    {
      name: 'NextUI',
      description: 'Composants modernes pour applications React',
      icon: <Monitor size={32} />,
      features: ['React', 'Modern', 'DX'],
      color: 'rgba(168, 85, 247, 0.1)',
      url: 'https://nextui.org/'
    },
    {
      name: 'Headless UI',
      description: 'Composants accessibles sans style par Tailwind',
      icon: <Wand2 size={32} />,
      features: ['Headless', 'Accessible', 'Tailwind'],
      color: 'rgba(234, 179, 8, 0.1)',
      url: 'https://headlessui.dev/'
    },
    {
      name: 'DaisyUI',
      description: 'Composants pour Tailwind CSS',
      icon: <Shapes size={32} />,
      features: ['Tailwind', 'Composants', 'Thèmes'],
      color: 'rgba(134, 239, 172, 0.1)',
      url: 'https://daisyui.com/'
    },
    {
      name: 'Shadcn/UI',
      description: 'Composants React réutilisables et personnalisables',
      icon: <Brush size={32} />,
      features: ['React', 'Radix', 'Tailwind'],
      color: 'rgba(148, 163, 184, 0.1)',
      url: 'https://shadcn.com/'
    },
    {
      name: 'PrimeReact',
      description: 'Suite complète de composants UI pour React',
      icon: <LayoutGrid size={32} />,
      features: ['React', 'Suite', 'Enterprise'],
      color: 'rgba(251, 146, 60, 0.1)',
      url: 'https://www.primefaces.org/primereact/'
    },
    {
      name: 'Ariakit',
      description: 'Composants accessibles et bas niveau pour React',
      icon: <PenTool size={32} />,
      features: ['WAI-ARIA', 'React', 'Flexible'],
      color: 'rgba(20, 184, 166, 0.1)',
      url: 'https://ariakit.org/'
    },
    {
      name: 'Fluent UI',
      description: 'Composants Microsoft Office pour React',
      icon: <Type size={32} />,
      features: ['Microsoft', 'Office', 'React'],
      color: 'rgba(59, 130, 246, 0.1)',
      url: 'https://developer.microsoft.com/en-us/fluentui'
    },
    {
      name: 'Base Web',
      description: 'Système de design React par Uber',
      icon: <Grid size={32} />,
      features: ['React', 'Enterprise', 'Design System'],
      color: 'rgba(236, 72, 153, 0.1)',
      url: 'https://baseweb.design/'
    }
  ],
  alternatifs: [
    {
      name: 'Tachyons',
      description: 'CSS fonctionnel pour interfaces digitales',
      icon: <Scissors size={32} />,
      features: ['Fonctionnel', 'Performance', 'Scalable'],
      color: 'rgba(139, 92, 246, 0.1)',
      url: 'https://tachyons.io/'
    },
    {
      name: 'Pure CSS',
      description: 'Ensemble de modules CSS petits et responsifs',
      icon: <Columns size={32} />,
      features: ['Minimal', 'Modules', 'Léger'],
      color: 'rgba(16, 185, 129, 0.1)',
      url: 'https://purecss.io/'
    },
    {
      name: 'Skeleton',
      description: 'Framework CSS simple et responsive',
      icon: <Smartphone size={32} />,
      features: ['Simple', 'Responsive', 'Boilerplate'],
      color: 'rgba(239, 68, 68, 0.1)',
      url: 'https://skeleton.css'
    },
    {
      name: 'Picnic CSS',
      description: 'Framework CSS léger et beau',
      icon: <Tablet size={32} />,
      features: ['Léger', 'Minimaliste', 'Élégant'],
      color: 'rgba(245, 158, 11, 0.1)',
      url: 'https://picnicss.com/'
    },
    {
      name: 'Milligram',
      description: 'Framework CSS minimaliste pour un démarrage rapide',
      icon: <Wrench size={32} />,
      features: ['Minimal', 'Rapide', 'Simple'],
      color: 'rgba(217, 70, 239, 0.1)',
      url: 'https://milligram.io/'
    },
    {
      name: 'Spectre.css',
      description: 'Framework CSS léger et moderne',
      icon: <Laptop size={32} />,
      features: ['Moderne', 'Flexible', 'Responsive'],
      color: 'rgba(6, 182, 212, 0.1)',
      url: 'https://picture.spectre.style/'
    },
    {
      name: 'Chota',
      description: 'Micro framework CSS super léger',
      icon: <Frame size={32} />,
      features: ['Micro', 'Super léger', 'Simple'],
      color: 'rgba(124, 58, 237, 0.1)',
      url: 'https://jenil.github.io/chota/'
    },
    {
      name: 'Water.css',
      description: 'Collection de styles pour sites simples',
      icon: <Paintbrush size={32} />,
      features: ['Simple', 'Classless', 'Léger'],
      color: 'rgba(37, 99, 235, 0.1)',
      url: 'https://watercss.xyz/'
    },
    {
      name: 'Sakura',
      description: 'Framework CSS minimaliste et élégant',
      icon: <Feather size={32} />,
      features: ['Minimal', 'Élégant', 'Classless'],
      color: 'rgba(236, 72, 153, 0.1)',
      url: 'https://sakura.css/'
    },
    {
      name: 'Bare.css',
      description: 'Framework CSS minimaliste et moderne',
      icon: <Box size={32} />,
      features: ['Minimal', 'Moderne', 'Base'],
      color: 'rgba(234, 179, 8, 0.1)',
      url: 'https://barecss.com/'
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


function FrameWorksCss() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <HeroSection>
          <MaxWidthWrapper>
            <HeroContent>
              <Title>
                Framework CSS Modernes  | Experts & Freelances  | ItGalaxy.io
                <Subtitle>pour le Développement Web Moderne</Subtitle>
              </Title>
              <Description>
                Découvrez les frameworks CSS les plus populaires qui aident les développeurs à créer 
                des sites web magnifiques et responsifs avec facilité et efficacité.
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
                  <FrameworkCard key={framework.name} color={framework.color}   onClick={() => window.location.href = framework.url}  >
                    <CardHeader color={framework.color}>
                      <IconWrapper>
                        {framework.icon}
                        <ArrowRight size={20} color="#9ca3af" />
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
              <ListTitle>Frameworks de Composants</ListTitle>
              <FrameworkList>
                {frameworks.composants.map((framework) => (
                  <FrameworkCard key={framework.name} color={framework.color} onClick={() => window.location.href = framework.url} >
                    <CardHeader color={framework.color}>
                      <IconWrapper>
                        {framework.icon}
                        <ArrowRight size={20} color="#9ca3af" />
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
              <ListTitle>Frameworks Alternatifs</ListTitle>
              <FrameworkList>
                {frameworks.alternatifs.map((framework) => (
                  <FrameworkCard key={framework.name} color={framework.color} onClick={() => window.location.href = framework.url} >
                    <CardHeader color={framework.color}>
                      <IconWrapper>
                        {framework.icon}
                        <ArrowRight size={20} color="#9ca3af" />
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
            <div style={{ textAlign: 'center' }}>
              <Title as="h2" style={{ fontSize: '1.875rem' }}>
                Pourquoi Utiliser les Frameworks CSS ?
              </Title>
              <Description>
                Les frameworks CSS modernes offrent de nombreux avantages pour le développement web
              </Description>
            </div>

            <FeatureGrid>
              <FeatureCard>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Zap size={48} color="#fbbf24" />
                </div>
                <CardTitle>Développement Rapide</CardTitle>
                <CardDescription>
                  Accélérez votre processus de développement avec des composants et des utilitaires prêts à l'emploi
                </CardDescription>
              </FeatureCard>

              <FeatureCard>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Globe size={48} color="#60a5fa" />
                </div>
                <CardTitle>Support Multi-navigateurs</CardTitle>
                <CardDescription>
                  Assurez-vous que votre site fonctionne de manière cohérente sur différents navigateurs
                </CardDescription>
              </FeatureCard>

              <FeatureCard>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <FileJson size={48} color="#34d399" />
                </div>
                <CardTitle>Bonnes Pratiques</CardTitle>
                <CardDescription>
                  Suivez les modèles et conventions établis pour le développement web moderne
                </CardDescription>
              </FeatureCard>
            </FeatureGrid>
          </MaxWidthWrapper>
        </FeaturesSection>
      </Container>
      <OffreCard>
        <Offers />
      </OffreCard>
    </>
  );
}

export default FrameWorksCss;