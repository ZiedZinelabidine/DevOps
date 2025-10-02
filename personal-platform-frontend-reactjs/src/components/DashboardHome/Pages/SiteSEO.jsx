import Register from "components/Authentification/modals/register";
import Header from 'components/Header/Header';
import { Activity, CheckCircle, ArrowRight ,Award, BarChart2, Binary, Boxes, ChevronDown, ChevronRight, FileSearch, Globe, Key, Layers, LineChart, Radio, RefreshCw, Search, Settings, Share2, Shield, Target, TrendingUp, Users, Webhook } from 'lucide-react';
import { useState } from "react";
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import FAQSection from '../FAQ/FAQSection';
import FooterHome from '../FooterHome/FooterHome';
import PricingComparison from '../Pricing/PricingComparison';
import TestimonialsSection from '../Testimonials/TestimonialsSection';
import Offers from "./Offres";
import { Helmet } from "react-helmet";
import CardsPrestataires from "./CardsPrestataires";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #0A0F1C;
    color: #ffffff;
    font-family: 'JetBrains Mono', monospace;
  }
`;

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const MainContainer = styled.div`
  min-height: 100vh;
  background: #0A0F1C;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(52, 211, 153, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const TrustBadges = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: wrap;
`;

const TrustBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 50px;
  font-size: 0.875rem;
  color: #94A3B8;

  svg {
    color: #10B981;
  }
`;

const ClientLogos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 4rem;
  flex-wrap: wrap;
  opacity: 0.7;
`;

const ClientLogo = styled.div`
  font-size: 1.25rem;
  color: #94A3B8;
  font-weight: 600;
  letter-spacing: 1px;
`;

const HeroSection = styled.section`
  min-height: 67vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(52, 211, 153, 0.1), rgba(16, 185, 129, 0.1));
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  max-width: 64rem;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Logo = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto 2rem;
  background: linear-gradient(-45deg, #10B981, #34D399, #059669);
  background-size: 200% 200%;
  animation: ${gradient} 6s ease infinite, ${float} 6s ease-in-out infinite;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  svg {
    width: 80px;
    height: 80px;
    color: #ffffff;
  }

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(-45deg, #10B981, #34D399, #059669);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.5;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 2rem 0;
  color: #ffffff;
  background: linear-gradient(to right, #10B981, #34D399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #94A3B8;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #10B981, #34D399);
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 50px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const Section = styled.section`
  padding: 8rem 2rem;
  position: relative;
  background: #111827;

  &:nth-child(odd) {
    background: #0A0F1C;
  }
`;

const SectionContent = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #ffffff;
  background: linear-gradient(to right, #10B981, #34D399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1rem;
    color: #10B981;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #94A3B8;
  font-size: 1.25rem;
  margin-bottom: 4rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const AuditFormTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: #10B981;
  }
`;


const ServiceCard = styled.div`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(16, 185, 129, 0.2);
    border-color: #10B981;
    cursor: pointer;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(16, 185, 129, 0.1),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, #10B981, #34D399);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: inherit;
    border-radius: 22px;
    z-index: -1;
    opacity: 0.4;
    filter: blur(8px);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
`;

const ServiceDescription = styled.p`
  color: #94A3B8;
  line-height: 1.6;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const StatCard = styled.div`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.2);
    border-color: #10B981;
  }
`;

const StatValue = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #10B981;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #94A3B8;
  font-size: 1.125rem;
`;
const MissionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const MissionCard = styled.div`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.1);
  border-radius: 20px;
  padding: 1.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.2);
    border-color: #10B981;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(16, 185, 129, 0.1),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const MissionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const MissionIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #10B981, #34D399);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const MissionDifficulty = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => {
    switch (props.difficulty) {
      case 'Facile':
        return 'rgba(34, 197, 94, 0.2)';
      case 'Intermédiaire':
        return 'rgba(234, 179, 8, 0.2)';
      case 'Avancé':
        return 'rgba(239, 68, 68, 0.2)';
      default:
        return 'rgba(16, 185, 129, 0.2)';
    }
  }};
  color: ${props => {
    switch (props.difficulty) {
      case 'Facile':
        return '#22c55e';
      case 'Intermédiaire':
        return '#eab308';
      case 'Avancé':
        return '#ef4444';
      default:
        return '#10B981';
    }
  }};
`;

const MissionTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0.5rem 0;
`;

const MissionDescription = styled.p`
  color: #94A3B8;
  font-size: 0.875rem;
  line-height: 1.5;
`;

const MoreMissionsButton = styled(Button)`
  margin: 3rem auto 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid #10B981;
  
  &:hover {
    background: linear-gradient(135deg, #10B981, #34D399);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateY(4px);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const PricingCard = styled.div`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(16, 185, 129, 0.2);
    border-color: #10B981;
  }

  ${props => props.popular && `
    border-color: #10B981;
    &::before {
      content: 'Plus Populaire';
      position: absolute;
      top: 1rem;
      right: -2rem;
      background: #10B981;
      color: white;
      padding: 0.5rem 3rem;
      transform: rotate(45deg);
      font-size: 0.75rem;
    }
  `}
`;

const PricingHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const PricingTitle = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const PricingPrice = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #10B981;
  margin: 1rem 0;

  span {
    font-size: 1rem;
    color: #94A3B8;
  }
`;

const AuditGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
    margin: 10px;

  margin-top: 3rem;
  margin-left: 35%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const CaseStudiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const CaseStudyCard = styled.div`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(16, 185, 129, 0.2);
    border-color: #10B981;
    cursor: pointer;
  }
`;

const CaseStudyImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #10B981, #34D399);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 64px;
    height: 64px;
    color: white;
  }
`;

const CaseStudyContent = styled.div`
  padding: 2rem;
`;

const CaseStudyTitle = styled.h4`
  font-size: 1.25rem;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const CaseStudyMetrics = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

const CaseStudyMetric = styled.div`
  text-align: center;
  flex: 1;

  .value {
    font-size: 1.5rem;
    font-weight: 700;
    color: #10B981;
    margin-bottom: 0.25rem;
  }

  .label {
    font-size: 0.875rem;
    color: #94A3B8;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TestimonialCard = styled.div`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(16, 185, 129, 0.2);
    border-color: #10B981;
  }
`;

const TestimonialContent = styled.div`
  color: #94A3B8;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 2rem;
  position: relative;

  &::before {
    content: '"';
    font-size: 4rem;
    color: #10B981;
    position: absolute;
    top: -1rem;
    left: -1rem;
    opacity: 0.2;
  }
`;


const AuditInfoCard = styled.div`
  background: rgba(16, 185, 129, 0.05);
  border: 1px solid rgba(16, 185, 129, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &:hover {
    box-shadow: 0 20px 40px rgba(16, 185, 129, 0.2);
    border-color: #10B981;
  }
`;

const AuditBenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AuditBenefit = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  svg {
    color: #10B981;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }
`;

const BenefitContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const BenefitTitle = styled.h4`
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
`;

const BenefitDescription = styled.p`
  color: #94A3B8;
  font-size: 0.975rem;
  line-height: 1.6;
  margin: 0;
`;

const AuditProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const ProcessStep = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 2.5rem;
    left: 0.8125rem;
    bottom: -1rem;
    width: 1px;
    background: rgba(16, 185, 129, 0.3);
  }
`;

const StepNumber = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #10B981, #34D399);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StepTitle = styled.h5`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`;

const StepDescription = styled.p`
  color: #94A3B8;
  font-size: 0.875rem;
  margin: 0;
`;
const SubmitButton = styled.button`
  background: linear-gradient(135deg, #10B981, #34D399);
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 50px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.3s;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;


function SiteSEO() {
  const [showAllMissions, setShowAllMissions] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };


  const missions = [
    {
        icon: <FileSearch size={20} />,
        title: "Audit Digital Marketing Technique",
        description: "Réaliser un audit Digital Marketing complet avec recommandations.",
        difficulty: "Facile",
        keywords: ["mission freelance Digital Marketing", "recherche mission freelance"]
    },
    {
        icon: <Target size={20} />,
        title: "Recherche de Mots-clés",
        description: "Analyse et sélection de mots-clés stratégiques.",
        difficulty: "Facile",
        keywords: ["mission freelance Digital Marketing", "mission developpeur web freelance wordpress"]
    },
    {
        icon: <Settings size={20} />,
        title: "Optimisation On-Page",
        description: "Optimiser les balises meta et la structure HTML.",
        difficulty: "Intermédiaire",
        keywords: ["mission freelance wordpress", "mission freelance marketing digital"]
    },
    {
        icon: <Globe size={20} />,
        title: "Content Marketing",
        description: "Créer une stratégie de contenu Digital Marketing.",
        difficulty: "Intermédiaire",
        keywords: ["mission freelance digital", "mission freelance graphisme wordpress"]
    },
    {
        icon: <Layers size={20} />,
        title: "Architecture du Site",
        description: "Optimiser la structure et le maillage interne.",
        difficulty: "Avancé",
        keywords: ["mission freelance developpeur", "mission freelance informatique luxembourg"]
    },
    {
        icon: <RefreshCw size={20} />,
        title: "Vitesse de Chargement",
        description: "Optimiser les performances du site.",
        difficulty: "Intermédiaire",
        keywords: ["mission freelance informatique suisse", "missions freelance informatique"]
    },
    {
        icon: <Boxes size={20} />,
        title: "Rich Snippets",
        description: "Implémenter les données structurées.",
        difficulty: "Intermédiaire",
        keywords: ["mission freelance en ligne", "mission freelance info"]
    },
    {
        icon: <Radio size={20} />,
        title: "Mobile First",
        description: "Optimisation pour mobile et responsive.",
        difficulty: "Intermédiaire",
        keywords: ["freelance mission courte", "mission freelance paris"]
    },
    {
        icon: <Webhook size={20} />,
        title: "Backlinks",
        description: "Stratégie d'acquisition de backlinks.",
        difficulty: "Avancé",
        keywords: ["mission freelance international", "mission freelance wordpress"]
    },
    {
        icon: <Key size={20} />,
        title: "Local Digital Marketing",
        description: "Optimisation du référencement local.",
        difficulty: "Intermédiaire",
        keywords: ["mission freelance developpeur web", "mission courte freelance wordpress"]
    },
    {
        icon: <Activity size={20} />,
        title: "Analytics Digital Marketing",
        description: "Mise en place du suivi des performances.",
        difficulty: "Intermédiaire",
        keywords: ["mission freelance digital", "mission freelance marketing digital"]
    },
    {
        icon: <Binary size={20} />,
        title: "Digital Marketing International",
        description: "Stratégie de référencement multi-langues.",
        difficulty: "Avancé",
        keywords: ["mission freelance international", "offres missions freelance"]
    },
    {
        icon: <FileSearch size={20} />,
        title: "Core Web Vitals",
        description: "Optimisation des signaux web essentiels.",
        difficulty: "Avancé",
        keywords: ["mission freelance wordpress", "offres de missions freelance"]
    },
    {
        icon: <Settings size={20} />,
        title: "Migration Digital Marketing",
        description: "Gestion de la migration de site.",
        difficulty: "Avancé",
        keywords: ["mission freelance developpeur", "mission freelance python"]
    },
    {
        icon: <Globe size={20} />,
        title: "E-commerce Digital Marketing",
        description: "Optimisation pour sites e-commerce.",
        difficulty: "Avancé",
        keywords: ["mission freelance it", "mission freelance marseille"]
    },
    {
        icon: <Activity size={20} />,
        title: "Digital Marketing Voice Search",
        description: "Optimisation pour recherche vocale.",
        difficulty: "Avancé",
        keywords: ["mission freelance montpellier", "freelance mission marketing digital"]
    },
    {
        icon: <Layers size={20} />,
        title: "Digital Marketing JavaScript",
        description: "Optimisation des sites JavaScript.",
        difficulty: "Avancé",
        keywords: ["mission python freelance", "mission freelance marketing"]
    },
    {
        icon: <RefreshCw size={20} />,
        title: "Image Digital Marketing",
        description: "Optimisation des images pour le Digital Marketing.",
        difficulty: "Intermédiaire",
        keywords: ["offres missions freelance Digital Marketing", "mission freelance python"]
    },
    {
        icon: <Key size={20} />,
        title: "Digital Marketing Technique",
        description: "Résolution des problèmes techniques.",
        difficulty: "Avancé",
        keywords: ["mission freelance luxembourg", "mission freelance developpeur web"]
    },
    {
        icon: <Binary size={20} />,
        title: "Digital Marketing & IA",
        description: "Utilisation de l'IA pour le Digital Marketing.",
        difficulty: "Avancé",
        keywords: ["mission freelance marseille", "trouver mission freelance informatique"]
    },
    {
        icon: <FileSearch size={20} />,
        title: "Audit sur les Réseaux Sociaux",
        description: "Évaluer la stratégie Digital Marketing sur les plateformes sociales.",
        difficulty: "Intermédiaire",
        keywords: ["missions freelance marketing", "mission freelance digital"]
    },
    {
        icon: <Globe size={20} />,
        title: "Suivi des Performances Digital Marketing",
        description: "Mise en place d'outils pour suivre la performance des mots-clés.",
        difficulty: "Intermédiaire",
        keywords: ["mission freelance developpeur", "recherche mission freelance"]
    },
    {
        icon: <Layers size={20} />,
        title: "Mise en Place d'Alerts Google",
        description: "Configuration d'alertes pour le suivi des mentions en ligne.",
        difficulty: "Facile",
        keywords: ["offre mission freelance", "mission freelance Digital Marketing"]
    },
    {
        icon: <Key size={20} />,
        title: "Optimisation des Taux de Conversion",
        description: "Amélioration des taux de conversion de vos stratégies Digital Marketing.",
        difficulty: "Intermédiaire",
        keywords: ["mission freelance informatique", "mission freelance web"]
    }
];


  const services = [
    {
      icon: <Target size={32} />,
      title: 'Optimisation On-Page',
      description: 'Optimisation technique complète de votre site pour les moteurs de recherche.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Stratégie de Contenu',
      description: 'Création de contenu optimisé et stratégie de mots-clés ciblée.'
    },
    {
      icon: <Share2 size={32} />,
      title: 'Backlinks & Autorité',
      description: 'Développement de votre autorité en ligne et acquisition de backlinks qualitatifs.'
    }
  ];

  const stats = [
    {
      value: '250%',
      label: 'Augmentation du Trafic Organique'
    },
    {
      value: 'Top 3',
      label: 'Positions Google'
    },
    {
      value: '85%',
      label: 'Taux de Conversion'
    },
    {
      value: '24/7',
      label: 'Suivi en Temps Réel'
    }
  ];

  const pricingPlans = [
    {
      title: "Essentiel",
      price: "999€",
      period: "/mois",
      features: [
        "Audit Digital Marketing technique complet",
        "Optimisation on-page (10 pages)",
        "Recherche de mots-clés",
        "Rapport mensuel détaillé",
        "Support par email"
      ],
      popular: false
    },
    {
      title: "Business",
      price: "1999€",
      period: "/mois",
      features: [
        "Tout le plan Essentiel",
        "Optimisation on-page (25 pages)",
        "Stratégie de contenu",
        "Optimisation technique avancée",
        "Support prioritaire 24/7"
      ],
      popular: true
    },
    {
      title: "Enterprise",
      price: "Sur mesure",
      period: "",
      features: [
        "Solution personnalisée",
        "Optimisation illimitée",
        "Stratégie internationale",
        "Consultant dédié",
        "Support premium"
      ],
      popular: false
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce de Mode",
      metrics: [
        { value: "+320%", label: "Trafic" },
        { value: "+150%", label: "Conversions" },
        { value: "Top 3", label: "Rankings" }
      ],
      description: "Optimisation complète d'un site e-commerce avec plus de 10,000 produits."
    },
    {
      title: "Blog Tech B2B",
      metrics: [
        { value: "+250%", label: "Leads" },
        { value: "+180%", label: "Visites" },
        { value: "-40%", label: "Rebond" }
      ],
      description: "Stratégie de contenu B2B pour une entreprise de logiciels."
    },
    {
      title: "Site Local",
      metrics: [
        { value: "#1", label: "Local Pack" },
        { value: "+200%", label: "Appels" },
        { value: "+90%", label: "Reviews" }
      ],
      description: "Optimisation du référencement local pour un réseau de restaurants."
    }
  ];

  const displayedMissions = showAllMissions ? missions : missions.slice(0, 12);

  // Add trusted clients data
  const trustedClients = ['Google', 'Amazon', 'Microsoft', 'Apple', 'Meta'];

  // Add trust metrics
  const trustMetrics = [
    { icon: <Users size={16} />, text: '500+ Clients Satisfaits' },
    { icon: <TrendingUp size={16} />, text: '98% Taux de Satisfaction' },
    { icon: <Award size={16} />, text: 'Expert Certifié Google' }
  ];


 return (
    <>
      <Header />
      <GlobalStyle />
      <Helmet>
        <title>Trouver un freelance Digital Marketing</title>
        <meta name="description" content="Découvrez les meilleures freelances Digital Marketing, des experts en marketing digital et trouver des missions freelance adaptées à vos besoins." />
        <meta
            name="keywords"
            content="freelance Digital Marketing, mission freelance luxembourg Digital Marketing, mission freelance marketing digital Digital Marketing, mission freelance maroc Digital Marketing, mission freelance marseille Digital Marketing, mission freelance montpellier Digital Marketing, mission freelance nantes Digital Marketing, mission freelance power bi Digital Marketing, mission freelance remote Digital Marketing, mission freelance Digital Marketing, mission independant freelance Digital Marketing, offres missions freelance Digital Marketing, offres de missions freelance Digital Marketing"
        />
        <link rel="canonical" href="https://itgalaxy.io/freelance-digital-marketing" />
        <meta property="og:title" content="Trouver un freelance Digital Marketing && agence Digital Marketing" />
        <meta property="og:description" content="Découvrez les meilleures freelances Digital Marketing, des experts en marketing digital et trouver des missions freelance adaptées à vos besoins." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itgalaxy.io/freelance-digital-marketing" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="ItGalaxy.io" />
        <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/freelance-digital-marketing" />
        <link rel="alternate" hreflang="en" href="https://itgalaxy.io/freelance-digital-marketing" />
    </Helmet>

      <MainContainer>
        <HeroSection>
          <HeroContent>
            <Logo>
              <Search />
            </Logo>
            <HeroTitle>Trouver un Freelance expert en Digital Marketing</HeroTitle>
            <HeroSubtitle>
            Recrutement des freelances Digital Marketing et d'agences de Marketing Digitals pour divers projets
            </HeroSubtitle>
            <Button onClick={handleModalRegister}>
              Trouvez un expert SEO 
              <ChevronRight size={20} />
            </Button>

            <TrustBadges>
              {trustMetrics.map((metric, index) => (
                <TrustBadge key={index}>
                  {metric.icon}
                  {metric.text}
                </TrustBadge>
              ))}
            </TrustBadges>
          </HeroContent>
        </HeroSection>
        <AuditGrid>

        <AuditInfoCard>
            <AuditFormTitle>
              <TrendingUp size={24} />
              Pourquoi demander un audit SEO ?
            </AuditFormTitle>
            
            <AuditBenefitsList>
              <AuditBenefit>
                <CheckCircle size={24} />
                <BenefitContent>
                  <BenefitTitle>Visibilité accrue</BenefitTitle>
                  <BenefitDescription>
                    Identifiez les opportunités pour améliorer votre classement dans les moteurs de recherche et augmenter votre trafic organique.
                  </BenefitDescription>
                </BenefitContent>
              </AuditBenefit>
              
              <AuditBenefit>
                <CheckCircle size={24} />
                <BenefitContent>
                  <BenefitTitle>Optimisation technique</BenefitTitle>
                  <BenefitDescription>
                    Découvrez et corrigez les problèmes techniques qui peuvent freiner votre référencement et l'expérience utilisateur.
                  </BenefitDescription>
                </BenefitContent>
              </AuditBenefit>
              
              <AuditBenefit>
                <CheckCircle size={24} />
                <BenefitContent>
                  <BenefitTitle>Analyse de la concurrence</BenefitTitle>
                  <BenefitDescription>
                    Comprenez ce que font vos concurrents et comment vous pouvez vous démarquer dans votre secteur.
                  </BenefitDescription>
                </BenefitContent>
              </AuditBenefit>
            </AuditBenefitsList>
            
            <AuditFormTitle>
              <ArrowRight size={24} />
              Processus d'Audit
            </AuditFormTitle>
            
            <AuditProcessSteps>
              <ProcessStep>
                <StepNumber>1</StepNumber>
                <StepContent>
                  <StepTitle>Analyse initiale</StepTitle>
                  <StepDescription>Évaluation complète de votre site et de votre présence en ligne</StepDescription>
                </StepContent>
              </ProcessStep>
              
              <ProcessStep>
                <StepNumber>2</StepNumber>
                <StepContent>
                  <StepTitle>Identification des problèmes</StepTitle>
                  <StepDescription>Détection des obstacles techniques et stratégiques</StepDescription>
                </StepContent>
              </ProcessStep>
              
              <ProcessStep>
                <StepNumber>3</StepNumber>
                <StepContent>
                  <StepTitle>Recommandations personnalisées</StepTitle>
                  <StepDescription>Solutions concrètes adaptées à vos objectifs</StepDescription>
                </StepContent>
              </ProcessStep>
              
              <ProcessStep>
                <StepNumber>4</StepNumber>
                <StepContent>
                  <StepTitle>Plan d'action détaillé</StepTitle>
                  <StepDescription>Feuille de route pour implémenter les améliorations</StepDescription>
                </StepContent>
              </ProcessStep>
            </AuditProcessSteps>
            <SubmitButton onClick={() => window.location.href = `${process.env.REACT_APP_FRONTED_URL}/svc/app-as-service`} >
                Demander mon audit gratuit
                <ChevronRight size={20} />
              </SubmitButton>
          </AuditInfoCard>
          </AuditGrid>



        <Section>
          <SectionContent>
            <SectionTitle>
              <Activity />
              Missions Vedette en Digital Marketing
            </SectionTitle>
            <SectionSubtitle>
              Exemple des projets partagés en référencement naturel
            </SectionSubtitle>
            <MissionsGrid>
              {displayedMissions.map((mission, index) => (
                <MissionCard key={index} onClick={handleModalRegister}>
                  <MissionHeader>
                    <MissionIcon>{mission.icon}</MissionIcon>
                    <MissionDifficulty difficulty={mission.difficulty}>
                      {mission.difficulty}
                    </MissionDifficulty>
                  </MissionHeader>
                  <MissionTitle>{mission.title}</MissionTitle>
                  <MissionDescription>{mission.description}</MissionDescription>
                </MissionCard>
              ))}
            </MissionsGrid>
            {!showAllMissions && (
              <ButtonContainer>
                <MoreMissionsButton onClick={() => setShowAllMissions(true)}>
                  Voir plus de missions
                  <ChevronDown size={20} />
                </MoreMissionsButton>
              </ButtonContainer>
            )}
          </SectionContent>
        </Section>


        <Section>
          <SectionContent>
            <SectionTitle>
              <BarChart2 />
              Nos Services Digital Marketing
            </SectionTitle>
            <SectionSubtitle>
              Solutions d'optimisation complètes pour votre présence en ligne
            </SectionSubtitle>
            <ServicesGrid>
              {services.map((service, index) => (
                <ServiceCard key={index} onClick={handleModalRegister} >
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <SectionTitle>
              <LineChart />
              Études de Cas
            </SectionTitle>
            <SectionSubtitle>
              Découvrez nos succès en référencement naturel
            </SectionSubtitle>
            <CaseStudiesGrid>
              {caseStudies.map((study, index) => (
                <CaseStudyCard key={index} onClick={handleModalRegister}>
                  <CaseStudyImage>
                    <Target />
                  </CaseStudyImage>
                  <CaseStudyContent>
                    <CaseStudyTitle>{study.title}</CaseStudyTitle>
                    <CaseStudyMetrics>
                      {study.metrics.map((metric, idx) => (
                        <CaseStudyMetric key={idx}>
                          <div className="value">{metric.value}</div>
                          <div className="label">{metric.label}</div>
                        </CaseStudyMetric>
                      ))}
                    </CaseStudyMetrics>
                    <ServiceDescription>{study.description}</ServiceDescription>
                  </CaseStudyContent>
                </CaseStudyCard>
              ))}
            </CaseStudiesGrid>
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <SectionTitle>
              <LineChart />
              Résultats Prouvés
            </SectionTitle>
            <SectionSubtitle>
              Des performances mesurables pour votre entreprise
            </SectionSubtitle>
            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard key={index}>
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <TestimonialsSection />
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <FAQSection />
          </SectionContent>
        </Section>
      </MainContainer>
      <Offers />
      <FooterHome page={"Digital Marketing"} />
      {openModalRegister && (
        <Register
          openModalRegister={openModalRegister}
          setOpenModalRegister={setOpenModalRegister}
          handleModalRegister={handleCloseModalRegister}
          switchBetweenModals={false}
          proxy={"marketplace"}
        />
      )}
    </>
  );
}

export default SiteSEO;
