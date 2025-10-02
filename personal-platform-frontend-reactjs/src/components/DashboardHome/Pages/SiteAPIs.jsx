import { Particles } from "@tsparticles/react";
import Register from "components/Authentification/modals/register";
import Header from 'components/Header/Header';
import { ArrowDown, Briefcase, ChevronDown, ChevronRight, Code, Database, Globe, Server, Shield, Webhook } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from "react";
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
    background: #000000;
    color: #ffffff;
    font-family: 'JetBrains Mono', monospace;
  }
`;

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00; }
  50% { box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00; }
  100% { box-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 15px #00ff00; }
`;

const scanlineAnimation = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const codeAnimation = keyframes`
  0% { transform: translateY(0); opacity: 0.3; }
  50% { opacity: 0.7; }
  100% { transform: translateY(-100vh); opacity: 0.3; }
`;

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmerAnimation = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const MainContainer = styled.div`
  min-height: 100vh;
  background: #000000;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    background: repeating-linear-gradient(
      0deg,
      rgba(0, 255, 0, 0.03) 0px,
      rgba(0, 255, 0, 0.03) 1px,
      transparent 1px,
      transparent 2px
    );
    animation: ${scanlineAnimation} 10s linear infinite;
    pointer-events: none;
    z-index: 0;
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
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(0, 255, 0, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 80% 80%, rgba(0, 255, 0, 0.1) 0%, transparent 40%);
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  max-width: 64rem;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 1;
  animation: ${fadeInAnimation} 0.8s ease-out forwards;
`;

const Logo = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto 2rem;
  background: rgba(0, 0, 0, 0.5);
  border: 2px solid #00ff00;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${glowAnimation} 2s ease-in-out infinite;
  backdrop-filter: blur(10px);
  z-index: 2;

  svg {
    width: 80px;
    height: 80px;
    color: #00ff00;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 2rem 0;
  color: #ffffff;
  text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #00ff00;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
`;

const Button = styled.button`
  background: #000000;
  color: #00ff00;
  padding: 1.25rem 2.5rem;
  border: 2px solid #00ff00;
  border-radius: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  min-height: 44px;
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    width: 100%;
    justify-content: center;
  }
  
  &:hover {
    background: rgba(0, 255, 0, 0.1);
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
  }
`;

const Section = styled.section`
  padding: 6rem 1.5rem;
  position: relative;
  background: #000000;
  border-top: 1px solid rgba(0, 255, 0, 0.1);
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 4rem 1rem;
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
  text-shadow: 0 0 10px #00ff00;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 1rem;
    color: #00ff00;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #00ff00;
  font-size: 1.25rem;
  margin-bottom: 4rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const StepCard = styled.div`
  background: rgba(0, 255, 0, 0.05);
  border: 1px solid #00ff00;
  border-radius: 8px;
  padding: 2.5rem;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 30px rgba(0, 255, 0, 0.2);
  }
`;

const StepIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  background: #000000;
  border: 2px solid #00ff00;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00ff00;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 0 0 5px #00ff00;
`;

const StepDescription = styled.p`
  color: #00ff00;
  line-height: 1.6;
  text-align: center;
  opacity: 0.8;
`;

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const LoadingCard = styled.div`
  background: rgba(0, 255, 0, 0.03);
  border: 1px solid rgba(0, 255, 0, 0.1);
  border-radius: 8px;
  padding: 2.5rem;
  height: 250px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      rgba(0, 255, 0, 0.03) 25%, 
      rgba(0, 255, 0, 0.08) 50%, 
      rgba(0, 255, 0, 0.03) 75%
    );
    background-size: 468px 100%;
    animation: ${shimmerAnimation} 1.5s infinite linear;
  }
`;

const JobCard = styled.div`
  background: rgba(0, 255, 0, 0.07);
  border: 1px solid #00ff00;
  border-radius: 8px;
  padding: 2.5rem;
  transition: all 0.3s;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(${props => props.isVisible ? '0' : '20px'});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${props => props.index * 0.2}s;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: ${props => props.isVisible ? 'translateX(10px)' : 'translateY(20px)'};
    box-shadow: 0 0 30px rgba(0, 255, 0, 0.3);
    background: rgba(0, 255, 0, 0.1);
    cursor: pointer;
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
  color: #ffffff;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 5px #00ff00;
`;

const JobCompany = styled.p`
  color: #00ff00;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  opacity: 0.8;
`;

const JobMeta = styled.div`
  display: flex;
  gap: 1rem;
  color: #00ff00;
  font-size: 0.875rem;
  opacity: 0.8;
`;

const JobSalary = styled.div`
  background: rgba(0, 255, 0, 0.1);
  color: #00ff00;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  border: 1px solid #00ff00;
`;

const JobDescription = styled.p`
  color: #00ff00;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.8;
`;

const JobSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const JobSkill = styled.span`
  background: rgba(0, 255, 0, 0.1);
  color: #00ff00;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  border: 1px solid #00ff00;
  transition: 0.3s;
  min-height: 44px;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
  }

  &:hover {
    background: rgba(0, 255, 0, 0.2);
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
    flex-direction: column;
    width: 100%;
  }
`;

const SeeMoreButton = styled(Button)`
  background: transparent;
  
  &:hover {
    background: rgba(0, 255, 0, 0.1);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateY(4px);
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  background: rgba(0, 255, 0, 0.07);
  border: 1px solid #00ff00;
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s;
  text-align: center;
  animation: ${fadeInAnimation} 0.6s ease-out forwards;
  animation-delay: ${props => props.index * 0.2}s;
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(0, 255, 0, 0.3);
    background: rgba(0, 255, 0, 0.1);
  }
`;

const StatisticsSection = styled(Section)`
  background: linear-gradient(135deg, #001a00 0%, #003300 100%);
`;

const StatisticsGrid = styled.div`
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
  animation: ${fadeInAnimation} 0.6s ease-out forwards;
  animation-delay: ${props => props.index * 0.15}s;
  opacity: 0;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #00ff00;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
`;

const StatLabel = styled.div`
  color: #ffffff;
  font-size: 0.875rem;
  opacity: 0.8;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TechCard = styled.div`
  background: rgba(0, 255, 0, 0.07);
  border: 1px solid #00ff00;
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s;
  animation: ${fadeInAnimation} 0.6s ease-out forwards;
  animation-delay: ${props => props.index * 0.3}s;
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(0, 255, 0, 0.3);
    background: rgba(0, 255, 0, 0.1);
  }
`;

const TechTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00;
`;

const TechDescription = styled.p`
  color: #00ff00;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  text-shadow: 0 0 2px rgba(0, 255, 0, 0.3);
`;

const TechFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    color: #00ff00;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    opacity: 0.8;

    &:before {
      content: "→";
      color: #00ff00;
    }
  }
`;

const FAQSection = styled(Section)`
  background: #000000;
  padding-bottom: 8rem;
  position: relative;
  z-index: 2;
  margin-bottom: 0;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const FAQItem = styled.div`
  background: rgba(0, 255, 0, 0.07);
  border: 1px solid #00ff00;
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  min-height: 44px;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(0, 255, 0, 0.2);
  }

  @media (hover: none) {
    &:active {
      transform: translateY(-2px);
      box-shadow: 0 0 30px rgba(0, 255, 0, 0.2);
    }
  }
`;

const FAQQuestion = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: ${props => props.isOpen ? '1rem' : '0'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-shadow: 0 0 5px #00ff00;
  padding: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  svg {
    color: #00ff00;
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
    min-width: 24px;
    min-height: 24px;
    margin-left: 1rem;
  }
`;

const FAQAnswer = styled.div`
  color: #00ff00;
  font-size: 0.875rem;
  line-height: 1.8;
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  opacity: ${props => props.isOpen ? '0.9' : '0'};
  margin-left: 0.5rem;
  border-left: 2px solid #00ff00;
  padding-left: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-left: 0.25rem;
    padding-left: 0.75rem;
  }
`;

const CodeSnippet = styled.div`
  position: absolute;
  font-family: 'JetBrains Mono', monospace;
  color: #00ff00;
  opacity: 0.3;
  font-size: 0.875rem;
  white-space: pre;
  pointer-events: none;
  animation: ${codeAnimation} 20s linear infinite;
  animation-delay: ${props => props.delay}s;
  left: ${props => props.left}%;
  z-index: 0;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, transparent 0%, #000000 70%);
  z-index: 1;
  pointer-events: none;
`;

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

const PriceCalculator = styled.div`
  background: rgba(0, 255, 0, 0.07);
  border: 1px solid #00ff00;
  border-radius: 8px;
  padding: 2rem;
  margin-top: 3rem;
`;

const CalculatorTitle = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 0 0 5px #00ff00;
`;

const CalculatorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const CalculatorOption = styled.div`
  background: rgba(0, 255, 0, 0.05);
  border: 1px solid #00ff00;
  border-radius: 4px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  opacity: ${props => props.selected ? 1 : 0.7};
  transform: scale(${props => props.selected ? 1.05 : 1});
  color: #00ff00;

  h4 {
    color: #ffffff;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 5px #00ff00;
  }

  p {
    font-size: 0.875rem;
    opacity: 0.8;
    margin-bottom: 0.5rem;
  }

  .features {
    font-size: 0.75rem;
    opacity: 0.7;
    margin-top: 0.5rem;
  }

  &:hover {
    opacity: 1;
    transform: scale(1.05);
    background: rgba(0, 255, 0, 0.1);
  }
`;

const PriceDisplay = styled.div`
  text-align: center;
  margin: 2rem 0;
  padding: 2rem;
  background: rgba(0, 255, 0, 0.1);
  border-radius: 8px;
  border: 1px solid #00ff00;

  h3 {
    color: #ffffff;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-shadow: 0 0 10px #00ff00;
  }

  .breakdown {
    color: #00ff00;
    font-size: 0.875rem;
    opacity: 0.8;
    margin-bottom: 0.5rem;
  }

  .estimate-time {
    color: #00ff00;
    font-size: 1rem;
    margin-top: 1rem;
    opacity: 0.9;
  }
`;

const CalculatorSection = styled.div`
  margin-bottom: 2rem;

  h4 {
    color: #ffffff;
    font-size: 1.25rem;
    margin-bottom: 1rem;
    text-shadow: 0 0 5px #00ff00;
  }
`;

const BaaSSection = styled(Section)`
  background: linear-gradient(135deg, #001a00 0%, #003300 100%);
`;

const BaaSGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const BaaSCard = styled.div`
  background: rgba(0, 255, 0, 0.07);
  border: 1px solid #00ff00;
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s;
  animation: ${fadeInAnimation} 0.6s ease-out forwards;
  animation-delay: ${props => props.index * 0.2}s;
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(0, 255, 0, 0.3);
    background: rgba(0, 255, 0, 0.1);
  }
`;

const BaaSLogo = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #00ff00;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00ff00;
`;

const BaaSTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 0 0 5px #00ff00;
`;

const BaaSDescription = styled.p`
  color: #00ff00;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  text-align: center;
`;

const BaaSFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    color: #00ff00;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    opacity: 0.8;
    font-size: 0.875rem;

    &:before {
      content: "→";
      color: #00ff00;
    }
  }
`;

const BaaSPricing = styled.div`
  color: #00ff00;
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  opacity: 0.9;
`;

const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isVisible];
};

const JobCardComponent = ({ job, index ,handleModalRegister }) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <JobCard
      ref={ref}
      index={index}
      isVisible={isVisible}
      onClick={() => handleModalRegister()}
    >
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
  );
};

function SiteAPIs() {
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showMoreJobs, setShowMoreJobs] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({
    type: 'rest',
    complexity: 'simple',
    security: 'basic',
    features: [],
    scale: 'small',
    maintenance: false,
    thirdPartyApis: [],
    framework: 'express',
    language: 'nodejs'
  });

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleModalRegister = () => {
    setOpenModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setOpenModalRegister(false);
  };

  const steps = [
    {
      icon: <Database size={32} />,
      title: 'Architecture API',
      description: 'Conception d\'APIs RESTful robustes et évolutives avec WordPress.'
    },
    {
      icon: <Code size={32} />,
      title: 'Développement',
      description: 'Implémentation d\'APIs sécurisées avec authentification et documentation.'
    },
    {
      icon: <Server size={32} />,
      title: 'Déploiement',
      description: 'Mise en production avec monitoring et scalabilité automatique.'
    }
  ];
  const jobs = [
    {
        title: 'Freelance Architecte API Senior',
        company: 'Scale-up Tech',
        location: 'Remote - Europe',
        type: 'Freelance développeur',
        salary: '750-850€/semaine',
        description: 'Conception et implémentation d\'APIs RESTful pour une plateforme WordPress headless à grande échelle.',
        skills: ['API Design', 'REST', 'GraphQL', 'OAuth', 'Swagger', 'Performance', 'freelance backend developer']
    },
    {
        title: 'Freelance développeur backend WordPress',
        company: 'Agence Digitale',
        location: 'Remote - France',
        type: 'Freelance développeur',
        salary: '600-700€/j',
        description: 'Développement d\'APIs personnalisées et intégration avec des services tiers.',
        skills: ['WordPress', 'PHP', 'REST API', 'MySQL', 'Redis', 'Docker', 'freelance developpeur mobile']
    },
    {
        title: 'Expert API Gateway',
        company: 'Fintech Startup',
        location: 'Remote - International',
        type: 'Freelance développeur',
        salary: '800-900€/semaine',
        description: 'Mise en place d\'une architecture API Gateway pour multiples services WordPress.',
        skills: ['API Gateway', 'Kong', 'Kubernetes', 'Security', 'Monitoring', 'DevOps', 'freelance mobile']
    },
    {
        title: 'Lead Freelance développeur backend',
        company: 'E-commerce Leader',
        location: 'Remote - Europe',
        type: 'Freelance développeur',
        salary: '700-800€/semaine',
        description: 'Direction technique du développement d\'APIs pour une plateforme e-commerce WordPress.',
        skills: ['WooCommerce', 'API', 'Architecture', 'Team Lead', 'Scalability', 'CI/CD', 'freelance application']
    },
    {
        title: 'Spécialiste GraphQL',
        company: 'Media Group',
        location: 'Remote - France',
        type: 'Freelance développeur',
        salary: '650-750€/semaine',
        description: 'Implémentation d\'une couche GraphQL pour un CMS WordPress headless.',
        skills: ['GraphQL', 'WPGraphQL', 'Apollo', 'Performance', 'Caching', 'TypeScript', 'freelance mobile app developer']
    },
    {
        title: 'DevOps API Engineer',
        company: 'SaaS Platform',
        location: 'Remote - International',
        type: 'Freelance développeur',
        salary: '700-800€/semaine',
        description: 'Automatisation et optimisation du déploiement d\'APIs WordPress en production.',
        skills: ['DevOps', 'AWS', 'Docker', 'Kubernetes', 'Monitoring', 'Security', 'freelancer mobile app']
    },
    // Nouveaux emplois
    {
        title: 'Freelance Développeur Mobile iOS',
        company: 'Tech Innovators',
        location: 'Remote - Europe',
        type: 'Freelance développeur',
        salary: '750-850€/semaine',
        description: 'Développement d\'applications iOS natives utilisant Swift et SwiftUI.',
        skills: ['Swift', 'SwiftUI', 'Xcode', 'Firebase', 'freelance mobile developer']
    },
    {
        title: 'Freelance Développeur Mobile Android',
        company: 'E-commerce Solutions',
        location: 'Remote - UK',
        type: 'Freelance développeur',
        salary: '700-800€/semaine',
        description: 'Création d\'applications Android avec Kotlin et Jetpack.',
        skills: ['Kotlin', 'Android SDK', 'Jetpack', 'Firebase', 'freelance mobile app']
    },
    {
        title: 'Freelance Développeur React Native',
        company: 'Start-Up App',
        location: 'Remote - International',
        type: 'Freelance développeur',
        salary: '650-750€/semaine',
        description: 'Développement d\'applications mobiles multiplateformes avec React Native.',
        skills: ['React Native', 'JavaScript', 'Redux', 'Firebase', 'freelance mobile app']
    },
    {
        title: 'Consultant en Marketing Mobile',
        company: 'Digital Agency',
        location: 'Remote - France',
        type: 'Freelance développeur',
        salary: '600-700€/semaine',
        description: 'Élaboration de stratégies de marketing pour applications mobiles.',
        skills: ['SEO', 'ASO', 'Google Ads', 'Social Media', 'freelance marketing mobile']
    },
    {
        title: 'Freelance Développeur de PWA',
        company: 'Web Solutions',
        location: 'Remote - Europe',
        type: 'Freelance développeur',
        salary: '600-700€/semaine',
        description: 'Création d\'applications web progressives pour améliorer l\'expérience utilisateur.',
        skills: ['PWA', 'HTML', 'CSS', 'JavaScript', 'freelance application mobile']
    },
    {
        title: 'Freelance Développeur de Solutions IoT',
        company: 'IoT Solutions',
        location: 'Remote - International',
        type: 'Freelance développeur',
        salary: '700-800€/semaine',
        description: 'Développement d\'applications IoT pour appareils connectés.',
        skills: ['IoT', 'MQTT', 'Python', 'Node.js', 'freelance mobile app developer']
    },
    {
        title: 'Spécialiste en Accessibilité Web',
        company: 'Web Agency',
        location: 'Remote - France',
        type: 'Freelance développeur',
        salary: '500-600€/semaine',
        description: 'Optimisation des applications mobiles et web pour l\'accessibilité.',
        skills: ['Accessibility Standards', 'WCAG', 'Usability Testing', 'freelancer mobile']
    },
    {
        title: 'Freelance développeur backend Python',
        company: 'Data Services',
        location: 'Remote - Europe',
        type: 'Freelance développeur',
        salary: '650-750€/semaine',
        description: 'Création de services backend stateless avec Python et Flask.',
        skills: ['Python', 'Flask', 'REST API', 'SQL', 'freelance backend developer']
    },
    {
        title: 'Freelance Développeur Full Stack JavaScript',
        company: 'Tech Pioneers',
        location: 'Remote - International',
        type: 'Freelance développeur',
        salary: '700-800€/semaine',
        description: 'Création d\'applications complètes côté client et serveur avec JavaScript.',
        skills: ['Node.js', 'Express', 'MongoDB', 'React', 'freelance application mobile']
    },
    {
        title: 'Consultant DevOps',
        company: 'Cloud Orchestrators',
        location: 'Remote - France',
        type: 'Freelance développeur',
        salary: '800-900€/semaine',
        description: 'Mise en œuvre des pratiques DevOps pour des environnements cloud.',
        skills: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'freelance mobile']
    },
    {
        title: 'Freelance Développeur de Jeux Mobiles',
        company: 'Game Studio',
        location: 'Remote - International',
        type: 'Freelance développeur',
        salary: '850-950€/semaine',
        description: 'Création de jeux mobiles interactifs avec Unity.',
        skills: ['Unity', 'C#', 'Game Development', '3D Modeling', 'freelance mobile developer']
    },
    {
        title: 'Expert Freelance en Réalité Augmentée',
        company: 'Tech Innovators',
        location: 'Remote - Europe',
        type: 'Freelance développeur',
        salary: '750-850€/semaine',
        description: 'Développement d\'applications de réalité augmentée pour mobile.',
        skills: ['ARKit', 'ARCore', 'Unity', 'freelance mobile'],
    },
    {
        title: 'Création de Prototypes d\'Applications',
        company: 'Startup Factory',
        location: 'Remote - France',
        type: 'Freelance développeur',
        salary: '600-700€/semaine',
        description: 'Développement rapide de prototypes pour tester des idées d\'application.',
        skills: ['Prototype', 'React Native', 'User Testing', 'freelance mobile app developer'],
    },
    {
        title: 'Gestion de Projets Agiles',
        company: 'Agile Management',
        location: 'Remote - International',
        type: 'Freelance développeur',
        salary: '650-750€/semaine',
        description: 'Mise en place de méthodologies Agile dans le développement d\'applications.',
        skills: ['Scrum', 'Kanban', 'Agile', 'freelancer mobile']
    },
    {
        title: 'Freelance Développeur d\'Applications de Chat',
        company: 'Messaging Solutions',
        location: 'Remote - Europe',
        type: 'Freelance développeur',
        salary: '700-800€/semaine',
        description: 'Création d\'applications de chat avec intégration en temps réel.',
        skills: ['WebSocket', 'Node.js', 'React', 'freelance mobile developer']
    }
];

  const features = [
    {
      icon: <Code size={24} />,
      title: 'REST & GraphQL',
      description: 'Développement d\'APIs modernes avec support REST et GraphQL, documentation OpenAPI/Swagger incluse, versioning et monitoring'
    },
    {
      icon: <Shield size={24} />,
      title: 'Sécurité Avancée',
      description: 'Authentification OAuth2/JWT, protection OWASP Top 10, audit logs, chiffrement E2E et conformité RGPD'
    },
    {
      icon: <Server size={24} />,
      title: 'Haute Performance',
      description: 'Cache distribué Redis, load balancing, monitoring temps réel, auto-scaling et optimisation des requêtes'
    },
    {
      icon: <Database size={24} />,
      title: 'Microservices',
      description: 'Architecture distribuée avec Docker/Kubernetes, service mesh Istio, tracing et circuit breakers'
    },
    {
      icon: <Globe size={24} />,
      title: 'API Gateway',
      description: 'Gestion centralisée avec Kong/Traefik, rate limiting intelligent, analytics et logging avancé'
    },
    {
      icon: <Webhook size={24} />,
      title: 'Intégrations',
      description: 'Connecteurs prêts à l\'emploi pour AWS, GCP, Azure, et intégration simplifiée des services tiers'
    }
  ];

  const statistics = [
    { number: '500+', label: 'APIs Développées' },
    { number: '99.9%', label: 'Uptime Garanti' },
    { number: '24/7', label: 'Support Expert' },
    { number: '600€/j', label: 'À partir de' }
  ];

  const technologies = [
    {
      title: 'APIs RESTful',
      description: 'Architecture REST moderne et évolutive avec les meilleures pratiques',
      features: [
        'Endpoints RESTful avec HATEOAS',
        'Documentation OpenAPI 3.0/Swagger',
        'Versioning sémantique des APIs',
        'Gestion avancée des erreurs HTTP',
        'Pagination cursor-based',
        'Cache distribué avec Redis',
        'Rate limiting par token',
        'Monitoring Prometheus/Grafana'
      ]
    },
    {
      title: 'GraphQL',
      description: 'APIs flexibles et performantes avec optimisation des requêtes',
      features: [
        'Schémas GraphQL avec TypeScript',
        'Resolvers optimisés N+1',
        'Subscriptions WebSocket',
        'DataLoader pour batching',
        'Cache Apollo/Redis',
        'Monitoring avec Apollo Studio',
        'Protection DoS/introspection',
        'Validation des schémas'
      ]
    },
    {
      title: 'Microservices',
      description: 'Architecture cloud-native moderne et scalable',
      features: [
        'Containerisation avec Docker',
        'Orchestration Kubernetes',
        'Service mesh avec Istio',
        'Tracing distribué (Jaeger)',
        'Circuit breakers (Hystrix)',
        'Déploiement Blue/Green',
        'Auto-scaling HPA',
        'Logging centralisé ELK'
      ]
    },
    {
      title: 'Sécurité',
      description: 'Protection complète et conformité des APIs',
      features: [
        'OAuth2 & OpenID Connect',
        'JWT avec rotation des clés',
        'Protection OWASP Top 10',
        'WAF et DDoS protection',
        'Audit logs temps réel',
        'Chiffrement end-to-end',
        'Conformité RGPD/CCPA',
        'Scan de vulnérabilités'
      ]
    }
  ];
  const faqs = [
    {
        question: "Quelle architecture API choisir entre REST et GraphQL pour mes projets freelance développeur?",
        answer: "Le choix dépend de vos besoins spécifiques et du type de projet. REST est idéal pour des sites ou applications simples nécessitant des endpoints bien définis. GraphQL est préférable pour des projets ayant des requêtes complexes ou variant en fonction des besoins des clients, offrant plus de flexibilité."
    },
    {
        question: "Comment assurer la sécurité et la performance de mes APIs en tant que freelance développeur?",
        answer: "Adoptez une approche multi-niveaux : 1) Sécurité : utilisez OAuth2/JWT pour l'authentification, et des techniques comme le rate limiting pour contrôler l'accès. 2) Performance : implémentez un cache avec Redis et utilisez un CDN pour les assets statiques afin d'améliorer la réactivité de vos applications."
    },
    {
        question: "Quelles sont les meilleures pratiques pour documenter mes APIs ?",
        answer: "Utilisez OpenAPI (Swagger) pour créer une documentation claire. Incluez des exemples de requêtes et réponses, ainsi que des sections sur l'authentification, la gestion des erreurs et des environnements de test. Une bonne documentation attire davantage de clients."
    },
    {
        question: "Comment gérer le versioning et la rétrocompatibilité de mes APIs dans un projet freelance développeur?",
        answer: "Utilisez le versioning sémantique (SemVer) et documentez tous les changements. Envisagez le versioning URI pour les modifications majeures et assurez-vous que les anciennes versions restent accessibles afin de ne pas perturber les utilisateurs existants."
    },
    {
        question: "Quelle approche devrais-je utiliser pour les microservices dans mes projets freelance développeur?",
        answer: "L'utilisation de microservices peut grandement faciliter la scalabilité. Optez pour Docker pour la containerisation et Kubernetes pour l'orchestration, en utilisant des outils comme Prometheus pour le monitoring actif et ELK pour les logs."
    },
    {
        question: "Comment gérer les tests et CI/CD pour mes projets freelance développeur?",
        answer: "Mettez en place un pipeline CI/CD avec GitHub Actions. Incluez des tests unitaires avec Jest et des tests d'intégration pour garantir la qualité de votre code. Cela peut impressionner vos clients potentiels."
    },
    {
        question: "Comment optimiser l'API existante que j'ai conçue pour un client ?",
        answer: "Mettez en œuvre du caching, utilisez la pagination pour les grandes collections de données, et vérifiez que vos requêtes SQL sont optimisées pour réduire la charge sur le serveur."
    },
    {
        question: "Quelle place les tests de sécurité devraient-ils occuper dans mes développements d'APIs ?",
        answer: "Intégrez des tests de sécurité dans votre processus de développement. Des outils comme OWASP ZAP peuvent identifier les vulnérabilités et garantir que vos applications restent sécurisées."
    },
    {
        question: "Utiliser GraphQL est-il plus complexe à gérer qu'une API REST pour des projets freelance développeur?",
        answer: "Cela dépend des exigences de votre projet. GraphQL peut simplifier la gestion de nombreuses requêtes, mais nécessitera un investissement de temps pour la documentation et les systèmes de validation."
    },
    {
        question: "Comment gérer efficacement l'authentification dans mes APIs ?",
        answer: "Optez pour des solutions comme JWT ou OAuth2 pour gérer l'authentification. Incluez les tokens dans l'en-tête Authorization lors des requêtes et assurez-vous de valider ces tokens sur le serveur."
    },
    {
        question: "Quel est l'impact des appels API sur la latence de mes applications ?",
        answer: "Chaque appel API peut affecter les performances. Minimisez le nombre d'appels et optimisez vos requêtes pour améliorer l'expérience utilisateur, un aspect particulièrement apprécié par les clients."
    },
    {
        question: "Quelles sont les meilleures pratiques pour le design d'API dans un contexte freelance développeur?",
        answer: "Utilisez des conventions de nommage claires, documentez chaque composant, et fournissez des réponses d'erreurs explicites pour faciliter l'intégration par d'autres développeurs."
    },
    {
        question: "Est-il judicieux d'utiliser WebSockets avec une API REST dans des projets freelance développeur?",
        answer: "WebSockets sont idéaux pour des applications temps réel. Pour des fonctionnalités nécessitant des mises à jour instantanées, déployez WebSocket parallèlement à votre API REST pour une plus grande efficacité."
    },
    {
      question: "Qu'est-ce que le rate limiting et pourquoi est-ce important pour mes APIs ?",
      answer: "Le rate limiting permet de contrôler le nombre de requêtes qu'un client peut soumettre à l'API sur une période donnée. Cela prévient les abus, gère la charge du serveur et garantit que les ressources restent disponibles pour tous les utilisateurs."
  },
  {
      question: "Comment intégrer des APIs tierces dans mes applications ?",
      answer: "Pour intégrer des APIs tierces, lisez soigneusement leur documentation pour en comprendre les fonctionnalités. Créez un client API pour envoyer des requêtes et manipuler les réponses. Préparez-vous à gérer les erreurs et les limites imposées par ces APIs."
  },
  {
      question: "Comment suivre les appels API dans mes projets ?",
      answer: "Utilisez des outils de monitoring comme Prometheus ou New Relic pour suivre vos appels API, mesurer les temps de réponse et détecter les anomalies. Ce suivi vous aidera à optimiser les performances de votre application."
  },
  {
      question: "Comment gérer les données sensibles dans mes APIs ?",
      answer: "Chiffrez toutes les données sensibles, que ce soit au repos ou en transit. Utilisez HTTPS pour les requêtes et veillez à stocker les données sensibles de manière sécurisée dans vos bases de données."
  },
  {
      question: "Quels outils recommandez-vous pour tester mes APIs ?",
      answer: "Des outils comme Postman sont excellents pour les tests manuels, tandis que des frameworks comme Jest ou Mocha permettent des tests automatisés. Assurez-vous de couvrir tous les scénarios de test possibles."
  },
  {
      question: "Comment prioriser la mise en cache dans mes APIs ?",
      answer: "Utilisez des en-têtes de cache pour gérer la durée de vie des réponses. Identifiez les données répétiquement sollicitées et mettez-les en cache pour réduire la latence et améliorer le temps de chargement."
  },
  {
      question: "Comment assurer une utilisation efficace des ressources dans mes APIs ?",
      answer: "Adoptez une approche de monitoring rigoureuse pour analyser les performances de votre API. Utilisez des outils de profiling pour identifier les goulets d'étranglement et optimiser vos requêtes afin de garantir des performances optimales."
  },
  {
      question: "Quelles technologies modernes devrais-je utiliser dans le développement d'APIs ?",
      answer: "Restez à jour avec des technologies telles que Node.js pour le développement rapide, GraphQL pour des requêtes flexibles, et Docker pour faciliter la gestion des environnements de développement et de production."
  },
  {
      question: "Comment gérer les problèmes de latence dans mes APIs ?",
      answer: "Identifiez les requêtes lentes grâce à une collecte de métriques. Optimisez votre code et vos requêtes, et envisagez d'implémenter des systèmes de cache pour améliorer la réactivité de votre API."
  },
  {
      question: "Pourquoi est-il important d'établir des contrats d'API pour mes clients ?",
      answer: "Les contrats d'API définissent clairement ce que vos clients peuvent attendre de l'API en termes de paramètres d'entrée, de types de sortie et d'erreurs possibles, garantissant une intégration harmonieuse."
  },
  {
      question: "Quelles erreurs courantes devrais-je éviter lors du développement d'APIs ?",
      answer: "Les erreurs courantes incluent des en-têtes de réponse manquants, des données non validées, l'absence de documentation adéquate, et le non-respect des priorités de rétrocompatibilité de l'API."
  }
];


  const particlesInit = useCallback(async (engine) => {
    await engine.load({
      particles: {
        color: {
          value: "#0f0",
        },
        links: {
          color: "#0f0",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
        },
        size: {
          value: { min: 1, max: 3 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
      },
    });
  }, []);

  const codeSnippets = [
    `// Example REST API Endpoint
app.get('/api/v1/data', async (req, res) => {
  try {
    const data = await DataService.fetch();
    res.json({
      success: true,
      data,
      meta: {
        version: 'v1',
        timestamp: new Date()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});`,

    `// Example GraphQL Schema
type Query {
  user(id: ID!): User
  posts(limit: Int = 10): [Post!]!
}

type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
}`,

    `// Example API Security Middleware
const securityMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  
  try {
    const decoded = await verifyJWT(token);
    req.user = decoded;
    
    // Rate limiting check
    await rateLimiter.check(req.ip);
    
    next();
  } catch (error) {
    res.status(401).json({
      error: 'Unauthorized access'
    });
  }
};`
  ];

  const calculatePrice = () => {
    let basePriceLow = 2000;
    let basePriceHigh = 3500;
    let timeEstimate = '2-3 semaines';

    // API Type
    if (selectedOptions.type === 'graphql') {
      basePriceLow += 1000;
      basePriceHigh += 1500;
      timeEstimate = '3-4 semaines';
    }

    // Complexity
    switch (selectedOptions.complexity) {
      case 'medium':
        basePriceLow += 1500;
        basePriceHigh += 2500;
        timeEstimate = '4-6 semaines';
        break;
      case 'complex':
        basePriceLow += 3000;
        basePriceHigh += 4500;
        timeEstimate = '8-12 semaines';
        break;
      default:
        break;
    }

    // Security
    switch (selectedOptions.security) {
      case 'advanced':
        basePriceLow += 1000;
        basePriceHigh += 1500;
        break;
      case 'enterprise':
        basePriceLow += 2000;
        basePriceHigh += 3000;
        break;
      default:
        break;
    }

    // Language & Framework
    switch (selectedOptions.language) {
      case 'java':
        basePriceLow += 800;
        basePriceHigh += 1200;
        break;
      case 'golang':
        basePriceLow += 1000;
        basePriceHigh += 1500;
        break;
      case 'python':
        basePriceLow += 500;
        basePriceHigh += 800;
        break;
      default:
        break;
    }

    // Framework complexity
    switch (selectedOptions.framework) {
      case 'spring':
      case 'django':
        basePriceLow += 1000;
        basePriceHigh += 1500;
        break;
      case 'nestjs':
      case 'fastapi':
        basePriceLow += 800;
        basePriceHigh += 1200;
        break;
      default:
        break;
    }

    // Third-party APIs
    selectedOptions.thirdPartyApis.forEach(api => {
      switch (api) {
        case 'payment':
          basePriceLow += 1000;
          basePriceHigh += 1500;
          timeEstimate = incrementTimeEstimate(timeEstimate, 1);
          break;
        case 'ai':
          basePriceLow += 1500;
          basePriceHigh += 2000;
          timeEstimate = incrementTimeEstimate(timeEstimate, 2);
          break;
        case 'maps':
          basePriceLow += 800;
          basePriceHigh += 1200;
          timeEstimate = incrementTimeEstimate(timeEstimate, 1);
          break;
        case 'social':
          basePriceLow += 500;
          basePriceHigh += 800;
          timeEstimate = incrementTimeEstimate(timeEstimate, 1);
          break;
        default:
          break;
      }
    });

    // Additional Features
    selectedOptions.features.forEach(feature => {
      switch (feature) {
        case 'realtime':
          basePriceLow += 800;
          basePriceHigh += 1200;
          break;
        case 'analytics':
          basePriceLow += 500;
          basePriceHigh += 800;
          break;
        case 'documentation':
          basePriceLow += 400;
          basePriceHigh += 600;
          break;
        default:
          break;
      }
    });

    // Maintenance
    if (selectedOptions.maintenance) {
      basePriceLow += basePriceLow * 0.15;
      basePriceHigh += basePriceHigh * 0.15;
    }

    return { basePriceLow, basePriceHigh, timeEstimate };
  };

  const incrementTimeEstimate = (estimate, weeks) => {
    const currentWeeks = estimate.split('-').map(num => parseInt(num.replace(/[^0-9]/g, '')));
    return `${currentWeeks[0] + weeks}-${currentWeeks[1] + weeks} semaines`;
  };

  return (
    <>

    <Helmet>
        <title>Trouver un freelance developpeur & Agence Web</title>
        <meta name="description" content="Découvrez les meilleures freelances developpeurs backend, des experts en développement Java, PHP et Python, et trouver des missions freelance adaptées à vos besoins." />
        <link rel="canonical" href="https://itgalaxy.io/freelance-developpeur" />
        <meta property="og:title" content="Trouver un freelance developpeur & Agence Web" />
        <meta property="og:description" content="Découvrez les meilleures freelances developpeurs backend, des experts en développement Java, PHP et Python, et trouver des missions freelance adaptées à vos besoins." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itgalaxy.io/freelance-developpeur" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="ItGalaxy.io" />
        <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/freelance-developpeur" />
        <link rel="alternate" hreflang="en" href="https://itgalaxy.io/freelance-developpeur" />
    </Helmet>




      <Header />
      <GlobalStyle />
      <MainContainer>
        <HeroSection>
          <Particles id="tsparticles" init={particlesInit} />

          {codeSnippets.map((snippet, index) => (
            <CodeSnippet
              key={index}
              delay={index * 3}
              left={20 + (index * 25)}
            >
              {snippet}
            </CodeSnippet>
          ))}

          <HeroOverlay />

          <HeroContent>
            <Logo>
              <Webhook />
            </Logo>
            <HeroTitle>Trouver un freelance developpeur</HeroTitle>
            <HeroSubtitle>
            Découvrez les meilleures freelances developpeurs backend, des experts en développement Java, PHP et Python, et trouver des missions freelance adaptées à vos besoins.
            </HeroSubtitle>
            <Button onClick={handleModalRegister}>
            Trouver un freelance developpeur
              <ChevronRight size={20} />
            </Button>
          </HeroContent>
        </HeroSection>

                <CardsPrestataires skill={'Java'}/>
                <ItGalaxyAsService />

        <Section>
          <SectionContent>
            <SectionTitle>
              <Briefcase />
              Projets partagés pour Freelance developpeur API
            </SectionTitle>
            <SectionSubtitle>
              Les meilleures opportunités pour les experts en développement d'API
            </SectionSubtitle>
            <JobsGrid>
              {isLoading ? (
                Array(3).fill(null).map((_, index) => (
                  <LoadingCard key={index} />
                ))
              ) : (
                jobs.map((job, index) => (
                  <JobCardComponent key={index} job={job} index={index} handleModalRegister={handleModalRegister}  />
                ))
              )}
            </JobsGrid>
            <ButtonContainer>
              <SeeMoreButton onClick={() => handleModalRegister()}>
                Voir Plus de Missions
                <ArrowDown size={20} />
              </SeeMoreButton>
            </ButtonContainer>
          </SectionContent>
        </Section>

        <Section>
          <SectionContent>
            <SectionTitle>
              <Webhook />
              Fonctionnalités Premium
            </SectionTitle>
            <SectionSubtitle>
              Des APIs robustes et évolutives pour vos projets
            </SectionSubtitle>
            <FeatureGrid>
              {features.map((feature, index) => (
                <FeatureCard key={index} index={index}>
                  <StepIcon>{feature.icon}</StepIcon>
                  <StepTitle>{feature.title}</StepTitle>
                  <StepDescription>{feature.description}</StepDescription>
                </FeatureCard>
              ))}
            </FeatureGrid>
          </SectionContent>
        </Section>

        <StatisticsSection>
          <SectionContent>
            <StatisticsGrid>
              {statistics.map((stat, index) => (
                <StatCard key={index} index={index}>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatisticsGrid>
          </SectionContent>
        </StatisticsSection>

        <Section>
          <SectionContent>
            <SectionTitle>
              <Database />
              Technologies API
            </SectionTitle>
            <SectionSubtitle>
              Solutions modernes pour le développement d'APIs
            </SectionSubtitle>
            <TechGrid>
              {technologies.map((tech, index) => (
                <TechCard key={index} index={index}>
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
        </Section>

        <Section>
          <SectionContent>
            <SectionTitle>
              <Code />
              Comment Créer votre API
            </SectionTitle>
            <SectionSubtitle>
              Un processus éprouvé pour développer des APIs robustes
            </SectionSubtitle>
            <StepsGrid>
              {steps.map((step, index) => (
                <StepCard key={index}>
                  <StepIcon>{step.icon}</StepIcon>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepCard>
              ))}
            </StepsGrid>
          </SectionContent>
        </Section>
  

        <Section>
          <SectionContent>
            <SectionTitle>
              <Database />
              Calculateur de Prix
            </SectionTitle>
            <SectionSubtitle>
              Estimez le coût de votre projet API
            </SectionSubtitle>
            <PriceCalculator>
              <CalculatorTitle>Configurez votre API</CalculatorTitle>

              <CalculatorSection>
                <h4>Type d'API</h4>
                <CalculatorGrid>
                  <CalculatorOption
                    selected={selectedOptions.type === 'rest'}
                    onClick={() => setSelectedOptions({ ...selectedOptions, type: 'rest' })}
                  >
                    <h4>REST API</h4>
                    <p>Architecture traditionnelle</p>
                    <div className="features">
                      • Endpoints standardisés<br />
                      • Cache intégré<br />
                      • Stateless
                    </div>
                  </CalculatorOption>
                  <CalculatorOption
                    selected={selectedOptions.type === 'graphql'}
                    onClick={() => setSelectedOptions({ ...selectedOptions, type: 'graphql' })}
                  >
                    <h4>GraphQL API</h4>
                    <p>Flexible et performante</p>
                    <div className="features">
                      • Requêtes flexibles<br />
                      • Optimisation des données<br />
                      • Typage fort
                    </div>
                  </CalculatorOption>
                </CalculatorGrid>
              </CalculatorSection>

              <CalculatorSection>
                <h4>Complexité</h4>
                <CalculatorGrid>
                  <CalculatorOption
                    selected={selectedOptions.complexity === 'simple'}
                    onClick={() => setSelectedOptions({ ...selectedOptions, complexity: 'simple' })}
                  >
                    <h4>Simple</h4>
                    <p>CRUD basique</p>
                    <div className="features">
                      • 5-10 endpoints<br />
                      • Auth simple<br />
                      • Base de données unique
                    </div>
                  </CalculatorOption>
                  <CalculatorOption
                    selected={selectedOptions.complexity === 'medium'}
                    onClick={() => setSelectedOptions({ ...selectedOptions, complexity: 'medium' })}
                  >
                    <h4>Intermédiaire</h4>
                    <p>Logique métier modérée</p>
                    <div className="features">
                      • 10-20 endpoints<br />
                      • Intégrations externes<br />
                      • Workflows complexes
                    </div>
                  </CalculatorOption>
                  <CalculatorOption
                    selected={selectedOptions.complexity === 'complex'}
                    onClick={() => setSelectedOptions({ ...selectedOptions, complexity: 'complex' })}
                  >
                    <h4>Complexe</h4>
                    <p>Système distribué</p>
                    <div className="features">
                      • 20+ endpoints<br />
                      • Microservices<br />
                      • Haute disponibilité
                    </div>
                  </CalculatorOption>
                </CalculatorGrid>
              </CalculatorSection>

              <CalculatorSection>
                <h4>Sécurité</h4>
                <CalculatorGrid>
                  <CalculatorOption
                    selected={selectedOptions.security === 'basic'}
                    onClick={() => setSelectedOptions({ ...selectedOptions, security: 'basic' })}
                  >
                    <h4>Standard</h4>
                    <p>Sécurité de base</p>
                    <div className="features">
                      • Auth JWT<br />
                      • HTTPS<br />
                      • Rate limiting
                    </div>
                  </CalculatorOption>
                  <CalculatorOption
                    selected={selectedOptions.security === 'advanced'}
                    onClick={() => setSelectedOptions({ ...selectedOptions, security: 'advanced' })}
                  >
                    <h4>Avancée</h4>
                    <p>Protection renforcée</p>
                    <div className="features">
                      • OAuth 2.0<br />
                      • 2FA<br />
                      • Audit logs
                    </div>
                  </CalculatorOption>
                  <CalculatorOption
                    selected={selectedOptions.security === 'enterprise'}
                    onClick={() => setSelectedOptions({ ...selectedOptions, security: 'enterprise' })}
                  >
                    <h4>Enterprise</h4>
                    <p>Sécurité maximale</p>
                    <div className="features">
                      • Chiffrement E2E<br />
                      • SSO<br />
                      • Conformité RGPD
                    </div>
                  </CalculatorOption>
                </CalculatorGrid>
              </CalculatorSection>

              <CalculatorSection>
                <h4>Langage Backend</h4>
                <CalculatorGrid>
                  <CalculatorOption
                    selected={selectedOptions.language === 'nodejs'}
                    onClick={() => setSelectedOptions({ ...selectedOptions, language: 'nodejs', framework: 'express' })}
                  >
                    <h4>Node.js</h4>
                    <p>JavaScript/TypeScript</p>
                    <div className="features">
                      • Performance événementielle<br />
                      • Écosystème npm<br />
                      • Idéal pour temps réel
                    </div>
                  </CalculatorOption>
                  <CalculatorOption
                    selected={selectedOptions.language === 'python'}
                    onClick={() => setSelectedOptions({ ...selectedOptions, language: 'python', framework: 'fastapi' })}
                  >
                    <h4>Python</h4>
                    <p>Développement rapide</p>
                    <div className="features">
                      • Excellent pour l'IA/ML<br />
                      • Syntaxe claire<br />
                      • Riche en bibliothèques
                    </div>
                  </CalculatorOption>
                  <CalculatorOption
                    selected={selectedOptions.language === 'java'}
                    onClick={() => setSelectedOptions({ ...selectedOptions, language: 'java', framework: 'spring' })}
                  >
                    <h4>Java</h4>
                    <p>Enterprise-grade</p>
                    <div className="features">
                      • Haute performance<br />
                      • Typage fort<br />
                      • Scalabilité enterprise
                    </div>
                  </CalculatorOption>
                  <CalculatorOption
                    selected={selectedOptions.language === 'golang'}
                    onClick={() => setSelectedOptions({ ...selectedOptions, language: 'golang', framework: 'fiber' })}
                  >
                    <h4>Golang</h4>
                    <p>Performance maximale</p>
                    <div className="features">
                      • Concurrence native<br />
                      • Compilation rapide<br />
                      • Faible consommation
                    </div>
                  </CalculatorOption>
                </CalculatorGrid>
              </CalculatorSection>

              <CalculatorSection>
                <h4>Framework</h4>
                <CalculatorGrid>
                  {selectedOptions.language === 'nodejs' && (
                    <>
                      <CalculatorOption
                        selected={selectedOptions.framework === 'express'}
                        onClick={() => setSelectedOptions({ ...selectedOptions, framework: 'express' })}
                      >
                        <h4>Express.js</h4>
                        <p>Léger et flexible</p>
                        <div className="features">
                          • Middleware puissant<br />
                          • Grande communauté<br />
                          • Facile à apprendre
                        </div>
                      </CalculatorOption>
                      <CalculatorOption
                        selected={selectedOptions.framework === 'nestjs'}
                        onClick={() => setSelectedOptions({ ...selectedOptions, framework: 'nestjs' })}
                      >
                        <h4>NestJS</h4>
                        <p>Architecture scalable</p>
                        <div className="features">
                          • Architecture modulaire<br />
                          • Support TypeScript<br />
                          • Patterns enterprise
                        </div>
                      </CalculatorOption>
                    </>
                  )}
                  {selectedOptions.language === 'python' && (
                    <>
                      <CalculatorOption
                        selected={selectedOptions.framework === 'fastapi'}
                        onClick={() => setSelectedOptions({ ...selectedOptions, framework: 'fastapi' })}
                      >
                        <h4>FastAPI</h4>
                        <p>Moderne et rapide</p>
                        <div className="features">
                          • Performance ASGI<br />
                          • OpenAPI auto<br />
                          • Validation Pydantic
                        </div>
                      </CalculatorOption>
                      <CalculatorOption
                        selected={selectedOptions.framework === 'django'}
                        onClick={() => setSelectedOptions({ ...selectedOptions, framework: 'django' })}
                      >
                        <h4>Django REST</h4>
                        <p>Tout-en-un robuste</p>
                        <div className="features">
                          • Admin intégré<br />
                          • ORM puissant<br />
                          • Sécurité incluse
                        </div>
                      </CalculatorOption>
                    </>
                  )}
                  {selectedOptions.language === 'java' && (
                    <>
                      <CalculatorOption
                        selected={selectedOptions.framework === 'spring'}
                        onClick={() => setSelectedOptions({ ...selectedOptions, framework: 'spring' })}
                      >
                        <h4>Spring Boot</h4>
                        <p>Standard enterprise</p>
                        <div className="features">
                          • DI container<br />
                          • Security intégrée<br />
                          • Cloud-ready
                        </div>
                      </CalculatorOption>
                    </>
                  )}
                  {selectedOptions.language === 'golang' && (
                    <>
                      <CalculatorOption
                        selected={selectedOptions.framework === 'fiber'}
                        onClick={() => setSelectedOptions({ ...selectedOptions, framework: 'fiber' })}
                      >
                        <h4>Fiber</h4>
                        <p>Ultra performant</p>
                        <div className="features">
                          • Express-like<br />
                          • Zero allocation<br />
                          • Middleware rapide
                        </div>
                      </CalculatorOption>
                    </>
                  )}
                </CalculatorGrid>
              </CalculatorSection>

              <CalculatorSection>
                <h4>Intégrations API Tierces</h4>
                <CalculatorGrid>
                  <CalculatorOption
                    selected={selectedOptions.thirdPartyApis.includes('payment')}
                    onClick={() => {
                      const newApis = selectedOptions.thirdPartyApis.includes('payment')
                        ? selectedOptions.thirdPartyApis.filter(api => api !== 'payment')
                        : [...selectedOptions.thirdPartyApis, 'payment'];
                      setSelectedOptions({ ...selectedOptions, thirdPartyApis: newApis });
                    }}
                  >
                    <h4>Paiement</h4>
                    <p>Intégration paiement</p>
                    <div className="features">
                      • Stripe/PayPal<br />
                      • Gestion transactions<br />
                      • Webhooks sécurisés
                    </div>
                  </CalculatorOption>
                  <CalculatorOption
                    selected={selectedOptions.thirdPartyApis.includes('ai')}
                    onClick={() => {
                      const newApis = selectedOptions.thirdPartyApis.includes('ai')
                        ? selectedOptions.thirdPartyApis.filter(api => api !== 'ai')
                        : [...selectedOptions.thirdPartyApis, 'ai'];
                      setSelectedOptions({ ...selectedOptions, thirdPartyApis: newApis });
                    }}
                  >
                    <h4>IA/ML</h4>
                    <p>Services cognitifs</p>
                    <div className="features">
                      • OpenAI/Azure AI<br />
                      • Vision/NLP<br />
                      • ML prédictif
                    </div>
                  </CalculatorOption>
                  <CalculatorOption
                    selected={selectedOptions.thirdPartyApis.includes('maps')}
                    onClick={() => {
                      const newApis = selectedOptions.thirdPartyApis.includes('maps')
                        ? selectedOptions.thirdPartyApis.filter(api => api !== 'maps')
                        : [...selectedOptions.thirdPartyApis, 'maps'];
                      setSelectedOptions({ ...selectedOptions, thirdPartyApis: newApis });
                    }}
                  >
                    <h4>Maps & Géo</h4>
                    <p>Services géospatiaux</p>
                    <div className="features">
                      • Google Maps<br />
                      • Géocodage<br />
                      • Calcul d'itinéraires
                    </div>
                  </CalculatorOption>
                  <CalculatorOption
                    selected={selectedOptions.thirdPartyApis.includes('social')}
                    onClick={() => {
                      const newApis = selectedOptions.thirdPartyApis.includes('social')
                        ? selectedOptions.thirdPartyApis.filter(api => api !== 'social')
                        : [...selectedOptions.thirdPartyApis, 'social'];
                      setSelectedOptions({ ...selectedOptions, thirdPartyApis: newApis });
                    }}
                  >
                    <h4>Social & Auth</h4>
                    <p>Intégration sociale</p>
                    <div className="features">
                      • OAuth2 providers<br />
                      • Social sharing<br />
                      • SSO services
                    </div>
                  </CalculatorOption>
                </CalculatorGrid>
              </CalculatorSection>

              <CalculatorSection>
                <h4>Features</h4>
                <CalculatorGrid>
                  <CalculatorOption
                    selected={selectedOptions.features.includes('realtime')}
                    onClick={() => setSelectedOptions({ ...selectedOptions, features: selectedOptions.features.includes('realtime') ? selectedOptions.features.filter(f => f !== 'realtime') : [...selectedOptions.features, 'realtime'] })}
                  >
                    <h4>Realtime</h4>
                    <p>Temps réel</p>
                  </CalculatorOption>
                  <CalculatorOption
                    selected={selectedOptions.features.includes('analytics')}
                    onClick={() => setSelectedOptions({ ...selectedOptions, features: selectedOptions.features.includes('analytics') ? selectedOptions.features.filter(f => f !== 'analytics') : [...selectedOptions.features, 'analytics'] })}
                  >
                    <h4>Analytics</h4>
                    <p>Analyse des données</p>
                  </CalculatorOption>
                  <CalculatorOption
                    selected={selectedOptions.features.includes('documentation')}
                    onClick={() => setSelectedOptions({ ...selectedOptions, features: selectedOptions.features.includes('documentation') ? selectedOptions.features.filter(f => f !== 'documentation') : [...selectedOptions.features, 'documentation'] })}
                  >
                    <h4>Documentation</h4>
                    <p>API documentation</p>
                  </CalculatorOption>
                </CalculatorGrid>
              </CalculatorSection>

              <PriceDisplay>
                {(() => {
                  const { basePriceLow, basePriceHigh, timeEstimate } = calculatePrice();
                  return (
                    <>
                      <h3>Estimation: {basePriceLow.toLocaleString()}€ - {basePriceHigh.toLocaleString()}€</h3>
                      <div className="breakdown">
                        Type: {selectedOptions.type.toUpperCase()}<br />
                        Langage: {selectedOptions.language.toUpperCase()}<br />
                        Framework: {selectedOptions.framework}<br />
                        Complexité: {selectedOptions.complexity}<br />
                        Sécurité: {selectedOptions.security}<br />
                        APIs tierces: {selectedOptions.thirdPartyApis.length > 0
                          ? selectedOptions.thirdPartyApis.join(', ')
                          : 'Aucune'}
                      </div>
                      <div className="estimate-time">
                        Temps estimé: {timeEstimate}
                      </div>
                    </>
                  );
                })()}
                <Button onClick={handleModalRegister} style={{ marginTop: '1.5rem' }}>
                  Démarrer Votre Projet
                  <ChevronRight size={20} />
                </Button>
              </PriceDisplay>
            </PriceCalculator>
          </SectionContent>
        </Section>

        <BaaSSection>
          <SectionContent>
            <SectionTitle>
              <Server />
              Backend as a Service (BaaS)
            </SectionTitle>
            <SectionSubtitle>
              Solutions cloud prêtes à l'emploi pour accélérer votre développement
            </SectionSubtitle>
            <BaaSGrid>
              <BaaSCard index={0}>
                <BaaSLogo>
                  <Server size={24} />
                </BaaSLogo>
                <BaaSTitle>Firebase</BaaSTitle>
                <BaaSDescription>
                  Plateforme complète de Google pour le développement d'applications
                </BaaSDescription>
                <BaaSFeatures>
                  <li>Base de données temps réel</li>
                  <li>Authentification multi-providers</li>
                  <li>Stockage cloud</li>
                  <li>Hosting et CDN</li>
                  <li>Analytics et Crashlytics</li>
                  <li>Cloud Functions</li>
                </BaaSFeatures>
                <BaaSPricing>
                  Gratuit jusqu'à 50k lectures/jour
                </BaaSPricing>
              </BaaSCard>

              <BaaSCard index={1}>
                <BaaSLogo>
                  <Database size={24} />
                </BaaSLogo>
                <BaaSTitle>Supabase</BaaSTitle>
                <BaaSDescription>
                  Alternative open source à Firebase avec PostgreSQL
                </BaaSDescription>
                <BaaSFeatures>
                  <li>Base PostgreSQL managée</li>
                  <li>Auth avec Row Level Security</li>
                  <li>API REST et GraphQL auto-générées</li>
                  <li>Temps réel avec WebSocket</li>
                  <li>Storage compatible S3</li>
                  <li>Edge Functions</li>
                </BaaSFeatures>
                <BaaSPricing>
                  Gratuit jusqu'à 500Mo de base de données
                </BaaSPricing>
              </BaaSCard>

              <BaaSCard index={2}>
                <BaaSLogo>
                  <Globe size={24} />
                </BaaSLogo>
                <BaaSTitle>AWS Amplify</BaaSTitle>
                <BaaSDescription>
                  Framework complet pour applications cloud-first
                </BaaSDescription>
                <BaaSFeatures>
                  <li>GraphQL API avec AppSync</li>
                  <li>DynamoDB serverless</li>
                  <li>Cognito pour l'auth</li>
                  <li>Lambda Functions</li>
                  <li>S3 pour le stockage</li>
                  <li>CI/CD intégré</li>
                </BaaSFeatures>
                <BaaSPricing>
                  Pay-as-you-go avec niveau gratuit
                </BaaSPricing>
              </BaaSCard>
            </BaaSGrid>
            <ButtonContainer>
              <Button onClick={handleModalRegister}>
                Comparer les Solutions BaaS
                <ChevronRight size={20} />
              </Button>
            </ButtonContainer>
          </SectionContent>
        </BaaSSection>

        <FAQSection>
          <SectionContent>
            <SectionTitle>
              <Globe />
              Questions Fréquentes
            </SectionTitle>
            <SectionSubtitle>
              Tout ce que vous devez savoir sur le développement d'APIs
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
            <ButtonContainer>
              <Button onClick={handleModalRegister}>
                Démarrer Votre Projet API
                <ChevronRight size={20} />
              </Button>
            </ButtonContainer>
          </SectionContent>
        </FAQSection>

      </MainContainer>
      <Offers />
      <FooterHome page={"backend"} />
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

export default SiteAPIs;