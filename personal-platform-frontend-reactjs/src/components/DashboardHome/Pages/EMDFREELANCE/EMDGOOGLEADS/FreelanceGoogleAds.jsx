import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './GlobalStyles';
import Hero from './Hero';
import Services from './Services';
import Expertise from './Expertise';
import Testimonials from './Testimonials';
import AdsConsole from './AdsConsole';
import CampaignEstimator from './CampaignEstimator';
import Header from '@components/Header/Header';
import FooterHome from '@components/DashboardHome/FooterHome/FooterHome';
import CardsPrestataires from '../../CardsPrestataires';
import { useState } from "react";
import Offers from '../../Offres';
import { Code2, Cloud, Minus, Plus, Server, GitBranch, Code, GraduationCap, Globe, Rocket, BookOpen, ChevronDown, FileCode, Settings, Layers, RefreshCw, Boxes, DollarSign, Clock, Radio, Webhook, Key, Activity, Binary, Network, Lock, ChevronRight, Cpu, Workflow, LineChart } from 'lucide-react';
import { Helmet } from 'react-helmet';
import AgencyShowcase from './AgencyShowcase';
import ItGalaxyAsService from '@components/DashboardHome/ItGalaxyAsService/ItGalaxyAsService';



const AppContainer = styled.div`
  font-family: sans-serif;
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
`;

const Main = styled.main``;

const Section = styled.section`
  padding: 4rem 1rem;
  background-color: ${props => props.theme.colors.background.secondary};

  @media (min-width: 768px) {
    padding: 6rem 1rem;
  }
`;


const FAQSection = styled(Section)`
  background: #111827;
`;

const FAQContainer = styled.div`
  max-width: 50%;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border: 1px solid #374151;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  overflow: hidden;
  background: #1f2937;
  transition: all 0.3s ease;

  &:hover {
    border-color: #3b82f6;
  }
`;

const FAQHeader = styled.h2`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  color: #93c5fd;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
`;

const FAQContent = styled.div`
  padding: 0 1rem 1rem 1rem;
  color: #d1d5db;
  line-height: 1.6;
`;

const SectionContent = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;




const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: ${props => props.theme.colors.accent.blue};
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const SectionDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  max-width: 42rem;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 3rem;
`;


function FreelanceGoogleAds() {
  const [openFAQs, setOpenFAQs] = useState({});


  const toggleFAQ = (index) => {
    setOpenFAQs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };


  const faqs = [
    {
      question: "Qu'est-ce qu'un freelance Google Ads ?",
      answer: "Un freelance Google Ads est un professionnel indépendant spécialisé dans la création, la gestion et l'optimisation de campagnes publicitaires sur Google Ads. Il aide les entreprises à maximiser leur retour sur investissement (ROI) grâce à des stratégies publicitaires ciblées et mesurables."
    },
    {
      question: "Comment un freelance Google Ads peut-il optimiser mon ROI ?",
      answer: "Un freelance Google Ads utilise des techniques avancées pour cibler les bons publics, optimiser les enchères, ajuster les campagnes en temps réel et analyser les performances. Cela permet de réduire les coûts tout en augmentant les conversions et le ROI."
    },
    {
      question: "Quels types de campagnes Google Ads un freelance peut-il gérer ?",
      answer: "Un freelance Google Ads peut gérer divers types de campagnes, notamment les campagnes de recherche, display, shopping, vidéo et remarketing. Chaque campagne est adaptée aux objectifs spécifiques de votre entreprise."
    },
    {
      question: "Les services d'un freelance Google Ads sont-ils disponibles à distance ?",
      answer: "Oui, la plupart des freelances Google Ads travaillent à distance, offrant une flexibilité totale. Ils peuvent gérer vos campagnes depuis n'importe où, tout en vous fournissant des rapports détaillés et un accompagnement personnalisé."
    },
    {
      question: "Quels outils un freelance Google Ads utilise-t-il ?",
      answer: "Un freelance Google Ads utilise des outils comme Google Ads Manager, Google Analytics, Google Tag Manager, ainsi que des outils tiers pour l'analyse des mots-clés, l'optimisation des enchères et le suivi des performances."
    },
    {
      question: "Est-il possible de travailler avec un freelance Google Ads sur plusieurs campagnes simultanément ?",
      answer: "Oui, un freelance Google Ads peut gérer plusieurs campagnes en même temps, à condition que les délais et les objectifs soient clairement définis. La gestion du temps et des priorités est essentielle pour garantir des résultats optimaux."
    },
    {
      question: "Comment fixer un tarif compétitif pour un freelance Google Ads ?",
      answer: "Pour fixer un tarif compétitif, examinez les tarifs du marché, évaluez l'expérience et les compétences du freelance, et prenez en compte la complexité de vos campagnes. Un freelance expérimenté peut justifier un tarif plus élevé grâce à des résultats tangibles."
    },
    {
      question: "Quelles compétences sont essentielles pour un freelance Google Ads ?",
      answer: "Les compétences clés incluent la maîtrise de Google Ads, l'analyse des données, l'optimisation des campagnes, la connaissance des outils d'analyse comme Google Analytics, et une compréhension approfondie des stratégies publicitaires en ligne."
    },
    {
      question: "Comment évaluer un freelance Google Ads avant de l'engager ?",
      answer: "Pour évaluer un freelance, examinez son portfolio, ses certifications (comme Google Ads Certification), ses avis clients et son expérience. Organisez un entretien pour discuter de son approche et de ses résultats précédents."
    },
    {
      question: "Quels sont les défis rencontrés par les freelances Google Ads ?",
      answer: "Les défis incluent la nécessité de s'adapter aux changements fréquents des algorithmes de Google, la gestion des attentes des clients, et la concurrence accrue sur le marché des freelances spécialisés en publicité en ligne."
    },
    {
      question: "Quelles sont les meilleures plateformes pour trouver un freelance Google Ads ?",
      answer: "Les meilleures plateformes incluent Upwork, Freelancer, Fiverr et LinkedIn. Ces plateformes permettent de trouver des freelances qualifiés avec des profils vérifiés et des avis clients."
    },
    {
      question: "Le secteur des freelances Google Ads est-il en croissance ?",
      answer: "Oui, le secteur des freelances Google Ads est en forte croissance, car de plus en plus d'entreprises reconnaissent l'importance de campagnes publicitaires ciblées et optimisées pour maximiser leur ROI."
    },
    {
      question: "De combien d'années d'expérience ai-je besoin pour devenir freelance Google Ads ?",
      answer: "Bien qu'il n'y ait pas de règle stricte, disposer d'au moins 2 à 3 ans d'expérience dans la gestion de campagnes Google Ads est recommandé pour acquérir les compétences nécessaires et établir la confiance des clients."
    },
    {
      question: "Sur quelles régions les freelances Google Ads peuvent-ils travailler ?",
      answer: "Les freelances Google Ads peuvent travailler avec des clients du monde entier, notamment en Amérique du Nord, en Europe et en Asie. Le travail à distance permet d'accéder à un marché global."
    },
    {
      question: "Les freelances Google Ads doivent-ils posséder des certifications spécifiques ?",
      answer: "Bien que ce ne soit pas obligatoire, des certifications comme Google Ads Certification ou Google Analytics Certification peuvent renforcer la crédibilité et démontrer une expertise reconnue par Google."
    },
    {
      question: "Quelles sont les clés pour réussir en tant que freelance Google Ads ?",
      answer: "Pour réussir, restez à jour avec les dernières tendances et algorithmes de Google Ads, améliorez vos compétences en analyse de données, établissez un réseau solide et maintenez une communication claire avec vos clients."
    },
    {
      question: "Quelle est la durée typique d'un projet avec un freelance Google Ads ?",
      answer: "La durée varie en fonction des objectifs du projet. Elle peut aller de quelques semaines pour des ajustements de campagnes à plusieurs mois pour des stratégies publicitaires complètes et des suivis à long terme."
    },
    {
      question: "Les freelances Google Ads travaillent-ils souvent en équipe ?",
      answer: "Oui, de nombreux freelances collaborent avec des équipes marketing, des développeurs web ou d'autres spécialistes pour assurer une intégration fluide des campagnes publicitaires dans la stratégie globale de l'entreprise."
    },
    {
      question: "Comment établir des relations de confiance avec un freelance Google Ads ?",
      answer: "Pour établir la confiance, soyez transparent sur vos objectifs, respectez les délais, communiquez régulièrement sur les performances des campagnes et soyez ouvert aux retours et aux ajustements nécessaires."
    },
    {
      question: "Quels conseils donneriez-vous aux nouveaux freelances Google Ads ?",
      answer: "Commencez par obtenir des certifications reconnues, créez un portfolio solide qui démontre vos résultats, réseauter avec d'autres professionnels du secteur et restez proactif dans l'apprentissage des nouvelles fonctionnalités de Google Ads."
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalStyles />
      <AppContainer>
        <Main>

          <Hero />
          <Expertise />
          <ItGalaxyAsService />

          <Helmet>
            <title>Optimisez votre ROI avec un freelance Google Ads</title>
            <meta name="description" content="Transformez votre stratégie publicitaire avec un freelance spécialisé en Google Ads.Des campagnes ciblées, des résultats mesurables et un accompagnement personnalisé." />
            <link rel="canonical" href="https://itgalaxy.io/freelance-google-ads" />
            <meta property="og:title" content="Optimisez votre ROI avec un freelance Google Ads" />
            <meta property="og:description" content="Transformez votre stratégie publicitaire avec un freelance spécialisé en Google Ads.Des campagnes ciblées, des résultats mesurables et un accompagnement personnalisé." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://itgalaxy.io/freelance-google-ads" />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:site_name" content="ItGalaxy.io" />
            <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/freelance-google-ads" />
            <link rel="alternate" hreflang="en" href="https://itgalaxy.io/freelance-google-ads" />
          </Helmet>


          <Section>
            <Container>
              <SectionTitle>Estimateur de Budget</SectionTitle>
              <SectionDescription>
                Calculez le budget nécessaire pour votre campagne Google Ads.
              </SectionDescription>
              <CampaignEstimator />
            </Container>
          </Section>




          <Section>
            <Container>
              <SectionTitle>Console Google Ads</SectionTitle>
              <SectionDescription>
                Analysez vos performances publicitaires avec notre interface inspirée de Google Ads.
              </SectionDescription>
              <AdsConsole />
            </Container>
          </Section>

          <Services />
          <Testimonials />
        </Main>
      </AppContainer>
      <FAQSection>
        <SectionContent>
          <SectionTitle>
            Google Ads FAQ
          </SectionTitle>
          <FAQContainer>
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <FAQHeader onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  {openFAQs[index] ? <Minus size={20} /> : <Plus size={20} />}
                </FAQHeader>
                {openFAQs[index] && (
                  <FAQContent>
                    {faq.answer.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </FAQContent>
                )}
              </FAQItem>
            ))}
          </FAQContainer>
        </SectionContent>
      </FAQSection>
      <Offers />
      <FooterHome page={'design'} />
    </ThemeProvider>
  );
}

export default FreelanceGoogleAds;