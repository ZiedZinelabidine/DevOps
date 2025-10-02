import React from 'react';
import { Container, Code2 ,Cloud, Minus, Plus, Server, GitBranch, Code, GraduationCap ,Globe,Rocket,  BookOpen,  ChevronDown, FileCode, Settings, Layers, RefreshCw, Boxes,DollarSign, Clock ,Radio, Webhook, Key, Activity, Binary, Network, Lock , ChevronRight, Cpu,  Workflow, LineChart } from 'lucide-react';
import styled, { createGlobalStyle, keyframes, ThemeProvider } from 'styled-components';
import Header from 'components/Header/Header';
import FooterHome from '../FooterHome/FooterHome';
import { Helmet } from 'react-helmet';
import Register from "components/Authentification/modals/register";
import { useState } from "react";
import MarketPlaceAService from '../MarketPlaceAService/MarketPlaceAService';
import Offers from './Offres';
import CardsPrestataires from './CardsPrestataires';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #0a0f1c;
    color: #e2e8f0;
    font-family: 'JetBrains Mono', monospace;
  }
`;

const theme = {
  colors: {
    primary: '#4F46E5',
    primaryHover: '#4338CA',
    text: '#1F2937',
    textDark: '#F9FAFB',
    background: '#FFFFFF',
    backgroundDark: '#000000',
    gray50: '#F9FAFB',
    gray900: '#111827',
  },
  transitions: {
    default: '0.3s ease',
    slow: '0.7s ease',
  }
};


const terminalBlink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const MainContainer = styled.div`
  min-height: 130vh;
  background: #0a0f1c;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 10% 10%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 90% 90%, rgba(14, 165, 233, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const HeroSection = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      transparent 0%,
      transparent 50%,
      rgba(14, 165, 233, 0.03) 50%,
      rgba(14, 165, 233, 0.03) 100%
    );
    background-size: 4px 4px;
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 70rem;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const TerminalWindow = styled.div`
  background: #1a1f2e;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
  text-align: left;
  border: 1px solid rgba(14, 165, 233, 0.2);
  box-shadow: 0 0 30px rgba(14, 165, 233, 0.1);
`;

const TerminalHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TerminalDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$color};
`;

const TerminalText = styled.div`
  color: #e2e8f0;
  font-size: 1.125rem;
  line-height: 1.6;

  &::after {
    content: '▋';
    animation: ${terminalBlink} 1s infinite;
    color: #0ea5e9;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 2rem 0;
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(14, 165, 233, 0.3);
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #94a3b8;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  margin: 5px;

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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(14, 165, 233, 0.4);
  }
`;

const Section = styled.section`
  padding: 6rem 2rem;
  position: relative;
  margin-bottom: 80px;
`;

const SectionContent = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #e2e8f0;

  svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1rem;
    color: #0ea5e9;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #94a3b8;
  font-size: 1.125rem;
  margin-bottom: 4rem;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const MetricCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  border-radius: 8px;
  padding: 2rem;
  border: 1px solid rgba(14, 165, 233, 0.2);
  backdrop-filter: blur(10px);
  animation: ${floatAnimation} 3s ease-in-out infinite;
  animation-delay: ${props => props.$delay || '0s'};

  &:hover {
    border-color: #0ea5e9;
    transform: translateY(-5px);
  }
`;

const MetricValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #0ea5e9;
  margin-bottom: 0.5rem;
`;

const MetricLabel = styled.div`
  color: #94a3b8;
  font-size: 1rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin: 0 auto;
  margin-bottom: 200px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;


const ProjectCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(14, 165, 233, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s;

  &:hover {
    border-color: #0ea5e9;
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const ProjectImage = styled.div`
  position: relative;
  height: 200px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(30%) brightness(0.8);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(10, 15, 28, 0.8) 100%);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: rgba(14, 165, 233, 0.1);
  color: #38bdf8;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  border: 1px solid rgba(14, 165, 233, 0.2);
`;

const ProjectDescription = styled.p`
  color: #94a3b8;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const SkillsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  border-radius: 8px;
  padding: 2rem;
  border: 1px solid rgba(14, 165, 233, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s;

  &:hover {
    border-color: #0ea5e9;
    transform: translateX(5px);
  }
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SkillIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: rgba(14, 165, 233, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0ea5e9;
`;

const SkillTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #e2e8f0;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #94a3b8;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  &::before {
    content: '▹';
    color: #0ea5e9;
  }
`;

const MissionsSection = styled.section`
  padding: 8rem 2rem;
  position: relative;
  background: #1E293B;
`;

const MissionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const MissionCard = styled.div`
  background: rgba(14, 165, 233, 0.05);
  border: 1px solid rgba(14, 165, 233, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(14, 165, 233, 0.2);
    border-color: #0EA5E9;
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
      rgba(14, 165, 233, 0.1),
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
  background: linear-gradient(135deg, #0EA5E9, #38BDF8);
  border-radius: 8px;
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
        return 'rgba(14, 165, 233, 0.2)';
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
        return '#0EA5E9';
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
`;

const ShowMoreButton = styled.button`
  background: transparent;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  font-size: 1.125rem;
  border: 1px solid #0EA5E9;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s;
  
  &:hover {
    background: linear-gradient(135deg, #0EA5E9, #38BDF8);
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(14, 165, 233, 0.4);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateY(4px);
  }
`;

const MissionSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const SkillTag = styled.span`
  background: rgba(14, 165, 233, 0.1);
  color: #38BDF8;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  border: 1px solid rgba(14, 165, 233, 0.2);
`;

const MissionFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(14, 165, 233, 0.1);
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #38BDF8;
  font-weight: 600;
  font-size: 0.875rem;

  svg {
    width: 16px;
    height: 16px;
  }
`;
const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94A3B8;
  font-size: 0.875rem;

  svg {
    width: 16px;
    height: 16px;
  }
`;


const Card = styled.div`
  background-color: ${props => props.$darkMode ? props.theme.colors.gray900 : props.theme.colors.background};
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all ${props => props.theme.transitions.default};
  border: 1px solid ${props => props.$darkMode ? '#1F2937' : '#F3F4F6'};

  &:hover {
    transform: translateY(-0.25rem);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const CardIcon = styled.div`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  transition: transform ${props => props.theme.transitions.default};

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: ${props => props.$darkMode ? props.theme.colors.textDark : props.theme.colors.text};
  transition: color ${props => props.theme.transitions.default};

  ${Card}:hover & {
    color: ${props => props.theme.colors.primary};
  }
`;

const CardText = styled.p`
  font-size: 0.875rem;
  color: ${props => props.$darkMode ? '#9CA3AF' : '#4B5563'};
  margin-bottom: 1rem;
`; 

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.$darkMode ? '#374151' : '#E5E7EB'};
`;

const CardStat = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.$darkMode ? '#9CA3AF' : '#4B5563'};
  transition: color ${props => props.theme.transitions.default};

  ${Card}:hover & {
    color: ${props => props.theme.colors.primary};
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



function Devops() {
    const [showModalRegister, setModalRegister] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [openFAQs, setOpenFAQs] = useState({});
    

    const [showMoreProjects, setShowMoreProjects] = useState(false);
    const [showMoreContracts, setShowMoreContracts] = useState(false);
    
    const handleShowMoreProjects = () => {
        setShowMoreProjects(prev => !prev);
      };
    
    const handleShowMoreContracts = () => {
        setShowMoreContracts(prev => !prev);
      };

    const handelLocationRef = (slug) => {

      window.location.href = slug;

    }

    const toggleFAQ = (index) => {
      setOpenFAQs(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    };

    
    const faqs = [
      {
          question: "Qu'est-ce que le DevOps Freelance ?",
          answer: "Le DevOps Freelance désigne les professionnels indépendants spécialisés dans l'intégration continue, la livraison continue (CI/CD) et la gestion des infrastructures cloud. Ils travaillent souvent sur des projets temporaires ou contractuels, généralement dans le cadre d'infogérance."
      },
      {
          question: "Comment trouver des missions DevOps freelance ?",
          answer: "Pour trouver des missions Infogérance DevOps freelance, inscrivez-vous sur des plateformes spécialisées comme ItGalaxy, où de nombreux projets d'infogérance Cloud et freelances se rencontrent. Des sites comme Upwork ou Codeur peuvent également être de bonnes options."
      },
      {
          question: "Quels types de projets sont disponibles pour les freelances DevOps ?",
          answer: "Les projets pour les freelances Infogérance DevOps varient, allant de la mise en place de pipelines CI/CD et l'automatisation des tests à la gestion d'infrastructures sur AWS, Azure ou GCP, ainsi que des missions d'infogérance."
      },
      {
          question: "Les missions DevOps freelance sont-elles exclusivement à distance ?",
          answer: "Oui, de nombreuses missions Infogérance DevOps freelance sont disponibles en remote, offrant ainsi la flexibilité de travailler depuis n'importe où. Cependant, certaines missions peuvent nécessiter une présence sur site, selon les exigences du projet d'infogérance."
      },
      {
          question: "Quels outils DevOps sont couramment utilisés dans les missions freelance ?",
          answer: "Les freelances DevOps utilisent fréquemment des outils tels que Docker, Kubernetes, Jenkins, Terraform, ainsi que des services Cloud comme AWS, Azure et GCP pour leurs missions d'infogérance."
      },
      {
          question: "Est-il possible de travailler plusieurs missions DevOps en même temps en freelance ?",
          answer: "Oui, de nombreux freelances DevOps gèrent plusieurs missions simultanément, mais cela dépend de leur charge de travail et des délais associés à chaque projet d'infogérance. La gestion du temps et des priorités est cruciale."
      },
      {
          question: "Comment se fixer un tarif compétitif en tant que freelance DevOps ?",
          answer: "Pour se fixer un tarif compétitif en tant que freelance Infogérance DevOps, examinez le marché en ligne, analysez les tarifs des autres freelances expérimentés, et considérez vos compétences spécifiques et la complexité des projets, notamment en infogérance Cloud."
      },
      {
          question: "Quelles compétences sont essentielles pour réussir en tant que freelance DevOps ?",
          answer: "Les compétences essentielles incluent la connaissance des outils CI/CD, l'automatisation, la gestion des configurations, la compréhension des systèmes cloud, ainsi que des compétences en scripting et en surveillance des performances dans un contexte d'infogérance."
      },
      {
          question: "Comment évaluer un freelance DevOps avant de lui confier un projet ?",
          answer: "Pour évaluer un freelance DevOps, examinez son portfolio, ses certifications, ses avis clients et son expérience antérieure. N'hésitez pas à interviewer le freelance pour discuter de son approche et de ses compétences, surtout pour l'infogérance."
      },
      {
          question: "Quels sont les défis rencontrés par les freelances DevOps ?",
          answer: "Les défis incluent la nécessité de se tenir à jour avec les dernières technologies, la compétition accrue sur le marché freelance, et parfois des exigences de clients imprécises qui peuvent rendre la gestion des projets d'infogérance difficile."
      },
      {
          question: "Quelles sont les meilleures plateformes pour les freelances DevOps ?",
          answer: "Les meilleures plateformes pour les freelances Infogérance DevOps incluent ItGalaxy, Upwork, Freelancer et Codeur. Ces plateformes offrent une variété de projets d'infogérance Cloud et la possibilité de se connecter avec des clients potentiels."
      },
      {
          question: "DevOps freelance est-il un secteur en croissance ?",
          answer: "Oui, le secteur DevOps freelance est en forte croissance, car de plus en plus d'entreprises adoptent des pratiques DevOps pour améliorer l'efficacité et la qualité de leurs déploiements logiciels et de leurs infrastructures cloud."
      },
      {
          question: "De combien d'années d'expérience ai-je besoin pour être freelance en DevOps ?",
          answer: "Bien qu'il n'y ait pas de règle stricte, disposer d'au moins 2 à 3 ans d'expérience dans des rôles DevOps ou similaires est recommandé pour acquérir les compétences nécessaires et établir la confiance auprès des clients en infogérance."
      },
      {
          question: "Sur quelles régions les freelances Infogérance DevOps peuvent-ils travailler ?",
          answer: "Les freelances DevOps peuvent travailler partout dans le monde, avec des clients potentiels dans des pays comme les États-Unis, le Canada, l'Europe ou l'Asie. Le travail remote permet d'accéder à un marché global d'infogérance."
      },
      {
          question: "Est-ce que les freelances DevOps doivent posséder des certificats spécifiques ?",
          answer: "Bien que ce ne soit pas obligatoire, des certifications telles que AWS Certified DevOps Engineer, Azure DevOps Solutions Expert, ou Docker Certified Associate peuvent renforcer votre crédibilité et améliorer vos chances d'engagement dans un contexte d'infogérance."
      },
      {
          question: "Quelles sont les clés pour réussir en tant que freelance DevOps ?",
          answer: "Pour réussir, il est essentiel de rester à jour avec les technologies DevOps, d'améliorer vos compétences techniques, d'établir un bon réseau et de maintenir une communication claire avec vos clients sur les projets d'infogérance."
      },
      {
          question: "Quelle est la durée typique d'un projet DevOps freelance ?",
          answer: "La durée des projets peut varier considérablement, allant de quelques semaines pour des tâches spécifiques à plusieurs mois pour des intégrations plus complexes. Cela dépend des exigences du client et de la nature du projet en infogérance."
      },
      {
          question: "Les freelances DevOps travaillent-ils souvent en équipe ?",
          answer: "Oui, de nombreux projets impliquent une collaboration avec d'autres freelances ou des équipes de développement internes pour assurer une intégration fluide des processus DevOps dans les systèmes en place d'infogérance."
      },
      {
          question: "Comment établir des relations de confiance avec des clients en DevOps freelance ?",
          answer: "Pour établir des relations de confiance, soyez transparent sur vos capacités, respectez vos délais, communiquez régulièrement sur l'avancement du projet et soyez réceptif aux retours et aux demandes d'ajustement dans le cadre de l'infogérance."
      },
      {
          question: "Quels conseils donneriez-vous aux nouveaux freelances DevOps ?",
          answer: "Commencez par créer un portfolio solide qui démontre vos compétences et projets précédents en infogérance. Réseautez avec d'autres professionnels, restez informé des dernières tendances et technologies, et soyez proactif dans votre recherche de clients."
      }
  ];
  
  const metrics = [
      { value: '99.99%', label: 'Taux de réussite des migrations vers les services cloud AWS, GCP, Azure' },
      { value: '<800ms', label: 'Temps de déploiement pour la mise en œuvre de CI/CD' },
      { value: '+500TB', label: 'Volume de données géré lors des migrations de bases de données' },
      { value: '+1000', label: 'Incidents en production traités par nos experts DevOps' },
      { value: '99.99%', label: 'Taux de réussite des migrations de bases de données PostgreSQL' },
      { value: '+1000$', label: 'Ajustements mensuels sur les factures' },
      { value: '<800ms', label: 'Amélioration des temps de réponse et des performances des applications' },
      { value: '+500TB', label: 'Sauvegardes des bases de données' },
      { value: '95%', label: 'Satisfaction des clients sur les services fournis' },
      { value: '+200', label: 'Projets développés et livrés avec succès' },
      { value: '<5%', label: 'Taux d’incidents en production' },
      { value: '40%', label: 'Réduction des coûts opérationnels pour nos clients' },
      { value: '+150', label: 'Sessions de formation dispensées à nos clients' },
      { value: '98%', label: 'Taux de disponibilité de nos services en ligne' },
      { value: '30%', label: 'Amélioration de l\'efficacité des processus grâce à l’automatisation' },
      { value: '+80', label: 'Partenariats stratégiques établis pour étendre nos services' },
  ];
  
  const projects = [
      {
        title: 'Expert en déploiement de cluster Kubernetes pour machine virtuelle',
        tech: ['Kubernetes', 'DevOps', 'Linux Administration', 'Terraform', 'AWS', 'Ansible'],
        description: 'Nous recherchons un expert DevOps spécialisé dans Kubernetes pour déployer un cluster sur notre machine virtuelle dans le cadre de notre stratégie d\'infogérance Cloud.',
        price: 5000
      },
      {
        title: 'Mise en place d\'un pipeline CI/CD avec Jenkins et Docker',
        tech: ['Jenkins', 'Docker', 'Kubernetes', 'Linux Administration'],
        description: 'Nous avons besoin d\'un professionnel DevOps pour configurer un pipeline CI/CD robuste utilisant Jenkins et Docker pour des applications en infogérance devops.',
        price: 2000
      },
      {
        title: 'Ingénieur système pour la gestion de réseau et la sécurité',
        tech: ['Computing & Networking', 'Firewall', 'Scripting', 'FortiGate', 'Prometheus', 'Grafana'],
        description: 'Notre client, un leader dans les solutions IT, recherche un ingénieur système pour mettre en place et gérer la sécurité réseau dans un environnement Cloud infogéré.',
        price: 600
      },
      {
        title: 'Ingénieur DevOps pour automatisation des déploiements Cloud',
        tech: ['DevOps', 'CI/CD', 'Python', 'AWS', 'Docker', 'Vault'],
        description: 'Nous recherchons un ingénieur DevOps pour rationaliser nos processus de déploiement sur AWS dans le cadre de notre offre d\'infogérance.',
        price: 12000
      },
      {
        title: 'Developpeurs et architectes de solutions Cloud AWS recherchés',
        tech: ['AWS', 'EC2', 'Cloud Computing', 'Kubernetes', 'DevOps'],
        description: 'Nous cherchons des architectes solutions AWS certifiés pour concevoir et mettre en œuvre des applications cloud évolutives en infogérance.',
        price: 500 
      },
      {
        title: 'Ingénieur DevOps pour déploiement Trino dans l\'environnement Cloud',
        tech: ['AWS CDK', 'CloudFormation', 'Python'],
        description: 'Nous recherchons un ingénieur DevOps pour résoudre des problèmes de déploiement Trino dans notre environnement AWS, essentiel pour notre infogérance Cloud.',
        price: 700
      },
      {
        title: 'Configuration sécurisée des services sur un serveur Hetzner',
        tech: ['DevOps', 'Docker', 'Linux', 'NGINX', 'Ansible'],
        description: 'Recherchons un ingénieur DevOps pour sécuriser la configuration de plusieurs services sur un serveur Hetzner, garantissant une sécurité optimale pour nos environnements d\'infogérance Cloud.',
        price: 600
      },
      {
        title: 'Support DevOps pour un projet de migration vers Google Cloud',
        tech: ['GCP', 'Kubernetes', 'CI/CD'],
        description: 'Nous avons besoin d\'une assistance DevOps pour migrer nos applications vers Google Cloud, en mettant en place des pratiques CI/CD pour l\'infogérance.',
        price: 800
      },
      {
        title: 'Expert Cloud pour configurer un environnement de test AWS',
        tech: ['AWS', 'Kubernetes', 'Docker'],
        description: 'Nous recherchons un expert pour établir un environnement de test sur AWS qui reflète notre production d\'infogérance Cloud.',
        price: 1000
      },
      {
        title: 'Configuration de solution de monitoring avec Grafana et Prometheus',
        tech: ['Monitoring', 'Grafana', 'Prometheus', 'Kubernetes'],
        description: 'Nous recherchons un DevOps pour installer et configurer Grafana et Prometheus pour superviser nos clusters Kubernetes dans le cadre de l\'infogérance Cloud.',
        price: 700
      },
      {
        title: 'Expert en intégration d\'applications Docker et Kubernetes',
        tech: ['Docker', 'Kubernetes', 'Ansible'],
        description: 'Nous avons besoin d\'un expert pour intégrer notre application Docker dans un environnement Kubernetes, optimisant ainsi la gestion des conteneurs dans notre stratégie d\'infogérance.',
        price: 650
      },
      {
        title: 'Coach DevOps pour formations sur les meilleures pratiques',
        tech: ['DevOps', 'CI/CD', 'AWS', 'Kubernetes'],
        description: 'Nous recherchons un coach DevOps pour des formations sur les meilleures pratiques en intégration et déploiement continus et l\'utilisation des outils Cloud dans l\'infogérance.',
        price: 900
      },
      {
        title: 'Assistance à la mise en place d\'un réseau sécurisé dans AWS',
        tech: ['AWS', 'VPC', 'Security'],
        description: 'Nous avons besoin d\'assistance pour configurer un réseau sécurisé sur AWS, y compris la configuration de VPC, les subnets, et les groupes de sécurité pour l\'infogérance Cloud.',
        price: 550
      },
      {
        title: 'Intégration de scans de sécurité dans CI/CD',
        tech: ['OWASP', 'SonarQube', 'Trivy', 'Snyk'],
        description: 'Intégration de systèmes de scans de sécurité dans vos pipelines CI/CD pour assurer la sécurité des déploiements en infogérance devops.',
        price: 650
      },
      {
        title: 'Mise en œuvre des meilleures pratiques en matière de sécurité',
        tech: ['Kubernetes', 'Docker', 'Ansible'],
        description: 'Formation destinée aux équipes DevOps sur les meilleures pratiques de sécurité dans un contexte cloud et Kubernetes.',
        price: 800
      },
      {
        title: 'Expert en audit de sécurité pour infrastructures Cloud',
        tech: ['Security Audit', 'AWS', 'Azure', 'GCP'],
        description: 'Nous recherchons un expert pour réaliser un audit de sécurité de notre infrastructure cloud, fournissant des recommandations sur les meilleures pratiques et les configurations sécurisées pour l\'infogérance.',
        price: 800
      }
    ];
  
  const skills = [
      {
        title: 'Cloud & Infrastructure',
        icon: <Cloud size={24} />,
        items: ['AWS', 'Google Cloud', 'Azure', 'Terraform', 'Ansible']
      },
      {
        title: 'Conteneurisation',
        icon: <Container size={24} />,
        items: ['Docker', 'Kubernetes', 'Helm', 'Istio', 'Harbor']
      },
      {
        title: 'CI/CD',
        icon: <GitBranch size={24} />,
        items: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'ArgoCD' ]
      },
      {
        title: 'Monitoring',
        icon: <LineChart size={24} />,
        items: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog']
      }
  ];
  
  const missions = [
      {
        icon: <FileCode size={20} />,
        title: "Mise en place d'un pipeline CI/CD avec Jenkins",
        description: "Cours de mise en place d'un pipeline CI/CD complet utilisant Jenkins pour automatiser vos déploiements en infogérance cloud.",
        difficulty: "Facile",
        skills: ["Jenkins", "Git", "Docker", "Groovy"],
        rate: "500€",
        duration: "2-3 mois"
      },
      {
        icon: <Settings size={20} />,
        title: "Déploiement d'infrastructure AWS avec Terraform",
        description: "Déploiement et gestion d'une infrastructure dans le cloud AWS en utilisant Terraform pour l'automatisation et l'infogérance devops.",
        difficulty: "Intermédiaire",
        skills: ["AWS", "Terraform", "CloudFormation", "Python"],
        rate: "650€",
        duration: "3-4 mois"
      },
      {
        icon: <Layers size={20} />,
        title: "Gestion de clusters Kubernetes",
        description: "Configuration et gestion de clusters Kubernetes pour assurer des déploiements fiables et scalables en infogérance cloud.",
        difficulty: "Avancé",
        skills: ["Kubernetes", "Docker", "Helm", "Go"],
        rate: "750€",
        duration: "4-6 mois"
      },
      {
        icon: <RefreshCw size={20} />,
        title: "Mise en place de la stack de monitoring Prometheus et Grafana",
        description: "Configuration d'une stack de monitoring pour suivre les performances de votre infrastructure d'infogérance cloud.",
        difficulty: "Intermédiaire",
        skills: ["Prometheus", "Grafana", "AlertManager", "PromQL"],
        rate: "600€",
        duration: "2-3 mois"
      },
      {
        icon: <Boxes size={20} />,
        title: "Optimisation des performances Docker",
        description: "Amélioration des performances des images Docker et des configurations pour une utilisation optimale en production dans le cadre de l'infogérance.",
        difficulty: "Intermédiaire",
        skills: ["Docker", "Shell", "Linux", "Networking"],
        rate: "550€",
        duration: "1-2 mois"
      },
      {
        icon: <Radio size={20} />,
        title: "Implémentation d'Istio pour la gestion des services Kubernetes",
        description: "Mise en œuvre d'Istio pour améliorer la communication entre services dans un environnement Kubernetes d'infogérance cloud.",
        difficulty: "Avancé",
        skills: ["Istio", "Kubernetes", "Envoy", "Go"],
        rate: "800€",
        duration: "3-4 mois"
      },
      {
        icon: <Webhook size={20} />,
        title: "Mise en place d'ArgoCD pour GitOps",
        description: "Configuration d'ArgoCD pour automatiser le déploiement continu de vos applications en infogérance devops.",
        difficulty: "Intermédiaire",
        skills: ["ArgoCD", "Kubernetes", "Git", "YAML"],
        rate: "650€",
        duration: "2-3 mois"
      },
      {
        icon: <Key size={20} />,
        title: "Gestion sécurisée des secrets avec HashiCorp Vault",
        description: "Implémentation de HashiCorp Vault pour sécuriser les secrets et les configurations sensibles dans le cadre de l'infogérance cloud.",
        difficulty: "Intermédiaire",
        skills: ["Vault", "PKI", "AWS KMS", "Go"],
        rate: "700€",
        duration: "2-3 mois"
      },
      {
        icon: <Activity size={20} />,
        title: "Configuration et déploiement de la stack ELK pour logs",
        description: "Mise en place d'Elasticsearch, Logstash et Kibana pour gérer et analyser les logs générés par vos applications d'infogérance cloud.",
        difficulty: "Intermédiaire",
        skills: ["Elasticsearch", "Logstash", "Kibana", "Beats"],
        rate: "600€",
        duration: "2-3 mois"
      },
      {
        icon: <Binary size={20} />,
        title: "Validation des tests d'infrastructure avec Terratest",
        description: "Effectuer des tests de validation pour garantir l'intégrité et la conformité de votre infrastructure d'infogérance cloud.",
        difficulty: "Avancé",
        skills: ["Terratest", "Go", "Terraform", "AWS"],
        rate: "700€",
        duration: "2-3 mois"
      },
      {
        icon: <Network size={20} />,
        title: "Sécurité du réseau Cloud",
        description: "Mise en œuvre des meilleures pratiques de sécurité pour protéger vos réseaux cloud en infogérance contre les menaces.",
        difficulty: "Avancé",
        skills: ["AWS VPC", "Security Groups", "WAF", "CloudFront"],
        rate: "800€",
        duration: "3-4 mois"
      },
      {
        icon: <Lock size={20} />,
        title: "Intégration de scans de sécurité dans CI/CD",
        description: "Intégration de systèmes de scans de sécurité dans vos pipelines CI/CD pour assurer la sécurité des déploiements en infogérance devops.",
        difficulty: "Intermédiaire",
        skills: ["OWASP", "SonarQube", "Trivy", "Snyk"],
        rate: "650€",
        duration: "2-3 mois"
      }
  ];
    

  const handelUsersDevops = () => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/search/prestataires/job/devops`;
  };
  const handleModalRegister = () => {
    setModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setModalRegister(false);
  };

  const initialProjectCount = 12; // Number of projects to show initially
  const initialContractCount = 12; // Number of contracts to show initially
 


  return (
    <>
      <Header />
      <GlobalStyle />
      <MainContainer>
        <HeroSection>
          <HeroContent>
            <TerminalWindow>
              <TerminalHeader>
                <TerminalDot $color="#ff5f56" />
                <TerminalDot $color="#ffbd2e" />
                <TerminalDot $color="#27c93f" />
              </TerminalHeader>
              <TerminalText>
                $ whoami<br />
                DevOps Engineer
              </TerminalText>
            </TerminalWindow>
            <Helmet>
            <title>Infogérance DevOps avec Des Freelances & Agences DevOps</title>
            <meta name="description" content="Découvrez les meilleures freelances DevOps, des agences spécialisées dans l'infogérance, et des experts en CI/CD pour vos projets cloud." />
            <link rel="canonical" href="https://itgalaxy.io/infogerance-devops" />
            <meta property="og:title" content="Infogérance DevOps avec Des Freelances & Agences de Consulting DevOps" />
            <meta property="og:description" content="Trouvez des freelances qualifiés et des agences expertes en DevOps pour la création et la gestion de vos solutions cloud." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://itgalaxy.io/infogerance-devops" />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:site_name" content="ItGalaxy.io" />
            <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/infogerance-devops" />
            <link rel="alternate" hreflang="en" href="https://itgalaxy.io/infogerance-devops" />
        </Helmet>

            <HeroTitle>Trouvez un DevOps Freelance ou une Agence spécialiste en infogérance Cloud </HeroTitle>
            <HeroSubtitle>
                Infogérance Cloud AWS, Infrastructure Cloud & Infogérance devops
            </HeroSubtitle>
            <Button  onClick={() => window.location.href = `/search/prestataires` }>
              Explorer nos prestataires
              <ChevronRight size={20} />
            </Button>
            <Button onClick={handleModalRegister}>
              Explorer les Projets
              <ChevronRight size={20} />
            </Button>
          </HeroContent>
        </HeroSection>

        <CardsPrestataires job={'DEVOPS'}/>


         <MarketPlaceAService />

        <Section>
          <SectionContent>
            <SectionTitle>
              <LineChart />
              Métriques Clés
            </SectionTitle>
            <SectionSubtitle>
              Projets Infogérance DevOps ,Migration Cloud,FinOps,Monitorings 
            </SectionSubtitle>
            <MetricsGrid>
              {metrics.map((metric, index) => (
                <MetricCard key={index} $delay={`${index * 0.2}s`}>
                  <MetricValue>{metric.value}</MetricValue>
                  <MetricLabel>{metric.label}</MetricLabel>
                </MetricCard>
              ))}
            </MetricsGrid>
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <SectionTitle>
              <Server />
              Projets d'Infrastructure
            </SectionTitle>
            <SectionSubtitle>
              Solutions Cloud pour applications modernes
            </SectionSubtitle>
            <ProjectsGrid>
            {projects.slice(0, showMoreProjects ? projects.length : initialProjectCount).map((project, index) => (
                <ProjectCard key={index} onClick={() => handleModalRegister(project.tech[0])}>
                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <TechStack>
                      {project.tech.map((tech, techIndex) => (
                        <TechTag key={techIndex}>{tech}</TechTag>
                      ))}
                    </TechStack>
                  </ProjectContent>
                  <MissionFooter>
                  <Rate style={{ padding: '10px'}}>
                    <DollarSign />
                    {project.price} budget
                  </Rate>
                 </MissionFooter>
                </ProjectCard>
              ))}

            </ProjectsGrid>  
            <ButtonContainer>
                <ShowMoreButton onClick={() => handleShowMoreProjects()}>
                  {showMoreProjects ? 'Voir moins de Missions' : 'Voir plus de Missions'}

                  <ChevronDown size={20} />
                </ShowMoreButton>
              </ButtonContainer>         
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <SectionTitle>
              <Cpu />
              Compétences Techniques
            </SectionTitle>
            <SectionSubtitle>
              Expertise en automatisation et infrastructure cloud
            </SectionSubtitle>
            <SkillsSection>
              {skills.map((skill, index) => (
                <SkillCard key={index}>
                  <SkillHeader>
                    <SkillIcon>
                      {skill.icon}
                    </SkillIcon>
                    <SkillTitle>{skill.title}</SkillTitle>
                  </SkillHeader>
                  <SkillList>
                    {skill.items.map((item, itemIndex) => (
                      <SkillItem key={itemIndex}>{item}</SkillItem>
                    ))}
                  </SkillList>
                </SkillCard>
              ))}
            </SkillsSection>
          </SectionContent>
        </Section>
        <MissionsSection>
          <SectionContent>
            <SectionTitle>
              <Workflow />
              Projets dédiées au Cloud
            </SectionTitle>
            <SectionSubtitle>
              Explorez et contribuez à des projets en Infogérance DevOps innovants
            </SectionSubtitle>
            <MissionsGrid>
            {missions.slice(0, showMoreContracts ? missions.length : initialContractCount).map((mission, index) => (
                <MissionCard key={index} onClick={() => handleModalRegister()}>
                <MissionHeader>
                  <MissionIcon>{mission.icon}</MissionIcon>
                  <MissionDifficulty difficulty={mission.difficulty}>
                    {mission.difficulty}
                  </MissionDifficulty>
                </MissionHeader>
                <MissionTitle>{mission.title}</MissionTitle>
                <MissionDescription>{mission.description}</MissionDescription>
                <MissionSkills>
                  {mission.skills.map((skill, skillIndex) => (
                    <SkillTag key={skillIndex}>{skill}</SkillTag>
                  ))}
                </MissionSkills>
                <MissionFooter>
                  <Rate>
                    <DollarSign />
                    {mission.rate}/jour
                  </Rate>
                  <Duration>
                    <Clock />
                    {mission.duration}
                  </Duration>
                </MissionFooter>
              </MissionCard>
              ))}
            </MissionsGrid>
              <ButtonContainer>
                <ShowMoreButton onClick={() => handleShowMoreContracts()}>
                {initialContractCount ? 'Voir moins de Contrats' : 'Voir plus de Contrats'}
                <ChevronDown size={20} />
                </ShowMoreButton>
              </ButtonContainer>
          </SectionContent>
        </MissionsSection>
     <ThemeProvider style={{ background: 'black' }} theme={theme}>    
        <Section $darkMode={darkMode}>
          <SectionTitle $darkMode={darkMode}>Formations Experts DevOps Gratuit</SectionTitle>
          <Grid>
            {[
              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "AWS : Service IAM",
                desc: "Formation compléte sur le service IAM",
                duration: "1 heures",
                level: "Expert",
                slug: "https://formations-aws.itgalaxy.io/iam/"
              },

              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "AWS : Service Ec2",
                desc: "Formation compléte sur le service Ec2",
                duration: "1 heures",
                level: "Expert",
                slug: "https://formations-aws.itgalaxy.io/ec2/"
              },

              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "AWS : Service Vpc",
                desc: "Formation compléte sur le service Vpc",
                duration: "2 heures",
                level: "Expert",
                slug: "https://formations-aws.itgalaxy.io/vpc/"
              },
              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "AWS : Service s3",
                desc: "Formation compléte sur le service s3",
                duration: "1 heures",
                level: "Expert",
                slug: "https://formations-aws.itgalaxy.io/s3/"
              },
              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "AWS : Service Cloudwatch",
                desc: "Formation compléte sur le service Cloudwatch",
                duration: "2 heures",
                level: "Expert",
                slug: "https://formations-aws.itgalaxy.io/cloudwatch/"
              },
              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "AWS : Service Loadbalancer",
                desc: "Formation compléte sur le service Loadbalancer",
                duration: "2 heures",
                level: "Expert",
                slug: "https://formations-aws.itgalaxy.io/loadbalancer/"
              },
              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "AWS : Service lambda",
                desc: "Formation compléte sur le service lambda",
                duration: "2 heures",
                level: "Expert",
                slug: "https://formations-aws.itgalaxy.io/loadbalancer/"
              },
              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "AWS : Service rds",
                desc: "Formation compléte sur le service rds",
                duration: "2 heures",
                level: "Expert",
                slug: "https://formations-aws.itgalaxy.io/lambda/"
              },
              {
                icon: <GitBranch className="w-8 h-8" />,
                title: "AWS : Service rds",
                desc: "Formation compléte sur le service sqs",
                duration: "2 heures",
                level: "Expert",
                slug: "https://formations-aws.itgalaxy.io/rds"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "IaC avec Terraform",
                desc: "Formation compléte sur Terraform",
                duration: "6 heures",
                level: "Débutant",
                slug: "https://formations-terraform.itgalaxy.io/infrastructure-as-code/"

              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "les bonne pratiques devops",
                desc: "Formation complete sur bonne pratiques devops",
                duration: "1 heures",
                level: "Expert",
                slug: "https://formations-terraform.itgalaxy.io/buts-de-devops"

              },

              {
                icon: <Cpu className="w-8 h-8" />,
                title: "Cloud AWS Services",
                desc: "Formation complete sur AWS Services",
                duration: "50 heures",
                level: "Expert",
                slug: "https://formations-aws.itgalaxy.io/introduction-aws-services/"

              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Introduction Kubernetes Débutant",
                desc: "Introduction sur Kubernetes , architecture , workshop",
                duration: "3 heures",
                level: "Avancé",
                slug: "https://formations-k8s.itgalaxy.io/introduction-kubernetes"
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Mise en place cluster kubernetes",
                desc: "Mise en place d'un cluster Kubernetes sur AWS et minikube",
                duration: "4 heures",
                level: "Avancé",
                slug: "https://formations-k8s.itgalaxy.io/mise-en-place-cluster-k8s/"
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Configurer votre cluster Kubernetes",
                desc: "Configurer user iam et k8s sur aws",
                duration: "1 heures",
                level: "Avancé",
                slug: "https://formations-k8s.itgalaxy.io/configurer-user-iam-et-k8s-sur-aws/"
              },

              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Formation Kubernetes Avancée",
                desc: "Mise en place de cluster Kubernetes avec KubeAdmin , AWS EKS",
                duration: "48 heures",
                level: "Intermédiaire",
                slug: "https://formations-k8s.itgalaxy.io/"

              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Déploiement app nodejs",
                desc: "Premiers pas sur Kubernetes avec une application NodeJs",
                duration: "1 heures",
                level: "Intermédiaire",
                slug: "https://formations-k8s.itgalaxy.io/deploiement-app-nodejs"

              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Déploiement Wordpress",
                desc: "Wordpress pour la création de vos sites et de vos blog",
                duration: "4 heures",
                level: "Intermédiaire",
                slug: "https://formations-k8s.itgalaxy.io/deployer-wordpress-avec-pvpvc/"

              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Déploiement application Dockercoins",
                desc: "Deploiment de l'application Dockercoins",
                duration: "2 heures",
                level: "Intermédiaire",
                slug: "https://formations-k8s.itgalaxy.io/deploiement-application-dockercoins-/"

              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Monotoring avec Prometheus grafana",
                desc: "Monotoring avec Prometheus grafana",
                duration: "2 heures",
                level: "Intermédiaire",
                slug: "https://formations-k8s.itgalaxy.io/monotoring-avec-prometheus-grafana/"

              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Deployer la stack ELK",
                desc: "Deployer la stack ELK (Elasticseach,Fluentd,logstash,kibana)",
                duration: "2 heures",
                level: "Intermédiaire",
                slug: "https://formations-k8s.itgalaxy.io/deployer-la-stack-elk--elasticseach-logstash--kibana/"

              },

              {
                icon: <Globe className="w-8 h-8" />,
                title: "Docker avec Terraform",
                desc: "Formation compléte sur Terraform",
                duration: "6 heures",
                level: "Débutant",
                slug: ""

              },

              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Formation Gitlab",
                desc: "Apprenez Gitlab avec ItGalaxy gratuitement",
                duration: "15 heures",
                level: "Intermédiaire",
                slug: ""

              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Formation Git",
                desc: "Apprenez Git avec ItGalaxy gratuitement",
                duration: "15 heures",
                level: "Intermédiaire",
                slug: ""

              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Formation Docker",
                desc: "Apprenez Docker avec ItGalaxy gratuitement",
                duration: "12 heures",
                level: "Intermédiaire",
                slug: ""

              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Mise en place de CI/CD avec Gitlab",
                desc: "Apprenez la mise en place de CI CD avec Gitlab",
                duration: "4 semaines",
                level: "Intermédiaire",
                slug: ""

              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Formation Docker Compose",
                desc: "Apprenez Docker-Compose avec ItGalaxy gratuitement",
                duration: "12 heures",
                level: "Intermédiaire",
                slug: ""
              }
            ].map((course, index) => (
              <Card key={index} $darkMode={darkMode} onClick={() => handelLocationRef(course.slug)} >
                <CardIcon>{course.icon}</CardIcon>
                <CardTitle $darkMode={darkMode}>{course.title}</CardTitle>
                <CardText $darkMode={darkMode}>{course.desc}</CardText>
                <CardFooter $darkMode={darkMode}>
                  <CardStat $darkMode={darkMode}>
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </CardStat>
                  <CardStat $darkMode={darkMode}>
                    <GraduationCap className="w-4 h-4" />
                    <span>{course.level}</span>
                  </CardStat>
                </CardFooter>
              </Card>
            ))}
          </Grid>
        </Section>
        <FAQSection>
          <SectionContent>
            <SectionTitle>
                DevOps FAQ
              <Code2 />
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
      </ThemeProvider>
      </MainContainer>
      {showModalRegister && (
        <Register
          openModalRegister={showModalRegister}
          setOpenModalRegister={setModalRegister}
          handleModalRegister={handleCloseModalRegister}
          proxy={"dashboard"}
        />)}

      <FooterHome page={'devops'} />
    </>
  );
}

export default Devops;