import Register from "components/Authentification/modals/register";
import Header from 'components/Header/Header';
import {
  ArrowDown,
  Award,
  BarChart2,
  Box,
  BrainCircuit,
  ChartLine,
  ChevronRight,
  Code2,
  FileCode2,
  Flame,
  Globe,
  HelpCircle,
  Layers,
  Layout,
  MinusCircle,
  Monitor,
  PlusCircle,
  Search,
  Shield,
  Sparkles,
  Star,
  Timer,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
  Cloud,
  Tablet,
  Clock,
  Activity
} from 'lucide-react';
import { useState } from "react";
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import FooterHome from '../FooterHome/FooterHome';
import Offers from "./Offres";
import { Helmet } from "react-helmet";
import CardsPrestataires from "./CardsPrestataires";
import ItGalaxyAsService from "../ItGalaxyAsService/ItGalaxyAsService";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #0A1A1F;
    color: #ffffff;
    font-family: 'JetBrains Mono', monospace;
  }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const MainContainer = styled.div`
  min-height: 100vh;
  background: #0A1A1F;
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
      radial-gradient(circle at 90% 90%, rgba(20, 184, 166, 0.1) 0%, transparent 50%);
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
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(20, 184, 166, 0.1));
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
  background: linear-gradient(135deg, #06B6D4, #14B8A6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${float} 6s ease-in-out infinite;
  box-shadow: 0 10px 30px rgba(6, 182, 212, 0.3);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: ${shimmer} 2s infinite;
  }

  svg {
    width: 80px;
    height: 80px;
    color: #ffffff;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 2rem 0;
  color: #ffffff;
  background: linear-gradient(to right, #06B6D4, #14B8A6);
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
  background: linear-gradient(135deg, #06B6D4, #14B8A6);
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
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    animation: ${shimmer} 2s infinite;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(6, 182, 212, 0.4);
  }
`;

const Section = styled.section`
  padding: 8rem 2rem;
  position: relative;
  background: #0F2229;

  &:nth-child(odd) {
    background: #0A1A1F;
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
  background: linear-gradient(to right, #06B6D4, #14B8A6);
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ServiceCard = styled.div`
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    transform: rotate(45deg);
    animation: ${shimmer} 3s infinite;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(6, 182, 212, 0.2);
    border-color: #06B6D4;
    cursor: pointer;
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, #06B6D4, #14B8A6);
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

const ServiceStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0;
  padding: 1rem;
  background: rgba(6, 182, 212, 0.05);
  border-radius: 12px;
`;

const StatItem = styled.div`
  text-align: center;
  
  .value {
    color: #06B6D4;
    font-weight: 600;
    font-size: 1.125rem;
  }
  
  .label {
    color: #94A3B8;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const SkillBadge = styled.span`
  background: ${props => props.featured ? 'linear-gradient(135deg, #06B6D4, #14B8A6)' : 'rgba(6, 182, 212, 0.1)'};
  color: ${props => props.featured ? 'white' : '#94A3B8'};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(6, 182, 212, 0.2);
    border-color: #06B6D4;
  }
`;

const ProjectImage = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.1));
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #94A3B8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const TechTag = styled.span`
  background: rgba(6, 182, 212, 0.1);
  color: #94A3B8;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  border: 1px solid rgba(6, 182, 212, 0.2);
  transition: 0.3s;

  &:hover {
    background: rgba(6, 182, 212, 0.2);
    border-color: #06B6D4;
    color: #ffffff;
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

const TechBadge = styled.div`
  background: ${props => props.active ? 'linear-gradient(135deg, #06B6D4, #14B8A6)' : 'rgba(6, 182, 212, 0.1)'};
  color: ${props => props.active ? '#ffffff' : '#94A3B8'};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid ${props => props.active ? 'transparent' : 'rgba(6, 182, 212, 0.2)'};

  &:hover {
    transform: translateY(-2px);
    border-color: #06B6D4;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
`;

const SearchBar = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  margin: 2rem auto;
  max-width: 600px;
  
  input {
    background: transparent;
    border: none;
    color: white;
    flex: 1;
    font-family: 'JetBrains Mono', monospace;
    
    &::placeholder {
      color: #94A3B8;
    }
    
    &:focus {
      outline: none;
    }
  }
`;

const MetricsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const MetricCard = styled.div`
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    border-color: #06B6D4;
  }
`;

const MetricValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #06B6D4, #14B8A6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

const MetricLabel = styled.div`
  color: #94A3B8;
  font-size: 1rem;
`;

const TrustBadge = styled.div`
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 12px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #94A3B8;
  
  svg {
    color: #06B6D4;
  }
`;

const TrustBadgesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

const ProjectMetrics = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const MetricTag = styled.div`
  background: rgba(6, 182, 212, 0.1);
  color: #06B6D4;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ExpertInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(6, 182, 212, 0.1);
`;

const ExpertAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: linear-gradient(135deg, #06B6D4, #14B8A6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const ExpertDetails = styled.div`
  flex: 1;

  .name {
    color: #ffffff;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  .role {
    color: #94A3B8;
    font-size: 0.875rem;
  }
`;

const FAQSection = styled(Section)`
  background: #0A1A1F;
`;

const FAQContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 12px;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    border-color: #06B6D4;
  }
`;

const FAQHeader = styled.h2`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: rgba(6, 182, 212, 0.05);
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.125rem;
  font-weight: 500;
  text-align: left;
  transition: all 0.3s;

  &:hover {
    background: rgba(6, 182, 212, 0.1);
  }

  svg {
    color: #06B6D4;
    transition: transform 0.3s;
  }

  &[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }
`;

const FAQContent = styled.div`
  padding: ${props => props.isOpen ? '1.5rem' : '0 1.5rem'};
  max-height: ${props => props.isOpen ? '500px' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  overflow: hidden;
  transition: all 0.3s;
  color: #94A3B8;
  line-height: 1.6;

  p {
    margin: 0;
    margin-bottom: 1rem;
  }

  ul {
    margin: 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const TrendingSection = styled(Section)`
  background: #0A1A1F;
`;

const TrendingCard = styled.div`
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border-color: #06B6D4;
    box-shadow: 0 20px 40px rgba(6, 182, 212, 0.2);
  }
`;

const TrendingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const TrendingHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const TrendingTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`;

const TrendingIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #06B6D4, #14B8A6);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const TrendingStats = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`;

const TrendingStat = styled.div`
  background: rgba(6, 182, 212, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #06B6D4;
`;

const PopularityBar = styled.div`
  height: 4px;
  background: rgba(6, 182, 212, 0.1);
  border-radius: 2px;
  margin: 1rem 0;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.popularity}%;
    background: linear-gradient(90deg, #06B6D4, #14B8A6);
    border-radius: 2px;
  }
`;

const TrendingDescription = styled.p`
  color: #94A3B8;
  line-height: 1.6;
  margin: 1rem 0;
`;

const UseCaseList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const UseCase = styled.span`
  background: rgba(6, 182, 212, 0.05);
  border: 1px solid rgba(6, 182, 212, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  color: #94A3B8;
`;

function Siteweb() {
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState('all');
  const [openFAQs, setOpenFAQs] = useState({});

  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };

  const handelSearchProjects = () => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/search/projects/category/DEVELOPER_web`;
  };

  const services = [
    {
        icon: <Code2 size={32} />,
        title: 'Développement Framework Moderne',
        description: 'Experts spécialisés en React, Vue.js, Angular et Svelte pour construire des applications web modernes.',
        avgRate: '50-120€/h',
        topSkills: ['React', 'Vue.js', 'Angular', 'Svelte', 'freelance developpeur mobile'],
        activeFreelancers: 458
    },
    {
        icon: <Layout size={32} />,
        title: 'Développement UI & Systèmes de Design',
        description: 'Spécialistes en création de layouts responsives, bibliothèques de composants et systèmes de design complets.',
        avgRate: '45-100€/h',
        topSkills: ['CSS3', 'Tailwind', 'Styled Components', 'Material UI', 'freelance application mobile'],
        activeFreelancers: 312
    },
    {
        icon: <Zap size={32} />,
        title: 'Optimisation des Performances',
        description: "Experts en performance qui optimisent les temps de chargement et l'efficacité globale des applications.",
        avgRate: '60-130€/h',
        topSkills: ['Webpack', 'Vite', 'Core Web Vitals', 'PWA', 'freelance mobile app'],
        activeFreelancers: 234
    },
    {
        icon: <Globe size={32} />,
        title: 'Développement Cross-Platform',
        description: "Développeurs qualifiés dans la création d'expériences cohérentes sur tous les navigateurs et appareils.",
        avgRate: '55-110€/h',
        topSkills: ['Progressive Web Apps', 'Cross-browser', 'Mobile-first', 'Responsive', 'freelance mobile developer'],
        activeFreelancers: 289
    },
    {
        icon: <BrainCircuit size={32} />,
        title: 'Architecture web',
        description: "Architectes seniors qui conçoivent des systèmes web évolutifs et optimisent les flux de développement.",
        avgRate: '80-150€/h',
        topSkills: ['System Design', 'State Management', 'Micro-webs', 'Build Systems', 'freelance mobile app development'],
        activeFreelancers: 167
    },
    {
        icon: <Zap size={32} />,
        title: 'Applications Interactives',
        description: "Spécialistes dans la création d'expériences utilisateur riches avec les technologies web modernes.",
        avgRate: '55-120€/h',
        topSkills: ['WebGL', 'Canvas', 'Three.js', 'Animations', 'freelance mobile'],
        activeFreelancers: 198
    },
    {
        icon: <UserCheck size={32} />,
        title: 'Développement d\'Applications Mobiles',
        description: "Création d'applications natives et hybrides pour iOS et Android.",
        avgRate: '70-130€/h',
        topSkills: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'freelance mobile app developer'],
        activeFreelancers: 300
    },
    {
        icon: <Cloud size={32} />,
        title: 'Cloud Integration Services',
        description: "Mise en place de solutions cloud pour applications mobiles et web.",
        avgRate: '60-120€/h',
        topSkills: ['AWS', 'Azure', 'Google Cloud', 'Serverless', 'freelancer mobile app'],
        activeFreelancers: 225
    },
    {
        icon: <Shield size={32} />,
        title: 'Sécurité des Applications',
        description: "Experts en sécurité pour protéger vos applications contre les menaces.",
        avgRate: '80-150€/h',
        topSkills: ['Web Security', 'OWASP', 'Penetration Testing', 'freelance mobile development'],
        activeFreelancers: 145
    },
    {
        icon: <Tablet size={32} />,
        title: 'Web Analytics',
        description: "Mise en place de systèmes d'analytique pour suivre et analyser le comportement des utilisateurs.",
        avgRate: '50-100€/h',
        topSkills: ['Google Analytics', 'Firebase Analytics', 'Data Studio', 'freelance mobile app'],
        activeFreelancers: 178
    },
    {
      icon: <Code2 size={32} />,
      title: 'Développement Framework Moderne',
      description: 'Experts spécialisés en React, Vue.js, Angular et Svelte pour construire des applications web modernes.',
      avgRate: '50-120€/h',
      topSkills: ['React', 'Vue.js', 'Angular', 'Svelte', 'freelance developpeur mobile'],
      activeFreelancers: 458
  },
  {
      icon: <Layout size={32} />,
      title: 'Développement UI & Systèmes de Design',
      description: 'Spécialistes en création de layouts responsives, bibliothèques de composants et systèmes de design complets.',
      avgRate: '45-100€/h',
      topSkills: ['CSS3', 'Tailwind', 'Styled Components', 'Material UI', 'freelance application mobile'],
      activeFreelancers: 312
  }
];

const projects = [
    {
        title: 'Système de Design Entreprise',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        description: "Construction d'un système de design complet avec 200+ composants utilisant React et Styled Components, servant 15+ produits internes.",
        tech: ['React', 'Styled Components', 'Storybook', 'Jest', 'freelance developpeur mobile'],
        metrics: [
            { icon: <Users size={16} />, value: '15+ Équipes' },
            { icon: <Code2 size={16} />, value: '200+ Composants' },
            { icon: <Timer size={16} />, value: '3 Mois' }
        ],
        expert: {
            name: 'Sarah Chen',
            role: 'Architecte web Senior',
            rating: 4.9
        }
    },
    {
        title: 'Plateforme E-commerce Vue.js',
        image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
        description: "Développement d'une plateforme e-commerce haute performance utilisant Vue 3 et Nuxt.js, atteignant un score Lighthouse de 98%.",
        tech: ['Vue.js', 'Nuxt.js', 'Vuex', 'TailwindCSS', 'freelance application mobile'],
        metrics: [
            { icon: <Zap size={16} />, value: '98% Performance' },
            { icon: <Users size={16} />, value: '1M+ Utilisateurs' },
            { icon: <Timer size={16} />, value: '4 Mois' }
        ],
        expert: {
            name: 'Alex Rivera',
            role: 'Expert Vue.js',
            rating: 4.8
        }
    },
    {
        title: 'Tableau de Bord Angular Entreprise',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
        description: "Création d'un tableau de bord analytique en temps réel avec Angular, gérant 100K+ utilisateurs simultanés et des visualisations de données complexes.",
        tech: ['Angular', 'NgRx', 'D3.js', 'RxJS', 'freelancing mobile'],
        metrics: [
            { icon: <Users size={16} />, value: '100K+ Utilisateurs' },
            { icon: <Zap size={16} />, value: '50ms Latence' },
            { icon: <Timer size={16} />, value: '6 Mois' }
        ],
        expert: {
            name: 'Maria Kowalski',
            role: 'Spécialiste Angular',
            rating: 4.9
        }
    },
    {
        title: 'Application de Suivi de Projets',
        image: 'https://images.unsplash.com/photo-1587452621982-cd75485b5644?auto=format&fit=crop&q=80&w=800',
        description: 'Développement d\'une application mobile pour gérer et suivre les projets d\'équipe avec notifications.',
        tech: ['React Native', 'Node.js', 'Firebase', 'freelance mobile app developer'],
        metrics: [
            { icon: <Users size={16} />, value: '10K+ Projets' },
            { icon: <Clock size={16} />, value: '90 % Satisfaction User' },
            { icon: <Zap size={16} />, value: '5 Mois' }
        ],
        expert: {
            name: 'John Doe',
            role: 'Développeur Freelance',
            rating: 4.7
        }
    },
    {
        title: 'App de Fitness et Santé',
        image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80&w=800',
        description: 'Application de suivi des activités sportives avec intégration HealthKit pour mesure des performances.',
        tech: ['Swift', 'HealthKit', 'Firebase', 'freelance mobile app'],
        metrics: [
            { icon: <Users size={16} />, value: '2K+ Utilisateurs' },
            { icon: <Activity size={16} />, value: '99% Retours Positifs' },
            { icon: <Timer size={16} />, value: '3 Mois' }
        ],
        expert: {
            name: 'Lisa Tran',
            role: 'Développeuse iOS',
            rating: 4.8
        }
    },
    {
        title: 'Plateforme E-Learning',
        image: 'https://images.unsplash.com/photo-1587326856131-22189070b553?auto=format&fit=crop&q=80&w=800',
        description: 'Création d\'une plateforme de cours en ligne avec prise en charge vidéo et quiz.',
        tech: ['React', 'Node.js', 'MongoDB', 'freelance mobile app development'],
        metrics: [
            { icon: <Users size={16} />, value: '20K+ Étudiants' },
            { icon: <Clock size={16} />, value: '4 Mois' },
            { icon: <Zap size={16} />, value: '95% Taux de Réussite' }
        ],
        expert: {
            name: 'Michael Castillo',
            role: 'Ingénieur Logiciel',
            rating: 4.9
        }
    },
    {
        title: 'Système de Réservation de Restaurants',
        image: 'https://images.unsplash.com/photo-1643389248565-5b528d1e2367?auto=format&fit=crop&q=80&w=800',
        description: 'Développement d\'une application de réservation de tables pour les restaurants.',
        tech: ['Flutter', 'Firebase', 'Stripe', 'freelance mobile app'],
        metrics: [
            { icon: <Users size={16} />, value: '5K+ Utilisateurs' },
            { icon: <Activity size={16} />, value: '1.5K+ Réservations' },
            { icon: <Clock size={16} />, value: '2 Mois' }
        ],
        expert: {
            name: 'Laura Gomez',
            role: 'Développeuse Freelance',
            rating: 4.75
        }
    },
    {
        title: 'App de Gestion d\'Équipe',
        image: 'https://images.unsplash.com/photo-1505470459090-42216e3e3223?auto=format&fit=crop&q=80&w=800',
        description: 'Développement d\'une application pour la gestion des tâches d\'équipe et la collaboration.',
        tech: ['React Native', 'Firebase', 'Redux', 'freelance mobile app developer'],
        metrics: [
            { icon: <Users size={16} />, value: '8K+ Utilisateurs Actifs' },
            { icon: <Clock size={16} />, value: '3 Mois' },
            { icon: <Activity size={16} />, value: '500+ Tâches Résolues' }
        ],
        expert: {
            name: 'Kevin Chen',
            role: 'Développeur Mobile',
            rating: 4.6
        }
    },
    {
        title: 'Application de Suivi de Nutrition',
        image: 'https://images.unsplash.com/photo-1521737604893-3b9830788f5e?auto=format&fit=crop&q=80&w=800',
        description: 'Développement d\'une application de suivi nutritionnel et d\'exercices avec conseils personnalisés.',
        tech: ['Node.js', 'React Native', 'Firebase', 'freelance mobile'],
        metrics: [
            { icon: <Users size={16} />, value: '1K+ Utilisateurs' },
            { icon: <Zap size={16} />, value: '0% Bugs' },
            { icon: <Clock size={16} />, value: '4 Mois' }
        ],
        expert: {
            name: 'Sophia Lee',
            role: 'Consultante en Santé',
            rating: 4.9
        }
    },
    {
        title: 'Application d&rsquo;Email Marketing',
        image: 'https://images.unsplash.com/photo-1520975681005-efc02fe632b5?auto=format&fit=crop&q=80&w=800',
        description: 'Développement d\'une application pour gérer des campagnes d\'email marketing.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'freelance mobile app development'],
        metrics: [
            { icon: <Users size={16} />, value: '300+ Campagnes' },
            { icon: <Clock size={16} />, value: '2 Mois' },
            { icon: <Zap size={16} />, value: '80% Taux d\'Ouverture' }
        ],
        expert: {
            name: 'Tom Green',
            role: 'Expert Marketing Digital',
            rating: 4.8
        }
    },
    {
        title: 'Plateforme de Réseautage Professionnelle',
        image: 'https://images.unsplash.com/photo-1571613326117-69e66a7570e3?auto=format&fit=crop&q=80&w=800',
        description: 'Développement d\'un réseau social professionnel pour le partage d\'expériences et d\'opportunités.',
        tech: ['React', 'Node.js', 'Socket.io', 'freelance mobile app developer'],
        metrics: [
            { icon: <Users size={16} />, value: '50K+ Utilisateurs' },
            { icon: <Zap size={16} />, value: '99% Satisfaction' },
            { icon: <Timer size={16} />, value: '5 Mois' }
        ],
        expert: {
            name: 'Eric Johnson',
            role: 'Développeur Freelance',
            rating: 4.9
        }
    },
    {
        title: 'Application de Gestion de Budget',
        image: 'https://images.unsplash.com/photo-1542736698-b1be7f7e4f62?auto=format&fit=crop&q=80&w=800',
        description: 'Création d\'une application mobile pour gérer et suivre les finances personnelles.',
        tech: ['Flutter', 'Firebase', 'Stripe', 'freelancer mobile app'],
        metrics: [
            { icon: <Users size={16} />, value: '3K+ Utilisateurs' },
            { icon: <Zap size={16} />, value: '200+ Budgets Suivis' },
            { icon: <Timer size={16} />, value: '3 Mois' }
        ],
        expert: {
            name: 'Anna Wilson',
            role: 'Consultante Financier',
            rating: 4.7
        }
    },
    {
        title: 'Développement de Chatbot',
        image: 'https://images.unsplash.com/photo-1519396951742-2f15d1543846?auto=format&fit=crop&q=80&w=800',
        description: 'Création d\'un chatbot interactif pour soutenir le service client sur une plateforme de messagerie.',
        tech: ['JavaScript', 'Node.js', 'Chatbot Framework', 'freelance mobile app'],
        metrics: [
            { icon: <Users size={16} />, value: '1K+ Utilisateurs' },
            { icon: <Clock size={16} />, value: '50% Taux de Satisfaction' },
            { icon: <Zap size={16} />, value: '2 Mois' }
        ],
        expert: {
            name: 'Adam Smith',
            role: 'Développeur Freelance',
            rating: 4.6
        }
    },
    {
        title: 'Solutions de Gestion de Contenu',
        image: 'https://images.unsplash.com/photo-1576675450204-3aa85a6720c4?auto=format&fit=crop&q=80&w=800',
        description: 'Développement d\'une application de gestion de contenu mobile pour les publications press.',
        tech: ['React Native', 'Cloud Firestore', 'Firebase', 'freelancer mobile app developer'],
        metrics: [
            { icon: <Users size={16} />, value: '10K+ Utilisateurs' },
            { icon: <Activity size={16} />, value: '500+ Articles' },
            { icon: <Timer size={16} />, value: '4 Mois' }
        ],
        expert: {
            name: 'Emma Davis',
            role: 'Spécialiste en Contenu Digital',
            rating: 4.8
        }
    },
    {
        title: 'Application Mobile pour Feedback Client',
        image: 'https://images.unsplash.com/photo-1542561051-ba5bec678a83?auto=format&fit=crop&q=80&w=800',
        description: 'Création d\'une application pour collecter des retours et des avis des clients.',
        tech: ['Flutter', 'Firebase', 'API', 'freelance mobile app'],
        metrics: [
            { icon: <Users size={16} />, value: '5K+ Feedbacks Collectés' },
            { icon: <Activity size={16} />, value: '2 Mois' },
            { icon: <Zap size={16} />, value: '90% Satisfaction' }
        ],
        expert: {
            name: 'Chris Brown',
            role: 'Consultant en UX',
            rating: 4.9
        }
    },
    {
        title: 'Application de Cours en Ligne',
        image: 'https://images.unsplash.com/photo-1568619717066-28d843540cbc?auto=format&fit=crop&q=80&w=800',
        description: 'Développement d\'une application mobile pour l\'enseignement et la formation en ligne.',
        tech: ['React Native', 'Node.js', 'GraphQL', 'freelance mobile app developer'],
        metrics: [
            { icon: <Users size={16} />, value: '15K+ Étudiants' },
            { icon: <Zap size={16} />, value: '98% Taux de Réussite' },
            { icon: <Timer size={16} />, value: '5 Mois' }
        ],
        expert: {
            name: 'Nathan Thompson',
            role: 'Développeur Mobile',
            rating: 4.8
        }
    },
    {
        title: 'Application de Suivi des Activités',
        image: 'https://images.unsplash.com/photo-1622407052325-89eea631f7a8?auto=format&fit=crop&q=80&w=800',
        description: 'Création d\'une application pour suivre les activités sportives et partager les résultats avec des amis.',
        tech: ['Flutter', 'Firebase', 'Google Fit', 'freelance mobile app'],
        metrics: [
            { icon: <Users size={16} />, value: '5K+ Utilisateurs' },
            { icon: <Clock size={16} />, value: '2 Mois' },
            { icon: <Zap size={16} />, value: '950+ Activités Suivies' }
        ],
        expert: {
            name: 'Sophia Green',
            role: 'Développeuse Mobile',
            rating: 4.9
        }
    },
    {
        title: 'Plateforme de Partage de Recettes',
        image: 'https://images.unsplash.com/photo-1512334081349-ea70e728d1f2?auto=format&fit=crop&q=80&w=800',
        description: 'Développement d\'une application pour partager des recettes de cuisine avec fonctionnalités de feedback.',
        tech: ['React Native', 'Node.js', 'MongoDB', 'freelance mobile app development'],
        metrics: [
            { icon: <Users size={16} />, value: '10K+ Utilisateurs' },
            { icon: <Zap size={16} />, value: '2000+ Recettes Partagées' },
            { icon: <Timer size={16} />, value: '3 Mois' }
        ],
        expert: {
            name: 'John Doe',
            role: 'Développeur Full Stack',
            rating: 4.8
        }
    }
];

  const metrics = [
    { value: '10k+', label: 'Experts web', icon: <Users size={24} /> },
    { value: '15k+', label: 'Projets Réalisés', icon: <FileCode2 size={24} /> },
    { value: '98%', label: 'Satisfaction Client', icon: <Award size={24} /> },
    { value: '24/7', label: 'Support Expert', icon: <Timer size={24} /> }
  ];

  const trustIndicators = [
    { icon: <Shield size={20} />, text: 'Paiements Sécurisés' },
    { icon: <UserCheck size={20} />, text: 'Experts Vérifiés' },
    { icon: <BarChart2 size={20} />, text: 'Performance Garantie' }
  ];

  const technologies = [
    {
      icon: <Code2 />,
      name: 'React',
      key: 'react'
    },
    {
      icon: <Box />,
      name: 'Vue.js',
      key: 'vue'
    },
    {
      icon: <Layers />,
      name: 'Angular',
      key: 'angular'
    },
    {
      icon: <Zap />,
      name: 'Svelte',
      key: 'svelte'
    },
    {
      icon: <Globe />,
      name: 'Web Components',
      key: 'webcomponents'
    },
    {
      icon: <BrainCircuit />,
      name: 'Toutes les Technologies',
      key: 'all'
    }
  ];

  const faqs = [
    {
        question: "Comment embaucher un freelance web sur votre plateforme ?",
        answer: "L'embauche est simple : 1) Publiez vos besoins de projet, 2) Parcourez et filtrez les développeurs par technologie (React, Vue, Angular, etc.), 3) Examinez leurs portfolios et travaux antérieurs, 4) Interviewez vos meilleurs choix, 5) Sélectionnez et embauchez l'expert de votre choix. Notre plateforme gère les contrats, les paiements et la collaboration en toute sécurité."
    },
    {
        question: "Quels services de développement web sont disponibles ?",
        answer: "Notre plateforme propose des experts en : Développement avec Frameworks Modernes (React, Vue, Angular, Svelte), Développement UI & Systèmes de Design, Optimisation des Performances, Développement Cross-Platform, Architecture web, Applications Interactives, Applications Web Progressives (PWA), et Solutions de Gestion d'État."
    },
    {
        question: "Combien coûte l'embauche d'un freelance web ?",
        answer: "Les tarifs varient selon l'expertise et la stack technologique : Développeurs juniors (30-50€/h), Développeurs intermédiaires (50-90€/h), Développeurs seniors (90-150€/h), Architectes web (120-200€/h). Vous pouvez définir votre budget et recevoir des propositions dans votre fourchette. De nombreux développeurs proposent également des forfaits à prix fixe pour des services spécifiques."
    },
    {
        question: "Qu'est-ce qui rend vos freelances web fiables ?",
        answer: "Nous assurons la qualité par : La vérification des compétences techniques, Le processus d'examen du portfolio, L'analyse des contributions GitHub, Les évaluations de code en direct, Les avis et notes des clients, La vérification de l'historique de travail, La protection des paiements sécurisés, et Les garanties de qualité du code. Tous nos meilleurs développeurs ont fait leurs preuves en développement web moderne."
    },
    {
        question: "Puis-je embaucher des freelances web pour des projets à long terme ?",
        answer: "Oui ! De nombreux clients embauchent nos experts web pour des projets à long terme. Nous proposons des modèles d'engagement flexibles : Développeurs dédiés à temps plein, Arrangements à temps partiel, Projets à prix fixe, Augmentation d'équipe, et Contrats de maintenance continue. Tous avec des conditions claires et des paiements basés sur les étapes."
    },
    {
        question: "Quelles compétences techniques puis-je attendre de vos freelances web ?",
        answer: "Nos développeurs sont compétents en : JavaScript moderne (ES6+), Frameworks populaires (React, Vue, Angular), Gestion d'état (Redux, Vuex, NgRx), Outils de build (Webpack, Vite), Frameworks CSS (Tailwind, Material-UI), Tests (Jest, Cypress), Optimisation des performances, Design responsive, et Patterns d'architecture web moderne."
    },
    {
        question: "Comment choisir un développeur freelance web pour mon projet ?",
        answer: "Évaluez les compétences, examinez le portfolio, lisez les avis des clients, et discutez des attentes avant de faire votre choix. Assurez-vous également qu'il a de l'expérience dans votre domaine, comme le développement d'applications mobiles ou le freelancing en général."
    },
    {
        question: "Quels critères devraient être utilisés pour évaluer un devis ?",
        answer: "Considérez le coût total, les délais, les compétences proposées, la qualité des travaux précédents, et les conditions de contrat. Cela vous aidera à choisir le bon freelance ou la bonne agence."
    },
    {
        question: "Les développeurs freelance web peuvent-ils travailler à l'international ?",
        answer: "Oui, de nombreux développeurs freelance web travaillent à l'international et peuvent gérer des projets à distance, vous permettant de trouver des experts qui correspondent exactement à vos besoins, peu importe leur emplacement."
    },
    {
        question: "Quels sont les avantages d'embaucher un freelance web par rapport à une agence ?",
        answer: "Les freelances peuvent offrir des tarifs plus compétitifs, plus de flexibilité dans le travail et une communication directe. Parfois, ils peuvent se spécialiser davantage dans des technologies spécifiques comme le développement Shopify ou le développement d'applications mobiles."
    },
    {
        question: "Comment garantir une bonne communication avec un freelance web ?",
        answer: "Établissez dès le début des canaux de communication clairs, utilisez des outils de gestion de projet, et planifiez des points réguliers pour faire le suivi des progrès et ajuster les attentes."
    },
    {
        question: "Quelles sont les compétences en demande pour le développement web actuel ?",
        answer: "Les compétences recherchées incluent React, Angular, Vue.js, développement backend (Node.js, Python), ainsi que des connaissances en SEO et UI/UX design, et des compétences dans le domaine mobile comme Flutter et React Native."
    },
    {
        question: "Comment gérer les attentes de projet avec un freelance web?",
        answer: "Soyez clair et précis sur vos attentes dès le départ, rédigez un contrat qui établit des objectifs, des délais, et une méthode de communication. Cela aidera à éviter les malentendus."
    },
    {
        question: "Quels types de projets conviennent le mieux aux freelances web?",
        answer: "Les projets à court terme, tels que les mises à jour de sites, les créations de pages, les développements d'applications spécifiques, ou même le marketing digital, sont idéaux pour les freelances."
    },
    {
        question: "Comment suivre le progrès d'un projet avec un freelance web?",
        answer: "Utilisez des outils de gestion de projet pour superviser les tâches, demandez des mises à jour régulières et planifiez des revues de projet pour discuter des progrès et des ajustements nécessaires."
    },
    {
        question: "Quelle est l'importance du portfolio d'un freelance web ?",
        answer: "Le portfolio est crucial pour évaluer les compétences et l'expérience d'un freelance. Il montre leurs travaux passés et donne un aperçu de leur style et capacité à répondre à vos besoins."
    },
    {
        question: "Comment établir une bonne relation de travail avec un freelance web ?",
        answer: "Communiquez ouvertement, offrez des retours constructifs, établissez une confiance mutuelle, et assurez-vous de respecter leurs méthodes de travail tout en maintenant vos attentes claires."
    },
    {
        question: "Pourquoi opter pour du développement mobile freelance web ?",
        answer: "Choisir un développeur mobile freelance vous permet d'accéder à des experts dans ce domaine tout en bénéficiant de tarifs compétitifs. Ils peuvent vous aider à créer des applications personnalisées adaptées à vos besoins spécifiques."
    },
    {
        question: "Quelles technologies sont couramment utilisées dans le développement mobile ?",
        answer: "Les développeurs utilisent souvent React Native, Flutter, Swift pour iOS, et Kotlin pour Android. Ces technologies permettent de créer des applications performantes et réactives."
    },
    {
        question: "Comment s'assurer que le code est de bonne qualité ?",
        answer: "Demandez au freelance des exemples de code, regardez les avis sur leur travail précédent, et, si possible, effectuez une revue de code ou des tests pour garantir la qualité."
    },
    {
        question: "Les freelances offrent-ils des services de maintenance après le projet ?",
        answer: "Oui, beaucoup de freelances proposent des contrats de maintenance pour s'assurer que l'application reste à jour et fonctionne sans problème post-lancement."
    },
    {
        question: "Quel est le processus pour embaucher un freelance web ?",
        answer: "Identifiez vos besoins, publiez un projet sur notre plateforme, évaluez les candidatures, interviewez les candidats, et finalisez l'embauche en établissant un contrat clair."
    },
    {
        question: "Que faire si le projet ne progresse pas comme prévu ?",
        answer: "Discutez ouvertement avec le freelance pour comprendre les obstacles, ajustez les attentes si nécessaire, et envisagez de revoir les priorités ou de changer de stratégie si cela est justifié."
    },
    {
        question: "Comment évaluer le succès d'un projet freelance web ?",
        answer: "Le succès peut être mesuré par l'achèvement dans les délais, le respect du budget, la satisfaction des utilisateurs finaux et la qualité du produit final livré."
    },
    {
        question: "Quelles tendances influencent le développement web aujourd'hui?",
        answer: "Les tendances incluent une plus grande adoption des technologies de cloud, des frameworks JavaScript modernes, des applications web progressives (PWA), et l'intégration de l'intelligence artificielle dans les applications."
    }
];


  const trendingTechnologies = [
    {
      name: 'React',
      icon: <Code2 size={24} />,
      description: 'La bibliothèque web la plus populaire pour construire des interfaces utilisateur dynamiques avec un vaste écosystème.',
      popularity: 95,
      stats: [
        { icon: <Star size={16} />, value: '215k+ Étoiles' },
        { icon: <Users size={16} />, value: '40.7% Utilisation' },
        { icon: <Flame size={16} />, value: 'Le Plus Utilisé' }
      ],
      useCases: ['Apps Entreprise', 'Plateformes SaaS', 'UIs Dynamiques', 'Apps Monopages'],
      trend: 'Dominant'
    },
    {
      name: 'Next.js',
      icon: <TrendingUp size={24} />,
      description: 'Framework React full-stack avec composants serveur et routeur app, établissant de nouveaux standards pour le développement web.',
      popularity: 92,
      stats: [
        { icon: <Star size={16} />, value: '118k+ Étoiles' },
        { icon: <ChartLine size={16} />, value: '47% Croissance' },
        { icon: <Flame size={16} />, value: 'Choix Entreprise' }
      ],
      useCases: ['E-commerce', 'Apps Entreprise', 'Sites de Contenu', 'Apps Full-stack'],
      trend: 'En Hausse'
    },
    {
      name: 'Vue',
      icon: <Box size={24} />,
      description: 'Framework progressif pour construire des interfaces web modernes avec une expérience de développement élégante.',
      popularity: 88,
      stats: [
        { icon: <Star size={16} />, value: '205k+ Étoiles' },
        { icon: <Users size={16} />, value: '18.5% Utilisation' },
        { icon: <Flame size={16} />, value: 'Croissance Rapide' }
      ],
      useCases: ['Progressive Apps', 'Systèmes Entreprise', 'UIs Interactives', 'Micro-webs'],
      trend: 'Stable'
    },
    {
      name: 'Svelte',
      icon: <BrainCircuit size={24} />,
      description: 'Framework révolutionnaire offrant des performances inégalées et une expérience développeur avec un minimum de code.',
      popularity: 85,
      stats: [
        { icon: <Star size={16} />, value: '74k+ Étoiles' },
        { icon: <ChartLine size={16} />, value: '320% Croissance' },
        { icon: <Flame size={16} />, value: 'Étoile Montante' }
      ],
      useCases: ['Apps Web', 'Interactions Riches', 'Sites Statiques', 'PWAs'],
      trend: 'En Hausse'
    },
    {
      name: 'Astro',
      icon: <Zap size={24} />,
      description: 'Constructeur de sites statiques moderne avec architecture en îlots pour des sites web axés sur le contenu avec des performances optimales.',
      popularity: 82,
      stats: [
        { icon: <Star size={16} />, value: '35k+ Étoiles' },
        { icon: <ChartLine size={16} />, value: '290% Croissance' },
        { icon: <Flame size={16} />, value: 'Croissance Rapide' }
      ],
      useCases: ['Sites de Contenu', 'Documentation', 'Pages Marketing', 'Blogs'],
      trend: 'En Hausse'
    },
    {
      name: 'Qwik',
      icon: <Globe size={24} />,
      description: 'Framework conçu pour un chargement instantané avec des capacités de chargement paresseux et de reprise automatiques.',
      popularity: 78,
      stats: [
        { icon: <Star size={16} />, value: '25k+ Étoiles' },
        { icon: <ChartLine size={16} />, value: '180% Croissance' },
        { icon: <Flame size={16} />, value: 'Émergent' }
      ],
      useCases: ['Apps Web', 'E-commerce', 'Plateformes Sociales', 'PWAs'],
      trend: 'En Hausse'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
    <Helmet>
        <title>Trouver un Freelance Web & Agence de Développement Web </title>
        <meta name="description" content="Découvrez les meilleures freelances web, des développeurs et des agences spécialisées dans la création de sites internet et trouver des missions freelance." />
        <link rel="canonical" href="https://itgalaxy.io/freelance-web" />
        <meta property="og:title" content="Plateforme Freelance Web | Recrutement de Développeurs et Agences" />
        <meta property="og:description" content="Trouvez des freelances qualifiés et des agences pour la création de sites internet et le développement web, ainsi que des missions freelance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itgalaxy.io/freelance-web" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="ItGalaxy.io" />
        <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/freelance-web" />
        <link rel="alternate" hreflang="en" href="https://itgalaxy.io/freelance-web" />
    </Helmet>


      <Header />
      <GlobalStyle />
      <MainContainer>
        <HeroSection>
          <HeroContent>
            <Logo>
              <Code2 />
            </Logo>
            <HeroTitle>Marketplace des Freelances web </HeroTitle>
            <HeroSubtitle>
              Trouvez les experts en développement web à travers tous les frameworks et technologies modernes.
            </HeroSubtitle>

            <TechGrid>
              {technologies.map((tech) => (
                <TechBadge
                  key={tech.key}
                  active={selectedTech === tech.key}
                  onClick={() => setSelectedTech(tech.key)}
                >
                  {tech.icon}
                  {tech.name}
                </TechBadge>
              ))}
            </TechGrid>

            <TrustBadgesContainer>
              {trustIndicators.map((indicator, index) => (
                <TrustBadge key={index}>
                  {indicator.icon}
                  {indicator.text}
                </TrustBadge>
              ))}
            </TrustBadgesContainer>
          </HeroContent>
        </HeroSection>

          <CardsPrestataires skill={'PostgreSQL'}/>
           <ItGalaxyAsService />

        <Section>
          <SectionContent>
            <SectionTitle>
              <Monitor />
              Projets web en Vedette
            </SectionTitle>
            <SectionSubtitle>
              Découvrez des projets réussis livrés par nos experts en développement web
            </SectionSubtitle>
            <ProjectsGrid>
              {projects.map((project, index) => (
                <ProjectCard key={index}>
                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>

                    <ProjectMetrics>
                      {project.metrics.map((metric, idx) => (
                        <MetricTag key={idx}>
                          {metric.icon}
                          {metric.value}
                        </MetricTag>
                      ))}
                    </ProjectMetrics>

                    <TechStack>
                      {project.tech.map((tech, techIndex) => (
                        <TechTag key={techIndex}>{tech}</TechTag>
                      ))}
                    </TechStack>

                    <ExpertInfo>
                      <ExpertAvatar>
                        {project.expert.name.charAt(0)}
                      </ExpertAvatar>
                      <ExpertDetails>
                        <div className="name">{project.expert.name}</div>
                        <div className="role">{project.expert.role}</div>
                      </ExpertDetails>
                      <MetricTag>
                        <Award size={16} />
                        {project.expert.rating}
                      </MetricTag>
                    </ExpertInfo>

                    <Button onClick={handleModalRegister} style={{ marginTop: '1.5rem', width: '100%' }}>
                       Partager un projet similaire
                      <ChevronRight size={20} />
                    </Button>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </ProjectsGrid>
            <ButtonContainer>
              <SeeMoreButton onClick={() => handleModalRegister()}>
                Explorer Plus de Projets
                <ArrowDown size={20} />
              </SeeMoreButton>
            </ButtonContainer>
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <SectionTitle>
              <Sparkles />
              Catégories d'Expertise Web
            </SectionTitle>
            <SectionSubtitle>
              Connectez-vous avec des freelances web spécialisés dans divers domaines et technologies
            </SectionSubtitle>
            <ServicesGrid>
              {services.map((service, index) => (
                <ServiceCard key={index} onClick={handleModalRegister}>
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                  <ServiceStats>
                    <StatItem>
                      <div className="value">{service.avgRate}</div>
                      <div className="label">Taux Moyen</div>
                    </StatItem>
                    <StatItem>
                      <div className="value">{service.activeFreelancers}</div>
                      <div className="label">Experts Actifs</div>
                    </StatItem>
                  </ServiceStats>
                  <SkillsContainer>
                    {service.topSkills.map((skill, idx) => (
                      <SkillBadge key={idx} featured={idx === 0}>{skill}</SkillBadge>
                    ))}
                  </SkillsContainer>
                  <Button onClick={handleModalRegister} style={{ marginTop: '1.5rem', width: '100%' }}>
                    Parcourir les Experts
                    <ChevronRight size={20} />
                  </Button>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </SectionContent>
        </Section>

    

        <TrendingSection>
          <SectionContent>
            <SectionTitle>
              <Flame />
              Technologies Web Tendances
            </SectionTitle>
            <SectionSubtitle>
              Restez à la pointe avec les frameworks et outils web les plus demandés
            </SectionSubtitle>

            <TrendingGrid>
              {trendingTechnologies.map((tech, index) => (
                <TrendingCard key={index} onClick={() => handleModalRegister()}> 
                  <TrendingHeader>
                    <TrendingIcon>
                      {tech.icon}
                    </TrendingIcon>
                    <TrendingTitle>{tech.name}</TrendingTitle>
                  </TrendingHeader>

                  <TrendingDescription>
                    {tech.description}
                  </TrendingDescription>

                  <PopularityBar popularity={tech.popularity} />

                  <TrendingStats>
                    {tech.stats.map((stat, idx) => (
                      <TrendingStat key={idx}>
                        {stat.icon}
                        {stat.value}
                      </TrendingStat>
                    ))}
                  </TrendingStats>

                  <UseCaseList>
                    {tech.useCases.map((useCase, idx) => (
                      <UseCase key={idx}>{useCase}</UseCase>
                    ))}
                  </UseCaseList>

                  <Button onClick={handleModalRegister} style={{ marginTop: '1.5rem', width: '100%' }}>
                    Trouver des Experts {tech.name}
                    <ChevronRight size={20} />
                  </Button>
                </TrendingCard>
              ))}
            </TrendingGrid>
          </SectionContent>
        </TrendingSection>

        <FAQSection>
          <SectionContent>
            <SectionTitle>
              <HelpCircle />
              Questions Fréquemment Posées
            </SectionTitle>
            <SectionSubtitle>
              Tout ce que vous devez savoir sur l'embauche d'experts en développement Web
            </SectionSubtitle>
            <FAQContainer>
              {faqs.map((faq, index) => (
                <FAQItem key={index}>
                  <FAQHeader
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openFAQs[index]}
                    aria-controls={`faq-content-${index}`}
                  >
                    {faq.question}
                    {openFAQs[index] ? <MinusCircle size={20} /> : <PlusCircle size={20} />}
                  </FAQHeader>
                  <FAQContent
                    id={`faq-content-${index}`}
                    isOpen={openFAQs[index]}
                    role="region"
                    aria-labelledby={`faq-header-${index}`}
                  >
                    {faq.answer}
                  </FAQContent>
                </FAQItem>
              ))}
            </FAQContainer>
          </SectionContent>
        </FAQSection>
      </MainContainer>
      <Offers />
      <FooterHome page={"web"} />
      {openModalRegister && (
        <Register
          openModalRegister={openModalRegister}
          setOpenModalRegister={setOpenModalRegister}
          handleModalRegister={handleCloseModalRegister}
          switchBetweenModals={false}
          proxy={"marketplace"}
        />)}
    </>
  );
}

export default Siteweb;