import Register from "components/Authentification/modals/register";
import Header from 'components/Header/Header';
import { ArrowRight, ChevronLeft , ChevronRight ,Euro, Eye,Award, Box, Clock, Code, HeartHandshake, Layers, Layout, MinusCircle, Monitor, Moon, Paintbrush, Palette, Pen, Pencil, PlusCircle, Sun, UserPlus, Users } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle, keyframes, ThemeProvider } from 'styled-components';
import FooterHome from '../FooterHome/FooterHome';
import Offers from "./Offres";
import CardsPrestataires from "./CardsPrestataires";
import ItGalaxyAsService from "../ItGalaxyAsService/ItGalaxyAsService";
const archi = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/app-archi.png`;
const design1 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design1.png`;
const design2 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design2.png`;
const design3 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design3.png`;
const design4 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design4.png`;
const design5 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design5.png`;
const design6 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design6.png`;
const design7 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design7.png`;
const design8 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design8.png`;
const design9 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design9.png`;
const design10 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design10.png`;
const design11 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design11.png`;
const design12 = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/design12.png`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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

const ThemeToggle = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 50;
  background: ${props => props.$darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  color: ${props => props.$darkMode ? '#F9FAFB' : '#1F2937'};
  padding: 0.75rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(8px);
  transition: all ${props => props.theme.transitions.default};

  &:hover {
    background: ${props => props.$darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'};
    transform: scale(1.05);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => props.$darkMode ? 'black' : 'white'};
  margin-bottom: 20%;
  transition: background-color ${props => props.theme.transitions.default};
`;

const HeroSection = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  background: ${props => props.$darkMode ?
    'linear-gradient(to bottom right, #000000, #111827)' :
    'linear-gradient(to bottom right, #EEF2FF, #F5F3FF)'};
`;


const Grid = styled.div`
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

const CardFig = styled.div`
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transform: translateY(-2px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 12rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s;
  
  ${CardFig}:hover & {
    opacity: 1;
  }
`;

const IconButton = styled.button`
  padding: 0.5rem;
  background: white;
  border: none;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  cursor: pointer;
  
  &:hover {
    background: #f1f5f9;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardFigTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: #111827;
`;

const CardDescription = styled.p`
  color: #6b7280;
  margin: 0 0 1rem 0;
`;


const PriceTag = styled.span`
  color: #4f46e5;
  font-size: 0.875rem;
  font-weight: 500;
`;

const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 9999px;
    border: 2px solid white;
    margin-right: -0.75rem;
  }
`;



const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const shimmer = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const HeroContent = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  text-align: center;
  animation: ${fadeIn} 1s ease-out;
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
  font-weight: bold;
  color: ${props => props.$darkMode ? props.theme.colors.textDark : props.theme.colors.text};
  margin-bottom: 1.5rem;
`;

const HeroText = styled.p`
  font-size: 1.25rem;
  color: ${props => props.$darkMode ? '#9CA3AF' : '#4B5563'};
  margin-bottom: 2rem;
  max-width: 100rem;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  border: none;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.default};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%);
  }

  &:hover {
    background-color: ${props => props.theme.colors.primaryHover};
    transform: scale(1.05);

    &::after {
      animation: ${shimmer} 1s;
    }
  }
`;

const Section = styled.section`
  padding: 5rem 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 4rem;
  color: ${props => props.$darkMode ? props.theme.colors.textDark : props.theme.colors.text};
`;

const SectionSubtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.$darkMode ? props.theme.colors.textDark : props.theme.colors.text};
`;

const SectionContent = styled.div`
  max-width: 98rem;
  margin: 0 auto;
`;


const Card = styled.div`
  background-color: ${props => props.$darkMode ? props.theme.colors.gray900 : props.theme.colors.background};
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all ${props => props.theme.transitions.default};
  border: 1px solid ${props => props.$darkMode ? '#1F2937' : '#F3F4F6'};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${props => props.$darkMode ? 'rgba(79, 70, 229, 0.1)' : 'rgba(79, 70, 229, 0.05)'},
      transparent
    );
    transform: translateX(-100%);
    animation: ${shimmer} 3s infinite;
  }

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
  animation: ${pulse} 2s infinite;

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

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => props.$darkMode ? '#374151' : '#F3F4F6'};
  color: ${props => props.$darkMode ? '#D1D5DB' : '#4B5563'};
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const FAQSection = styled(Section)`
  background: ${props => props.$darkMode ?
    'linear-gradient(to bottom right, #000000, #111827)' :
    'linear-gradient(to bottom right, #EEF2FF, #F5F3FF)'};
`;

const FAQContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border: 1px solid ${props => props.$darkMode ? 'rgba(79, 70, 229, 0.2)' : 'rgba(79, 70, 229, 0.1)'};
  border-radius: 12px;
  margin-bottom: 1rem;
  overflow: hidden;
  transition: all 0.3s;
  animation: ${fadeIn} 0.5s ease-out;
  animation-fill-mode: both;
  animation-delay: ${props => props.index * 0.1}s;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const FAQHeader = styled.h2`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: ${props => props.$darkMode ? 'rgba(79, 70, 229, 0.1)' : 'rgba(79, 70, 229, 0.05)'};
  border: none;
  cursor: pointer;
  color: ${props => props.$darkMode ? props.theme.colors.textDark : props.theme.colors.text};
  font-size: 1.125rem;
  font-weight: 500;
  text-align: left;
  transition: all 0.3s;

  &:hover {
    background: ${props => props.$darkMode ? 'rgba(79, 70, 229, 0.15)' : 'rgba(79, 70, 229, 0.1)'};
  }

  svg {
    color: ${props => props.theme.colors.primary};
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
  color: ${props => props.$darkMode ? '#9CA3AF' : '#4B5563'};
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

const TestimonialsSection = styled(Section)`
  background: ${props => props.$darkMode ?
    'linear-gradient(to bottom right, #000000, #111827)' :
    'linear-gradient(to bottom right, #EEF2FF, #F5F3FF)'};
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TestimonialCard = styled.div`
  background: ${props => props.$darkMode ? 'rgba(79, 70, 229, 0.1)' : 'rgba(79, 70, 229, 0.05)'};
  border: 1px solid ${props => props.$darkMode ? 'rgba(79, 70, 229, 0.2)' : 'rgba(79, 70, 229, 0.1)'};
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s;
  animation: ${slideIn} 0.5s ease-out;
  animation-fill-mode: both;
  animation-delay: ${props => props.index * 0.2}s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px ${props => props.$darkMode ? 'rgba(79, 70, 229, 0.3)' : 'rgba(79, 70, 229, 0.2)'};
    border-color: ${props => props.theme.colors.primary};
  }
`;

const TestimonialContent = styled.div`
  color: ${props => props.$darkMode ? '#9CA3AF' : '#4B5563'};
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 2rem;
  position: relative;

  &::before {
    content: '"';
    font-size: 4rem;
    color: ${props => props.theme.colors.primary};
    position: absolute;
    top: -1rem;
    left: -1rem;
    opacity: 0.2;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.primaryHover});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
`;

const AuthorInfo = styled.div`
  .name {
    color: ${props => props.$darkMode ? props.theme.colors.textDark : props.theme.colors.text};
    font-weight: 500;
    margin-bottom: 0.25rem;
  }
  
  .role {
    color: ${props => props.$darkMode ? '#9CA3AF' : '#4B5563'};
    font-size: 0.875rem;
  }
`;

const ServiceSection = styled(Section)`
  padding: 6rem 1rem;
  background: ${props => props.$darkMode ?
    'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)' :
    'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)'};
`;

const ServiceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  gap: 2rem;
  
  &:nth-child(even) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;

const ServiceContent = styled.div`
  flex: 1;
  padding: 2rem;

  @media (min-width: 768px) {
    flex: 0 0 50%;
  }
`;

const ServiceImage = styled.div`
  flex: 1;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background: ${props => props.$darkMode ? 'rgba(79, 70, 229, 0.1)' : 'rgba(79, 70, 229, 0.05)'};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 80px;
    height: 80px;
    color: ${props => props.theme.colors.primary};
  }

  @media (min-width: 768px) {
    flex: 0 0 50%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      ${props => props.$darkMode ? 'rgba(79, 70, 229, 0.1)' : 'rgba(79, 70, 229, 0.05)'} 0%,
      transparent 100%);
  }
`;

const ServiceHeading = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${props => props.$darkMode ? props.theme.colors.textDark : props.theme.colors.text};
`;

const ServiceText = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: ${props => props.$darkMode ? '#9CA3AF' : '#4B5563'};
`;

const ServicePriceTag = styled.div`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: ${props => props.$darkMode ? 'rgba(79, 70, 229, 0.1)' : 'rgba(79, 70, 229, 0.05)'};
  border-radius: 9999px;
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  font-size: 1.125rem;
`;

const FeatureSection = styled(Section)`
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: ${props => props.$darkMode ? 'rgba(79, 70, 229, 0.2)' : 'rgba(79, 70, 229, 0.1)'};
    display: none;
    
    @media (min-width: 768px) {
      display: block;
    }
  }
`;

const FeatureContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 4rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;

const StatBox = styled.div`
  text-align: center;
  padding: 2rem;
  background: ${props => props.$darkMode ? 'rgba(79, 70, 229, 0.1)' : 'rgba(79, 70, 229, 0.05)'};
  border-radius: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.125rem;
  color: ${props => props.$darkMode ? props.theme.colors.textDark : props.theme.colors.text};
  margin-bottom: 1rem;
`;

const FeatureList = styled.div`
  position: relative;
`;

const FeatureItem = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${props => props.index * 0.2}s;

  @media (min-width: 768px) {
    width: 45%;
    margin-left: ${props => props.index % 2 === 0 ? '0' : '55%'};
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      ${props => props.index % 2 === 0 ? 'right: -15%' : 'left: -15%'};
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: ${props => props.theme.colors.primary};
      transform: translateY(-50%);
    }
  }
`;

const FeatureIcon = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${props => props.$darkMode ? 'rgba(79, 70, 229, 0.1)' : 'rgba(79, 70, 229, 0.05)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${props => props.$darkMode ? props.theme.colors.textDark : props.theme.colors.text};
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.$darkMode ? '#9CA3AF' : '#4B5563'};
`;

function Design() {
  const itemsPerPage = 6; // Change this number based on how many designs you want to show per page
  const [currentPage, setCurrentPage] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [showModalRegister, setModalRegister] = useState(false);
  const [openFAQs, setOpenFAQs] = useState({});

  const handleModalRegister = () => {
    setModalRegister(true);
  };

  const handleCloseModalRegister = () => {
    setModalRegister(false);
  };


  const designs = [
    {
      id: 1,
      title: 'Coffee Shop Mobile App Design',
      description: 'Get started with App Design effortlessly using our premade design for Coffee Shop App.',
      image: design1,
      price: 'Free',
      slug: 'https://www.figma.com/community/file/1116708627748807811',
      contributors: [
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80'
      ]
    },
    {
      id: 2,
      title: 'Open Fashion - Free eCommerce UI Kit',
      description: 'Free UI Kit with elegant and modern style will help you to quickly create your own design.',
      image: design2,
      price: 'Free',
      slug: 'https://www.figma.com/community/file/1055151140671808467',
      contributors: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'
      ]
    },
    {
      id: 3,
      title: 'Food Delivery App',
      description: 'Hello, This is an Online Food Delivery iOS UI Kit with 50+ neatly designed screens and 10 Chef Screens.',
      image: design3,
      price: 'Free',
      slug: 'https://www.figma.com/community/file/1231521889522325040',
      contributors: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
      ]
    } ,
    {
      id: 4,
      title: 'Shoppe - eCommerce Clothing Fashion Store Multi',
      description: 'Take a look at our ui design exploration about eCommerce Clothing Store.',
      image: design4,
      price: 'Free',
      slug: 'https://www.figma.com/community/file/1321464360558173342',
      contributors: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
      ]
    },
    {
      id: 5,
      title: 'Tab Bar & Navigation Bar',
      description: 'Tab Bar & Navigation Bar',
      image: design5,
      price: 'Free',
      slug: 'https://www.figma.com/community/file/1047431977310739837',
      contributors: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'
      ]
    },
    {
      id: 6,
      title: 'Fitness App UI Kit for Gym Workout App Fitness ',
      description: 'Modern e-commerce platform design system',
      image: design6,
      slug: 'https://www.figma.com/community/file/1356281690251535631',
      price: 'Free',
      contributors: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
      ]
    } ,
    {
      id: 5,
      title: 'Mobile E-Learning App Design',
      description: 'Get started with App Design effortlessly using our premade design for E-Learning App.',
      image: design7,
      slug: 'https://www.figma.com/community/file/1116625179283253250',
      price: 'Free',
      contributors: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
      ]
    },
    {
      id: 3,
      title: 'Aspen Travel App Exploration- Mobile App Design',
      description: 'This is my Exploration for Travel App. How about you ?',
      image: design8,
      price: 'Free',
      slug: 'https://www.figma.com/community/file/1091615514005406765',
      contributors: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
      ]
    },
    {
      id: 2,
      title: 'Food POS Dark - Tablet Device',
      description: 'This design about the food POS with the dark mode',
      image: design9,
      slug: 'https://www.figma.com/community/file/944188956363619079',
      price: 'Free',
      contributors: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'
      ]
    },
    {
      id: 4,
      title: 'Food Delivery App UI with Illustrations',
      description: 'Create your next delivery mobile app with this free kit full of customizable components and styles. What\'s best? It features Blush illustrations from Wavy Buddies by Susana Salas.',
      image: design10,
      price: 'Free',
      slug: 'https://www.figma.com/community/file/989103752998044165',
      contributors: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
      ]
    } ,
    {
      id: 5,
      title: 'Hoteliq - Booking Hotel App Design',
      description: 'Get started with App Design effortlessly using our premade design for Hotel Booking App',
      image: design11,
      slug: 'https://www.figma.com/community/file/1169928945460966636',
      price: 'Free',
      contributors: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
      ]
    },
    {
      id: 5,
      title: 'Ecommerce App',
      description: 'Here\'s a Ecommerce App Design 🤩😍.',
      image: design12,
      price: 'Free',
      slug: 'https://www.figma.com/community/file/1091083465902099133',
      contributors: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80'
      ]
    },
  ];

  const totalPages = Math.ceil(designs.length / itemsPerPage);
  const currentDesigns = designs.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 0));
  };

  const toggleFAQ = (index) => {
    setOpenFAQs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handelFig = (url) => {
    window.location.href = `${url}`;
  }

  const testimonials = [
    {
      content: "L'équipe de graphistes d'ItGalaxy a totalement revitalisé notre identité visuelle. Notre taux de conversion a augmenté de 150% !",
      author: "Marie Dubois",
      role: "Directrice Marketing, E-commerce",
      initials: "MD"
    },
    {
      content: "Un travail exceptionnel sur notre site web. L'interface est intuitive et les retours utilisateurs sont excellents.",
      author: "Thomas Laurent",
      role: "CTO, Startup Tech",
      initials: "TL"
    },
    {
      content: "Professionnalisme et créativité au rendez-vous. Notre site web est maintenant moderne et performant, avec un design captivant.",
      author: "Sophie Martin",
      role: "Fondatrice, Agence Digitale",
      initials: "SM"
    },
    {
      content: "La qualité du design et l'attention aux détails ont dépassé nos attentes. Un vrai partenaire de confiance pour nos projets web.",
      author: "Pierre Durand",
      role: "Directeur Général, Agence Web",
      initials: "PD"
    }
];

const faqs = [
    {
      question: "Qu'est-ce qu'un freelance graphic designer ?",
      answer: "Un freelance graphic designer est un professionnel indépendant qui crée des visuels attractifs pour divers supports, tels que des sites internet, des brochures et des identités visuelles. Ils travaillent généralement sur des projets variés et temporaires."
    },
    {
      question: "Comment recruter un freelance web designer ?",
      answer: "Pour recruter un freelance web designer, utilisez des plateformes comme ItGalaxy, où vous pouvez consulter des portfolios, lire des avis, et trouver le designer qui répond à vos besoins spécifiques en matière de web design."
    },
    {
      question: "Quels types de projets peuvent être confiés à des freelances en design ?",
      answer: "Les freelances en design peuvent être engagés pour des projets variés tels que la création de sites web, le développement d'identités visuelles, le design d'applications mobiles, et la conception de supports marketing."
    },
    {
      question: "Pourquoi choisir une agence de design plutôt qu'un freelance ?",
      answer: "Choisir une agence de design vous permet d'accéder à une équipe diversifiée d'experts, garantissant des résultats cohérents et de qualité, tandis qu'un freelance peut offrir une approche plus personnalisée et flexible."
    },
    {
      question: "Quelles compétences un web designer freelance doit-il avoir ?",
      answer: "Un web designer freelance doit maîtriser des compétences techniques, incluant le design graphique, l'utilisation des outils comme Figma ou Adobe XD, ainsi que des connaissances en HTML, CSS et UX/UI design."
    },
    {
      question: "Comment évaluer le tarif d'un freelance web designer ?",
      answer: "Les tarifs d'un freelance web designer peuvent varier. Il est essentiel d'examiner des critères tels que l'expérience, le type de projet, et les spécificités demandées pour déterminer un tarif juste."
    },
    {
      question: "Comment s'assurer de la qualité du travail d'un graphiste designer freelance ?",
      answer: "Pour garantir la qualité du travail, vérifiez le portfolio du freelance, discutez de ses précédents projets et demandez des témoignages d'anciens clients."
    },
    {
      question: "Quels sont les avantages de travailler avec une agence de design ?",
      answer: "Les agences de design offrent une approche collaborative, avec une équipe spécialisée qui peut gérer divers aspects de votre projet, garantissant ainsi créativité et efficacité."
    },
    {
      question: "Comment communiquer efficacement avec un freelance en design ?",
      answer: "La communication claire est essentielle. Assurez-vous de définir vos attentes dès le départ, de fournir des exemples de ce que vous aimez, et d'établir un calendrier avec des jalons à respecter."
    },
    {
      question: "Quelles tendances actuelles influence le design web ?",
      answer: "Les tendances incluent le design minimaliste, des interfaces utilisateur efficaces et intuitives, l'intégration d'animations, ainsi que l'optimisation pour mobiles et les expériences interactives."
    },
];

const services = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Design UI/UX",
      description: "Création d'interfaces utilisateur modernes et intuitives, optimisées pour une expérience utilisateur exceptionnelle sur tous les appareils.",
      price: "À partir de 2000€"
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Identité Visuelle",
      description: "Développement d'une identité de marque complète, incluant logo, charte graphique et supports marketing adaptés à votre audience.",
      price: "À partir de 1500€"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Design Web",
      description: "Conception de sites web responsifs et attractifs, alignés avec votre image de marque et optimisés pour le référencement.",
      price: "À partir de 3000€"
    },
    {
      icon: <Pen className="w-6 h-6" />,
      title: "Design Mobile",
      description: "Création d'applications mobiles natives et hybrides avec une expérience utilisateur fluide et engageante.",
      price: "À partir de 4000€"
    }
];

const stats = [
    {
      number: "500+",
      label: "Projets de Design Réalisés",
      icon: <Layout className="w-8 h-8" />
    },
    {
      number: "98%",
      label: "Clients Satisfaits",
      icon: <Users className="w-8 h-8" />
    },
    {
      number: "24/7",
      label: "Support Client Disponible",
      icon: <Clock className="w-8 h-8" />
    },
    {
      number: "15+",
      label: "Prix et Récompenses en Design",
      icon: <Award className="w-8 h-8" />
    }
];

const benefits = [
    {
      title: "Expertise Technique",
      description: "Une équipe de designers expérimentés maîtrisant les dernières tendances et technologies du design graphique et web.",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Approche Personnalisée",
      description: "Chaque projet est unique et reçoit une attention particulière, correspondant à vos besoins spécifiques en design.",
      icon: <UserPlus className="w-6 h-6" />
    },
    {
      title: "Délais Respectés",
      description: "Nous nous engageons à livrer vos projets dans les délais convenus, sans compromis sur la qualité du design.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Support Continu",
      description: "Un accompagnement permanent pendant et après le projet pour garantir votre satisfaction et le succès de votre design.",
      icon: <HeartHandshake className="w-6 h-6" />
    }
];

  // Add this JSON-LD script for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Add organization schema for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ItGalaxy Design",
    "description": "Experts en design web et mobile, création d'interfaces utilisateur et identité visuelle",
    "url": process.env.REACT_APP_FRONTED_URL,
    "sameAs": [
      "https://www.linkedin.com/company/itgalaxy",
      "https://twitter.com/itgalaxy",
      "https://www.instagram.com/itgalaxy"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500"
    }
  };

  return (
    <div style={{ background: darkMode ? 'black' : 'white' }}>
      <Header />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
          <Container $darkMode={darkMode}>
          <HeroSection $darkMode={darkMode}>
            <HeroContent>
              <HeroTitle $darkMode={darkMode}>
               Trouver un Freelance graphiste ou une agence de graphisme
              </HeroTitle>
              <HeroText $darkMode={darkMode}>
                Faites appel à des Freelances graphiste pour une refonte de site vitrine avec Wordpress, Shopify , React , Node.Js ou des applications mobiles </HeroText>
              <Button onClick={() => window.location.href = `/search/prestataires`} >
                Nos Prestataires Designer
                <ArrowRight className="w-5 h-5" />
              </Button>
            </HeroContent>
          </HeroSection>

          <Helmet>
              <title>Trouver un freelance graphiste ou une agence de graphisme </title>
              <meta name="description" content="Découvrez les meilleures freelance graphiste , freelance graphic designer, ainsi que des agences spécialisées dans le design et graphisme en France." />
              <meta name="keywords" content="freelance graphiste, Freelance graphic designer,freelance graphic designer,freelance designer,freelance ux ui designer, agence de graphisme , agences de graphisme , freelance ux ui designer ,freelance graphic designer,freelance designer, freelance ux ui designer, web designer freelance, graphiste designer freelance, freelance web designer, designer web freelance, agence de design produit, agencement design, web design agence, agence design, agence de design, agence graphique design, agence de design graphique, agence web design" />
              <link rel="canonical" href="https://itgalaxy.io/freelance-graphiste" />
              <meta property="og:title" content="Trouver un Freelance graphic designer ou une agence de graphisme" />
              <meta property="og:description" content="Découvrez les meilleures freelance graphic designer, ainsi que des agences spécialisées dans le design et graphisme en France." />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://itgalaxy.io/freelance-graphiste" />
              <meta property="og:locale" content="fr_FR" />
              <meta property="og:site_name" content="ItGalaxy.io" />
              <link rel="alternate" hreflang="fr" href="https://itgalaxy.io/freelance-graphiste" />
              <link rel="alternate" hreflang="en" href="https://itgalaxy.io/freelance-graphiste" />
         </Helmet>

         <Section gray>
         <SectionTitle $darkMode={darkMode}>Nos Freelances graphistes</SectionTitle>
          <CardsPrestataires job={'DESIGNER'}/>
          </Section>

          <ItGalaxyAsService />

          <Section gray>
            <SectionContent>
              {/* Pagination Left Chevorn */}
              <SectionTitle $darkMode={darkMode}>Exemples des Designs pour des besoins spécifiques</SectionTitle>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <IconButton onClick={handlePrevPage} disabled={currentPage === 0}>
                  <ChevronLeft size={20} color={currentPage === 0 ? '#a1a1aa' : '#374151'} />
                </IconButton>

                {/* Optional: Add some space for aesthetic reasons */}
                <div style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>
                  Page {currentPage + 1} of {totalPages}
                </div>

                <IconButton onClick={handleNextPage} disabled={currentPage >= totalPages - 1}>
                  <ChevronRight size={20} color={currentPage >= totalPages - 1 ? '#a1a1aa' : '#374151'} />
                </IconButton>
              </div>

              <Grid>
                {currentDesigns.map((design) => (
                  <CardFig key={design.id} onClick={() => handelFig(design.slug)} >
                    <ImageContainer>
                      <img src={design.image} alt={design.title} />
                      <Overlay>
                        <IconButton>
                          <Eye size={20} color="#374151" />
                        </IconButton>
                      </Overlay>
                    </ImageContainer>
                    <CardContent>
                      <CardFigTitle>{design.title}</CardFigTitle>
                      <CardDescription>{design.description}</CardDescription>
                      <CardFooter>
                        <PriceTag>{design.price}</PriceTag>
                        <AvatarGroup>
                          {design.contributors.map((avatar, index) => (
                            <img key={index} src={avatar} alt="Contributor" />
                          ))}
                        </AvatarGroup>
                      </CardFooter>
                    </CardContent>
                  </CardFig>
                ))}
              </Grid>           
            </SectionContent>
          </Section>



          <Section $darkMode={darkMode}>
            <SectionTitle $darkMode={darkMode}>les Outils utilisés par les experts Design</SectionTitle>
            <Grid>
              {[
                { icon: <Box className="w-8 h-8" />, title: "Figma", desc: "Outil puissant pour la conception et le prototypage d'expériences utilisateur pour le web et les applications mobiles", freelances: 1500, rate: 85 },
                { icon: <Pen className="w-8 h-8" />, title: "Sketch", desc: "Éditeur de graphiques vectoriels principalement axé sur la conception d'interfaces web et mobile", freelances: 1200, rate: 80 },
                { icon: <Monitor className="w-8 h-8" />, title: "InVision", desc: "Outil de prototypage permettant de créer des maquettes interactives et de recueillir des retours", freelances: 800, rate: 75 },
                { icon: <Layers className="w-8 h-8" />, title: "Wordpress", desc: "Outil complet combinant wireframing, prototypage et documentation pour projets complexes", freelances: 6000, rate: 90 },
                { icon: <Palette className="w-8 h-8" />, title: "Marvel", desc: "Outil convivial de design, prototypage et collaboration pour tester rapidement les interfaces", freelances: 10, rate: 70 },
                { icon: <Paintbrush className="w-8 h-8" />, title: "Canva", desc: "Plateforme intuitive pour créer des graphiques et supports marketing de qualité professionnelle", freelances: 2000, rate: 65 },
                { icon: <Pencil className="w-8 h-8" />, title: "Shopify", desc: "Logiciel de design graphique vectoriel puissant pour le web et l'impression", freelances: 70, rate: 85 },
                { icon: <Layout className="w-8 h-8" />, title: "Webflow", desc: "Outil de conception web permettant de créer et lancer des sites responsifs visuellement", freelances: 9, rate: 95 },
                { icon: <Pen className="w-8 h-8" />, title: "Photoshop", desc: "Application de design vectoriel multiplateforme pour projets web et print", freelances: 5, rate: 70 },
                { icon: <Box className="w-8 h-8" />, title: "Adobe", desc: "Plateforme open-source de design et prototypage pour la collaboration entre équipes", freelances: 4000, rate: 75 },
                { icon: <Box className="w-8 h-8" />, title: "Penpot", desc: "Outil open-source pour la création et le prototypage, optimisant le travail en équipe", freelances: 5000, rate: 75 },
                { icon: <Box className="w-8 h-8" />, title: "Blender", desc: "Plateforme libre pour la conception et le prototypage, favorisant le travail collaboratif entre groupes", freelances: 5, rate: 75 }
              ].map((tool, index) => (
                <Card key={index} $darkMode={darkMode} onClick={() => handleModalRegister()}>
                  <CardIcon>{tool.icon}</CardIcon>
                  <CardTitle $darkMode={darkMode}>{tool.title}</CardTitle>
                  <CardText $darkMode={darkMode}>{tool.desc}</CardText>
                  <CardFooter $darkMode={darkMode}>
                    <CardStat $darkMode={darkMode}>
                      <Users className="w-4 h-4" />
                      <span>{tool.freelances} experts</span>
                    </CardStat>
                    <CardStat $darkMode={darkMode}>
                      <Clock className="w-4 h-4" />
                      <span>{tool.rate}€/h</span>
                    </CardStat>
                  </CardFooter>
                </Card>
              ))}
            </Grid>
          </Section>


          <ServiceSection $darkMode={darkMode}>
            <SectionTitle $darkMode={darkMode}>Nos Services de Design</SectionTitle>
            <SectionSubtitle $darkMode={darkMode}>
              Des solutions sur mesure pour tous vos besoins en design
            </SectionSubtitle>
            <ServiceContainer>
              {services.map((service, index) => (
                <ServiceRow key={index}>
                  <ServiceContent>
                    <ServiceHeading $darkMode={darkMode}>{service.title}</ServiceHeading>
                    <ServiceText $darkMode={darkMode}>{service.description}</ServiceText>
                    <ServicePriceTag $darkMode={darkMode}>{service.price}</ServicePriceTag>
                  </ServiceContent>
                  <ServiceImage $darkMode={darkMode}>
                    {service.icon}
                  </ServiceImage>
                </ServiceRow>
              ))}
            </ServiceContainer>
          </ServiceSection>

          <Section $darkMode={darkMode} $white>
            <SectionTitle $darkMode={darkMode}>Estimation des Prix selon des Projets de refonte web et d'application mobile Récents</SectionTitle>
            <Grid>
              {[
                {
                  title: "Refonte E-commerce",
                  desc: "Modernisation complète d'une plateforme e-commerce B2B avec intégration de nouvelles fonctionnalités",
                  tech: ["Adobe", "Node.js", "MongoDB"],
                  duration: "3 mois",
                  team: 40,
                  price: "$200"  // Estimated price
                },
                {
                  title: "Application Mobile",
                  desc: "Développement d'une application mobile de suivi de santé et bien-être",
                  tech: ["Shopify", "Firebase", "Redux"],
                  duration: "4 mois",
                  team: 103,
                  price: "$1000"  // Estimated price
                },
                {
                  title: "Campagne Marketing",
                  desc: "Création de visuels marketing et de contenu pour une campagne de lancement de produit.",
                  tech: ["Canva", "Illustrator", "Photoshop"],
                  duration: "2 mois",
                  team: 300,
                  price: "$200"  // Example estimated price
                },
                {
                  title: "Design d'Identité Visuelle",
                  desc: "Développement complet de l'identité visuelle pour une nouvelle entreprise, incluant logo et charte graphique.",
                  tech: ["Photoshop", "Branding"],
                  duration: "3 mois",
                  team: 202,
                  price: "$50"  // Example estimated price
                },
                {
                  title: "Conception de Site Internet",
                  desc: "Création d'un site Internet réactif et esthétiquement plaisant pour un client dans le secteur de la mode.",
                  tech: ["Webflow", "CSS", "JavaScript"],
                  duration: "4 mois",
                  team: 442,
                  price: "$2000"  // Example estimated price
                },
                {
                  title: "Brochure d'Entreprise",
                  desc: "Conception d'une brochure professionnelle et engageante pour présenter les services d'une entreprise.",
                  tech: ["InDesign", "Illustrator", "Photoshop"],
                  duration: "1 mois",
                  team: 202,
                  price: "$50"  // Example estimated price
                },
                {
                  title: "Création d'une application de fitness",
                  desc: "Développement de l'interface utilisateur et de l'expérience utilisateur pour une application de suivi de fitness.",
                  tech: ["Figma", "Adobe XD", "User Testing"],
                  duration: "4 mois",
                  team: 312,
                  price: "$2000"  // Example estimated price
                },
                {
                  title: "Fresque Murale",
                  desc: "Conception d'une fresque murale artistique pour un espace de coworking incluant des éléments inspirés de la culture locale.",
                  tech: ["Wordpress", "Peinture", "Design mural"],
                  duration: "2 mois",
                  team: 12,
                  price: "$2000"  // Example estimated price
                }
              ].map((project, index) => (
                <Card key={index} $darkMode={darkMode} onClick={() => handleModalRegister()}>
                  <CardTitle $darkMode={darkMode}>{project.title}</CardTitle>
                  <CardText $darkMode={darkMode}>{project.desc}</CardText>
                  <div style={{ marginBottom: '1rem' }}>
                    {project.tech.map((tech, i) => (
                      <Badge key={i} $darkMode={darkMode}>{tech}</Badge>
                    ))}
                  </div>
                  <CardFooter $darkMode={darkMode}>
                    <CardStat $darkMode={darkMode}>
                      <Clock className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </CardStat>
                    <CardStat $darkMode={darkMode}>
                      <Users className="w-4 h-4" />
                      <span>{project.team} experts</span>
                    </CardStat>
                    <CardStat $darkMode={darkMode}>
                      <Euro className="w-4 h-4" />  {/* Make sure to render an appropriate icon for price */}
                      <span>{project.price}</span>
                    </CardStat>
                  </CardFooter>
                </Card>
              ))}
            </Grid>
          </Section>


          <TestimonialsSection $darkMode={darkMode}>
            <SectionContent>
              <SectionTitle $darkMode={darkMode}>
                Ce que disent nos clients
              </SectionTitle>
              <SectionSubtitle $darkMode={darkMode}>
                Découvrez les retours d'expérience de nos clients sur nos services de design
              </SectionSubtitle>
              <TestimonialsGrid>
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} $darkMode={darkMode} index={index}>
                    <TestimonialContent $darkMode={darkMode}>
                      {testimonial.content}
                    </TestimonialContent>
                    <TestimonialAuthor>
                      <AuthorAvatar>{testimonial.initials}</AuthorAvatar>
                      <AuthorInfo $darkMode={darkMode}>
                        <div className="name">{testimonial.author}</div>
                        <div className="role">{testimonial.role}</div>
                      </AuthorInfo>
                    </TestimonialAuthor>
                  </TestimonialCard>
                ))}
              </TestimonialsGrid>
            </SectionContent>
          </TestimonialsSection>

          <FeatureSection $darkMode={darkMode}>
            <FeatureContainer>
              <SectionTitle $darkMode={darkMode}>
                Pourquoi Choisir ItGalaxy Design
              </SectionTitle>
              <SectionSubtitle $darkMode={darkMode}>
                L'excellence au service de votre succès digital
              </SectionSubtitle>

              <StatGrid>
                {stats.map((stat, index) => (
                  <StatBox key={index} $darkMode={darkMode}>
                    <CardIcon>{stat.icon}</CardIcon>
                    <StatNumber $darkMode={darkMode}>{stat.number}</StatNumber>
                    <StatLabel $darkMode={darkMode}>{stat.label}</StatLabel>
                  </StatBox>
                ))}
              </StatGrid>

              <FeatureList>
                {benefits.map((benefit, index) => (
                  <FeatureItem key={index} index={index} $darkMode={darkMode}>
                    <FeatureIcon $darkMode={darkMode}>
                      {benefit.icon}
                    </FeatureIcon>
                    <FeatureContent>
                      <FeatureTitle $darkMode={darkMode}>{benefit.title}</FeatureTitle>
                      <FeatureDescription $darkMode={darkMode}>
                        {benefit.description}
                      </FeatureDescription>
                    </FeatureContent>
                  </FeatureItem>
                ))}
              </FeatureList>
            </FeatureContainer>
          </FeatureSection>

          <FAQSection $darkMode={darkMode}>
            <SectionContent>
              <SectionTitle $darkMode={darkMode}>
                Questions Fréquentes
              </SectionTitle>
              <SectionSubtitle $darkMode={darkMode}>
                Tout ce que vous devez savoir sur nos services de design
              </SectionSubtitle>
              <FAQContainer>
                {faqs.map((faq, index) => (
                  <FAQItem key={index} $darkMode={darkMode} index={index}>
                    <FAQHeader
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={openFAQs[index]}
                      aria-controls={`faq-content-${index}`}
                      $darkMode={darkMode}
                    >
                      {faq.question}
                      {openFAQs[index] ? <MinusCircle size={20} /> : <PlusCircle size={20} />}
                    </FAQHeader>
                    <FAQContent
                      id={`faq-content-${index}`}
                      isOpen={openFAQs[index]}
                      role="region"
                      aria-labelledby={`faq-header-${index}`}
                      $darkMode={darkMode}
                    >
                      {faq.answer}
                    </FAQContent>
                  </FAQItem>
                ))}
              </FAQContainer>
            </SectionContent>
          </FAQSection>
          <div style={{'color': 'white'}}>
          <Offers />
          </div>
        </Container>
      </ThemeProvider>
     

      {showModalRegister && (
        <Register
          openModalRegister={showModalRegister}
          setOpenModalRegister={setModalRegister}
          handleModalRegister={handleCloseModalRegister}
          proxy={"dashboard"}
        />
      )}
      <FooterHome page={'design'} />
    </div>
  );
}

export default Design;