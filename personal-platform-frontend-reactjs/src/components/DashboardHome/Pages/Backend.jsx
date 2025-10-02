import Header from 'components/Header/Header';
import { Activity, Clipboard, Calendar, FileText, Video, Award, Settings , BarChart, Binary, CheckCircle, ChevronDown, ChevronRight, Clock, Cloud, Code, Cpu, Database, DollarSign, Film, GitBranch, Globe, Heart, Layout, Lock, Network, Search, Server, Shield, ShoppingCart, Terminal, Users, Zap } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import FooterHome from '../FooterHome/FooterHome';
import Offers from './Offres';
import Register from "components/Authentification/modals/register";
import CardsPrestataires from './CardsPrestataires';
import ItGalaxyAsService from '../ItGalaxyAsService/ItGalaxyAsService';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #0f172a;
    color: #e2e8f0;
    font-family: 'JetBrains Mono', monospace;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background: #0f172a;
  color: #e2e8f0;
`;

const HeroSection = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(99, 102, 241, 0.1) 2px,
      rgba(99, 102, 241, 0.1) 4px
    );
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #60a5fa, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
`;

const HeroSubtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: #94a3b8;
  font-family: system-ui, -apple-system, sans-serif;
`;

const TrustIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const TrustIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  svg {
    color: #3b82f6;
    margin-bottom: 0.5rem;
  }
`;

const TrustValue = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const TrustLabel = styled.span`
  font-size: 0.875rem;
  color: #94a3b8;
  font-family: system-ui, -apple-system, sans-serif;
`;

const ArchitectureVisual = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
`;

const ArchLayer = styled.div`
  background: rgba(59, 130, 246, ${props => 0.1 + props.index * 0.1});
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  width: ${props => 90 - props.index * 5}%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  padding: 1rem 2.5rem;
  margin: 10px;
  border-radius: 8px;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  font-family: system-ui, -apple-system, sans-serif;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -10px rgba(59, 130, 246, 0.5);
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const Section = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.dark ? '#0f172a' : '#1e293b'};
  position: relative;
`;

const SectionContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #f8fafc;
  margin-top: 3rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: #3b82f6;
  }
`;

const SectionTitleFreelance = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #f8fafc;
  margin-top: 3rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: #3b82f6;
  }
`;



const SkillsSection = styled(Section)`
  background: #0f172a;
`;

const SkillsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const SkillsDescription = styled.p`
  color: #94a3b8;
  text-align: center;
  max-width: 48rem;
  margin: 0 auto 2rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const SkillCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const CategoryButton = styled.button`
  background: ${props => props.active ? 'rgba(59, 130, 246, 0.2)' : 'transparent'};
  border: 1px solid ${props => props.active ? '#3b82f6' : 'rgba(59, 130, 246, 0.2)'};
  color: ${props => props.active ? '#60a5fa' : '#94a3b8'};
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  font-family: system-ui, -apple-system, sans-serif;
  
  &:hover {
    border-color: #3b82f6;
    color: #60a5fa;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SkillCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    border-color: #3b82f6;
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const SkillIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 1rem;
`;

const SkillTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #60a5fa;
`;

const SkillCategory = styled.span`
  font-size: 0.875rem;
  color: #94a3b8;
  font-family: system-ui, -apple-system, sans-serif;
`;

const SkillDescription = styled.p`
  color: #94a3b8;
  font-size: 0.875rem;
  margin: 0.5rem 0 1rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const ProgressBar = styled.div`
  height: 0.5rem;
  background: rgba(59, 130, 246, 0.2);
  border-radius: 9999px;
  overflow: hidden;
  flex-grow: 1;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(to right, #3b82f6, #60a5fa);
  border-radius: 9999px;
  width: ${props =>
    props.level === 'Expert' ? '100%' :
      props.level === 'Avancé' ? '80%' :
        '60%'
  };
`;

const CertificationBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 4px;
  color: #60a5fa;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  font-family: system-ui, -apple-system, sans-serif;
  
  svg {
    width: 12px;
    height: 12px;
  }
`;

const ProjectsSection = styled(Section)`
  background: #1e293b;
`;

const ProjectsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const ProjectsDescription = styled.p`
  color: #94a3b8;
  text-align: center;
  max-width: 48rem;
  margin: 0 auto 2rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    border-color: #3b82f6;
    transform: translateY(-5px);
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
  }
`;

const ProjectHeader = styled.div`
  background: rgba(15, 23, 42, 0.7);
  padding: 1.5rem;
  border-bottom: 1px solid rgba(59, 130, 246, 0.2);
`;

const ProjectIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #60a5fa;
`;

const ProjectDescription = styled.p`
  color: #94a3b8;
  margin-bottom: 1rem;
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.5;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectMetrics = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const ProjectMetric = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  svg {
    color: #3b82f6;
    margin-bottom: 0.25rem;
  }
`;

const MetricValue = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: white;
`;

const MetricLabel = styled.span`
  font-size: 0.75rem;
  color: #94a3b8;
  font-family: system-ui, -apple-system, sans-serif;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const TechTag = styled.span`
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  border-radius: 9999px;
  background: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
  font-family: system-ui, -apple-system, sans-serif;
`;

const ArchDiagram = styled.div`
  width: 100%;
  height: 80px;
  background: rgba(15, 23, 42, 0.5);
  border-radius: 8px;
  margin: 1rem 0;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const ArchComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  
  svg {
    color: #60a5fa;
    margin-bottom: 0.25rem;
  }
  
  span {
    font-size: 0.75rem;
    color: #94a3b8;
  }
`;

const ArchConnection = styled.div`
  position: absolute;
  height: 2px;
  background: linear-gradient(to right, #3b82f6, #60a5fa);
  top: 50%;
  left: 15%;
  right: 15%;
  transform: translateY(-50%);
  z-index: 0;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #60a5fa;
    top: 50%;
    transform: translateY(-50%);
  }
  
  &::before {
    left: 0;
  }
  
  &::after {
    right: 0;
  }
`;

const EducationSection = styled(Section)`
  background: #0f172a;
`;

const EducationHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const EducationDescription = styled.p`
  color: #94a3b8;
  text-align: center;
  max-width: 48rem;
  margin: 0 auto 2rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 72rem;
  margin: 0 auto;
`;

const EducationCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(59, 130, 246, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }

  &:hover {
    border-color: #3b82f6;
    transform: translateX(5px);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.1);
  }
`;

const EducationIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 1.5rem;
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
  
  svg {
    width: 30px;
    height: 30px;
  }
`;

const EducationContent = styled.div`
  flex-grow: 1;
`;

const EducationHeader2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const EducationTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #60a5fa;
`;

const EducationYear = styled.span`
  color: #3b82f6;
  font-family: system-ui, -apple-system, sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const EducationSchool = styled.p`
  color: #94a3b8;
  margin-bottom: 0.5rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const EducationDescription2 = styled.p`
  color: #64748b;
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.5;
`;

const EducationSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const EducationSkill = styled.span`
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  border-radius: 9999px;
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  font-family: system-ui, -apple-system, sans-serif;
`;

const ContractsSection = styled(Section)`
  background: #1e293b;
`;

const ContractsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const ContractsDescription = styled.p`
  color: #94a3b8;
  text-align: center;
  max-width: 48rem;
  margin: 0 auto 2rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 48rem;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
`;

const FilterLabel = styled.span`
  font-size: 0.875rem;
  color: #94a3b8;
  margin-bottom: 0.5rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const FilterSelect = styled.select`
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(59, 130, 246, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  font-family: system-ui, -apple-system, sans-serif;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
  
  option {
    background: #1e293b;
  }
`;

const ContractsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ContractCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    border-color: #3b82f6;
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
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
      rgba(59, 130, 246, 0.1),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const ContractHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ContractIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const ContractDifficulty = styled.span`
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
        return 'rgba(59, 130, 246, 0.2)';
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
        return '#3b82f6';
    }
  }};
`;

const ContractTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #60a5fa;
  margin: 0.5rem 0;
`;

const ContractDescription = styled.p`
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const ContractDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1rem 0;
`;

const ContractDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: #3b82f6;
    width: 16px;
    height: 16px;
  }
  
  span {
    color: #94a3b8;
    font-size: 0.875rem;
    font-family: system-ui, -apple-system, sans-serif;
  }
`;

const ContractSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const ContractFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(59, 130, 246, 0.2);
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #60a5fa;
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
  color: #94a3b8;
  font-size: 0.875rem;
  font-family: system-ui, -apple-system, sans-serif;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ShowMoreButton = styled(Button)`
  margin: 3rem auto 0;
  background: transparent;
  border: 1px solid #3b82f6;
  
  &:hover {
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateY(4px);
  }
`;

const TechCategoriesSection = styled(Section)`
  background: #1e293b;
`;

const TechCategoriesHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const TechCategoriesDescription = styled.p`
  color: #94a3b8;
  text-align: center;
  max-width: 48rem;
  margin: 0 auto 2rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const TechCategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TechCategoryCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  transition: all 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    border-color: #3b82f6;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
  }
`;

const TechCategoryHeader = styled.div`
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(96, 165, 250, 0.2) 100%);
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid rgba(59, 130, 246, 0.2);
`;

const TechCategoryIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  svg {
    width: 30px;
    height: 30px;
  }
`;

const TechCategoryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #f8fafc;
`;

const TechCategoryContent = styled.div`
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const TechCategoryDescription = styled.p`
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const TechItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #94a3b8;
  font-family: system-ui, -apple-system, sans-serif;
  
  svg {
    color: #3b82f6;
    width: 16px;
    height: 16px;
  }
`;

// New SEO-optimized sections styled components

// FAQ Section
const FAQSection = styled(Section)`
  background: #1e293b;
`;

const FAQHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const FAQDescription = styled.p`
  color: #94a3b8;
  text-align: center;
  max-width: 48rem;
  margin: 0 auto 2rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const FAQContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid rgba(148, 163, 184, 0.1);
  padding: 1.5rem 0;

  &:last-child {
    border-bottom: none;
  }
`;

const FAQQuestion = styled.h2`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0;
  color: #f8fafc;
  font-size: 1.125rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  svg {
    color: #60a5fa;
    transition: transform 0.2s;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const FAQAnswer = styled.div`
  color: #94a3b8;
  margin-top: ${props => props.isOpen ? '1rem' : '0'};
  height: ${props => props.isOpen ? 'auto' : '0'};
  overflow: hidden;
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: all 0.3s;
  font-family: system-ui, -apple-system, sans-serif;
`;

// Case Studies Section
const CaseStudiesSection = styled(Section)`
  background: #0f172a;
`;

const CaseStudiesHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const CaseStudiesDescription = styled.p`
  color: #94a3b8;
  text-align: center;
  max-width: 48rem;
  margin: 0 auto 2rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const CaseStudyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const CaseStudyCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-4px);
    border-color: #3b82f6;
  }
`;

const CaseStudyTitle = styled.h3`
  color: #f8fafc;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const CaseStudyDescription = styled.p`
  color: #94a3b8;
  margin-bottom: 1.5rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const CaseStudyMetrics = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const CaseStudyMetricItem = styled.div`
  text-align: center;
`;

const CaseStudyMetricValue = styled.div`
  color: #60a5fa;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const CaseStudyMetricLabel = styled.div`
  color: #94a3b8;
  font-size: 0.875rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const CaseStudyTechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const CaseStudyTechTag = styled.span`
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
`;

// Industry Solutions Section
const IndustrySolutionsSection = styled(Section)`
  background: #0f172a;
`;

const IndustrySolutionsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const IndustrySolutionsDescription = styled.p`
  color: #94a3b8;
  text-align: center;
  max-width: 48rem;
  margin: 0 auto 2rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const IndustryCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(59, 130, 246, 0.2);
  transition: all 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  &:hover {
    border-color: #3b82f6;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
  }
`;

const IndustryIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 1.5rem;
  
  svg {
    width: 30px;
    height: 30px;
  }
`;

const IndustryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 0.5rem;
`;

const IndustryDescription = styled.p`
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const IndustrySolutions = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const IndustrySolution = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #94a3b8;
  font-family: system-ui, -apple-system, sans-serif;
  
  svg {
    color: #3b82f6;
    width: 16px;
    height: 16px;
  }
`;

// Testimonials Section
const TestimonialsSection = styled(Section)`
  background: #1e293b;
`;

const TestimonialsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const TestimonialsDescription = styled.p`
  color: #94a3b8;
  text-align: center;
  max-width: 48rem;
  margin: 0 auto 2rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TestimonialCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(59, 130, 246, 0.2);
  transition: all 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    border-color: #3b82f6;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
  }
`;

const TestimonialQuote = styled.div`
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-family: system-ui, -apple-system, sans-serif;
  flex-grow: 1;
  position: relative;
  
  &::before {
    content: '"';
    font-size: 4rem;
    color: rgba(59, 130, 246, 0.2);
    position: absolute;
    top: -1.5rem;
    left: -0.5rem;
    font-family: serif;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  color: #f8fafc;
  font-weight: 600;
  font-size: 0.875rem;
`;

const AuthorRole = styled.span`
  color: #3b82f6;
  font-size: 0.75rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

// Blog Resources Section
const BlogResourcesSection = styled(Section)`
  background: #0f172a;
`;

const BlogResourcesHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const BlogResourcesDescription = styled.p`
  color: #94a3b8;
  text-align: center;
  max-width: 48rem;
  margin: 0 auto 2rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const BlogResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BlogResourceCard = styled.div`
  background: rgba(30, 41, 59, 0.5);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(59, 130, 246, 0.2);
  transition: all 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  &:hover {
    border-color: #3b82f6;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
  }
`;

const BlogResourceImage = styled.div`
  height: 160px;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(96, 165, 250, 0.2) 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 40px;
    height: 40px;
    color: #3b82f6;
  }
`;

const BlogResourceContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const BlogResourceCategory = styled.span`
  color: #3b82f6;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  font-family: system-ui, -apple-system, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const BlogResourceTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #f8fafc;
  margin-bottom: 0.5rem;
`;

const BlogResourceDescription = styled.p`
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-family: system-ui, -apple-system, sans-serif;
`;

const BlogResourceMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
  color: #64748b;
  font-size: 0.75rem;
  font-family: system-ui, -apple-system, sans-serif;
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

// Technical Resources Section
const ResourcesSection = styled(Section)`
  background: #1e293b;
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ResourceCard = styled.a`
  background: rgba(30, 41, 59, 0.5);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(59, 130, 246, 0.2);
  transition: all 0.3s;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
  
  &:hover {
    border-color: #3b82f6;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
  }
`;

const ResourceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 1.5rem;
`;

const ResourceCategory = styled.span`
  color: #60a5fa;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: block;
`;

const ResourceTitle = styled.h3`
  color: #f8fafc;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const ResourceDescription = styled.p`
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  font-family: system-ui, -apple-system, sans-serif;
`;

const ResourceMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #64748b;
  font-size: 0.75rem;
  font-family: system-ui, -apple-system, sans-serif;
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

// Technical Resources Data
const technicalResourcesData = [
  {
    category: "Architecture",
    title: "Guide Complet des Microservices",
    description: "Apprenez à concevoir, déployer et maintenir une architecture microservices évolutive avec les meilleures pratiques du secteur.",
    icon: <Network size={40} />,
    date: "5 novembre 2023",
    readTime: "20 min",
    link: "/resources/microservices-guide"
  },
  {
    category: "Sécurité",
    title: "Sécurisation des APIs RESTful",
    description: "Un guide approfondi sur la sécurisation des APIs, incluant l'authentification, l'autorisation et la protection contre les attaques courantes.",
    icon: <Shield size={40} />,
    date: "12 novembre 2023",
    readTime: "15 min",
    link: "/resources/api-security"
  },
  {
    category: "Performance",
    title: "Optimisation des Bases de Données",
    description: "Techniques avancées pour optimiser les performances de vos bases de données et gérer efficacement de grands volumes de données.",
    icon: <Database size={40} />,
    date: "18 novembre 2023",
    readTime: "18 min",
    link: "/resources/database-optimization"
  },
  {
    category: "DevOps",
    title: "CI/CD pour Applications Backend",
    description: "Implémentez un pipeline CI/CD robuste pour vos applications backend avec des tests automatisés et du déploiement continu.",
    icon: <GitBranch size={40} />,
    date: "25 novembre 2023",
    readTime: "16 min",
    link: "/resources/cicd-backend"
  },
  {
    category: "Cloud",
    title: "Migration vers le Cloud",
    description: "Guide étape par étape pour migrer vos applications backend vers le cloud tout en maintenant la performance et la sécurité.",
    icon: <Cloud size={40} />,
    date: "1 décembre 2023",
    readTime: "22 min",
    link: "/resources/cloud-migration"
  },
  {
    category: "API",
    title: "Conception d'APIs RESTful",
    description: "Principes et meilleures pratiques pour concevoir des APIs RESTful évolutives, maintenables et faciles à utiliser.",
    icon: <Code size={40} />,
    date: "8 décembre 2023",
    readTime: "17 min",
    link: "/resources/restful-design"
  }
];
// FAQ Data for Freelance IT Developers
const faqData = [
  {
    question: "Quels sont les avantages de devenir freelance en informatique ?",
    answer: "Le freelancing en informatique offre une flexibilité dans le choix des projets, la possibilité de travailler à distance, et la liberté de gérer son emploi du temps. Cela permet également de diversifier ses compétences à travers différents projets et clients."
  },
  {
    question: "Quelles compétences sont essentielles pour un freelance en développement ?",
    answer: "Un bon freelance en développement doit maîtriser au moins un langage de programmation (comme Python, JavaScript ou Java), avoir des connaissances en frameworks populaires, et comprendre les bases de données et les principes de sécurité informatique."
  },
  {
    question: "Comment choisir les bons outils pour travailler en freelance ?",
    answer: "Le choix d'outils dépend de votre domaine de spécialisation. Il est recommandé d'utiliser des outils de gestion de projet (comme Trello ou Asana), des plateformes de communication (comme Slack ou Zoom), ainsi que des environnements de développement intégrés (IDEs) adaptés à vos besoins."
  },
  {
    question: "Quelle est l’importance de la sécurité pour les freelances en informatique ?",
    answer: "La sécurité est cruciale pour protéger les données des clients. Les freelances doivent être conscients des vulnérabilités potentielles et adopter des pratiques de codage sécurisées, utiliser des connexions chiffrées et respecter les législations sur la protection des données."
  },
  {
    question: "Comment optimiser ma productivité en tant que freelance en informatique ?",
    answer: "Optimisez votre productivité en établissant une routine de travail, en fixant des objectifs clairs, en utilisant des techniques de gestion du temps comme la méthode Pomodoro, et en limitant les distractions numériques."
  },
  {
    question: "Quelles sont les meilleures pratiques pour un développement efficace en freelance ?",
    answer: "Les meilleures pratiques incluent la rédaction de code bien documenté, l'utilisation de systèmes de contrôle de version (comme Git), l'implémentation de tests automatisés, et la communication régulière avec les clients pour s'assurer que les attentes sont alignées."
  },
  {
    question: "Quel est le rôle d’un freelance en développement IT dans un projet ?",
    answer: "Le freelance est responsable de la création, modification et maintenance des applications ou systèmes selon les exigences des clients. Il collabore souvent avec d'autres freelances ou équipes pour garantir l’intégration des différents composants du projet."
  },
  {
    question: "Quelles différences existent entre un freelance IT et un employé permanent ?",
    answer: "Un freelance doit gérer lui-même ses horaires, ses clients et ses projets, offrant une plus grande flexibilité mais aussi une instabilité potentielle. Un employé bénéficie d'une sécurité de l'emploi, mais avec moins de liberté concernant les projets et les horaires."
  },
  {
    question: "Comment les freelances en informatique peuvent-ils se démarquer sur les plateformes ?",
    answer: "Pour se démarquer, il est essentiel d'avoir un portfolio solide, des évaluations positives et des descriptions claires de vos compétences. Réseau, recommandations et participation active aux communautés en ligne sont également des stratégies bénéfiques."
  },
  {
    question: "Quels types de projets peuvent être sous-traités à des freelances IT ?",
    answer: "Les projets incluent le développement de sites web, la création d’applications mobiles, la mise en place d’APIs, le développement de logiciels personnalisés, et la gestion de bases de données."
  },
  {
    question: "Quelles plateformes sont recommandées pour trouver des missions de freelance en informatique ?",
    answer: "Des plateformes comme Upwork, Freelancer, Malt et Toptal sont idéales pour trouver des missions. Elles offrent des fonctionnalités qui facilitent la recherche de clients et le dépôt de propositions."
  },
  {
    question: "Comment assurer une bonne communication avec mes clients en freelance ?",
    answer: "Établissez des canaux de communication clairs dès le début du projet, utilisez des outils de gestion de projet et maintenez des mises à jour régulières. La transparence et la réactivité sont essentielles au succès d'une collaboration."
  },
  {
    question: "Quelles tendances actuelles influencent le freelancing en IT ?",
    answer: "Les tendances incluent l'augmentation de la demande pour les développeurs spécialisés en cloud computing, l'adoption des technologies no-code/low-code, et une forte demande pour la cybersécurité et le développement d'IA."
  },
  {
    question: "Quels langages de programmation sont les plus recherchés par les freelances en développement ?",
    answer: "Les langages les plus recherchés incluent JavaScript, Python, Ruby, Java et PHP. Le choix du langage dépend souvent des tendances du marché ainsi que des besoins spécifiques des projets clients."
  },
  {
    question: "Comment évaluer solide l'expertise d'un freelance IT ?",
    answer: "Pour évaluer l'expertise d'un freelance, examinez son portfolio, demandez des références clients, et vérifiez les avis sur les plateformes. Un entretien technique peut également vous apporter des informations sur ses compétences pratiques."
  },
  {
    question: "Quelle est l'importance de la documentation pour les projets informatiques ?",
    answer: "Une documentation claire est cruciale pour assurer que le code est compréhensible et maintenable. Elle facilite la collaboration avec d'autres développeurs et aide à la montée en compétence de nouvelles recrues."
  },
  {
    question: "Qu'est-ce qu'une API et quel est son rôle dans le développement freelance ?",
    answer: "Une API (Interface de Programmation d'Applications) permet à différents logiciels de communiquer. Pour un freelance, créer et gérer des APIs est essentiel pour assurer l'interaction entre le frontend et les backend des applications."
  },
  {
    question: "Quel est le rôle des bases de données dans les projets freelances ?",
    answer: "Les bases de données jouent un rôle crucial en tant que système de stockage des données pour les applications. Les freelances doivent être en mesure de concevoir, implémenter et gérer des bases de données pour garantir la fonctionnalité des applications."
  },
  {
    question: "Comment assurer la scalabilité des projets en freelance ?",
    answer: "Pour assurer la scalabilité, un freelance doit concevoir des architectures modulaires, utiliser des solutions cloud et optimiser les performances de la base de données afin de gérer une augmentation potentielle du nombre d'utilisateurs."
  },
  {
    question: "Quels défis rencontrent fréquemment les freelances IT ?",
    answer: "Les défis comprennent la recherche de clients, la gestion du temps et des délais, la négociation des tarifs, et le besoin constant de maintenir et d'améliorer ses compétences techniques face aux évolutions rapides du secteur."
  },
  {
    question: "Comment rester à jour avec les nouvelles technologies en informatique ?",
    answer: "Il est essentiel de suivre des cours en ligne, de participer à des webinaires, de lire des blogs et de s'engager dans des communautés professionnelles. Les plateformes comme GitHub, Stack Overflow et LinkedIn peuvent également fournir des informations précieuses."
  },
  {
    question: "Quel type d'environnement de travail un freelance en informatique peut-il attendre ?",
    answer: "Les freelances en informatique peuvent travailler soit à distance, soit au sein d'entreprises. Ce mode de travail flexible leur permet de choisir des projets qui leur conviennent tout en maintenant un équilibre travail-vie personnelle."
  },
  {
    question: "Comment un freelance peut-il négocier efficacement ses tarifs ?",
    answer: "Un freelance doit comprendre la valeur de ses compétences, avoir une connaissance des tarifs du marché et être capable de justifier ses tarifs en fournissant des exemples de succès antérieurs. La négociation doit être basée sur la transparence et le respect mutuel."
  }
];


// Case Studies Data
const caseStudiesData = [
  {
    title: "Transformation Digitale d'une Banque",
    description: "Modernisation complète du système bancaire legacy vers une architecture microservices, améliorant la scalabilité et réduisant les temps de déploiement de 80%.",
    metrics: [
      { value: "99.99%", label: "Disponibilité" },
      { value: "80%", label: "Réduction des coûts" },
      { value: "<100ms", label: "Latence" }
    ],
    techStack: ["Java", "Spring Boot", "Kubernetes", "MongoDB", "Kafka"]
  },
  {
    title: "Plateforme E-commerce Haute Performance",
    description: "Développement d'une architecture backend capable de gérer des pics de trafic pendant les périodes de vente, traitant plus de 100 000 transactions simultanées.",
    metrics: [
      { value: "100K+", label: "Transactions/sec" },
      { value: "99.9%", label: "Uptime" },
      { value: "2.5s", label: "Temps de réponse" }
    ],
    techStack: ["Node.js", "Redis", "PostgreSQL", "Docker", "AWS", "freelance node js", "freelancing with python"]
  },
  {
    title: "Système de Paiement Sécurisé",
    description: "Création d'une infrastructure de paiement conforme PCI DSS avec encryption de bout en bout et capable de traiter des millions de transactions par jour.",
    metrics: [
      { value: "1M+", label: "Transactions/jour" },
      { value: "0", label: "Incidents" },
      { value: "PCI DSS", label: "Conformité" }
    ],
    techStack: ["Python", "Django", "PostgreSQL", "RabbitMQ", "AWS", "developpeur python"]
  }
];


// Industry Solutions Data
const industrySolutionsData = [
  {
    title: "Finance & Fintech",
    description: "Solutions backend sécurisées et conformes pour le secteur financier, avec traitement des transactions en temps réel et protection des données sensibles.",
    icon: <DollarSign size={30} />,
    solutions: [
      "Systèmes de paiement sécurisés",
      "APIs bancaires ouvertes (Open Banking)",
      "Moteurs de trading haute fréquence",
      "Détection de fraude en temps réel",
      "Conformité réglementaire automatisée"
    ]
  },
  {
    title: "E-commerce & Retail",
    description: "Infrastructures backend évolutives pour gérer les pics de trafic, optimiser les conversions et offrir une expérience d'achat personnalisée.",
    icon: <ShoppingCart size={30} />,
    solutions: [
      "Moteurs de recommandation personnalisés",
      "Gestion d'inventaire en temps réel",
      "Systèmes de panier et checkout optimisés",
      "Intégration multi-marketplace",
      "Analyses comportementales avancées"
    ]
  },
  {
    title: "Santé & Médical",
    description: "Solutions backend conformes HIPAA pour la gestion sécurisée des données médicales et l'optimisation des processus de soins.",
    icon: <Heart size={30} />,
    solutions: [
      "Dossiers médicaux électroniques sécurisés",
      "Systèmes de télémédecine",
      "Analyse prédictive des soins",
      "Gestion des rendez-vous et ressources",
      "Intégration d'appareils médicaux connectés"
    ]
  },
  {
    title: "IoT & Industrie 4.0",
    description: "Infrastructures backend pour la collecte, l'analyse et la visualisation des données massives générées par les appareils connectés.",
    icon: <Cpu size={30} />,
    solutions: [
      "Plateformes de gestion d'appareils",
      "Traitement de données en temps réel",
      "Maintenance prédictive",
      "Jumeaux numériques",
      "Optimisation de la chaîne d'approvisionnement"
    ]
  },
  {
    title: "SaaS & Applications Cloud",
    description: "Architectures backend multi-tenant hautement évolutives pour les applications SaaS avec isolation des données et facturation automatisée.",
    icon: <Cloud size={30} />,
    solutions: [
      "Architectures multi-tenant sécurisées",
      "Systèmes de facturation et abonnement",
      "Intégrations via webhooks et APIs",
      "Scaling automatique basé sur l'usage",
      "Analytics et reporting avancés"
    ]
  },
  {
    title: "Médias & Streaming",
    description: "Solutions backend pour la diffusion de contenu à grande échelle, avec optimisation de la bande passante et expérience utilisateur fluide.",
    icon: <Film size={30} />,
    solutions: [
      "Plateformes de streaming optimisées",
      "Systèmes de recommandation de contenu",
      "Transcoding et adaptation de qualité",
      "Distribution via CDN global",
      "Monétisation et gestion des droits"
    ]
  }
];

function Backend() {
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [difficultyFilter, setDifficultyFilter] = useState('Tous');
  const [durationFilter, setDurationFilter] = useState('Tous');
  const [rateFilter, setRateFilter] = useState('Tous');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);


  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };


  const skillCategories = [
    'Tous',
    'Langages',
    'Frameworks',
    'Bases de données',
    'Cloud',
    'DevOps'
  ];

  const skills = [
    {
      name: 'Node.js',
      level: 'Expert',
      category: 'Langages',
      description: 'Runtime JavaScript pour construire des applications backend scalables',
      icon: <Terminal size={20} />,
      certification: 'OpenJS Foundation'
    },
    {
      name: 'Python',
      level: 'Expert',
      category: 'Langages',
      description: 'Langage polyvalent pour le développement d\'application et data science',
      icon: <Code size={20} />,
      certification: 'Python Institute'
    },
    {
      name: 'Ruby',
      level: 'Avancé',
      category: 'Langages',
      description: 'Langage élégant pour le développement web rapide',
      icon: <Code size={20} />
    },
    {
      name: 'PHP',
      level: 'Intermédiaire',
      category: 'Langages',
      description: 'Langage de script côté serveur pour le développement web',
      icon: <Code size={20} />
    },
    {
      name: 'Go',
      level: 'Intermédiaire',
      category: 'Langages',
      description: 'Langage compilé pour systèmes distribués et microservices',
      icon: <Code size={20} />,
      certification: 'Google Certified'
    },
    {
      name: 'Java',
      level: 'Avancé',
      category: 'Langages',
      description: 'Langage robuste pour applications d\'entreprise',
      icon: <Code size={20} />,
      certification: 'Oracle Certified'
    },
    {
      name: 'C++',
      level: 'Avancé',
      category: 'Langages',
      description: 'Langage performant pour systèmes à haute performance',
      icon: <Code size={20} />
    },
    {
      name: 'Laravel',
      level: 'Expert',
      category: 'Frameworks',
      description: 'Framework PHP élégant pour développement web rapide',
      icon: <Layout size={20} />
    },
    {
      name: 'Django',
      level: 'Expert',
      category: 'Frameworks',
      description: 'Framework Python complet pour applications web',
      icon: <Layout size={20} />
    },
    {
      name: 'Express.js',
      level: 'Expert',
      category: 'Frameworks',
      description: 'Framework minimaliste pour Node.js',
      icon: <Layout size={20} />
    },
    {
      name: 'Spring Boot',
      level: 'Avancé',
      category: 'Frameworks',
      description: 'Framework Java pour microservices et applications cloud',
      icon: <Layout size={20} />,
      certification: 'Pivotal Certified'
    },
    {
      name: 'MongoDB',
      level: 'Expert',
      category: 'Bases de données',
      description: 'Base de données NoSQL orientée documents',
      icon: <Database size={20} />,
      certification: 'MongoDB Certified'
    },
    {
      name: 'PostgreSQL',
      level: 'Expert',
      category: 'Bases de données',
      description: 'SGBD relationnel avancé et extensible',
      icon: <Database size={20} />
    },
    {
      name: 'Redis',
      level: 'Avancé',
      category: 'Bases de données',
      description: 'Store de données en mémoire pour cache et messagerie',
      icon: <Database size={20} />
    },
    {
      name: 'AWS',
      level: 'Expert',
      category: 'Cloud',
      description: 'Suite complète de services cloud',
      icon: <Cloud size={20} />,
      certification: 'AWS Certified Solutions Architect'
    },
    {
      name: 'Docker',
      level: 'Expert',
      category: 'DevOps',
      description: 'Plateforme de conteneurisation pour applications',
      icon: <Server size={20} />,
      certification: 'Docker Certified Associate'
    }
  ];

  const filteredSkills = activeCategory === 'Tous'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

    const projects = [
      {
          title: 'Système de Microservices',
          description: 'Architecture distribuée avec communication asynchrone pour des applications hautement scalables. Idéal pour les entreprises cherchant à moderniser leur infrastructure backend.',
          tech: ['Node.js', 'RabbitMQ', 'Docker', 'MongoDB', 'freelance node js'],
          icon: <Network size={24} />,
          metrics: [
              { icon: <Server size={16} />, value: '12', label: 'Services' },
              { icon: <Users size={16} />, value: '10K+', label: 'Utilisateurs' },
              { icon: <Zap size={16} />, value: '99.9%', label: 'Uptime' }
          ],
          arch: [
              { icon: <Globe size={16} />, name: 'API Gateway' },
              { icon: <Server size={16} />, name: 'Services' },
              { icon: <Database size={16} />, name: 'MongoDB' }
          ]
      },
      {
          title: 'Plateforme IoT',
          description: 'Backend pour la gestion de millions d\'appareils connectés avec traitement en temps réel. Adaptée pour les solutions innovantes dans le secteur IoT.',
          tech: ['Python', 'MQTT', 'Redis', 'InfluxDB', 'freelance python'],
          icon: <Cpu size={24} />,
          metrics: [
              { icon: <Cpu size={16} />, value: '2M+', label: 'Appareils' },
              { icon: <Activity size={16} />, value: '500K', label: 'Msg/sec' },
              { icon: <Clock size={16} />, value: '<10ms', label: 'Latence' }
          ],
          arch: [
              { icon: <Cpu size={16} />, name: 'Devices' },
              { icon: <Server size={16} />, name: 'MQTT Broker' },
              { icon: <Database size={16} />, name: 'InfluxDB' }
          ]
      },
      {
          title: 'API de Paiement Sécurisée',
          description: 'Mise en place d\'un système de traitement des paiements multi-devises avec haute disponibilité et sécurité intégrée.',
          tech: ['Ruby', 'PostgreSQL', 'Redis', 'Stripe', 'freelance java'],
          icon: <DollarSign size={24} />,
          metrics: [
              { icon: <DollarSign size={16} />, value: '€2M+', label: 'Transactions' },
              { icon: <Shield size={16} />, value: 'PCI DSS', label: 'Sécurité' },
              { icon: <Globe size={16} />, value: '15+', label: 'Pays' }
          ],
          arch: [
              { icon: <Globe size={16} />, name: 'API' },
              { icon: <Shield size={16} />, name: 'Sécurité' },
              { icon: <Database size={16} />, name: 'PostgreSQL' }
          ]
      },
      {
          title: 'Moteur de Recherche Intelligent',
          description: 'Développez un moteur de recherche pour l\'indexation et la recherche de millions de documents avec des suggestions intelligentes.',
          tech: ['PHP', 'Elasticsearch', 'FastAPI', 'freelance backend developer'],
          icon: <Search size={24} />,
          metrics: [
              { icon: <Database size={16} />, value: '50M+', label: 'Documents' },
              { icon: <Clock size={16} />, value: '<100ms', label: 'Recherche' },
              { icon: <BarChart size={16} />, value: '99%', label: 'Précision' }
          ],
          arch: [
              { icon: <Globe size={16} />, name: 'API' },
              { icon: <Server size={16} />, name: 'FastAPI' },
              { icon: <Database size={16} />, name: 'Elasticsearch' }
          ]
      },
      {
          title: 'Pipeline ETL pour Traitement de Données Massives',
          description: 'Concevoir un pipeline ETL pour le traitement de données massives en temps réel, optimisé pour des analyses prédictives.',
          tech: ['Go', 'Apache Spark', 'Airflow', 'freelance dev java'],
          icon: <Activity size={24} />,
          metrics: [
              { icon: <Database size={16} />, value: '5TB+', label: 'Données/jour' },
              { icon: <Clock size={16} />, value: '15min', label: 'Latence' },
              { icon: <Server size={16} />, value: '99.9%', label: 'Fiabilité' }
          ],
          arch: [
              { icon: <Database size={16} />, name: 'Sources' },
              { icon: <Server size={16} />, name: 'Spark' },
              { icon: <Database size={16} />, name: 'Data Lake' }
          ]
      },
      {
          title: 'API GraphQL pour Applications Mobiles',
          description: 'Développez un backend flexible avec GraphQL pour optimiser les requêtes des applications mobiles.',
          tech: ['Java', 'GraphQL', 'PostgreSQL', 'developpeur java freelance'],
          icon: <Code size={24} />,
          metrics: [
              { icon: <Users size={16} />, value: '500K+', label: 'Utilisateurs' },
              { icon: <Clock size={16} />, value: '<50ms', label: 'Latence' },
              { icon: <Activity size={16} />, value: '10K+', label: 'Req/sec' }
          ],
          arch: [
              { icon: <Globe size={16} />, name: 'Client' },
              { icon: <Server size={16} />, name: 'GraphQL' },
              { icon: <Database size={16} />, name: 'PostgreSQL' }
          ]
      },
      {
          title: 'Configuration de l\'Infrastructure IT avec des Meilleures Pratiques',
          description: 'Mise en place d\'une infrastructure IT conforme aux meilleures pratiques pour la sécurité et la performance.',
          tech: ['Linux', 'Security', 'Networking', 'Automation', 'freelance java full remote'],
          icon: <Settings size={24} />,
          metrics: [
              { icon: <Server size={16} />, value: '20+', label: 'Serveurs' },
              { icon: <Users size={16} />, value: '5K+', label: 'Clients' },
              { icon: <Zap size={16} />, value: '100%', label: 'Satisfaction' }
          ],
          arch: [
              { icon: <Globe size={16} />, name: 'Gestion IT' },
              { icon: <Database size={16} />, name: 'Stockage' },
              { icon: <Server size={16} />, name: 'Sécurité' }
          ]
      },
      {
          title: 'Solution de Gestion des Utilisateurs',
          description: 'Mise en place d\'un backend sécurisé pour la gestion des utilisateurs, incluant l\'authentification, l\'autorisation et la gestion des rôles.',
          tech: ['Java', 'Spring Boot', 'MySQL', 'freelance python'],
          icon: <Users size={24} />,
          metrics: [
              { icon: <Users size={16} />, value: '100K+', label: 'Utilisateurs' },
              { icon: <Shield size={16} />, value: '0', label: 'Incidents de sécurité' },
              { icon: <Clock size={16} />, value: '100%', label: 'Satisfaction' }
          ],
          arch: [
              { icon: <Globe size={16} />, name: 'API Utilisateurs' },
              { icon: <Server size={16} />, name: 'Gestion des Rôles' },
              { icon: <Database size={16} />, name: 'MySQL' }
          ]
      },
      {
          title: 'Application de Suivi des Tâches',
          description: 'Développement d\'une application backend pour gérer le suivi des tâches, avec notifications en temps réel pour les utilisateurs.',
          tech: ['Python', 'Flask', 'Redis', 'freelancing with python'],
          icon: <Clipboard size={24} />,
          metrics: [
              { icon: <Users size={16} />, value: '50K+', label: 'Utilisateurs' },
              { icon: <Clock size={16} />, value: '<200ms', label: 'Réactivité' },
              { icon: <Activity size={16} />, value: '5K+', label: 'Tâches/jour' }
          ],
          arch: [
              { icon: <Globe size={16} />, name: 'API Tâches' },
              { icon: <Server size={16} />, name: 'Flask' },
              { icon: <Database size={16} />, name: 'Redis' }
          ]
      },
      {
          title: 'Système de Gestion de Contenu (CMS)',
          description: 'Mise en place d\'un backend pour un système de gestion de contenu, permettant aux utilisateurs de créer et de gérer leur contenu facilement.',
          tech: ['Node.js', 'Express', 'MongoDB', 'freelance java developer'],
          icon: <FileText size={24} />,
          metrics: [
              { icon: <Database size={16} />, value: '1M+', label: 'Articles' },
              { icon: <Users size={16} />, value: '20K+', label: 'Utilisateurs' },
              { icon: <Clock size={16} />, value: '<100ms', label: 'Chargement' }
          ],
          arch: [
              { icon: <Globe size={16} />, name: 'API CMS' },
              { icon: <Server size={16} />, name: 'Système de Gestion' },
              { icon: <Database size={16} />, name: 'MongoDB' }
          ]
      },
      {
          title: 'Application de Réservation en Ligne',
          description: 'Développement d\'une application backend pour la réservation de services, intégrant un calendrier et des notifications par e-mail.',
          tech: ['PHP', 'MySQL', 'Laravel', 'freelance node js'],
          icon: <Calendar size={24} />,
          metrics: [
              { icon: <Users size={16} />, value: '10K+', label: 'Réservations' },
              { icon: <Clock size={16} />, value: '<50ms', label: 'Latence' },
              { icon: <Activity size={16} />, value: '1K+', label: 'Req/sec' }
          ],
          arch: [
              { icon: <Globe size={16} />, name: 'API Réservation' },
              { icon: <Server size={16} />, name: 'Laravel' },
              { icon: <Database size={16} />, name: 'MySQL' }
          ]
      } ,
      {
        title: 'Système de Gestion des Inventaires',
        description: 'Développement d\'une application backend pour la gestion des stocks, permettant la saisie, le suivi et les alertes de réapprovisionnement.',
        tech: ['Node.js', 'Express', 'MongoDB', 'freelance python'],
        icon: <Clipboard size={24} />,
        metrics: [
            { icon: <Database size={16} />, value: '500+', label: 'Produits' },
            { icon: <Users size={16} />, value: '5K+', label: 'Utilisateurs' },
            { icon: <Activity size={16} />, value: '2K+', label: 'Req/sec' }
        ],
        arch: [
            { icon: <Globe size={16} />, name: 'API Inventaire' },
            { icon: <Server size={16} />, name: 'Node.js' },
            { icon: <Database size={16} />, name: 'MongoDB' }
        ]
    }
  ];

  const education = [
    {
      degree: 'Formation débutant Node.js',
      year: '3 jours',
      description: 'Introduction aux bases du développement en Node.js et initiation aux architectures performantes. Apprenez à construire des APIs RESTful et à utiliser les modules essentiels.',
      icon: <Terminal size={24} />,
      skills: ['JavaScript', 'Express.js', 'npm', 'API REST'],
      level: 'Débutant'
    },
    {
      degree: 'Formation débutant Java',
      year: '5 jours',
      description: "Découverte des concepts clés de Java, y compris l'algorithmique et les bases de données. Maîtrisez les fondamentaux de la programmation orientée objet et les design patterns.",
      icon: <Code size={24} />,
      skills: ['Java', 'OOP', 'JDBC', 'Maven'],
      level: 'Débutant'
    },
    {
      degree: 'Formation débutant Ruby',
      year: '2 jours',
      description: 'Exploration des fondamentaux de Ruby avec un accent sur les pratiques DevOps. Apprenez à créer des scripts d\'automatisation et à intégrer Ruby dans votre workflow.',
      icon: <Code size={24} />,
      skills: ['Ruby', 'Gems', 'Scripting', 'DevOps'],
      level: 'Débutant'
    },
    {
      degree: 'Formation Laravel',
      year: '2 jours',
      description: 'Apprentissage des techniques de développement d\'application avec Laravel. Maîtrisez l\'ORM Eloquent, le système de routing et l\'architecture MVC.',
      icon: <Layout size={24} />,
      skills: ['PHP', 'Laravel', 'Eloquent', 'Blade'],
      level: 'Intermédiaire'
    },
    {
      degree: 'Formation Go',
      year: '3 jours',
      description: 'Initiation aux applications cloud avec le langage Go et services AWS. Apprenez à développer des microservices performants et à déployer sur le cloud.',
      icon: <Cloud size={24} />,
      skills: ['Go', 'AWS', 'Microservices', 'Docker'],
      level: 'Intermédiaire'
    }
  ];

  const contracts = [
    {
        icon: <Database size={20} />,
        title: "Architecture de Microservices",
        description: "Conception et mise en œuvre d'une architecture microservices hautement disponible, permettant une communication asynchrone entre les services pour une scalabilité optimale.",
        difficulty: "Avancé",
        skills: ["Node.js", "RabbitMQ", "MongoDB", "Docker", "freelance node js"],
        rate: "750€",
        duration: "5 jours",
        details: [
            { icon: <Users size={16} />, text: "Équipe de 3-5 développeurs" },
            { icon: <Globe size={16} />, text: "Travail à distance possible" },
            { icon: <CheckCircle size={16} />, text: "Expérience en architecture distribuée requise" }
        ]
    },
    {
        icon: <Server size={20} />,
        title: "Développement d'une API REST Scalabile",
        description: "Création d'une API REST robuste et performante, capable de gérer des millions d'utilisateurs avec un temps de réponse rapide pour une application mobile.",
        difficulty: "Intermédiaire",
        skills: ["Python", "FastAPI", "PostgreSQL", "Redis", "freelance python"],
        rate: "1650€",
        duration: "2 mois",
        details: [
            { icon: <Users size={16} />, text: "Développeur senior" },
            { icon: <Globe size={16} />, text: "Travail hybride" },
            { icon: <CheckCircle size={16} />, text: "Expérience en optimisation de performance" }
        ]
    },
    {
        icon: <Globe size={20} />,
        title: "Système de Paiement Sécurisé",
        description: "Intégration d'un système de paiement performant et multi-providers, incluant la gestion sécurisée des transactions internationales.",
        difficulty: "Avancé",
        skills: ["Java", "Spring Boot", "Stripe", "MySQL", "freelance java"],
        rate: "300€",
        duration: "3 jours",
        details: [
            { icon: <Users size={16} />, text: "Équipe de 2-3 développeurs" },
            { icon: <Shield size={16} />, text: "Certification PCI DSS requise" },
            { icon: <CheckCircle size={16} />, text: "Expérience en sécurité des paiements" }
        ]
    },
    {
        icon: <Shield size={20} />,
        title: "Implémentation d'Authentification OAuth2",
        description: "Mise en œuvre d'un système d'authentification sécurisé, supportant multi-tenants et SSO pour améliorer l'expérience utilisateur.",
        difficulty: "Intermédiaire",
        skills: ["Node.js", "JWT", "OAuth2", "MongoDB", "freelancing with python"],
        rate: "200€",
        duration: "2 jours",
        details: [
            { icon: <Users size={16} />, text: "Développeur senior" },
            { icon: <Shield size={16} />, text: "Expérience en sécurité requise" },
            { icon: <CheckCircle size={16} />, text: "Connaissance des standards OAuth2/OIDC" }
        ]
    },
    {
        icon: <Cpu size={20} />,
        title: "Développement d'un Moteur de Recherche Avancé",
        description: "Création d'un moteur de recherche en temps réel capable d'indexer et de rechercher des millions de documents avec des suggestions et correction orthographique intelligentes.",
        difficulty: "Avancé",
        skills: ["Elasticsearch", "Python", "Redis", "FastAPI"],
        rate: "2700€",
        duration: "3 mois",
        details: [
            { icon: <Users size={16} />, text: "Équipe de 2 développeurs" },
            { icon: <Database size={16} />, text: "Expérience avec big data" },
            { icon: <CheckCircle size={16} />, text: "Connaissance en NLP appréciée" }
        ]
    },
    {
        icon: <Cloud size={20} />,
        title: "Fonctions Serverless pour Traitement de Données",
        description: "Développement d'une architecture serverless pour le traitement de données avec intégration de services tiers pour une efficacité maximale.",
        difficulty: "Intermédiaire",
        skills: ["AWS Lambda", "Node.js", "DynamoDB", "API Gateway", "freelance java full remote"],
        rate: "1250€",
        duration: "2 semaines",
        details: [
            { icon: <Users size={16} />, text: "Développeur indépendant" },
            { icon: <Cloud size={16} />, text: "Certification AWS souhaitée" },
            { icon: <CheckCircle size={16} />, text: "Expérience en architecture cloud" }
        ]
    },
    {
        icon: <Network size={20} />,
        title: "Mise en Place d'un Message Broker",
        description: "Développement d'un système de messagerie asynchrone pour faciliter la communication inter-services de manière scalable.",
        difficulty: "Avancé",
        skills: ["Apache Kafka", "Java", "ZooKeeper", "Spring", "freelance node.js"],
        rate: "150€",
        duration: "3 jours",
        details: [
            { icon: <Users size={16} />, text: "Équipe de 2-3 développeurs" },
            { icon: <Activity size={16} />, text: "Expérience en systèmes distribués" },
            { icon: <CheckCircle size={16} />, text: "Connaissance de Kafka en production" }
        ]
    },
    {
        icon: <Lock size={20} />,
        title: "Système de Contrôle d'Accès Basé sur les Rôles (RBAC)",
        description: "Implémentation d'un système de contrôle d'accès basé sur les rôles pour gérer finement les permissions des utilisateurs.",
        difficulty: "Intermédiaire",
        skills: ["Node.js", "PostgreSQL", "Redis", "JWT"],
        rate: "100€",
        duration: "2 jours",
        details: [
            { icon: <Users size={16} />, text: "Développeur senior" },
            { icon: <Shield size={16} />, text: "Expérience en sécurité" },
            { icon: <CheckCircle size={16} />, text: "Connaissance des modèles RBAC/ABAC" }
        ]
    },
    {
        icon: <Activity size={20} />,
        title: "Analytics en Temps Réel",
        description: "Création d'un pipeline d'analyse de données en temps réel pour offrir des insights via des tableaux de bord analytiques.",
        difficulty: "Avancé",
        skills: ["Python", "Apache Spark", "Kafka", "Cassandra", "freelance python"],
        rate: "800€",
        duration: "5 jours",
        details: [
            { icon: <Users size={16} />, text: "Équipe de 3-4 développeurs" },
            { icon: <Database size={16} />, text: "Expérience en big data" },
            { icon: <CheckCircle size={16} />, text: "Connaissance en data engineering" }
        ]
    },
    {
        icon: <Binary size={20} />,
        title: "Implementation d'API GraphQL Optimisée",
        description: "Développement d'une API GraphQL optimisée, capable de résoudre efficacement les requêtes et de gérer des données complexes.",
        difficulty: "Avancé",
        skills: ["Node.js", "GraphQL", "MongoDB", "Redis", "freelance java developer"],
        rate: "1700€",
        duration: "1 mois",
        details: [
            { icon: <Users size={16} />, text: "Équipe de 2 développeurs" },
            { icon: <Code size={16} />, text: "Expérience en API design" },
            { icon: <CheckCircle size={16} />, text: "Connaissance approfondie de GraphQL" }
        ]
    },
    // Nouveaux contrats
    {
        icon: <Clipboard size={20} />,
        title: "Développement d'une Application de Réservation",
        description: "Mise en place d'un backend pour une application de réservation en ligne, avec intégration de notifications et gestion des disponibilités.",
        difficulty: "Intermédiaire",
        skills: ["PHP", "Laravel", "MySQL", "freelance node js"],
        rate: "1650€",
        duration: "2 mois",
        details: [
            { icon: <Users size={16} />, text: "Équipe de 2 développeurs" },
            { icon: <Globe size={16} />, text: "Travail à distance possible" },
            { icon: <CheckCircle size={16} />, text: "Expérience en e-commerce appréciée" }
        ]
    },
    {
        icon: <FileText size={20} />,
        title: "Création d'un CMS Sur Mesure",
        description: "Développement d'un système de gestion de contenu personnalisé pour la création et gestion de pages web.",
        difficulty: "Avancé",
        skills: ["JavaScript", "React", "Node.js", "MongoDB", "freelance java"],
        rate: "5800€",
        duration: "4 mois",
        details: [
            { icon: <Users size={16} />, text: "Équipe de 3 développeurs" },
            { icon: <Database size={16} />, text: "Expérience en développement web" },
            { icon: <CheckCircle size={16} />, text: "Connaissance en SEO appréciée" }
        ]
    },
    {
        icon: <Video size={20} />,
        title: "Plateforme de Streaming Multimedia",
        description: "Mise en place d'un backend pour une plateforme de streaming vidéo, intégrant des fonctionnalités de recommandation.",
        difficulty: "Avancé",
        skills: ["Python", "Flask", "PostgreSQL", "Docker", "freelancing with python"],
        rate: "5900€",
        duration: "5 mois",
        details: [
            { icon: <Users size={16} />, text: "Équipe de 4-5 développeurs" },
            { icon: <Globe size={16} />, text: "Travail hybride" },
            { icon: <CheckCircle size={16} />, text: "Expérience en vidéo streaming requise" }
        ]
    },
    {
        icon: <Binary size={20} />,
        title: "Système de Gestion de Tâches avec Notification",
        description: "Développement d'une application de gestion de tâches avec système de notification intégré et gestion des utilisateurs.",
        difficulty: "Intermédiaire",
        skills: ["Node.js", "Socket.io", "MongoDB", "freelance python"],
        rate: "650€",
        duration: "2 jours",
        details: [
            { icon: <Users size={16} />, text: "Développeur junior à senior" },
            { icon: <CheckCircle size={16} />, text: "Expérience en développement d'applications" },
            { icon: <Shield size={16} />, text: "Connaissance en sécurité" }
        ]
    },
    {
        icon: <BarChart size={20} />,
        title: "Solution de Business Intelligence",
        description: "Implémentation d'une solution de BI pour aider les entreprises à analyser leurs données afin de prendre des décisions éclairées.",
        difficulty: "Avancé",
        skills: ["SQL", "Python", "BI Tools", "Tableau", "freelance java developer"],
        rate: "3800€",
        duration: "4 mois",
        details: [
            { icon: <Users size={16} />, text: "Équipe de 3-5 analystes" },
            { icon: <Activity size={16} />, text: "Expérience en Business Intelligence" },
            { icon: <CheckCircle size={16} />, text: "Connaissance en visualisation de données" }
        ]
    }
];

  const filteredContracts = contracts.filter(contract => {
    if (difficultyFilter !== 'Tous' && contract.difficulty !== difficultyFilter) return false;
    if (durationFilter !== 'Tous') {
      const [min, max] = contract.duration.split('-').map(d => parseInt(d));
      const [filterMin, filterMax] = durationFilter.split('-').map(d => parseInt(d));
      if (min > filterMax || max < filterMin) return false;
    }
    if (rateFilter !== 'Tous') {
      const rate = parseInt(contract.rate.replace('€', ''));
      if (rateFilter === '<600€' && rate >= 600) return false;
      if (rateFilter === '600€-700€' && (rate < 600 || rate > 700)) return false;
      if (rateFilter === '>700€' && rate <= 700) return false;
    }
    return true;
  });

  const architectureLayers = [
    { icon: <Globe size={16} />, name: "API Gateway" },
    { icon: <Server size={16} />, name: "Microservices" },
    { icon: <Database size={16} />, name: "Database" },
    { icon: <Cloud size={16} />, name: "Cloud Infrastructure" }
  ];

  const techCategories = [
    {
      title: 'Langages de Programmation',
      description: 'Les langages backend permettent de développer la logique métier, traiter les données et interagir avec les bases de données et services externes.',
      icon: <Code size={30} />,
      technologies: [
        'JavaScript/Node.js',
        'Python',
        'Java',
        'Go',
        'Ruby',
        'PHP',
        'C#/.NET'
      ]
    },
    {
      title: 'Bases de Données',
      description: 'Les systèmes de stockage et de gestion de données sont essentiels pour toute application backend, qu\'ils soient relationnels ou NoSQL.',
      icon: <Database size={30} />,
      technologies: [
        'PostgreSQL',
        'MySQL/MariaDB',
        'MongoDB',
        'Redis',
        'Elasticsearch',
        'Cassandra',
        'DynamoDB'
      ]
    },
    {
      title: 'Frameworks & Librairies',
      description: 'Les frameworks backend accélèrent le développement en fournissant des structures et fonctionnalités prêtes à l\'emploi.',
      icon: <Layout size={30} />,
      technologies: [
        'Express.js',
        'Django',
        'Spring Boot',
        'Laravel',
        'Ruby on Rails',
        'FastAPI',
        'NestJS'
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Les services cloud permettent de déployer, gérer et faire évoluer les applications backend de manière flexible et évolutive.',
      icon: <Cloud size={30} />,
      technologies: [
        'AWS',
        'Google Cloud',
        'Azure',
        'Kubernetes',
        'Docker',
        'Serverless',
        'Terraform'
      ]
    },
    {
      title: 'APIs & Communication',
      description: 'Les technologies d\'API et de communication permettent l\'échange de données entre services et applications.',
      icon: <Globe size={30} />,
      technologies: [
        'REST',
        'GraphQL',
        'gRPC',
        'WebSockets',
        'RabbitMQ',
        'Apache Kafka',
        'MQTT'
      ]
    },
    {
      title: 'DevOps & Monitoring',
      description: 'Les outils DevOps et de monitoring assurent le déploiement continu, la surveillance et la maintenance des applications backend.',
      icon: <Activity size={30} />,
      technologies: [
        'CI/CD Pipelines',
        'Prometheus',
        'Grafana',
        'ELK Stack',
        'New Relic',
        'Jenkins',
        'GitHub Actions'
      ]
    }
  ];
  
  return (
    <>
         <Helmet>
              <title>Trouver un Freelance informatique </title>
              <meta name="description" content="Découvrez les meilleures freelances d'informatique , Developpeurs backend, des experts en développement Java, Node.js et Python pour vos projets." />
              <meta name="keywords" content="freelance informatique , freelance app ,freelance application , freelance java,freelance prestation de service , freelance digital, freelance ia , freelance hubspot, freelance power bi ,freelance webmaster, freelance business analyst, freelance webflow , backend freelance, freelance backend developer, backend developer freelance, développeur java, développeur node, développeur python, python développeur, freelance python, freelancing with python, python freelance, freelancer java, java freelance, freelance java, développeur java freelance, développeur java freelance, freelance dev java, freelance java developer, freelance java full remote, freelance node js developer, node js freelance, freelance node js, freelance node.js, développeur node freelance" />
              <link rel="canonical" href="https://itgalaxy.io/freelance-informatique" />
              <meta property="og:title" content="Plateforme Freelance Backend | Recrutement de Freelances et Agences" />
              <meta property="og:description" content="Trouvez des freelances qualifiés en backend et des agences expertes pour le développement de solutions personnalisées." />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://itgalaxy.io/freelance-informatique" />
              <meta property="og:locale" content="fr_FR" />
              <meta property="og:site_name" content="ItGalaxy.io" />
              <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/freelance-informatique" />
              <link rel="alternate" hreflang="en" href="https://itgalaxy.io/freelance-informatique" />
         </Helmet>

      <Header />
      <GlobalStyle />
      <Container>
        <HeroSection>
          <HeroContent>
            <HeroTitle>Experts Freelance d'informatique</HeroTitle>
            <HeroSubtitle>Architectes techniques spécialisés dans la conception et l'implémentation d'infrastructures backend robustes, évolutives et performantes.</HeroSubtitle>

            <ArchitectureVisual>
              {architectureLayers.map((layer, index) => (
                <ArchLayer key={index} index={index}>
                  {layer.icon} {layer.name}
                </ArchLayer>
              ))}
            </ArchitectureVisual>
            <ButtonGroup>
              <Button  onClick={() => window.location.href = `/search/prestataires` }>
                Explorer nos Experts freelances d'informatique 
                <ChevronRight size={20} />
              </Button>
              <Button onClick={handleModalRegister}>
                Explorer les missions partagées
                <ChevronRight size={20} />
              </Button>
            </ButtonGroup>
          </HeroContent>
        </HeroSection>
        <CardsPrestataires job={'DEVELOPER_BACKEND'}/>
        <ItGalaxyAsService />
        <SkillsSection>
          <SectionContent>
            <SkillsHeader>
              <SectionTitle>
                <Terminal />
                Compétences Techniques
              </SectionTitle>
              <SkillsDescription>
                Notre réseau d'experts backend maîtrise un large éventail de technologies pour concevoir et développer des infrastructures robustes, évolutives et performantes.
              </SkillsDescription>
              <SkillCategories>
                {skillCategories.map(category => (
                  <CategoryButton
                    key={category}
                    active={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </CategoryButton>
                ))}
              </SkillCategories>
            </SkillsHeader>

            <SkillsGrid>
              {filteredSkills.map((skill, index) => (
                <SkillCard key={index} onClick={() => handleModalRegister()}>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillTitle>{skill.name}</SkillTitle>
                  <SkillCategory>{skill.category}</SkillCategory>
                  <SkillDescription>{skill.description}</SkillDescription>
                  <div style={{ marginTop: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <ProgressBar>
                        <ProgressFill level={skill.level} />
                      </ProgressBar>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{skill.level}</span>
                    </div>
                    {skill.certification && (
                      <CertificationBadge>
                        <CheckCircle size={12} />
                        {skill.certification}
                      </CertificationBadge>
                    )}
                  </div>
                </SkillCard>
              ))}
            </SkillsGrid>
          </SectionContent>
        </SkillsSection>

        <TechCategoriesSection>
          <SectionContent>
            <TechCategoriesHeader>
              <SectionTitle>
                <Server />
                Catégories de Technologies
              </SectionTitle>
              <TechCategoriesDescription>
                Le développement d'application englobe un large éventail de technologies et d'outils spécialisés, chacun répondant à des besoins spécifiques dans l'architecture d'une application.
              </TechCategoriesDescription>
            </TechCategoriesHeader>

            <TechCategoriesGrid>
              {techCategories.map((category, index) => (
                <TechCategoryCard key={index}>
                  <TechCategoryHeader>
                    <TechCategoryIcon>{category.icon}</TechCategoryIcon>
                    <TechCategoryTitle>{category.title}</TechCategoryTitle>
                  </TechCategoryHeader>

                  <TechCategoryContent>
                    <TechCategoryDescription>{category.description}</TechCategoryDescription>

                    <TechList>
                      {category.technologies.map((tech, techIndex) => (
                        <TechItem key={techIndex}>
                          <CheckCircle size={16} />
                          {tech}
                        </TechItem>
                      ))}
                    </TechList>
                  </TechCategoryContent>
                </TechCategoryCard>
              ))}
            </TechCategoriesGrid>
          </SectionContent>
        </TechCategoriesSection>

        <ProjectsSection>
          <SectionContent>
            <ProjectsHeader>
              <SectionTitle>
                <Server />
                Projets Réalisés
              </SectionTitle>
              <ProjectsDescription>
                Découvrez les projets backend réalisés par nos experts, démontrant notre expertise technique et notre capacité à livrer des solutions robustes et performantes.
              </ProjectsDescription>
            </ProjectsHeader>

            <ProjectsGrid>
              {projects.map((project, index) => (
                <ProjectCard key={index} onClick={() => handleModalRegister()}>
                  <ProjectHeader>
                    <ProjectIcon>{project.icon}</ProjectIcon>
                    <ProjectTitle>{project.title}</ProjectTitle>
                  </ProjectHeader>

                  <ProjectContent>
                    <ProjectDescription>{project.description}</ProjectDescription>

                    <ArchDiagram>
                      <ArchConnection />
                      {project.arch.map((component, idx) => (
                        <ArchComponent key={idx}>
                          {component.icon}
                          <span>{component.name}</span>
                        </ArchComponent>
                      ))}
                    </ArchDiagram>

                    <ProjectMetrics>
                      {project.metrics.map((metric, idx) => (
                        <ProjectMetric key={idx}>
                          {metric.icon}
                          <MetricValue>{metric.value}</MetricValue>
                          <MetricLabel>{metric.label}</MetricLabel>
                        </ProjectMetric>
                      ))}
                    </ProjectMetrics>

                    <TechTags>
                      {project.tech.map((tech, techIndex) => (
                        <TechTag key={techIndex}>{tech}</TechTag>
                      ))}
                    </TechTags>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </SectionContent>
        </ProjectsSection>

        <ContractsSection>
          <SectionContent>
            <ContractsHeader>
              <SectionTitle>
                <Terminal />
                Exemples des projets Freelances réalisés
              </SectionTitle>
              <ContractsDescription>
                Découvrez nos missions backend et participez à des projets innovants. Filtrez par difficulté, durée ou tarif pour trouver la mission idéale.
              </ContractsDescription>

              <FiltersContainer>
                <FilterGroup>
                  <FilterLabel>Difficulté</FilterLabel>
                  <FilterSelect
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                  >
                    <option value="Tous">Tous</option>
                    <option value="Facile">Facile</option>
                    <option value="Intermédiaire">Intermédiaire</option>
                    <option value="Avancé">Avancé</option>
                  </FilterSelect>
                </FilterGroup>

                <FilterGroup>
                  <FilterLabel>Durée</FilterLabel>
                  <FilterSelect
                    value={durationFilter}
                    onChange={(e) => setDurationFilter(e.target.value)}
                  >
                    <option value="Tous">Tous</option>
                    <option value="1-2">1-2 jours</option>
                    <option value="2-4">2-4 jours</option>
                    <option value="4-6">4-6 jours</option>
                  </FilterSelect>
                </FilterGroup>

                <FilterGroup>
                  <FilterLabel>Tarif journalier</FilterLabel>
                  <FilterSelect
                    value={rateFilter}
                    onChange={(e) => setRateFilter(e.target.value)}
                  >
                    <option value="Tous">Tous</option>
                    <option value="<600€">{'< 600€'}</option>
                    <option value="600€-700€">600€ - 700€</option>
                    <option value=">700€">{"> 700€"}</option>
                  </FilterSelect>
                </FilterGroup>
              </FiltersContainer>
            </ContractsHeader>

            <ContractsGrid>
              {filteredContracts.map((contract, index) => (
                <ContractCard key={index} onClick={() => handleModalRegister()}>
                  <ContractHeader>
                    <ContractIcon>{contract.icon}</ContractIcon>
                    <ContractDifficulty difficulty={contract.difficulty}>
                      {contract.difficulty}
                    </ContractDifficulty>
                  </ContractHeader>
                  <ContractTitle>{contract.title}</ContractTitle>
                  <ContractDescription>{contract.description}</ContractDescription>

                  <ContractDetails>
                    {contract.details.map((detail, idx) => (
                      <ContractDetail key={idx}>
                        {detail.icon}
                        <span>{detail.text}</span>
                      </ContractDetail>
                    ))}
                  </ContractDetails>

                  <ContractSkills>
                    {contract.skills.map((skill, skillIndex) => (
                      <TechTag key={skillIndex}>{skill}</TechTag>
                    ))}
                  </ContractSkills>
                  <ContractFooter>
                    <Rate>
                      <DollarSign />
                      {contract.rate}
                    </Rate>
                    <Duration>
                      <Clock />
                      {contract.duration}
                    </Duration>
                  </ContractFooter>
                </ContractCard>
              ))}
            </ContractsGrid>

            {filteredContracts.length > 6 && (
              <ShowMoreButton onClick={handleModalRegister}>
                Voir plus de missions
                <ChevronDown size={20} />
              </ShowMoreButton>
            )}
          </SectionContent>
        </ContractsSection>

        <EducationSection>
          <SectionContent>
            <EducationHeader>
              <SectionTitle>
                <GitBranch />
                Formation
              </SectionTitle>
              <EducationDescription>
                Développez vos compétences backend avec nos formations spécialisées, conçues pour tous les niveaux d'expertise, des débutants aux développeurs confirmés.
              </EducationDescription>
            </EducationHeader>

            <EducationList>
              {education.map((edu, index) => (
                <EducationCard key={index}>
                  <EducationIcon>{edu.icon}</EducationIcon>

                  <EducationContent>
                    <EducationHeader2>
                      <EducationTitle>{edu.degree}</EducationTitle>
                      <EducationYear>
                        <Clock size={16} />
                        {edu.year}
                      </EducationYear>
                    </EducationHeader2>

                    <EducationSchool>
                      Niveau: <strong>{edu.level}</strong>
                    </EducationSchool>

                    <EducationDescription2>{edu.description}</EducationDescription2>

                    <EducationSkills>
                      {edu.skills.map((skill, skillIndex) => (
                        <EducationSkill key={skillIndex}>{skill}</EducationSkill>
                      ))}
                    </EducationSkills>
                  </EducationContent>
                </EducationCard>
              ))}
            </EducationList>
          </SectionContent>
        </EducationSection>

        {/* Case Studies Section */}
        <CaseStudiesSection>
          <SectionContent>
            <SectionTitle>
              <Award size={32} />
              Études de Cas
            </SectionTitle>
            <CaseStudyGrid>
              {caseStudiesData.map((study, index) => (
                <CaseStudyCard key={index}>
                  <CaseStudyTitle>{study.title}</CaseStudyTitle>
                  <CaseStudyDescription>{study.description}</CaseStudyDescription>
                  <CaseStudyMetrics>
                    {study.metrics.map((metric, idx) => (
                      <CaseStudyMetricItem key={idx}>
                        <CaseStudyMetricValue>{metric.value}</CaseStudyMetricValue>
                        <CaseStudyMetricLabel>{metric.label}</CaseStudyMetricLabel>
                      </CaseStudyMetricItem>
                    ))}
                  </CaseStudyMetrics>
                  <CaseStudyTechStack>
                    {study.techStack.map((tech, idx) => (
                      <CaseStudyTechTag key={idx}>{tech}</CaseStudyTechTag>
                    ))}
                  </CaseStudyTechStack>
                </CaseStudyCard>
              ))}
            </CaseStudyGrid>
          </SectionContent>
        </CaseStudiesSection>

        {/* Industry Solutions Section */}
        <IndustrySolutionsSection>
          <SectionContent>
            <SectionTitle>
              <GitBranch size={32} />
              Solutions par Industrie
            </SectionTitle>
            <IndustrySolutionsDescription>
              Des solutions backend sur mesure pour répondre aux défis spécifiques de chaque secteur d'activité.
            </IndustrySolutionsDescription>
            <IndustriesGrid>
              {industrySolutionsData.map((industry, index) => (
                <IndustryCard key={index}>
                  <IndustryIcon>
                    {industry.icon}
                  </IndustryIcon>
                  <IndustryTitle>{industry.title}</IndustryTitle>
                  <IndustryDescription>{industry.description}</IndustryDescription>
                  <IndustrySolutions>
                    {industry.solutions.map((solution, idx) => (
                      <TechItem key={idx}>
                        <CheckCircle size={16} />
                        {solution}
                      </TechItem>
                    ))}
                  </IndustrySolutions>
                </IndustryCard>
              ))}
            </IndustriesGrid>
          </SectionContent>
        </IndustrySolutionsSection>

        {/* Technical Resources Section */}
        <ResourcesSection>
          <SectionContent>
            <SectionTitle>
              <Binary size={32} />
              Ressources Techniques
            </SectionTitle>
            <ResourcesGrid>
              {technicalResourcesData.map((resource, index) => (
                <ResourceCard key={index} onClick={() => handleModalRegister()} >
                  <ResourceIcon>
                    {resource.icon}
                  </ResourceIcon>
                  <ResourceCategory>{resource.category}</ResourceCategory>
                  <ResourceTitle>{resource.title}</ResourceTitle>
                  <ResourceDescription>{resource.description}</ResourceDescription>
                  <ResourceMeta>
                    <span>
                      <Clock size={14} />
                      {resource.date}
                    </span>
                    <span>
                      <Binary size={14} />
                      {resource.readTime}
                    </span>
                  </ResourceMeta>
                </ResourceCard>
              ))}
            </ResourcesGrid>
          </SectionContent>
        </ResourcesSection>

        {/* FAQ Section */}
        <FAQSection>
          <SectionContent>
            <SectionTitle>
              <Binary size={32} />
              Questions Fréquentes
            </SectionTitle>
            <FAQContainer>
              {faqData.map((faq, index) => (
                <FAQItem key={index}>
                  <FAQQuestion
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    isOpen={openFaqIndex === index}
                  >
                    {faq.question}
                    <ChevronDown size={20} />
                  </FAQQuestion>
                  <FAQAnswer isOpen={openFaqIndex === index}>
                    {faq.answer}
                  </FAQAnswer>
                </FAQItem>
              ))}
            </FAQContainer>
          </SectionContent>
        </FAQSection>
      </Container>
      <Offers />
      <FooterHome />
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

export default Backend;