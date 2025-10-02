import Register from "components/Authentification/modals/register";
import Header from 'components/Header/Header';
import {
  ArrowDown,
  Award,
  Book,
  Briefcase,
  Calculator,
  Check,
  ChevronRight,
  Cloud,
  Database,
  GitBranch,
  HelpCircle,
  LineChart,
  Network,
  Server,
  Settings,
  Shield,
  Terminal,
  Users
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import FooterHome from '../FooterHome/FooterHome';
import Offers from "./Offres";
import CardsPrestataires from "./CardsPrestataires";
import ItGalaxyAsService from "../ItGalaxyAsService/ItGalaxyAsService";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #0B1120;
    color: #ffffff;
    font-family: 'JetBrains Mono', monospace;
  }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.4); }
  70% { box-shadow: 0 0 0 20px rgba(6, 182, 212, 0); }
  100% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0); }
`;

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const MainContainer = styled.div`
  min-height: 100vh;
  background: #0B1120;
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
      radial-gradient(circle at 10% 10%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 90% 90%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const HeroSection = styled.section`
  min-height: 67vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem;
  scroll-margin-top: 4rem;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1));
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
  background: linear-gradient(135deg, #06B6D4, #3B82F6);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${float} 6s ease-in-out infinite;
  box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);

  svg {
    width: 80px;
    height: 80px;
    color: #ffffff;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 2rem 0;
  color: #ffffff;
  background: linear-gradient(to right, #06B6D4, #3B82F6);
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

const HeroStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

const HeroStat = styled.div`
  text-align: center;
`;

const HeroStatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #06B6D4;
  margin-bottom: 0.5rem;
`;

const HeroStatLabel = styled.div`
  color: #94A3B8;
  font-size: 0.875rem;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #06B6D4, #3B82F6);
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 12px;
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
    box-shadow: 0 10px 30px rgba(6, 182, 212, 0.4);
    animation: ${pulse} 2s infinite;
  }
`;

const Section = styled.section`
  padding: 8rem 2rem;
  position: relative;
  background: #0F172A;

  &:nth-child(odd) {
    background: #0B1120;
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
  background: linear-gradient(to right, #06B6D4, #3B82F6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1rem;
    color: #06B6D4;
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

const ServicesHexGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 4rem 0;
  position: relative;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1));
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    z-index: 0;
  }
`;

const ServiceCard = styled.div`
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(6, 182, 212, 0.2);
    border-color: #06B6D4;
  }
`;

const ServiceHexCard = styled(ServiceCard)`
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  padding: 3rem;
  background: rgba(6, 182, 212, 0.05);
  backdrop-filter: blur(10px);
  z-index: 1;
  
  &:hover {
    transform: translateY(-10px) scale(1.05);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, #06B6D4, #3B82F6);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
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

const ProjectsGrid = styled.div`
  display: grid;
  gap: 3rem;
  position: relative;
`;

const ProjectCardEnhanced = styled.div`
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.1);
  border-radius: 20px;
  padding: 3rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(6, 182, 212, 0.1) 0%,
      rgba(59, 130, 246, 0.1) 100%
    );
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
    z-index: 0;
    transition: all 0.3s;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(6, 182, 212, 0.1) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: all 0.3s;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(6, 182, 212, 0.2);
    border-color: #06B6D4;

    &::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
    }

    &::after {
      opacity: 1;
      transform: translate(-30%, 30%);
    }
  }
`;

const ProjectContent = styled.div`
  position: relative;
  z-index: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const ProjectCompany = styled.p`
  color: #94A3B8;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #94A3B8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectType = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(6, 182, 212, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: #06B6D4;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const ProjectStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
  padding: 1.5rem 0;
  border-top: 1px solid rgba(6, 182, 212, 0.1);
  border-bottom: 1px solid rgba(6, 182, 212, 0.1);
`;

const ProjectStat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProjectStatLabel = styled.div`
  color: #94A3B8;
  font-size: 0.875rem;
`;

const ProjectStatValue = styled.div`
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 600;
`;

const TechStackEnhanced = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

const TechTagEnhanced = styled.span`
  background: rgba(6, 182, 212, 0.1);
  color: #94A3B8;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  border: 1px solid rgba(6, 182, 212, 0.2);
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #06B6D4;
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: rgba(6, 182, 212, 0.2);
    border-color: #06B6D4;
    transform: translateY(-2px);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const SeeMoreButton = styled(Button)`
  background: transparent;
  border: 2px solid #06B6D4;
  color: #94A3B8;
  
  &:hover {
    background: rgba(6, 182, 212, 0.1);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateY(4px);
  }
`;

const ComparisonTable = styled.div`
  max-width: 72rem;
  margin: 3rem auto;
  background: rgba(6, 182, 212, 0.1);
  border-radius: 20px;
  padding: 2rem;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  color: #ffffff;
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid rgba(6, 182, 212, 0.2);
  background-color: rgba(6, 182, 212, 0.1);
`;

const Td = styled.td`
  color: #94A3B8;
  padding: 1rem;
  border-bottom: 1px solid rgba(6, 182, 212, 0.2);
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }
`;

const FeatureCard = styled.div`
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    border-color: #06B6D4;
    box-shadow: 0 20px 40px rgba(6, 182, 212, 0.2);
  }
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #06B6D4, #3B82F6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #94A3B8;
  line-height: 1.6;
`;

const FAQGrid = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
`;

const FAQItem = styled.div`
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #06B6D4;
    background: rgba(6, 182, 212, 0.1);
  }
`;

const FAQQuestion = styled.h2`
  color: #ffffff;
  font-size: 1.25rem;
  margin-bottom: ${props => props.isOpen ? '1rem' : '0'};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: '';
    width: 12px;
    height: 12px;
    border-right: 2px solid #06B6D4;
    border-bottom: 2px solid #06B6D4;
    transform: rotate(${props => props.isOpen ? '225deg' : '45deg'});
    transition: transform 0.3s ease;
  }
`;

const FAQAnswer = styled.div`
  color: #94A3B8;
  line-height: 1.6;
  height: ${props => props.isOpen ? 'auto' : '0'};
  overflow: hidden;
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: all 0.3s ease-in-out;
  padding: ${props => props.isOpen ? '1rem 0 0' : '0'};
`;

const ComparisonSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1));
`;

const ComparisonContainer = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  position: relative;
  padding: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), transparent);
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
    z-index: 0;
  }
`;

const ComparisonContent = styled.div`
  flex: 1;
`;

const ComparisonVisual = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProviderBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(6, 182, 212, 0.1);
  border-radius: 12px;
  transition: all 0.3s;

  &:hover {
    transform: translateX(10px);
    background: rgba(6, 182, 212, 0.2);
  }
`;

const ProviderName = styled.div`
  flex: 1;
  color: #ffffff;
  font-weight: 600;
`;

const ProviderMetric = styled.div`
  color: #06B6D4;
  font-weight: 600;
  min-width: 80px;
  text-align: right;
`;

const TimelineSection = styled.section`
  padding: 6rem 2rem;
  position: relative;
`;

const Timeline = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #06B6D4, #3B82F6);
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 2rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #06B6D4;
    border: 2px solid #0B1120;
  }
`;

const TimelineContent = styled.div`
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-left: 1rem;
`;

const TimelineHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const TimelineTitle = styled.h3`
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
`;

const TimelineDescription = styled.p`
  color: #94A3B8;
  line-height: 1.6;
`;

const TimelineDynamic = styled(Timeline)`
  &::before {
    background: linear-gradient(to bottom, #06B6D4, #3B82F6);
    animation: pulse 2s infinite;
  }
`;

const TimelineItemDynamic = styled(TimelineItem)`
  &::before {
    animation: ${pulse} 2s infinite;
    box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.4);
  }

  &:hover::before {
    animation: none;
    transform: scale(1.2);
  }
`;

const migrationSteps = [
  {
    icon: <Terminal size={24} />,
    title: "Évaluation",
    description: "Analyse approfondie de votre infrastructure actuelle",
    details: [
      "Audit technique complet",
      "Analyse des dépendances",
      "Évaluation des coûts",
      "Identification des risques"
    ]
  },
  {
    icon: <Settings size={24} />,
    title: "Planification",
    description: "Élaboration de la stratégie de migration",
    details: [
      "Architecture cible",
      "Planning détaillé",
      "Plan de continuité",
      "Stratégie de sécurité"
    ]
  },
  {
    icon: <Database size={24} />,
    title: "Preuve de Concept",
    description: "Test de migration sur un périmètre restreint",
    details: [
      "Migration pilote",
      "Tests de performance",
      "Validation technique",
      "Ajustements"
    ]
  },
  {
    icon: <Server size={24} />,
    title: "Migration",
    description: "Déploiement de la migration complète",
    details: [
      "Migration par phases",
      "Tests continus",
      "Monitoring temps réel",
      "Support dédié"
    ]
  },
  {
    icon: <Shield size={24} />,
    title: "Validation",
    description: "Vérification complète post-migration",
    details: [
      "Tests de charge",
      "Audit de sécurité",
      "Validation fonctionnelle",
      "Documentation"
    ]
  },
  {
    icon: <LineChart size={24} />,
    title: "Optimisation",
    description: "Amélioration continue des performances",
    details: [
      "FinOps : Optimisation des coûts",
      "Monitoring avancé",
      "Recommandations",
      "Support proactif"
    ]
  }
];

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ProcessCard = styled.div`
  position: relative;
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    border-color: #06B6D4;
    box-shadow: 0 20px 40px rgba(6, 182, 212, 0.2);
  }
`;

const ProcessNumber = styled.div`
  position: absolute;
  top: -1rem;
  right: -1rem;
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #06B6D4, #3B82F6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
`;

const ProcessIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #06B6D4, #3B82F6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
`;

const ProcessTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const ProcessDescription = styled.p`
  color: #94A3B8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProcessDetails = styled.div`
  display: grid;
  gap: 0.75rem;
`;

const ProcessDetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #94A3B8;
  font-size: 0.875rem;

  svg {
    color: #06B6D4;
    flex-shrink: 0;
  }
`;

const CertificationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CertificationCard = styled.div`
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    border-color: #06B6D4;
    box-shadow: 0 20px 40px rgba(6, 182, 212, 0.2);
  }
`;

const CertificationIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #06B6D4, #3B82F6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
`;

const CertificationTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const CertificationDescription = styled.p`
  color: #94A3B8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CertificationList = styled.div`
  display: grid;
  gap: 0.75rem;
`;

const CertificationSkill = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #94A3B8;
  font-size: 0.875rem;

  svg {
    color: #06B6D4;
    flex-shrink: 0;
  }
`;

const LearningSection = styled(Section)`
  background: #0B1120;
`;

const LearningGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

 &:hover {
   cursor: pointer;
 }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LearningCard = styled.div`
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    border-color: #06B6D4;
    box-shadow: 0 20px 40px rgba(6, 182, 212, 0.2);
  }
`;

const LearningIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #06B6D4, #3B82F6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
`;

const LearningTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const LearningDescription = styled.p`
  color: #94A3B8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const LearningList = styled.div`
  display: grid;
  gap: 0.75rem;
`;

const LearningItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #94A3B8;
  font-size: 0.875rem;

  svg {
    color: #06B6D4;
    flex-shrink: 0;
  }
`;

const LearningDiagonal = styled.div`
  position: relative;
  padding: 4rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1));
    transform: skewY(-6deg);
    z-index: 0;
  }
`;

const LearningContent = styled.div`
  position: relative;
  z-index: 1;
`;

function SiteAWS() {
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [activeTab, setActiveTab] = useState('migration');
  const [showComparison, setShowComparison] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };

  const handelSearchProjects = (skill) => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/search/projects/skill/AWS`;
  };

  const faqs = [
    {
      question: "Pourquoi choisir AWS plutôt qu'Azure ou Google Cloud ?",
      answer: "AWS est le leader incontesté du cloud computing avec plus de 34% de parts de marché. Il offre la plus large gamme de services (200+), la meilleure couverture mondiale (84 zones de disponibilité), et les certifications de sécurité les plus complètes. AWS innove constamment et propose des outils d'optimisation des coûts très performants."
    },
    {
      question: "Comment fonctionne une migration vers AWS ?",
      answer: "La migration suit un processus en 6 étapes : 1) Évaluation de l'infrastructure existante, 2) Planification détaillée, 3) Preuve de concept, 4) Migration pilote, 5) Migration complète, et 6) Optimisation continue. Chaque étape est sécurisée et validée pour garantir une transition sans interruption."
    },
    {
      question: "Quels sont les coûts d'une migration AWS ?",
      answer: "Les coûts varient selon la complexité du projet. Une migration simple peut démarrer à 15k€, tandis qu'une transformation complète peut aller jusqu'à 350k€. Nous proposons des outils d'estimation précis et des solutions d'optimisation des coûts pour maximiser votre ROI."
    },
    {
      question: "Combien de temps prend une migration AWS ?",
      answer: "La durée dépend de la taille et de la complexité de votre infrastructure. Une migration simple peut prendre 1-2 mois, tandis qu'une transformation complète peut s'étendre sur 6-12 mois. Nous établissons un planning détaillé et des jalons clairs dès le début du projet."
    },
    {
      question: "Comment est assurée la sécurité sur AWS ?",
      answer: "AWS offre une sécurité multicouche : 1) Protection DDoS intégrée, 2) Chiffrement des données au repos et en transit, 3) Contrôle d'accès granulaire (IAM), 4) Surveillance continue, 5) Conformité aux normes internationales (RGPD, ISO 27001, etc.)."
    },
    {
      question: "Quels services AWS sont essentiels pour l'infogérance Cloud ?",
      answer: "Les services clés incluent AWS EC2 pour l'hébergement, RDS pour la gestion des bases de données, S3 pour le stockage d'objets, et CloudWatch pour la surveillance. Ces outils optimisent les capacités d'infogérance et assurent une gestion efficace des infrastructures."
    },
    {
      question: "Quels outils d'optimisation des coûts propose AWS ?",
      answer: "AWS fournit des outils comme AWS Cost Explorer et AWS Budgets qui aident à visualiser, prévoir et gérer les dépenses. De plus, l’Auto Scaling ajuste automatiquement la capacité en fonction de la demande, réduisant ainsi les coûts."
    },
    {
      question: "Comment assurer la conformité en utilisant AWS ?",
      answer: "AWS propose des certifications et accréditations qui garantissent que ses services respectent les normes de conformité. Des outils comme AWS Config permettent également de surveiller et d'appliquer des politiques de conformité en continu."
    },
    {
      question: "Quels sont les avantages d'utiliser une architecture serverless sur AWS ?",
      answer: "L'architecture serverless permet de réduire les coûts d'infrastructure, car vous ne payez que pour l'utilisation réelle. De plus, cela facilite l'évolutivité et réduit la complexité de la gestion des serveurs, ce qui est idéal pour l'infogérance."
    },
    {
      question: "Comment AWS garantit-il la haute disponibilité ?",
      answer: "AWS garantit la haute disponibilité grâce à des zones de disponibilité multiples, des options de redondance et de reprise après sinistre. Des services comme Route 53 assurent une distribution de trafic efficace vers les ressources disponibles."
    },
    {
      question: "Comment gérer les autorisations d'accès sur AWS ?",
      answer: "AWS IAM (Identity and Access Management) permet de créer et de gérer des utilisateurs et des groupes ainsi que d'appliquer des politiques d'accès précises pour sécuriser les ressources cloud et gérer l'infogérance."
    },
    {
      question: "Quelle est la différence entre RDS et DynamoDB ?",
      answer: "RDS est un service de base de données relationnelle pour les applications nécessitant des transactions et des relations complexes, tandis que DynamoDB est une base de données NoSQL optimisée pour les applications qui nécessitent une latence faible et une élasticité."
    },
    {
      question: "Pourquoi est-il important de mettre en place des pratiques CI/CD sur AWS ?",
      answer: "Les pratiques CI/CD sur AWS permettent d'automatiser le déploiement d'applications, d'accélérer la mise sur le marché des fonctionnalités, et d'améliorer la cohérence et la qualité grâce à des tests intégrés. Cela soutient une stratégie d'infogérance optimale."
    },
    {
      question: "Quels sont les outils de monitoring recommandés sur AWS ?",
      answer: "AWS CloudWatch et AWS X-Ray sont des outils essentiels pour surveiller les performances des applications et des ressources. Ils aident à détecter les problèmes et à optimiser les systèmes pour une gestion efficace de l'infogérance."
    },
    {
      question: "Comment fonctionne la sauvegarde et la restauration sur AWS ?",
      answer: "AWS propose des solutions comme AWS Backup et des snapshots pour automatiser les sauvegardes et assurer la restauration rapide des données. Ces solutions aident à maintenir la continuité des activités en cas de défaillance."
    },
    {
      question: "Qu'est-ce que le CloudFormation et pourquoi l'utiliser ?",
      answer: "AWS CloudFormation permet de décrire et de provisionner des infrastructures AWS de manière codifiable. Cela facilite la gestion des environnements dans le cadre de l'infogérance, rendant le déploiement plus rapide et moins sujet aux erreurs."
    },
    {
      question: "Est-ce que les services AWS sont scalables ?",
      answer: "Oui, la plupart des services AWS sont conçus pour être scalables, permettant aux entreprises de s'adapter à l'évolution des besoins sans interruption de service. Ceci est essentiel pour une stratégie d'infogérance flexible."
    },
    {
      question: "Comment optimiser les performances des applications sur AWS ?",
      answer: "Pour optimiser les performances, utilisez des outils comme AWS Auto Scaling, AWS CloudFront pour la mise en cache, et AWS Lambda pour le traitement des événements, ce qui améliore la réactivité et l'efficacité."
    },
    {
      question: "Comment AWS peut-il aider à la transformation digitale ?",
      answer: "AWS fournit les outils et les services nécessaires pour favoriser l'innovation, l'agilité et la flexibilité, ce qui permet aux entreprises de s'engager dans leur transformation digitale et d'améliorer leur efficacité opérationnelle."
    },
    {
      question: "Quels KPIs suivre pour mesurer le succès de l'infogérance sur AWS ?",
      answer: "Il est important de suivre des KPIs tels que le coût total de possession (TCO), la disponibilité des applications, la performance des systèmes, et le temps de réponse des services pour évaluer le succès de l'infogérance sur AWS."
    },
    {
      question: "Quels défis peuvent survenir lors de l'utilisation d'AWS ?",
      answer: "Les entreprises peuvent faire face à des défis tels que la gestion des coûts, la sécurité des données, et la complexité des architectures, mais ces défis peuvent être surmontés avec une planification appropriée et l'utilisation des ressources AWS."
    }
  ];

  const services = [
    {
      icon: <Database size={32} />,
      title: 'Migration de Données',
      description: 'Migration sécurisée et optimisée de vos données vers AWS avec zéro perte.',
      features: ['Migration sans interruption', 'Validation des données', 'Optimisation des coûts'],
      price: 'À partir de 15k€'
    },
    {
      icon: <Server size={32} />,
      title: 'Infrastructure Cloud',
      description: 'Conception et déploiement d\'architectures cloud natives sur AWS.',
      features: ['Architecture évolutive', 'Haute disponibilité', 'Performance optimale'],
      price: 'À partir de 20k€'
    },
    {
      icon: <Shield size={32} />,
      title: 'Sécurité & Conformité',
      description: 'Implémentation des meilleures pratiques de sécurité AWS et conformité.',
      features: ['Audit de sécurité', 'Conformité RGPD', 'Protection DDoS'],
      price: 'À partir de 18k€'
    },
    {
      icon: <Calculator size={32} />,
      title: 'Optimisation des Coûts',
      description: 'Analyse et optimisation de vos dépenses AWS pour maximiser votre ROI.',
      features: ['Analyse des coûts', 'Recommandations', 'Monitoring continu'],
      price: 'À partir de 12k€'
    },
    {
      icon: <Cloud size={32} />,
      title: 'DevOps AWS',
      description: 'Automatisation et intégration continue de vos processus sur AWS.',
      features: ['CI/CD Pipeline', 'Infrastructure as Code', 'Containerisation'],
      price: 'À partir de 16k€'
    },
    {
      icon: <LineChart size={32} />,
      title: 'Analytics & Big Data',
      description: 'Solutions d\'analyse de données et Big Data sur l\'infrastructure AWS.',
      features: ['Data Lakes', 'Machine Learning', 'Business Intelligence'],
      price: 'À partir de 22k€'
    }
  ];

  const projects = [
    {
      title: 'Migration sur Serveurs Dédiés',
      company: 'Industrie Tech',
      location: 'France',
      type: 'Migration',
      budget: '150-200k€',
      description: 'Migration complète d\'infrastructures sur des serveurs dédiés avec une stratégie de zero-downtime, garantissant une continuité de service durant l\'infogérance.',
      tech: ['Migration Serveur', 'Monitoring', 'Récupération de données']
    },
    {
      title: 'Optimisation de Serveur Web',
      company: 'E-commerce Leader',
      location: 'Europe',
      type: 'Optimisation',
      budget: '200-250k€',
      description: 'Optimisation des performances du serveur web et mise en place d\'un CDN pour améliorer le temps de chargement et la sécurité des applications.',
      tech: ['Apache/Nginx', 'CDN', 'SSL']
    },
    {
      title: 'Gestion de Serveurs Cloud',
      company: 'Banque Digitale',
      location: 'International',
      type: 'Gestion',
      budget: '300-350k€',
      description: 'Mise en place d\'une infrastructure cloud sur AWS, intégrant une gestion complète de la sécurité et de la performance avec des solutions d\'infogérance.',
      tech: ['AWS', 'CloudFormation', 'IAM']
    },
    {
      title: 'Surveillance et Sécurisation de Serveurs',
      company: 'E-commerce Scale-up',
      location: 'Europe',
      type: 'Sécurité',
      budget: '180-220k€',
      description: 'Mise en œuvre d\'un système de surveillance des serveurs pour détecter les anomalies et garantir une sécurité optimale.',
      tech: ['Prometheus', 'Grafana', 'WAF']
    },
    {
      title: 'Infrastructure de Sauvegarde',
      company: 'Groupe Média',
      location: 'France',
      type: 'Sauvegarde',
      budget: '250-300k€',
      description: 'Création d\'une infrastructure de sauvegarde automatisée, incluant des solutions pour la restauration rapide des données.',
      tech: ['RDS', 'AWS Backup', 'S3']
    },
    {
      title: 'Développement d\'un Système de Gestion des Utilisateurs',
      company: 'Application SaaS',
      location: 'Europe',
      type: 'Développement',
      budget: '100-150k€',
      description: 'Conception d\'un système de gestion des utilisateurs et des rôles pour contrôler l\'accès aux ressources sur le serveur.',
      tech: ['Node.js', 'MongoDB', 'JWT']
    },
    {
      title: 'Migration vers une Infrastructure Hybride',
      company: 'Tech Solutions',
      location: 'International',
      type: 'Migration',
      budget: '200-250k€',
      description: 'Migration d\'une infrastructure locale vers une solution hybride, alliant serveurs dédiés et cloud pour une flexibilité maximale.',
      tech: ['Hybrid Cloud', 'VPN', 'AWS']
    },
    {
      title: 'Mise en Place d\'un Serveur DNS',
      company: 'HealthTech',
      location: 'Europe',
      type: 'Infrastructure',
      budget: '80-100k€',
      description: 'Configuration d\'un serveur DNS pour gérer le routage des domaines et améliorer la disponibilité des services.',
      tech: ['BIND', 'DNSSEC']
    },
    {
      title: 'Développement d\'un Dashboard de Monitoring',
      company: 'Startup Innovantes',
      location: 'France',
      type: 'Développement',
      budget: '120-180k€',
      description: 'Création d\'un dashboard de monitoring pour surveiller en temps réel les performances des serveurs et des applications.',
      tech: ['Grafana', 'Elastic Stack', 'Kibana']
    },
    {
      title: 'Mise en Place de Conteneurs Docker',
      company: 'Finance Innovante',
      location: 'Europe',
      type: 'Développement',
      budget: '60-90k€',
      description: 'Mise en place d\'environnements de développement et de production avec Docker pour faciliter l\'infogérance des applications.',
      tech: ['Docker', 'Kubernetes']
    },
    {
      title: 'Gestion des Configurations Serveur',
      company: 'Data Solutions',
      location: 'France',
      type: 'Gestion',
      budget: '150-200k€',
      description: 'Création d\'un système de gestion des configurations pour standardiser et automatiser la gestion des serveurs.',
      tech: ['Ansible', 'Chef', 'Puppet']
    },
    {
      title: 'Analyse de la Charge Serveur',
      company: 'E-commerce Solutions',
      location: 'International',
      type: 'Analyse',
      budget: '90-120k€',
      description: 'Analyse et optimisation de la charge serveur pour améliorer les performances des sites e-commerce sous forte affluence.',
      tech: ['Apache JMeter', 'LoadRunner']
    },
    {
      title: 'Développement d\'un Système de Gestion de Logs',
      company: 'Consulting Tech',
      location: 'Europe',
      type: 'Développement',
      budget: '70-100k€',
      description: 'Mise en place d’un système de gestion de logs pour collecter, analyser et visualiser les logs de toutes les infrastructures.',
      tech: ['ELK Stack', 'Logstash', 'Filebeat']
    },
    {
      title: 'Implémentation d\'un Service d\'Authentification Centralisé',
      company: 'FinTech',
      location: 'France',
      type: 'Sécurité',
      budget: '120-150k€',
      description: 'Mise en œuvre d’un service d’authentification centralisé pour sécuriser les accès aux applications hébergées.',
      tech: ['OAuth2', 'OpenID Connect', 'Keycloak']
    },
    {
      title: 'Mise à Niveau de l\'Infrastructure Serveur',
      company: 'Media Group',
      location: 'International',
      type: 'Mise à niveau',
      budget: '150-200k€',
      description: 'Mise à niveau complète de l\'infrastructure serveur pour améliorer les performances et la sécurité, incluant des serveurs plus puissants et des solutions de stockage avancées.',
      tech: ['Serveurs Dédicaces', 'RAID', 'SAS/SSD']
    },
    {
      title: 'Création d\'un Environnement de Développement Intégré',
      company: 'Tech Startups',
      location: 'Europe',
      type: 'Développement',
      budget: '80-110k€',
      description: 'Mise en place d\'un environnement de développement intégré sur serveur pour faciliter le travail collaboratif des équipes.',
      tech: ['GitLab CI/CD', 'Docker', 'Kubernetes']
    },
    {
      title: 'Assistance Technique et Conseil en Infogérance',
      company: 'Consulting Experts',
      location: 'International',
      type: 'Conseil',
      budget: '100-140k€',
      description: 'Fourniture de services de conseil en infogérance pour aider les entreprises à maximiser l\'efficacité de leur infrastructure serveur.',
      tech: ['Audit', 'Benchmarking', 'Plan de Continuité']
    },
    {
      title: 'Création et Maintenance d\'un Réseau Privé Virtuel (VPN)',
      company: 'Finance Sécurisée',
      location: 'France',
      type: 'Sécurité',
      budget: '90-110k€',
      description: 'Mise en place et maintenance d\'un réseau privé virtuel pour sécuriser les communications et les échanges de données.',
      tech: ['OpenVPN', 'IPSec', 'AWS VPN']
    }
];

  
  const certifications = [
    {
      icon: <Book size={24} />,
      title: "AWS Solutions Architect",
      description: "Expertise en conception d'architectures cloud robustes et évolutives pour l'infogérance.",
      skills: [
        "Architecture distribuée",
        "Haute disponibilité",
        "Sécurité avancée",
        "Optimisation des coûts"
      ]
    },
    {
      icon: <Database size={24} />,
      title: "AWS DevOps Engineer",
      description: "Maîtrise des pratiques DevOps et de l'automatisation sur AWS pour des projets d'infogérance.",
      skills: [
        "CI/CD Pipeline",
        "Infrastructure as Code",
        "Monitoring avancé",
        "Gestion des conteneurs"
      ]
    },
    {
      icon: <Shield size={24} />,
      title: "AWS Security Specialist",
      description: "Expert en sécurité et conformité des environnements AWS, essentiel pour l'infogérance Cloud.",
      skills: [
        "Cryptographie avancée",
        "Gestion des identités",
        "Conformité RGPD",
        "Audit de sécurité"
      ]
    },
    {
      icon: <LineChart size={24} />,
      title: "AWS Data Analytics",
      description: "Spécialiste en analyse de données et Big Data sur AWS, supportant des projets d'infotérance.",
      skills: [
        "Data Lakes",
        "Machine Learning",
        "ETL temps réel",
        "Business Intelligence"
      ]
    },
    {
      icon: <Cloud size={24} />,
      title: "AWS Cloud Migration",
      description: "Expert en migration et transformation vers le cloud AWS, garantissant des pratiques d'infogérance efficaces.",
      skills: [
        "Stratégie de migration",
        "Transformation cloud",
        "Gestion du changement",
        "Optimisation post-migration"
      ]
    },
    {
      icon: <Terminal size={24} />,
      title: "AWS Network Specialist",
      description: "Spécialiste en architecture réseau et connectivité AWS, crucial pour l'infogérance Cloud.",
      skills: [
        "VPC Design",
        "Hybrid Cloud",
        "Transit Gateway",
        "Direct Connect"
      ]
    }
  ];
  

  return (
    <>
      <Helmet>
        <title>Trouver un Freenlance infogérance serveur & Services Cloud</title>
        <meta name="description" content="Expert en infogérance serveur AWS et services cloud ✓ Comparatif AWS vs Azure et Google Cloud ✓ Migration sécurisée ✓ Architecture cloud native ✓ Support 24/7 ✓ Plus de 500 projets réussis ✓ Devis gratuit sous 48h" />
        <link rel="canonical" href="https://itgalaxy.fr/infogerance-serveur" />
        <meta property="og:title" content="Trouver des Freenlance pour l'infogérance serveur AWS & Services Cloud" />
        <meta property="og:description" content="Expert en infogérance serveur AWS et services cloud. Comparatif détaillé AWS vs Azure vs Google Cloud. Migration sécurisée, architecture cloud native, support 24/7." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itgalaxy.fr/infogerance-serveur" />
        <meta property="og:image" content="/images/aws-services.webp" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="ItGalaxy.io" />
        <link rel="alternate" hreflang="fr" href="https://itgalaxy.fr/infogerance-serveur" />
        <link rel="alternate" hreflang="en" href="https://itgalaxy.io/infogerance-serveur" />
      </Helmet>
      <Header />
      <GlobalStyle />
      <MainContainer>
        <HeroSection>
          <HeroContent>
            <Logo>
              <Cloud />
            </Logo>
            <HeroTitle>Infogérance serveur par nos Experts Freelance en Cloud</HeroTitle>
            <HeroSubtitle>
            Expert en infogérance serveur AWS et services cloud , Comparatif AWS vs Azure et Google Cloud pour entreprises innovantes
            </HeroSubtitle>
            <Button onClick={handleModalRegister}>
               Trouvez votre prestataire
              <ChevronRight size={20} />
            </Button>
          </HeroContent>
        </HeroSection>

        <CardsPrestataires job={'Linux'}/>
        <ItGalaxyAsService />
        

        <Section>
          <SectionContent>
            <SectionTitle>
              <Briefcase />
              Exemple des Projets AWS
            </SectionTitle>
            <SectionSubtitle>
              Découvrez nos projets de migration et transformation cloud partagés sur la plateforme
            </SectionSubtitle>
            <ProjectsGrid>
              {projects.map((project, index) => (
                <ProjectCardEnhanced key={index}>
                  <ProjectContent>
                    <ProjectType>
                      {project.type === 'Migration' ? <Server size={16} /> :
                        project.type === 'Transformation' ? <GitBranch size={16} /> :
                          <Cloud size={16} />}
                      {project.type}
                    </ProjectType>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectCompany>{project.company}</ProjectCompany>
                    <ProjectDescription>{project.description}</ProjectDescription>

                    <ProjectStats>
                      <ProjectStat>
                        <ProjectStatLabel>Budget</ProjectStatLabel>
                        <ProjectStatValue>{project.budget}</ProjectStatValue>
                      </ProjectStat>
                      <ProjectStat>
                        <ProjectStatLabel>Localisation</ProjectStatLabel>
                        <ProjectStatValue>{project.location}</ProjectStatValue>
                      </ProjectStat>
                      <ProjectStat>
                        <ProjectStatLabel>Durée</ProjectStatLabel>
                        <ProjectStatValue>3-6 mois</ProjectStatValue>
                      </ProjectStat>
                    </ProjectStats>

                    <TechStackEnhanced>
                      {project.tech.map((tech, techIndex) => (
                        <TechTagEnhanced key={techIndex}>
                          {tech.includes('AWS') ? <Cloud size={16} /> :
                            tech.includes('Lambda') ? <Terminal size={16} /> :
                              tech.includes('RDS') ? <Database size={16} /> :
                                <Server size={16} />}
                          {tech}
                        </TechTagEnhanced>
                      ))}
                    </TechStackEnhanced>
                  </ProjectContent>
                </ProjectCardEnhanced>
              ))}
            </ProjectsGrid>
            <ButtonContainer>
              <SeeMoreButton onClick={handleModalRegister}>
                Voir Plus de Projets
                <ArrowDown size={20} />
              </SeeMoreButton>
            </ButtonContainer>
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <SectionTitle>
              <Server />
              Services AWS Disponibles
            </SectionTitle>
            <SectionSubtitle>
              Trouvez les meilleurs freelances et agences spécialisés en AWS Services pour votre transformation cloud
            </SectionSubtitle>
            <ServicesHexGrid>
              {services.map((service, index) => (
                <ServiceHexCard key={index}>
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceHexCard>
              ))}
            </ServicesHexGrid>
          </SectionContent>
        </Section>

        <ComparisonSection>
          <SectionContent>
            <SectionTitle>
              <Network size={32} />
              Comparaison des Cloud Providers
            </SectionTitle>
            <SectionSubtitle>
              Découvrez pourquoi AWS est le leader incontesté du cloud computing
            </SectionSubtitle>
            <ComparisonContainer>
              <ComparisonContent>
                <h3 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                  Parts de Marché Cloud
                </h3>
                <ComparisonVisual>
                  <ProviderBar>
                    <Cloud size={24} />
                    <ProviderName>AWS</ProviderName>
                    <ProviderMetric>34%</ProviderMetric>
                  </ProviderBar>
                  <ProviderBar>
                    <Cloud size={24} />
                    <ProviderName>Azure</ProviderName>
                    <ProviderMetric>21%</ProviderMetric>
                  </ProviderBar>
                  <ProviderBar>
                    <Cloud size={24} />
                    <ProviderName>Google Cloud</ProviderName>
                    <ProviderMetric>10%</ProviderMetric>
                  </ProviderBar>
                </ComparisonVisual>
              </ComparisonContent>
              <ComparisonContent>
                <h3 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                  Avantages Clés AWS
                </h3>
                <ComparisonVisual>
                  <ProviderBar>
                    <Server size={24} />
                    <ProviderName>Services Cloud</ProviderName>
                    <ProviderMetric>200+</ProviderMetric>
                  </ProviderBar>
                  <ProviderBar>
                    <Network size={24} />
                    <ProviderName>Zones de Disponibilité</ProviderName>
                    <ProviderMetric>84</ProviderMetric>
                  </ProviderBar>
                  <ProviderBar>
                    <Shield size={24} />
                    <ProviderName>Certifications Sécurité</ProviderName>
                    <ProviderMetric>50+</ProviderMetric>
                  </ProviderBar>
                </ComparisonVisual>
              </ComparisonContent>
            </ComparisonContainer>
          </SectionContent>
        </ComparisonSection>

   

        <TimelineSection>
          <SectionContent>
            <SectionTitle>
              <GitBranch size={32} />
              Processus de Migration AWS
            </SectionTitle>
            <SectionSubtitle>
              Une méthodologie éprouvée pour une migration réussie vers AWS
            </SectionSubtitle>
            <TimelineDynamic>
              {migrationSteps.map((step, index) => (
                <TimelineItemDynamic key={index}>
                  <TimelineContent>
                    <TimelineHeader>
                      {step.icon}
                      <TimelineTitle>{step.title}</TimelineTitle>
                    </TimelineHeader>
                    <TimelineDescription>{step.description}</TimelineDescription>
                    <ProcessDetails>
                      {step.details.map((detail, detailIndex) => (
                        <ProcessDetailItem key={detailIndex}>
                          <Check size={16} />
                          {detail}
                        </ProcessDetailItem>
                      ))}
                    </ProcessDetails>
                  </TimelineContent>
                </TimelineItemDynamic>
              ))}
            </TimelineDynamic>
          </SectionContent>
        </TimelineSection>

        <Section>
          <SectionContent>
            <SectionTitle>
              <Award size={32} />
              Certifications & Expertise AWS
            </SectionTitle>
            <SectionSubtitle>
              Une équipe certifiée pour garantir l'excellence de vos projets AWS
            </SectionSubtitle>
            <CertificationGrid>
              {certifications.map((cert, index) => (
                <CertificationCard key={index}>
                  <CertificationIcon>{cert.icon}</CertificationIcon>
                  <CertificationTitle>{cert.title}</CertificationTitle>
                  <CertificationDescription>{cert.description}</CertificationDescription>
                  <CertificationList>
                    {cert.skills.map((skill, skillIndex) => (
                      <CertificationSkill key={skillIndex}>
                        <Check size={16} />
                        {skill}
                      </CertificationSkill>
                    ))}
                  </CertificationList>
                </CertificationCard>
              ))}
            </CertificationGrid>
          </SectionContent>
        </Section>

        <HeroStats>
          <HeroStat>
            <HeroStatNumber>34%</HeroStatNumber>
            <HeroStatLabel>Parts de Marché</HeroStatLabel>
          </HeroStat>
          <HeroStat>
            <HeroStatNumber>200+</HeroStatNumber>
            <HeroStatLabel>Services Cloud</HeroStatLabel>
          </HeroStat>
          <HeroStat>
            <HeroStatNumber>84</HeroStatNumber>
            <HeroStatLabel>Zones de Disponibilité</HeroStatLabel>
          </HeroStat>
          <HeroStat>
            <HeroStatNumber>500+</HeroStatNumber>
            <HeroStatLabel>Projets Réussis</HeroStatLabel>
          </HeroStat>
        </HeroStats>

        <LearningSection>
          <SectionContent>
            <SectionTitle>
              <Book size={32} />
              Apprenez AWS avec Nous
            </SectionTitle>
            <SectionSubtitle>
              Découvrez nos ressources et programmes de formation pour maîtriser AWS
            </SectionSubtitle>
            <LearningDiagonal>
              <LearningContent>
                <LearningGrid>
                  <LearningCard onClick={() => (window.location.href = 'https://formations-aws.itgalaxy.io/introduction-aws-services/')}>
                   <LearningIcon>
                      <Book size={24} />
                    </LearningIcon>
                    <LearningTitle>Formation Fondamentale</LearningTitle>
                    <LearningDescription>
                      Maîtrisez les bases d'AWS avec notre programme de formation structuré
                    </LearningDescription>
                    <LearningList>
                      <LearningItem>
                        <Check size={16} />
                        Introduction aux services AWS
                      </LearningItem>
                      <LearningItem>
                        <Check size={16} />
                        Architecture cloud de base
                      </LearningItem>
                      <LearningItem>
                        <Check size={16} />
                        Sécurité et conformité
                      </LearningItem>
                      <LearningItem>
                        <Check size={16} />
                        Exercices pratiques
                      </LearningItem>
                    </LearningList>
                  </LearningCard>
                  <LearningCard onClick={() => (window.location.href = 'https://formations-aws.itgalaxy.io/workshop-ec2/')}>
                    <LearningIcon>
                      <Terminal size={24} />
                    </LearningIcon>
                    <LearningTitle>Ateliers Pratiques</LearningTitle>
                    <LearningDescription>
                      Apprenez par la pratique avec nos ateliers hands-on
                    </LearningDescription>
                    <LearningList>
                      <LearningItem>
                        <Check size={16} />
                        Labs interactifs
                      </LearningItem>
                      <LearningItem>
                        <Check size={16} />
                        Projets réels
                      </LearningItem>
                      <LearningItem>
                        <Check size={16} />
                        Sessions de mentorat
                      </LearningItem>
                      <LearningItem>
                        <Check size={16} />
                        Retours d'expérience
                      </LearningItem>
                    </LearningList>
                  </LearningCard>
                  <LearningCard onClick={() => (window.location.href = 'https://formations-aws.itgalaxy.io/iam/')}>
                    <LearningIcon>
                      <Award size={24} />
                    </LearningIcon>
                    <LearningTitle>Certification AWS</LearningTitle>
                    <LearningDescription>
                      Préparez-vous aux certifications AWS avec notre accompagnement
                    </LearningDescription>
                    <LearningList>
                      <LearningItem>
                        <Check size={16} />
                        Préparation aux examens
                      </LearningItem>
                      <LearningItem>
                        <Check size={16} />
                        Tests blancs
                      </LearningItem>
                      <LearningItem>
                        <Check size={16} />
                        Documentation ciblée
                      </LearningItem>
                      <LearningItem>
                        <Check size={16} />
                        Support personnalisé
                      </LearningItem>
                    </LearningList>
                  </LearningCard>
                </LearningGrid>
              </LearningContent>
            </LearningDiagonal>
          </SectionContent>
        </LearningSection>

        <Section>
          <SectionContent>
            <SectionTitle>
              <Shield size={32} />
              Notre Plateforme regroupe les experts AWS
            </SectionTitle>
            <SectionSubtitle>
              Une marketplace spécialisée pour vos projets AWS
            </SectionSubtitle>
            <FeatureGrid>
              <FeatureCard>
                <FeatureIcon>
                  <Users size={24} />
                </FeatureIcon>
                <FeatureTitle>Talents Vérifiés</FeatureTitle>
                <FeatureDescription>
                  Tous nos experts AWS sont certifiés et évalués sur leurs compétences techniques. Nous vérifions leurs certifications, expérience et références.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon>
                  <Briefcase size={24} />
                </FeatureIcon>
                <FeatureTitle>Matching Intelligent</FeatureTitle>
                <FeatureDescription>
                  Notre algorithme analyse votre projet pour vous recommander les meilleurs experts AWS correspondant à vos besoins spécifiques.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon>
                  <Shield size={24} />
                </FeatureIcon>
                <FeatureTitle>Paiements Sécurisés</FeatureTitle>
                <FeatureDescription>
                  Système de paiement par milestone avec garantie de satisfaction. Les fonds sont sécurisés et libérés uniquement après validation.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon>
                  <LineChart size={24} />
                </FeatureIcon>
                <FeatureTitle>Suivi de Projet</FeatureTitle>
                <FeatureDescription>
                  Dashboard dédié pour suivre l'avancement, les livrables et la communication avec votre expert AWS en temps réel.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon>
                  <Terminal size={24} />
                </FeatureIcon>
                <FeatureTitle>Support Technique</FeatureTitle>
                <FeatureDescription>
                  Une équipe technique dédiée pour vous accompagner et assurer la qualité des livrables tout au long du projet.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon>
                  <HelpCircle size={24} />
                </FeatureIcon>
                <FeatureTitle>Assistance 24/7</FeatureTitle>
                <FeatureDescription>
                  Support client disponible en continu pour répondre à vos questions et résoudre rapidement tout problème éventuel.
                </FeatureDescription>
              </FeatureCard>
            </FeatureGrid>
            <ButtonContainer>
              <Button onClick={handleModalRegister}>
                Démarrer un Projet
                <ChevronRight size={20} />
              </Button>
            </ButtonContainer>
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <SectionTitle>
              <HelpCircle size={32} />
              Questions Fréquentes sur AWS
            </SectionTitle>
            <SectionSubtitle>
              Tout ce que vous devez savoir sur la migration et les services AWS
            </SectionSubtitle>
            <FAQGrid>
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <FAQQuestion isOpen={openFAQ === index}>
                    {faq.question}
                  </FAQQuestion>
                  <FAQAnswer isOpen={openFAQ === index}>
                    {faq.answer}
                  </FAQAnswer>
                </FAQItem>
              ))}
            </FAQGrid>
          </SectionContent>
        </Section>
      </MainContainer>
      <Offers />
      {openModalRegister && (
        <Register
          openModalRegister={openModalRegister}
          setOpenModalRegister={setOpenModalRegister}
          handleModalRegister={handleCloseModalRegister}
          switchBetweenModals={false}
          proxy={"marketplace"}
        />)}

      <FooterHome page={"devops"} />
    </>
  );
}

export default SiteAWS;