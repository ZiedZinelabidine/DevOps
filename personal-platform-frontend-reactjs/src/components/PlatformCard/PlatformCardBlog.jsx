import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';
import Sidebar from './SideBar';
import PlatformCard from './PlatformCard';
import { platformData } from '../../data/platformData';

const GlobalStyle = createGlobalStyle`
  :root {
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.4s ease;
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 20px;
    --space-6: 24px;
    --space-8: 32px;
    --space-10: 40px;
    --space-12: 48px;
    --space-16: 64px;
    --radius-sm: 6px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
  }

  [data-theme='light'] {
    --bg-color: #f8fafc;
    --text-color: #1e293b;
    --card-bg: #ffffff;
    --border-color: #e2e8f0;
    --hover-color: #3b82f6;
    --pros-bg: #f8fafc;
    --cons-bg: #f8fafc;
    --muted-text: #64748b;
    --heading-color: #0f172a;
    --shadow-color: rgba(0, 0, 0, 0.08);
    --link-color: #3b82f6;
    --primary-color: #3b82f6;
    --secondary-color: #64748b;
    --accent-color: #4f46e5;
    --success-color: #22c55e;
    --warning-color: #f59e0b;
    --error-color: #ef4444;
  }

  [data-theme='dark'] {
    --bg-color: #0f172a;
    --text-color: #e2e8f0;
    --card-bg: #1e293b;
    --border-color: #334155;
    --hover-color: #60a5fa;
    --pros-bg: #1e293b;
    --cons-bg: #1e293b;
    --muted-text: #94a3b8;
    --heading-color: #f1f5f9;
    --shadow-color: rgba(0, 0, 0, 0.3);
    --link-color: #60a5fa;
    --primary-color: #60a5fa;
    --secondary-color: #94a3b8;
    --accent-color: #818cf8;
    --success-color: #34d399;
    --warning-color: #fbbf24;
    --error-color: #f87171;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    background-color: var(--bg-color);
    color: var(--text-color);
  }
`;

const PageLayout = styled.div`
  background-color: var(--bg-color);
  color: var(--text-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-normal);
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--space-8);
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--space-8);
  flex: 1;

  @media (max-width: 1024px) {
    grid-template-columns: 240px 1fr;
    padding: var(--space-6);
    gap: var(--space-6);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: var(--space-4);
  }
`;

const MainContent = styled.main`
  min-width: 0;
`;

const Article = styled.article`
  background: var(--card-bg);
  padding: var(--space-8);
  border-radius: var(--radius-lg);
  box-shadow: 0 10px 15px -3px var(--shadow-color);
  border: 1px solid var(--border-color);

  @media (max-width: 768px) {
    padding: var(--space-6);
  }

  @media (max-width: 480px) {
    padding: var(--space-4);
  }
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: var(--heading-color);
  margin-bottom: var(--space-10);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.2;
  position: relative;
  padding-bottom: var(--space-5);

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: var(--primary-color);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Intro = styled(motion.div)`
  font-size: 1.0625rem;
  line-height: 1.75;
  color: var(--text-color);
  margin-bottom: var(--space-12);
  padding: var(--space-8);
  background: var(--pros-bg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: var(--primary-color);
    border-radius: 2px;
  }

  p {
    margin-bottom: var(--space-5);

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    padding: var(--space-6);
  }

  @media (max-width: 480px) {
    padding: var(--space-4);
  }
`;

function PlatformCardBlog() {
  useEffect(() => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', defaultDark ? 'dark' : 'light');
  }, []);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageLayout>
      <GlobalStyle />
      <Helmet>
        <title>Meilleures Plateformes Freelance en France pour Trouver du Travail</title>
        <meta name="description" content="Découvrez les meilleures plateformes de Freelance en informatique, des opportunités de travail et des stratégies pour réussir en tant que freelance IT en 2025. Des conseils d'experts et des astuces pratiques sont inclus." />
        <meta name="keywords" content="freelance web, développeur freelance, contrat freelance, freelance développeur, mission freelance informatique, web développeur freelance, plateforme freelance informatique, prestataire service informatique, recruter freelance, freelance IT France, freelance informatique 2025, freelance développeur web, freelance logiciel, freelance en ligne, freelance expert informatique, freelance professionnel, freelance indépendant, freelance travail à distance, freelance projets informatiques, freelance compétences techniques" />        <link rel="canonical" href="https://itgalaxy.io/blog/plateformes-freelance-france-2025" />
        <meta property="og:title" content="Meilleures Plateformes Freelance en France pour Trouver du Travail" />
        <meta property="og:description" content="Découvrez les meilleures plateformes de Freelance en informatique, des opportunités de travail et des stratégies pour réussir en tant que freelance IT en 2025. Des conseils d'experts et des astuces pratiques sont inclus." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itgalaxy.io/blog/plateformes-freelance-france-2025" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="https://itgalaxy.io/blog/plateformes-freelance-france-2025" />
        <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/blog/plateformes-freelance-france-2025" />
        <link rel="alternate" hreflang="en" href="hhttps://itgalaxy.io/blog/plateformes-freelance-france-2025" />
      </Helmet>

    
      <ContentWrapper>
        <Sidebar scrollToSection={scrollToSection} />

        <MainContent>
          <Article>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Guide des Plateformes de Freelance 2025
            </Title>
          
            <Intro 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p>Le freelance peut être à la fois libérateur et stressant. Vous pouvez fixer vos propres tarifs et horaires et choisir les projets sur lesquels vous souhaitez travailler. Mais vous ne ressentirez peut-être jamais la sécurité d'un employé à temps plein.</p>
              <p>De nombreux freelances ont l'impression d'être toujours à la recherche de la prochaine opportunité, partageant leur temps entre la recherche de travail et sa réalisation.</p>
              <p>De nombreux sites web sont disponibles pour aider les freelances à trouver des projets. Bien qu'ils ne soient pas tous identiques, et que certains soient destinés uniquement aux travailleurs ayant des compétences spécifiques, le bon site peut vous aider à passer moins de temps à chercher du travail pour passer plus de temps sur vos tâches. Dans cet article, nous mettrons en avant les meilleurs sites de freelance pour vous aider à démarrer votre carrière.</p>
            </Intro>

            {platformData.map((platform) => (
              <PlatformCard 
                key={platform.id}
                id={platform.id}
                name={platform.name}
                url={platform.url}
                description={platform.description}
                pros={platform.pros}
                cons={platform.cons}
                costs={platform.costs}
              />
            ))}
          </Article>
        </MainContent>
      </ContentWrapper>
      </PageLayout>
  );
}

export default PlatformCardBlog;