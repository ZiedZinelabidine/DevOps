import Register from "components/Authentification/modals/register";
import Header from 'components/Header/Header';
import { ArrowDown, BarChart2, BookOpenText, Briefcase, CheckCircle2, ChevronDown, ChevronRight, Code2, Cpu, FileCode2, Globe, LineChart, Settings, Smartphone, Star, Target, Wallet } from 'lucide-react';
import { useState } from "react";
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
    background: #0f172a;
    color: #e2e8f0;
    font-family: 'JetBrains Mono', monospace;
  }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const MainContainer = styled.div`
  min-height: 100vh;
  background: #0f172a;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 80% 80%, rgba(244, 63, 94, 0.15) 0%, transparent 40%);
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
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      rgba(99, 102, 241, 0.1) 0%,
      rgba(244, 63, 94, 0.1) 50%,
      rgba(99, 102, 241, 0.1) 100%
    );
    animation: ${gradientAnimation} 15s ease infinite;
    background-size: 200% 200%;
    transform: rotate(-45deg);
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
  background: linear-gradient(135deg, #6366f1 0%, #f43f5e 100%);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${float} 6s ease-in-out infinite;
  box-shadow: 0 0 50px rgba(99, 102, 241, 0.3);
  transform: rotate(-5deg);

  svg {
    width: 80px;
    height: 80px;
    color: #fff;
    transform: rotate(5deg);
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 2rem 0;
  color: #fff;
  text-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #94a3b8;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #6366f1 0%, #f43f5e 100%);
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
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
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
  background: #1e293b;

  &:nth-child(odd) {
    background: #0f172a;
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
  color: #fff;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #6366f1, #f43f5e);
    border-radius: 2px;
  }

  svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1rem;
    color: #6366f1;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #94a3b8;
  font-size: 1.25rem;
  margin-bottom: 4rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const StepCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
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
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(244, 63, 94, 0.1));
    opacity: 0;
    transition: 0.3s;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(99, 102, 241, 0.5);

    &::before {
      opacity: 1;
    }
  }
`;

const StepIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  background: linear-gradient(135deg, #6366f1 0%, #f43f5e 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transform: rotate(-5deg);
  transition: 0.3s;

  ${StepCard}:hover & {
    transform: rotate(0deg) scale(1.1);
  }
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;
`;

const StepDescription = styled.p`
  color: #94a3b8;
  line-height: 1.6;
  text-align: center;
`;

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const JobCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, #6366f1, #f43f5e);
    opacity: 0.5;
    transition: 0.3s;
  }

  &:hover {
    transform: translateX(10px);
    border-color: rgba(99, 102, 241, 0.5);
    cursor: pointer;

    &::before {
      opacity: 1;
    }
  }
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const JobInfo = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const JobCompany = styled.p`
  color: #94a3b8;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

const JobMeta = styled.div`
  display: flex;
  gap: 1rem;
  color: #94a3b8;
  font-size: 0.875rem;
`;

const JobSalary = styled.div`
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(244, 63, 94, 0.2));
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  border: 1px solid rgba(99, 102, 241, 0.3);
`;

const JobDescription = styled.p`
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const JobSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const JobSkill = styled.span`
  background: rgba(99, 102, 241, 0.1);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  border: 1px solid rgba(99, 102, 241, 0.3);
  transition: 0.3s;

  &:hover {
    background: rgba(99, 102, 241, 0.2);
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
  border: 2px solid;
  border-image: linear-gradient(135deg, #6366f1, #f43f5e) 1;
  padding: 1rem 2rem;
  
  &:hover {
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(244, 63, 94, 0.1));
    transform: translateY(-2px);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateY(4px);
  }
`;

const TechnologiesSection = styled(Section)`
  background: rgba(30, 41, 59, 0.5);
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TechCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(99, 102, 241, 0.5);
  }
`;

const TechTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TechDescription = styled.p`
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    color: #94a3b8;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:before {
      content: "•";
      color: #6366f1;
    }
  }
`;

const StatsSection = styled(Section)`
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(244, 63, 94, 0.1) 100%);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: rgba(30, 41, 59, 0.5);
  border-radius: 16px;
  backdrop-filter: blur(10px);
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6366f1 0%, #f43f5e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #94a3b8;
  font-size: 0.875rem;
`;

const ComparisonSection = styled(Section)`
  background: rgba(30, 41, 59, 0.5);
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ComparisonCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 20px;
  padding: 2rem;
`;

const ComparisonTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ComparisonList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    color: #94a3b8;
    margin-bottom: 1rem;
    font-size: 0.875rem;
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

    svg {
      color: #6366f1;
      flex-shrink: 0;
      margin-top: 0.25rem;
    }
  }
`;

const FAQSection = styled(Section)`
  background: rgba(30, 41, 59, 0.5);
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const FAQItem = styled.div`
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 20px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: rgba(99, 102, 241, 0.5);
  }
`;

const FAQQuestion = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: ${props => props.isOpen ? '1rem' : '0'};
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    color: #6366f1;
    transition: transform 0.3s ease;
    transform: rotate(${props => props.isOpen ? '180deg' : '0deg'});
  }
`;

const FAQAnswer = styled.div`
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.8;
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  opacity: ${props => props.isOpen ? '1' : '0'};
  padding-left: 0.5rem;
  border-left: 3px solid #6366f1;
  margin-left: 0.5rem;
`;

const ROISection = styled(Section)`
  background: rgba(30, 41, 59, 0.5);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(244, 63, 94, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const ROIGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2.5rem;
  margin-top: 3rem;
  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(99, 102, 241, 0.2) 25%, 
      rgba(244, 63, 94, 0.2) 75%, 
      transparent 100%
    );
    z-index: 0;
  }
`;

const ROICard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  position: relative;
  z-index: 1;
  will-change: transform;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(99, 102, 241, 0.5);
    box-shadow: 
      0 10px 40px -10px rgba(99, 102, 241, 0.3),
      0 0 80px -40px rgba(244, 63, 94, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.5), rgba(244, 63, 94, 0.5));
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ROIIcon = styled.div`
  width: 64px;
  height: 64px;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(244, 63, 94, 0.2));
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 16px;
    padding: 2px;
    background: linear-gradient(135deg, #6366f1, #f43f5e);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  ${ROICard}:hover & {
    transform: scale(1.1) rotate(-5deg);
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(244, 63, 94, 0.3));
  }

  svg {
    transition: transform 0.3s ease;
  }

  ${ROICard}:hover svg {
    transform: scale(1.1);
  }
`;

const ROITitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #6366f1, #f43f5e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s ease;
  will-change: transform;

  ${ROICard}:hover & {
    transform: translateX(5px);
  }
`;

const ROIDescription = styled.p`
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  transition: color 0.3s ease;
  transform: translateZ(0);

  ${ROICard}:hover & {
    color: #e2e8f0;
  }
`;

const ROIMetrics = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #6366f1, #f43f5e);
    opacity: 0.3;
    border-radius: 1px;
  }
`;

const ROIMetricItem = styled.li`
  color: #94a3b8;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transform: translateZ(0);
  will-change: transform;

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    color: #6366f1;
    flex-shrink: 0;
    transition: all 0.3s ease;
    will-change: transform;
  }

  ${ROICard}:hover & {
    color: #e2e8f0;
    transform: translateX(5px);

    svg {
      color: #f43f5e;
      transform: rotate(-10deg);
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, #6366f1, #f43f5e);
    border-radius: 50%;
    transform: translate(-3px, -50%);
    opacity: 0;
    transition: all 0.3s ease;
  }

  ${ROICard}:hover &::before {
    opacity: 1;
  }
`;

function SiteMobile() {


  const [openModalRegister, setOpenModalRegister] = useState(false);
  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handelSearchProjects = () => {
    window.location.href = `${process.env.REACT_APP_FRONTED_URL}/search/projects/category/DEVELOPER_MOBILE`;
  };


  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };



  const steps = [
    {
      icon: <Smartphone size={32} />,
      title: 'Analyse & Architecture',
      description: 'Choix technologique adapté à vos besoins : natif, cross-platform ou hybride.'
    },
    {
      icon: <Settings size={32} />,
      title: 'Développement & Tests',
      description: 'Création de votre application avec les meilleures pratiques et tests rigoureux.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Déploiement & Suivi',
      description: 'Publication sur les stores et maintenance continue de votre application.'
    }
  ];

  const jobs = [
    {
        title: 'Développeur Mobile Cross-Platform',
        company: 'Agence Digitale Paris',
        location: 'Paris - Hybride',
        type: 'Freelance Application',
        salary: '550-650€/semaine',
        description: 'Développement d\'applications mobiles multiplateformes avec Flutter et React Native. Expertise en développement cross-platform requise.',
        skills: ['Flutter', 'React Native', 'Firebase', 'REST API', 'Git', 'Clean Architecture']
    },
    {
        title: 'Expert Développement Android Natif',
        company: 'Startup Tech',
        location: 'Remote - France',
        type: 'Freelance Application',
        salary: '500-600€/semaine',
        description: 'Création d\'applications Android natives avec Kotlin. Focus sur les bonnes pratiques de développement mobile et l\'expérience utilisateur.',
        skills: ['Kotlin', 'Android SDK', 'MVVM', 'Jetpack Compose', 'Material Design', 'Clean Code']
    },
    {
        title: 'Développeur iOS Swift',
        company: 'FinTech Scale-up',
        location: 'Remote - France',
        type: 'Freelance Application',
        salary: '580-680€/semaine',
        description: 'Développement d\'applications iOS natives en Swift. Expertise en développement mobile iOS et connaissance approfondie de l\'écosystème Apple.',
        skills: ['Swift', 'SwiftUI', 'iOS SDK', 'CoreData', 'Push Notifications', 'TestFlight']
    },
    {
        title: 'Lead Développeur Mobile',
        company: 'Groupe International',
        location: 'Paris - Hybride',
        type: 'Freelance Application',
        salary: '700-800€/semaine',
        description: 'Direction technique du développement mobile multiplateforme. Expertise en architecture mobile et gestion d\'équipe requise.',
        skills: ['Architecture Mobile', 'Flutter', 'React Native', 'CI/CD', 'Code Review', 'Team Lead']
    },
    {
        title: 'Développeur Mobile Python',
        company: 'Innovation Lab',
        location: 'Remote - France',
        type: 'Freelance Application',
        salary: '450-550€/semaine',
        description: 'Développement d\'applications mobiles avec Python et frameworks associés. Expertise en développement mobile Python et API REST.',
        skills: ['Python', 'Kivy', 'REST API', 'SQLite', 'Git', 'Mobile UI/UX']
    },
    {
        title: 'Expert Mobile No-Code/Low-Code',
        company: 'Agence Digitale',
        location: 'Remote - France',
        type: 'Freelance Application',
        salary: '400-500€/semaine',
        description: 'Création d\'applications mobiles avec des plateformes no-code et low-code. Expertise en solutions de développement mobile rapide.',
        skills: ['No-Code', 'Low-Code', 'Bubble', 'OutSystems', 'Mobile Design', 'Prototypage']
    },
    // Nouveaux emplois
    {
        title: 'Développeur Mobile Freelance',
        company: 'Creative Agency',
        location: 'Remote - International',
        type: 'Freelance Application',
        salary: '500-600€/semaine',
        description: 'Développement d\'applications mobiles natives et multiplateformes. Expérience avec des projets variés est un plus.',
        skills: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'freelance app app']
    },
    {
        title: 'Consultant en Marketing Mobile',
        company: 'Marketing Solutions',
        location: 'Remote - France',
        type: 'Freelance Application',
        salary: '600-700€/semaine',
        description: 'Élaboration de stratégies de marketing pour des applications mobiles. Expertise en ASO et publicité in-app.',
        skills: ['ASO', 'SEO', 'Google Ads', 'Analytique', 'freelance marketing mobile']
    },
    {
        title: 'Développeur Full Stack Mobile',
        company: 'Global Tech',
        location: 'Remote - Europe',
        type: 'Freelance Application',
        salary: '650-750€/semaine',
        description: 'Création d\'applications complètes avec des interfaces et des systèmes backend optimisés.',
        skills: ['React Native', 'Node.js', 'MongoDB', 'Spring Boot', 'freelance app developer']
    },
    {
        title: 'Développeur d\'Applications IoT',
        company: 'Tech Innovations',
        location: 'Remote - International',
        type: 'Freelance Application',
        salary: '700-800€/semaine',
        description: 'Développement d\'applications mobiles pour appareils IoT connectés.',
        skills: ['JavaScript', 'IoT', 'Node.js', 'MQTT', 'freelance application mobile']
    },
    {
        title: 'Développeur de Jeux Mobiles',
        company: 'Game Studio',
        location: 'Remote - Europe',
        type: 'Freelance Application',
        salary: '800-900€/semaine',
        description: 'Développement d\'applications ludiques pour appareils mobiles.',
        skills: ['Unity', 'C#', 'Mobile Games', 'Freelance Game Developer','freelancing mobile']
    },
    {
        title: 'Spécialiste de l\'Expérience Utilisateur',
        company: 'UX Experts',
        location: 'Remote - France',
        type: 'Freelance Application',
        salary: '550-650€/semaine',
        description: 'Amélioration de l\'expérience utilisateur pour des applications mobiles et des sites web.',
        skills: ['UX Design', 'User Research', 'Prototyping', 'freelance app designer']
    },
    {
        title: 'Développeur de Réalité Augmentée',
        company: 'AR Solutions Inc.',
        location: 'Remote - International',
        type: 'Freelance Application',
        salary: '750-850€/semaine',
        description: 'Création d\'applications de réalité augmentée pour mobile.',
        skills: ['ARKit', 'ARCore', 'Unity', 'freelance app app']
    },
    {
        title: 'Gestionnaire de Projet Mobile',
        company: 'Development Group',
        location: 'Remote - France',
        type: 'Freelance Application',
        salary: '600-700€/semaine',
        description: 'Mise en œuvre des méthodologies Agile au développement d’applications mobiles.',
        skills: ['Agile', 'Scrum', 'JIRA', 'freelance app project manager']
    },
    {
        title: 'Développeur de Plateforme E-learning',
        company: 'Education Tech',
        location: 'Remote - Europe',
        type: 'Freelance Application',
        salary: '600-750€/semaine',
        description: 'Développement d\'applications éducatives pour un apprentissage interactif.',
        skills: ['React Native', 'Node.js', 'Education', 'freelance app app']
    },
    {
        title: 'Développeur Mobile App Marketing',
        company: 'Creative Agency',
        location: 'Remote - France - ',
        type: 'Freelance Application',
        salary: '500-650€/semaine',
        description: 'Mise en place de campagnes de marketing pour applications mobiles.',
        skills: ['Mobile Marketing', 'ASO', 'Analytics', 'freelance marketing mobile']
    }
];

  const technologies = [
    {
      title: 'Développement Natif',
      icon: <Cpu size={24} />,
      description: 'Applications performantes et optimisées pour chaque plateforme',
      features: [
        'Développement iOS avec Swift et SwiftUI',
        'Développement Android avec Kotlin et Jetpack',
        'Interfaces natives fluides et performantes',
        'Accès complet aux fonctionnalités natives',
        'Performance et UX optimales'
      ]
    },
    {
      title: 'Cross-Platform',
      icon: <Code2 size={24} />,
      description: 'Solutions multiplateformes pour un développement efficace',
      features: [
        'React Native avec TypeScript',
        'Flutter et Dart',
        'Code unique multiplateforme',
        'Hot Reload pour développement rapide',
        'Performance proche du natif'
      ]
    },
    {
      title: 'Solutions Hybrides',
      icon: <Globe size={24} />,
      description: 'Applications web mobiles et PWA performantes',
      features: [
        'Progressive Web Apps (PWA)',
        'Ionic avec Angular/React',
        'Compatibilité tous appareils',
        'Déploiement web simplifié',
        'Coûts optimisés'
      ]
    }
  ];

  const statistics = [
    { number: '500+', label: 'Applications Publiées' },
    { number: '50M+', label: 'Utilisateurs Actifs' },
    { number: '4.8/5', label: 'Note Moyenne' },
    { number: '24/7', label: 'Support Expert' }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const comparisons = [
    {
      title: 'Développement Web vs Mobile',
      items: [
        'Interfaces optimisées pour les écrans mobiles',
        'Gestion native des fonctionnalités du téléphone',
        'Performance et fluidité accrues',
        'Distribution via les stores officiels',
        'Expérience utilisateur mobile native'
      ]
    },
    {
      title: 'Natif vs Cross-Platform',
      items: [
        'Performances optimales vs développement rapide',
        'Accès complet aux APIs vs compatibilité multiplateforme',
        'Expérience native vs code unique',
        'Maintenance spécifique vs maintenance unifiée',
        'Coûts de développement vs time-to-market'
      ]
    }
  ];

  const faqs = [
    {
        question: "Quel langage choisir pour le développement mobile ?",
        answer: "Le choix dépend de vos besoins. Pour iOS, Swift est recommandé. Pour Android, Kotlin est le standard. Pour du cross-platform, React Native et Flutter sont les plus populaires. Python avec Kivy est une option pour des projets spécifiques."
    },
    {
        question: "Quelle est la différence entre développement natif et cross-platform ?",
        answer: "Le développement natif (iOS/Android) offre les meilleures performances et accès aux fonctionnalités, mais nécessite deux codes distincts. Le cross-platform permet un code unique pour les deux plateformes, réduisant les coûts et le temps de développement."
    },
    {
        question: "Combien coûte le développement d'une application mobile ?",
        answer: "Les coûts varient selon la complexité : de 15-30K€ pour une app simple, 30-80K€ pour une app moyenne, et 80K€+ pour une app complexe. Le choix technologique (natif vs cross-platform) impacte également le budget."
    },
    {
        question: "Quelle formation pour devenir développeur mobile ?",
        answer: "Plusieurs parcours sont possibles : formation diplômante (BUT, Master), bootcamps intensifs, ou autoformation. Les compétences clés incluent Swift/Kotlin pour le natif, ou React Native/Flutter pour le cross-platform."
    },
    {
        question: "Comment optimiser les performances d'une app mobile ?",
        answer: "Les bonnes pratiques incluent : optimisation des images et ressources, mise en cache efficace, lazy loading, minimisation des appels réseau, et utilisation des outils de profilage natifs."
    },
    {
        question: "Quelles sont les étapes du développement mobile ?",
        answer: "Le processus comprend : analyse des besoins, design UX/UI, développement, tests (unitaires, intégration, UAT), déploiement sur les stores, et maintenance continue."
    },
    {
        question: "Comment choisir entre iOS et Android pour mon application ?",
        answer: "Le choix dépend de votre public cible. Si vous ciblez principalement le marché nord-américain ou européen, commencez par iOS. Pour une portée mondiale, Android pourrait être plus approprié."
    },
    {
        question: "Quelles sont les meilleures pratiques de développement mobile ?",
        answer: "Adoptez le responsive design, optimisez pour la performance, assurez-vous d'une bonne sécurité des données, et testez sur plusieurs appareils pour garantir une expérience utilisateur fluide."
    },
    {
        question: "Comment intégrer des APIs dans mon application mobile ?",
        answer: "Vous pouvez intégrer des APIs en utilisant des appels HTTP (REST ou GraphQL) pour interagir avec vos données. Assurez-vous de gérer les erreurs et de sécuriser les connexions avec des tokens d'authentification."
    },
    {
        question: "Quelle est l'importance des tests dans le développement mobile ?",
        answer: "Les tests sont essentiels pour s'assurer que votre application fonctionne correctement sur différents appareils et versions d'OS. Ils aident à identifier les bugs et à améliorer l'expérience utilisateur avant le lancement."
    },
    {
        question: "Comment assurer la sécurité d'une application mobile ?",
        answer: "Implémentez le chiffrement des données, utilisez HTTPS, gérez l'authentification et l'autorisation, et appliquez des tests de sécurité pour identifier les vulnérabilités potentielles."
    },
    {
        question: "Quels types de données peuvent être stockées dans une application mobile ?",
        answer: "Les données peuvent inclure des informations utilisateur, des préférences de l'application, des fichiers médias et des données de santé. Utilisez des bases de données locales comme SQLite ou des services cloud pour le stockage à distance."
    },
    {
        question: "Qu'est-ce qu'une application mobile hybride ?",
        answer: "Une application hybride combine des éléments des applications natives et web. Elle utilise des technologies web comme HTML, CSS et JavaScript et fonctionne sur plusieurs plateformes via des solutions comme Cordova ou Ionic."
    },
    {
        question: "Comment gérer les mises à jour de mon application mobile ?",
        answer: "Les mises à jour peuvent être gérées via les magasins d'applications. Optimisez le processus d'update pour garantir que les utilisateurs disposent toujours de la dernière version en communiquant avec eux sur les nouvelles fonctionnalités."
    },
    {
        question: "Comment utiliser les notifications push dans une application mobile ?",
        answer: "Intégrez des services comme Firebase Cloud Messaging pour envoyer des notifications push aux utilisateurs. Assurez-vous d'avoir le consentement des utilisateurs pour transformer l’interaction en temps réel."
    },
    {
        question: "Comment faire du marketing pour mon application mobile ?",
        answer: "Utilisez le marketing digital, les réseaux sociaux, et le SEO. Adoptez des stratégies ASO (App Store Optimization) pour améliorer la visibilité de votre application dans les magasins d'applications."
    },
    {
        question: "Comment recueillir des retours d'expérience des utilisateurs sur mon application ?",
        answer: "Intégrez des mécanismes de feedback dans l'application, envoyez des emails, et utilisez des analyses d'interaction utilisateur pour évaluer les besoins d'amélioration."
    },
    {
        question: "Quelles sont les tendances actuelles en développement mobile ?",
        answer: "Les tendances incluent l'intégration de l'IA, la réalité augmentée/virtuelle, et l'automatisation. Les applications deviennent également plus orientées vers le service avec des expériences personnalisées."
    },
    {
        question: "Comment puis-je améliorer l'engagement des utilisateurs dans mon application mobile ?",
        answer: "Proposez des notifications push, un contenu pertinent, des promotions, et des programmes de fidélité pour inciter les utilisateurs à interagir régulièrement avec votre application."
    },
    {
        question: "Quels outils de développement mobile recommandez-vous ?",
        answer: "Utilisez des environnements de développement comme Android Studio pour Android, et Xcode pour iOS. Pour les applications multiplateformes, considérez des frameworks comme React Native ou Flutter."
    },
    {
        question: "Comment assurer le suivi des performances de mon application mobile ?",
        answer: "Utilisez des outils d'analyse tels que Google Analytics pour Mes appareils, Firebase, ou Custom Dashboards pour mesurer les performances, les utilisateurs actifs, et le comportement en temps réel."
    },
    {
        question: "Comment gérer les problèmes de compatibilité entre différents appareils mobiles ?",
        answer: "Testez votre application sur des appareils variés, utilisez des métriques pour identifier les problèmes de compatibilité, et appliquez des corrections en fonction des versions d'OS ciblées."
    },
    {
        question: "Comment effectuer une migration de données dans une application mobile ?",
        answer: "Utilisez des scripts de migration, des bases de données temporaires, et des outils d'automatisation pour transférer les données d'une structure vers une autre tout en garantissant l'intégrité des données."
    },
    {
        question: "Quelle est l'importance de l'expérience utilisateur (UX) dans le développement mobile ?",
        answer: "Une bonne UX garantit que les utilisateurs trouvent votre application intuitive et agréable à utiliser, ce qui améliore la rétention et les interactions. Un design centré sur l'utilisateur est donc crucial."
    },
    {
        question: "Comment développer une stratégie de monétisation pour mon application mobile ?",
        answer: "Choisissez entre plusieurs modèles comme freemium, abonnements, achats in-app ou publicités. Évaluez ce qui convient le mieux à vos utilisateurs et à vos objectifs financiers."
    },
    {
        question: "Quelles sont les fonctionnalités clés à inclure dans une application mobile ?",
        answer: "Incluez des fonctionnalités essentielles comme la recherche, la personnalisation, les notifications, et des systèmes de feedback pour améliorer l'engagement des utilisateurs."
    },
    {
        question: "Comment intégrer un système de paiement dans mon application mobile ?",
        answer: "Intégrez des services de paiement tels que Stripe ou PayPal, et assurez-vous de respecter les normes de sécurité pour les transactions en ligne."
    }
];

  const roiData = [
    {
      icon: <Target size={24} />,
      title: "Engagement Utilisateur",
      description: "Maximisez l'engagement de vos utilisateurs avec une expérience mobile native et performante",
      metrics: [
        "Taux de rétention moyen de 35-40%",
        "Temps moyen par session : 5-7 minutes",
        "Taux de conversion x2.5 vs web mobile",
        "Satisfaction utilisateur 4.6/5"
      ]
    },
    {
      icon: <Wallet size={24} />,
      title: "Retour sur Investissement",
      description: "Optimisez votre ROI grâce à une stratégie mobile efficace et mesurable",
      metrics: [
        "Revenus in-app en hausse de 65%",
        "Coût d'acquisition réduit de 40%",
        "LTV client augmenté de 55%",
        "ROI moyen de 170% sur 12 mois"
      ]
    },
    {
      icon: <BarChart2 size={24} />,
      title: "Performance & Scalabilité",
      description: "Assurez la croissance de votre application avec une architecture robuste",
      metrics: [
        "Temps de chargement < 2 secondes",
        "99.9% de disponibilité",
        "Support jusqu'à 1M+ utilisateurs",
        "Mise à l'échelle automatique"
      ]
    }
  ];

  return (
    <>
      <Header />
      <GlobalStyle />
      <MainContainer>
      <Helmet>
          <title>Trouver un Freelance Application & Agences de Développement</title>
          <meta name="description" content="Découvrez les meilleures freelances Application, des experts en développement d'applications et trouver des missions freelance adaptées à vos besoins." />
          <link rel="canonical" href="https://itgalaxy.io/freelance-application" />
          <meta property="og:title" content="Trouver un Freelance Application & Agences de Développement Application" />
          <meta property="og:description" content="Découvrez les meilleures freelances Application, des experts en développement d'applications et trouver des missions freelance adaptées à vos besoins." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://itgalaxy.io/freelance-application" />
          <meta property="og:locale" content="fr_FR" />
          <meta property="og:site_name" content="ItGalaxy.io" />
          <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/freelance-application" />
          <link rel="alternate" hreflang="en" href="https://itgalaxy.io/freelance-application" />
      </Helmet>

        <HeroSection>
          <HeroContent>
            <Logo>
              <Smartphone />
            </Logo>
            <HeroTitle>Trouver un Freelance Application & Agences de Développement Application</HeroTitle>
            <HeroSubtitle>
             Projets pour les experts en développement d'applications mobiles natives, cross-platform et hybrides.
           </HeroSubtitle>
            <Button onClick={() => window.location.href = `/search/prestataires`} >
            Trouver un Freelance d'application 
              <ChevronRight size={20} />
            </Button>
          </HeroContent>
        </HeroSection>

        <CardsPrestataires skill={'Kotlin'}/>
        <ItGalaxyAsService />

        <Section>
          <SectionContent>
            <SectionTitle>
              <Briefcase />
             Exemples Missions Freelance d'application
            </SectionTitle>
            <SectionSubtitle>
              Les meilleures opportunités en remote proposées pour nos experts en développement mobile
            </SectionSubtitle>
            <JobsGrid>
              {jobs.map((job, index) => (
                <JobCard key={index} onClick={() => handleModalRegister()}>
                  <JobHeader>
                    <JobInfo>
                      <JobTitle>{job.title}</JobTitle>
                      <JobCompany>{job.company}</JobCompany>
                      <JobMeta>
                        <span>{job.location}</span>
                        <span>{job.type}</span>
                      </JobMeta>
                    </JobInfo>
                    <JobSalary>{job.salary}</JobSalary>
                  </JobHeader>
                  <JobDescription>{job.description}</JobDescription>
                  <JobSkills>
                    {job.skills.map((skill, skillIndex) => (
                      <JobSkill key={skillIndex}>{skill}</JobSkill>
                    ))}
                  </JobSkills>
                </JobCard>
              ))}
            </JobsGrid>
            <ButtonContainer>
              <SeeMoreButton onClick={() => handleModalRegister()}>
                Voir Plus de Missions
                <ArrowDown size={20} />
              </SeeMoreButton>
            </ButtonContainer>
          </SectionContent>
        </Section>

        <TechnologiesSection>
          <SectionContent>
            <SectionTitle>
              <Settings />
              Technologies Mobiles
            </SectionTitle>
            <SectionSubtitle>
              Choisissez la solution idéale pour votre projet mobile
            </SectionSubtitle>
            <TechGrid>
              {technologies.map((tech, index) => (
                <TechCard key={index} onClick={handleModalRegister}>
                  <TechTitle>{tech.title}</TechTitle>
                  <TechDescription>{tech.description}</TechDescription>
                  <TechFeatures>
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </TechFeatures>
                </TechCard>
              ))}
            </TechGrid>
          </SectionContent>
        </TechnologiesSection>

        <StatsSection>
          <SectionContent>
            <StatsGrid>
              {statistics.map((stat, index) => (
                <StatCard key={index}>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </SectionContent>
        </StatsSection>

        <Section>
          <SectionContent>
            <SectionTitle>
              <Smartphone />
              Comment Créer votre App Mobile
            </SectionTitle>
            <SectionSubtitle>
              Un processus éprouvé pour développer votre application mobile
            </SectionSubtitle>
            <StepsGrid>
              {steps.map((step, index) => (
                <StepCard key={index} onClick={() => handleModalRegister()}>
                  <StepIcon>{step.icon}</StepIcon>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepCard>
              ))}
            </StepsGrid>
          </SectionContent>
        </Section>

        <ComparisonSection>
          <SectionContent>
            <SectionTitle>
              <FileCode2 />
              Comparaisons Techniques
            </SectionTitle>
            <SectionSubtitle>
              Comprendre les différences entre les approches de développement mobile
            </SectionSubtitle>
            <ComparisonGrid>
              {comparisons.map((comparison, index) => (
                <ComparisonCard key={index}>
                  <ComparisonTitle>{comparison.title}</ComparisonTitle>
                  <ComparisonList>
                    {comparison.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <CheckCircle2 size={16} />
                        {item}
                      </li>
                    ))}
                  </ComparisonList>
                </ComparisonCard>
              ))}
            </ComparisonGrid>
          </SectionContent>
        </ComparisonSection>

        <ROISection>
          <SectionContent>
            <SectionTitle>
              <LineChart />
              Succès & Performance
            </SectionTitle>
            <SectionSubtitle>
              Des résultats mesurables pour votre application mobile
            </SectionSubtitle>
            <ROIGrid>
              {roiData.map((item, index) => (
                <ROICard key={index}>
                  <ROIIcon>{item.icon}</ROIIcon>
                  <ROITitle>{item.title}</ROITitle>
                  <ROIDescription>{item.description}</ROIDescription>
                  <ROIMetrics>
                    {item.metrics.map((metric, metricIndex) => (
                      <ROIMetricItem key={metricIndex}>
                        <Star size={16} />
                        {metric}
                      </ROIMetricItem>
                    ))}
                  </ROIMetrics>
                </ROICard>
              ))}
            </ROIGrid>
            <ButtonContainer>
              <Button onClick={handleModalRegister}>
                Évaluer votre Projet Mobile
                <ChevronRight size={20} />
              </Button>
            </ButtonContainer>
          </SectionContent>
        </ROISection>

        <FAQSection>
          <SectionContent>
            <SectionTitle>
              <BookOpenText />
              Questions Fréquentes
            </SectionTitle>
            <SectionSubtitle>
              Tout ce que vous devez savoir sur le développement mobile
            </SectionSubtitle>
            <FAQGrid>
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <FAQQuestion isOpen={openFAQ === index}>
                    {faq.question}
                    <ChevronDown size={20} />
                  </FAQQuestion>
                  <FAQAnswer isOpen={openFAQ === index}>
                    {faq.answer}
                  </FAQAnswer>
                </FAQItem>
              ))}
            </FAQGrid>
          </SectionContent>
        </FAQSection>
      </MainContainer>
      <Offers />
      <FooterHome page={"mobile"} />
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

export default SiteMobile;